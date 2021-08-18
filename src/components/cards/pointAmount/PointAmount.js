import React from 'react';
import s from './PointAmount.module.css';

const PointAmount = ({ point }) => {
  return (
    <div className={s.pointAmount}>
      <p className={s.pointAmountText}>{`${point} балла`}</p>
    </div>
  );
};

export default PointAmount;
