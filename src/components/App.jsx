import React, { Component } from 'react';
import ApiPictures from './service/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.pictures);
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
  }

  onSearchClick = searchvalue => {
    this.setState({ searchQuery: searchvalue });
  };

  render() {
    return (
      <div>
        <Searchbar onSearchClick={this.onSearchClick} />
        {this.state.pictures && <ImageGallery pictures={this.state.pictures} />}
      </div>
    );
  }
}
