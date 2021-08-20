// /** @format */

import React from 'react';
// import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Logo from '../navigation/logo/Logo';
import HeaderContainer from '../header/headerContainer/HeaderContainer';

const Header = () => {
  // const location = useLocation();
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
