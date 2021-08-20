import React from 'react';
import ModalNavListUnAuth from '../modalNavListUnAuth/ModalNavListUnAuth';
import styles from '../burgerMenuAuth/BurgerMenuAuth.module.css';

const BurgerMenuUnAuth = () => {
  return (
    <>
      <div className={styles.container}>
        <ModalNavListUnAuth />
      </div>
    </>
  );
};

export default BurgerMenuUnAuth;
