import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Главная',
    path: '/',
    component: lazy(
      () => import('../pages/main/MainPage') /* webpackChunkName: "HomePage" */,
    ),
    exact: true,
    restricted: false,
    isPrivate: false,
    redirectTo: '/login',
  },
  {
    name: 'Авторизация',
    path: '/auth',
    component: lazy(
      () => import('../pages/auth/AuthPage') /* webpackChunkName: "AuthPage" */,
    ),
    exact: true,
    restricted: true,
    isPrivate: false,
    redirectTo: '/',
  },
  {
    name: 'Контакты',
    path: '/contacts-us',
    component: lazy(
      () =>
        import(
          '../pages/contacts/Contacts'
        ) /* webpackChunkName: "ContactUsPage" */,
    ),
    exact: true,
    restricted: false,
    isPrivate: false,
    redirectTo: '/',
  },
  {
    name: 'Планирование',
    path: '/planing',
    component: lazy(
      () =>
        import(
          '../pages/planning/PlanningPage'
        ) /* webpackChunkName: "PlaningPage" */,
    ),
    exact: true,
    restricted: true,
    isPrivate: true,
    redirectTo: '/auth',
  },
  {
    name: 'Награды',
    path: '/awards',
    component: lazy(
      () =>
        import(
          '../pages/awards/AwardsPage'
        ) /* webpackChunkName: "AwardsPage" */,
    ),
    exact: true,
    restricted: true,
    isPrivate: true,
    redirectTo: '/auth',
  },
];
