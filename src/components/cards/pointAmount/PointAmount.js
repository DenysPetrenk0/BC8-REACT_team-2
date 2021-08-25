import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './PointAmount.module.css';

function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 === 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

const PointAmount = ({ reward }) => {
  const { t } = useTranslation();
  return (
    <div className={s.pointAmount}>
      <p className={s.pointAmountText}>
        {`${t(reward)} ${declOfNum(reward, [
          t('point1'),
          t('point'),
          t('points'),
        ])}`}
      </p>
    </div>
  );
};

export default PointAmount;
