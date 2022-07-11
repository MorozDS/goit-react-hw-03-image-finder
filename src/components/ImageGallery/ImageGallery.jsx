import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  showModal = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      tags: tags,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
      tags: '',
    });
  };

  render() {
    const { pictures } = this.props;

    return (
      <>
        <ul class="gallery">
          {pictures.map(image => (
            <li key={image.id}>
              <ImageGalleryItem
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                tags={image.tags}
                showModal={this.showModal}
              />
            </li>
          ))}
        </ul>
        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
