import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { pictures } = this.props;

    return (
      <ul class="gallery">
        {pictures.map(image => (
          <li key={image.id}>
            <ImageGalleryItem
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
            />
          </li>
        ))}
      </ul>
    );
  }
}
