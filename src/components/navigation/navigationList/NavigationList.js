/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationList.module.css';

const NavigationList = () => {
  return (
    <div className={styles.container}>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/"
        exact
      >
        Главная
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/planing"
        exact
      >
        Планирование
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/awards"
        exact
      >
        Награды
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/contacts-us"
        exact
      >
        Контакты
      </NavLink>
    </div>
  );
};

export default NavigationList;
