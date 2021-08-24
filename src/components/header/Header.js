// /** @format */

import React from 'react';
import Navigation from '../navigation/Navigation';
import Logo from '../navigation/logo/Logo';
import HeaderContainer from '../header/headerContainer/HeaderContainer';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <LanguageSwitcher />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
