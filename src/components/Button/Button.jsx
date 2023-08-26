import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';
// import '../../styles/styles.css';

const Button = ({ onClick, isLoading }) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        type="button"
        className={styles.loadMoreButton}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
