import React from 'react';
import styles from './Loader.module.css';

import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => (
  <div className={styles.loader}>
    <ThreeCircles
      height="100"
      width="100"
      color="#303f9f"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </div>
);

export default Loader;
