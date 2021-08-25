/** @format */

import React, { Suspense, useEffect } from 'react';
import Header from './components/header/Header';
import ContentSwitcher from './contentSwitcher/ContentSwitcher';
import { mainRoutes } from './routes/mainRoutes';
import { getUserInfo } from './redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './components/spinner/Spinner';
import { useLocation } from 'react-router-dom';
import { setUserToken } from './redux/auth/authActions';
import { getToken } from './redux/auth/authSelectors';
const queryString = require('query-string');

const App = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const token = useSelector(getToken);

  useEffect(() => {
    if (search) {
      const token = queryString.parse(search);
      dispatch(setUserToken(token));
    }
  }, [search, dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getUserInfo());
    }
  }, [dispatch, token]);

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
