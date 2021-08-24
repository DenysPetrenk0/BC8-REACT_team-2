import React from 'react';
import { useTranslation } from 'react-i18next';
import sprite from './sprite.svg';
import styles from './AwardsTitle.module.css';

const AwardsTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.AwardsTitle__Wrapper}>
      <svg className={styles.AwardsTitle__icon}>
        <use href={sprite + '#icon-gift-box'} width="30"></use>
      </svg>
      <h2 className={styles.AwardsTitle}>{t('My gifts')}</h2>
    </div>
  );
};

export default AwardsTitle;
