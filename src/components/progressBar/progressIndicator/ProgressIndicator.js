import React from 'react';
import styles from './ProgressIndicator.module.css';

const ProgressIndicator = () => {
  return (
    <div className={styles.progressIndicatorContainer}>
      <div className={styles.progressIndicator}></div>
    </div>
  );
};

export default ProgressIndicator;
