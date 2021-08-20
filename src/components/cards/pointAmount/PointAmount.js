import React from 'react';
import s from './PointAmount.module.css';

const PointAmount = ({ reward }) => {
  return (
    <div className={s.pointAmount}>
      <p className={s.pointAmountText}>{`${reward} балла`}</p>
    </div>
  );
};

export default PointAmount;
