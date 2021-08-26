/** @format */

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './ModalNavListAuth.module.css';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const ModalNavListAuth = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/"
        exact
      >
        {t('Home')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/planing"
        exact
      >
        {t('Planning')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/awards"
        exact
      >
        {t('Awards')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/contacts-us"
        exact
      >
        {t('Contacts')}
      </NavLink>
    </div>
  );
};

export default ModalNavListAuth;
