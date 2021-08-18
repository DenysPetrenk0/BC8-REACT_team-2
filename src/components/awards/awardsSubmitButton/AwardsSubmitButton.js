import React from 'react';
import styles from './AwardsSubmitButton.module.css';

const AwardsSubmitButton = () => {
  return (
    <div className={styles.AwardsSubmitButtonWrapper}>
      <button className={styles.AwardsSubmitButton}>Подтвердить</button>
    </div>
  );
};

export default AwardsSubmitButton;
