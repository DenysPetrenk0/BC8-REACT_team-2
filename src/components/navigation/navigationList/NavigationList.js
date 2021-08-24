/** @format */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './NavigationList.module.css';

const NavigationList = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/"
        exact
      >
        {t('Home')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/planing"
        exact
      >
        {t('Planning')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/awards"
        exact
      >
        {t('Awards')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/contacts-us"
        exact
      >
        {t('Contacts')}
      </NavLink>
    </div>
  );
};

export default NavigationList;
