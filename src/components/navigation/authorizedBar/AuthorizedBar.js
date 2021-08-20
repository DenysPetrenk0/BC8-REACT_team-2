import React from 'react';
// import { NavLink } from 'react-router-dom';
// import BurgerMenu from '../burgerMenu/BurgerMenu';
import NavigationList from '../navigationList/NavigationList';
import UserMenu from '../userMenu/UserMenu';
import styles from './AuthorizedBar.module.css';

const AuthorizedBar = () => {
  return (
    <div className={styles.container}>
      {window.screen.width > 1280 && <NavigationList />}
      <UserMenu />
    </div>
  );
};

export default AuthorizedBar;
