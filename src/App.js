/** @format */

import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contacts from './pages/contacts/Contacts';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
