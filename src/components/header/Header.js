// /** @format */

import React from 'react';
import Navigation from '../navigation/navigation/Navigation';
import Logo from '../navigation/logo/Logo';
import HeaderContainer from '../header/headerContainer/HeaderContainer';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const Header = () => {
  return (
    <div className="container">
      <HeaderContainer>
        <Logo />
        <LanguageSwitcher />
        <Navigation />
      </HeaderContainer>
    </div>
  );
};

export default Header;
