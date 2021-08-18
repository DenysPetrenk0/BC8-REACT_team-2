/** @format */

import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AwardsPage from './pages/awards/AwardsPage';
// import Contacts from './pages/contacts/Contacts';

const App = () => {
  return (
    <div className="container">
      <Header />
      <AwardsPage />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
};

export default App;
