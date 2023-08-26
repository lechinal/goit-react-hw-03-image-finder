import React from 'react';

import styles from './Button.module.css';
import '../../styles/styles.css';

const Button = ({ onClick, isLoading }) => {
  return (
    <button
      type="button"
      className={styles.loadMoreButton}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};

export default Button;
