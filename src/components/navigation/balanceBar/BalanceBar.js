import React from 'react';
import { useSelector } from 'react-redux';
import { getUserBalance } from '../../../redux/auth/authSelectors';
import styles from './BalanceBar.module.css';

const BalanceBar = () => {
  const balance = useSelector(getUserBalance);
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
      <span className={styles.number}>{balance}</span>
    </div>
  );
};

export default BalanceBar;
