import React from 'react';
import Card from '../cards/card/Card';
import Spinner from '../spinner/Spinner';
import styles from './CurrentWeekRange.module.css';

const CurrentWeekRange = ({ tasks }) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <li key={task._id} className={styles.item}>
          <Card data={task} />
        </li>
      ))}
    </ul>
  );
};

export default CurrentWeekRange;
