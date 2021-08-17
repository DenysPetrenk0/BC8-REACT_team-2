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
    path: '/auth',
    component: lazy(
      () => import('#') /* webpackChunkName: "RegistrationPage" */,
    ),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Contacts',
    path: '/contacts-us',
    component: lazy(() => import('#') /* webpackChunkName: "LoginPage" */),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Planing',
    path: '/planing',
    component: lazy(() => import('#') /* webpackChunkName: "LoginPage" */),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Awards',
    path: '/awards',
    component: lazy(() => import('#') /* webpackChunkName: "LoginPage" */),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
];
