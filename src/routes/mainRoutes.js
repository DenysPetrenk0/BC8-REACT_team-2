import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('#') /* webpackChunkName: "HomePage" */),
    exact: true,
    // restricted: false,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Register',
    path: '/registration',
    component: lazy(
      () => import('#') /* webpackChunkName: "RegistrationPage" */,
    ),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Login',
    path: '/login',
    component: lazy(() => import('#') /* webpackChunkName: "LoginPage" */),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: lazy(() => import('#') /* webpackChunkName: "LoginPage" */),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
];
