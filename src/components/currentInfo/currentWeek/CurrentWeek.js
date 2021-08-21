import React from 'react';
import { useSelector } from 'react-redux';
import { weekInfo } from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentWeek.module.css';

const CurrentWeek = () => {
  const weekDate = useSelector(weekInfo);
  return (
    <div className={styles.tabsInfo}>
      <p className={styles.tabsWeekInfo}>Неделя: {weekDate}</p>
    </div>
  );
};

export default CurrentWeek;
