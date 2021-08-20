import React from 'react';
import ModalNavListAuth from '../modalNavListAuth/ModalNavListAuth';
import UserInfoModal from '../userInfoModal/UserInfoModal';
import styles from './BurgerMenuAuth.module.css';

const BurgerMenuAuth = ({ onLogout }) => {
  return (
    <>
      <div className={styles.container}>
        {window.screen.width < 768 && <UserInfoModal onLogout={onLogout} />}
        <ModalNavListAuth />
      </div>
    </>
  );
};

export default BurgerMenuAuth;
