/** @format */

import React, { Suspense } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContentSwitcher from './contentSwitcher/ContentSwitcher';
import { mainRoutes } from './routes/mainRoutes';
import Spinner from './components/spinner/Spinner';

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <ContentSwitcher routes={mainRoutes} />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
