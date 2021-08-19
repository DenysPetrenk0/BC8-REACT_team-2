import React from 'react';
import styles from './WeekTabs.module.css';

const weekDays = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Восресенье',
];

const WeekTabs = ({ numbers }) => {
  const filterTabs = id => {
    console.log(id);
  };

  return (
    <ul className={styles.navWeekList}>
      {weekDays.map((day, idx) => (
        <li className={styles.navWeekItem} key={day}>
          <button
            className={styles.navWeekBtn}
            id={numbers[idx]}
            onClick={filterTabs}
          >
            <p className={styles.navWeekBtnText}>{day}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WeekTabs;
