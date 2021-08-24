import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import footerIcon from './footerIcon.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTitleContainer}>
        <h2 className={styles.footerTitle}>KidsLike</h2>
        <svg className={styles.footerIcon} width="12" height="12">
          <use href={footerIcon + '#icon-footerIconsvg'}></use>
        </svg>
      </div>
      <p className={styles.footerSlogan}>
        {t('Making the life of parents and their children easy')}
      </p>
      <p className={styles.footerDate}>2020</p>
    </div>
  );
};

export default Footer;
