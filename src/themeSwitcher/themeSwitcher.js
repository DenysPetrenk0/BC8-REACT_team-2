import React, { useState } from 'react';

const themeSwitcher = () => {
  const [color, setColor] = useState();

  const changeColor = () => {
    color.theme = 'darkColor' ? setColor('ligthColor') : setColor('darkColor');
  };

  return (
    <button type="button" onClick={changeColor}>
      Theme
    </button>
  );
};

export default themeSwitcher;
