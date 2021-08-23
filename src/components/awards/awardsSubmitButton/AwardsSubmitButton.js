import React from 'react';
import styles from './AwardsSubmitButton.module.css';

export default function AwardsSubmitButton({ onHandleSubmit }) {
  return (
    <div className={styles.AwardsSubmitButtonWrapper}>
      <button
        type="submit"
        className={styles.AwardsSubmitButton}
        onClick={onHandleSubmit}
      >
        Подтвердить
      </button>
    </div>
  );
}
