/** @format */

import React, { Suspense, useEffect } from 'react';
import Header from './components/header/Header';
import ContentSwitcher from './contentSwitcher/ContentSwitcher';
import { mainRoutes } from './routes/mainRoutes';
import { getUserInfo } from './redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import Spinner from './components/spinner/Spinner';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <ContentSwitcher routes={mainRoutes} />
      </Suspense>
      {/* <Footer /> */}
    </Suspense>
  );
};

export default App;
