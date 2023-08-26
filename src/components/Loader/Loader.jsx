import React from 'react';

// import styles from './Loader.module.css';
// import '../../styles/styles.css';

import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => (
  <div className="loader">
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
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
