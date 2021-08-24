import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
