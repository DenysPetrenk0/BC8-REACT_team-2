/** @format */

import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContentSwitcher from './contentSwitcher/ContentSwitcher';
import { mainRoutes } from './routes/mainRoutes';
import CardList from './components/cards/CardList/CardList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <ContentSwitcher routes={mainRoutes} />
      </Suspense>
      {/* <Contacts /> */}
      <CardList />
      <Footer />
    </div>
  );
};

export default App;
