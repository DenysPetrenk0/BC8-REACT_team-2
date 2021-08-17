/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { mainRoutes } from '../routes/mainRoutes';

const ContentSwitcher = () => {
  return (
    <Switch>
      {mainRoutes.map(route => {
        <Route>{route}</Route>;
      })}
    </Switch>
  );
};

export default ContentSwitcher;
