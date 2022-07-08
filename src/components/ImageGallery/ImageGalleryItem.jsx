import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, tags, showModal } = this.props;
    return <img src={webformatURL} alt={tags} />;
  }
}
