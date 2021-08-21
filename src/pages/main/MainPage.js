import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeekTabs from '../../components/week/weekTabs/WeekTabs';
import WeekTabsContents from '../../components/week/weekTabsContents/WeekTabsContents';
import { getWeekOperation } from '../../redux/weekTabs/weekOperation';
import {
  getVisibleTasks,
  getWeekDate,
} from '../../redux/weekTabs/weekSelectors';
import styles from './MainPage.module.css';
import ProgressBar from '../../components/progressBar/ProgressBar';

const MainPage = () => {
  const dispatch = useDispatch();
  const numbers = useSelector(getWeekDate);
  const tasks = useSelector(getVisibleTasks);

  useEffect(() => {
    dispatch(getWeekOperation());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <WeekTabs numbers={numbers} />
      <WeekTabsContents tasks={tasks} />
      <ProgressBar />
    </div>
  );
};

export default MainPage;
