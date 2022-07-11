import React, { Component } from 'react';
import ApiPictures from './service/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
  };

  bottomRef = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      ApiPictures(this.state.searchQuery, this.state.page).then(data => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data.hits],
        }));
      });
    }

    if (this.bottomRef.current && this.state.page > 1) {
      this.bottomRef.current.scrollIntoView(false);
    }
  }

  onSearchClick = searchvalue => {
    this.setState({ searchQuery: searchvalue });
  };

  LoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSearchClick={this.onSearchClick} />
        {this.state.pictures && <ImageGallery pictures={this.state.pictures} />}

        <Button handleClick={this.LoadMore} text="Load More" />
      </div>
    );
  }
}
