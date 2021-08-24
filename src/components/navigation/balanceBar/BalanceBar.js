import React from 'react';
import { useSelector } from 'react-redux';
import {
  getAuthenticated,
  getUserBalance,
} from '../../../redux/auth/authSelectors';
import styles from './BalanceBar.module.css';

const BalanceBar = () => {
  const balance = useSelector(getUserBalance);
  const isLoggedIn = useSelector(getAuthenticated);
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <p className={styles.text}> Баланс </p>
        </li>
        <li>
          <p className={styles.text}>баллов:</p>
        </li>
      </ul>
      <span className={styles.number}>{isLoggedIn ? balance : <p>0</p>}</span>
    </div>
  );
};

export default BalanceBar;
