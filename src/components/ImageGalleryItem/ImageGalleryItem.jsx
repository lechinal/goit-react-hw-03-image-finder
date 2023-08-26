import React from 'react';

import styles from './ImageGalleryItem.module.css';
// import '../../styles/styles.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.galleryItem} onClick={onClick}>
      <img src={image.webformatURL} alt="" className={styles.galleryImage} />
    </li>
  );
};

export default ImageGalleryItem;
