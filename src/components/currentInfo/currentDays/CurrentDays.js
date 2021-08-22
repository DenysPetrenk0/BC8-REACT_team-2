import React from 'react';
import { useSelector } from 'react-redux';
import {
  currentDateInfo,
  getDaySelector,
} from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentDays.module.css';

const CurrentDays = () => {
  const date = useSelector(currentDateInfo);
  const day = useSelector(getDaySelector);
  return (
    <div className={styles.tabsTasksInfo}>
      <p className={styles.tabsTasksTitle}>Мoи задачи:</p>
      <p className={styles.tabsTasksText}>
        {day}, {date}
      </p>
    </div>
  );
};

export default CurrentDays;
