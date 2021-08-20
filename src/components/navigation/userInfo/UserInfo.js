import React, { useCallback, useEffect, useState } from 'react';
import styles from './UserInfo.module.css';
import sprite from '../../../images/header/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../../redux/auth/authSelectors';

const UserInfo = ({ toggleModalLogout }) => {
  const userEmail = useSelector(getUserEmail);

  return (
    <>
      {window.screen.width > 768 && (
        <div className={styles.user__name_container}>
          <span className={styles.upp__letter}>
            <p className={styles.letter}>
              {userEmail.toUpperCase().slice(0, 1)}
            </p>
          </span>
          <p className={styles.user__name}>{userEmail}</p>
          <button
            onClick={toggleModalLogout}
            className={styles.user__logout_btn}
          >
            <svg className={styles.svg}>
              <use href={sprite + '#icon-logout1'} />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default UserInfo;
