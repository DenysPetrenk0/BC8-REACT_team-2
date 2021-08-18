import React from 'react';
import s from './CardTitle.module.css';

const CardTitle = ({ title }) => (
  <div>
    <span className={s.cardTitle}>{title}</span>
  </div>
);

export default CardTitle;
