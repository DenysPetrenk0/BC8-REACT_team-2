import React from 'react';
import styles from './Footer.module.css';
import footerIcon from './footerIcon.svg';

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h2>
        KidsLike
        <svg className={styles.footerIcon} width="12" height="12">
          <use href={footerIcon + '#icon-footerIconsvg'}></use>
        </svg>
      </h2>
      <p>Делаем жизнь родителей и детей изи :)</p>
      <p>2020</p>
    </div>
  );
};

export default footer;
