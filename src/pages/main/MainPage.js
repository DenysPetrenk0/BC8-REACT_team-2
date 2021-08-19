import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeekTabs from '../../components/week/weekTabs/WeekTabs';
import WeekTabsContents from '../../components/week/weekTabsContents/WeekTabsContents';
import { getWeekOperation } from '../../redux/weekTabs/weekOperation';
import {
  getCardsInfo,
  getVisibleTasks,
  getWeekDate,
} from '../../redux/weekTabs/weekSelectors';
import styles from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const numbers = useSelector(getWeekDate);
  const tasks = useSelector(getVisibleTasks);

  useEffect(() => {
    dispatch(getWeekOperation());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <WeekTabs numbers={numbers} className={styles.weekTabs} />
      <WeekTabsContents tasks={tasks} />
    </div>
  );
};

export default MainPage;
