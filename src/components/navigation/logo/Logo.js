/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
// import { authSelectors } from "../../../redux/auth";
import styles from './Logo.module.css';
import sprite from '../../../images/header/symbol-defs.svg';
import BalanceBar from '../balanceBar/BalanceBar';

export default function Logo() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <NavLink className={styles.logo} to="/" exact>
        KidsLike
        <span>
          <svg className={styles.icon__svg}>
            <use href={sprite + '#icon-victory1'} />
          </svg>
        </span>
      </NavLink>
      {location.pathname === '/' && <BalanceBar />}
      {location.pathname === '/awards' && <BalanceBar />}
    </div>
  );
}
