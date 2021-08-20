import React from 'react';
import styles from './BalanceBar.module.css';

const BalanceBar = () => {
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
      <span className={styles.number}>0</span>
    </div>
  );
};

export default BalanceBar;
