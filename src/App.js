/** @format */

import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContentSwitcher from './contentSwitcher/ContentSwitcher';
import { mainRoutes } from './routes/mainRoutes';

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <ContentSwitcher routes={mainRoutes} />
      </Suspense>
      {/* <Contacts /> */}
      <Footer />
    </>
  );
};

export default App;
