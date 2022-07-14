import React, { Component } from 'react';
import s from './GalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, tags, showModal } = this.props;
    return (
      <img
        className={s.ImageGalleryItem}
        src={webformatURL}
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    );
  }
}
