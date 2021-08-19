/** @format */

import React from 'react';
import { useLocation } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import Navigation from '../navigation/Navigation';
  import UserInfo from "../userInfo/UserInfo";
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Navigation routes={mainRoutes} prevPathname={location.pathname} />
        <UserInfo />
    </header>
  );

};

export default Header;
