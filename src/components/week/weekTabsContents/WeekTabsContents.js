import React from 'react';
import CurrentWeekRange from '../../currentWeekRange/CurrentWeekRange';
import CurrentDays from '../../currentInfo/currentDays/CurrentDays';
import styles from './weekTabsContents.module.css';
import CurrentWeek from '../../currentInfo/currentWeek/CurrentWeek';
import NoCurrentWeekRange from '../../noCurrentWeekRange/NoCurrentWeekRange';
import Footer from '../../footer/Footer';

const WeekTabsContents = ({ tasks }) => {
  return (
    <div className={styles.week}>
      <div className={styles.weekInfo}>
        <CurrentWeek />
        <CurrentDays />
      </div>
      {tasks.length > 0 ? (
        <CurrentWeekRange tasks={tasks} />
      ) : (
        <NoCurrentWeekRange />
      )}
      <Footer />
    </div>
  );
};

export default WeekTabsContents;
