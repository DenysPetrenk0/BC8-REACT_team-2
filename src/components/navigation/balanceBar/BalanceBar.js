import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  getAuthenticated,
  getUserBalance,
} from '../../../redux/auth/authSelectors';
import styles from './BalanceBar.module.css';

const BalanceBar = () => {
  const balance = useSelector(getUserBalance);
  const { t } = useTranslation();
  const isLoggedIn = useSelector(getAuthenticated);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <p className={styles.text}> {t('Points')} </p>
        </li>
        <li>
          <p className={styles.text}>{t('balance')}</p>
        </li>
      </ul>
      <span className={styles.number}>{isLoggedIn ? balance : <p>0</p>}</span>
    </div>
  );
};

export default BalanceBar;
