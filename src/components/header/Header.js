// /** @format */

import React from 'react';
import Navigation from '../navigation/Navigation';
import Logo from '../navigation/logo/Logo';
import HeaderContainer from '../header/headerContainer/HeaderContainer';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
