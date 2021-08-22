import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuthenticated } from '../redux/auth/authSelectors';

export default function PublicRoute({
  component: Component,
  isPrivate,
  redirectTo,
  key,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} key={key} />
      ) : (
        <Component {...routeProps} />
      )}
    </Route>
  );
}
