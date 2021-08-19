import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTabs } from '../../../redux/weekTabs/weekActions';
import { getFilterSelector } from '../../../redux/weekTabs/weekSelectors';
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
  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);

  const getFilter = e => {
    const id = e.currentTarget.id;
    dispatch(filterTabs(id));
  };

  return (
    <ul className={styles.navWeekList}>
      {weekDays.map((day, idx) => (
        <li
          className={styles.navWeekItem}
          key={day}
          onClick={getFilter}
          id={numbers[idx]}
        >
          <button
            className={
              numbers[idx] === filter
                ? styles.navWeekBtnActive
                : styles.navWeekBtn
            }
          >
            <p className={styles.navWeekBtnText}>{day}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WeekTabs;
