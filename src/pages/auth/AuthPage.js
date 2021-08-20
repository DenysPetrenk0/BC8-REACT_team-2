/** @format */

import React from 'react';
import AuthForm from '../../components/authForm/AuthForm';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
