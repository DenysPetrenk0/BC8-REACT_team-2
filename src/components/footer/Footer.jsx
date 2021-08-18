import React from 'react';
import styles from './Footer.module.css';
import footerIcon from './footerIcon.svg';

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTitleContainer}>
        <h2 className={styles.footerTitle}>KidsLike</h2>
        <svg className={styles.footerIcon} width="12" height="12">
          <use href={footerIcon + '#icon-footerIconsvg'}></use>
        </svg>
      </div>
      <p className={styles.footerSlogan}>
        Делаем жизнь родителей и детей изи :)
      </p>
      <p className={styles.footerDate}>2020</p>
    </div>
  );
};

export default footer;
