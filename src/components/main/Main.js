/** @format */

import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Switch } from 'react-router';
import ContentSwitcher from '../../contentSwitcher/ContentSwitcher';
import { headerRoutes } from '../../routes/headerRoutes';
import { mainRoutes } from '../../routes/mainRoutes';

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>{mainRoutes.map(route => {})}</Switch>
    </Suspense>
  );
};

export default Main;
