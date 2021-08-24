import React from 'react';
import ModalNavListAuth from '../modalNavListAuth/ModalNavListAuth';
import UserInfoModal from '../userInfoModal/UserInfoModal';
import styles from './BurgerMenuAuth.module.css';
import useWindowDimensions from '../../../pages/planning/hooks/wirthHook';

const BurgerMenuAuth = ({ onLogout }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.container}>
        {width < 580 && <UserInfoModal onLogout={onLogout} />}
        <ModalNavListAuth />
      </div>
    </>
  );
};

export default BurgerMenuAuth;
