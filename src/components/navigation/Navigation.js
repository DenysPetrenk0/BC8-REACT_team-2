/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import AuthorizedBar from './authorizedBar/AuthorizedBar';
import UnAuthorizedBar from './unAuthorizedBar/UnAuthorizedBar';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return <>{isLoggedIn ? <AuthorizedBar /> : <UnAuthorizedBar />}</>;
};
export default Navigation;
