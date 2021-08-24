/** @format */

import React from 'react';
import AuthForm from '../../components/authForm/AuthForm';
import styles from './AuthPage.module.css';
import Footer from '../../components/footer/Footer';
import useWindowDimensions from '../planning/hooks/widthHook';


const AuthPage = () => {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
