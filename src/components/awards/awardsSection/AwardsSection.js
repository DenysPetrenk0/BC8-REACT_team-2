import styles from './AwardsSection.module.css';
import React from 'react';

const AwardsSection = ({ children }) => {
  return <div className={styles.Awards__Container}>{children}</div>;
};

export default AwardsSection;
