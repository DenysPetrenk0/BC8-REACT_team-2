import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentDay, filterTabs } from '../../../redux/weekTabs/weekActions';
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
const shortWeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const initialState = { width: window.innerWidth, breakPoint: 1280 };

const WeekTabs = ({ numbers }) => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);
  const hendleResizeWindow = () => {
    setState(prev => ({ ...prev, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', hendleResizeWindow);
    return () => {
      window.addEventListener('resize', hendleResizeWindow);
    };
  }, []);

  const getCurrentInfo = e => {
    const id = e.currentTarget.id;
    const name = e.target.textContent;
    dispatch(filterTabs(id));
    dispatch(currentDay(name));
  };

  return (
    <div className={styles.weekBox}>
      <ul className={styles.navWeekList}>
        {(state.width > state.breakPoint ? weekDays : shortWeekDays).map(
          (day, idx) => (
            <li
              className={styles.navWeekItem}
              key={day}
              onClick={getCurrentInfo}
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
          ),
        )}
      </ul>
    </div>
  );
};

export default WeekTabs;
