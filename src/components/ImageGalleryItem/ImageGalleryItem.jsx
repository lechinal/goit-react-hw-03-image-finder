import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';
// import '../../styles/styles.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.galleryItem} onClick={onClick}>
      <img src={image.webformatURL} alt="" className={styles.galleryImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
