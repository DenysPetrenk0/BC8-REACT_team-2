import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { weekInfo } from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentWeek.module.css';

const CurrentWeek = () => {
  const weekDate = useSelector(weekInfo);
  const { t } = useTranslation();
  return (
    <div className={styles.tabsInfo}>
      <p className={styles.tabsWeekInfo}>
        {t('Week')} {weekDate}
      </p>
    </div>
  );
};

export default CurrentWeek;
