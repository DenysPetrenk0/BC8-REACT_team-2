import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { orderAward } from '../../../redux/awards/awardsOperations';
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
