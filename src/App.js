/** @format */

import React, { Suspense, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContentSwitcher from './contentSwitcher/ContentSwitcher';
import { mainRoutes } from './routes/mainRoutes';
import { useDispatch } from 'react-redux';
import { getUserInfo } from './redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <ContentSwitcher routes={mainRoutes} />
      </Suspense>
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
};

export default App;
