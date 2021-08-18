import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Главная',
    path: '/',
    component: lazy(() => import('../pages/main/MainPage')),
    exact: true,
    // restricted: false,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Авторизация',
    path: '/auth',
    component: lazy(() => import('../pages/auth/AuthPage')),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Контакты',
    path: '/contacts-us',
    component: lazy(() => import('../pages/contacts/Contacts')),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Планирование',
    path: '/planing',
    component: lazy(() => import('../pages/planning/PlanningPage')),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
  {
    name: 'Награды',
    path: '/awards',
    component: lazy(() => import('../pages/awards/AwardsPage')),
    exact: true,
    // restricted: true,
    // isPrivate: false,
    // redirectTo: '/',
  },
];
