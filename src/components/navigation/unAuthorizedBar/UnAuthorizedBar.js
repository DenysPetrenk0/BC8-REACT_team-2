/** @format */

import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ModalBurger from '../modalBurger/ModalBurger';
import ModalCloseBurger from '../modalBurger/ModalCloseBurger';
import BurgerMenu from '../burgerMenuIcon/BurgerMenuIcon';
import styles from './UnAuthorizedBar.module.css';
import BurgerMenuUnAuth from '../burgerMenuUnAuth/BurgerMenuUnAuth';
import useWindowDimensions from '../../../pages/planning/hooks/wirthHook';

const UnAuthorizatedBar = () => {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);
  return (
    <>
      {width < 580 ? (
        <button className={styles.burger__modal_btn} onClick={toggleModal}>
          <BurgerMenu />
        </button>
      ) : (
        <nav className={styles.nav}>
          <NavLink
            className={styles.nav__link_item}
            activeClassName={styles.nav__link_item_active}
            to="/auth"
            exact
          >
            Авторизация
          </NavLink>
          <NavLink
            className={styles.nav__link_item}
            activeClassName={styles.nav__link_item_active}
            to="/contacts-us"
            exact
          >
            Контакты
          </NavLink>
        </nav>
      )}
      {showModal && (
        <ModalBurger onClose={toggleModal}>
          <BurgerMenuUnAuth />
          <ModalCloseBurger onClose={toggleModal} />
        </ModalBurger>
      )}
    </>
  );
};

export default UnAuthorizatedBar;
