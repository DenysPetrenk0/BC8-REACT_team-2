/** @format */

import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';
import ContentSwitcher from '../../contentSwitcher/ContentSwitcher';
import { headerRoutes } from '../../routes/headerRoutes';

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ContentSwitcher routes={headerRoutes} />
    </Suspense>
  );
};

export default Main;
