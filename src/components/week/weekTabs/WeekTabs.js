import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { currentDay, filterTabs } from '../../../redux/weekTabs/weekActions';
import { getFilterSelector } from '../../../redux/weekTabs/weekSelectors';
import CurrentWeek from '../../currentInfo/currentWeek/CurrentWeek';
import styles from './WeekTabs.module.css';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const shortWeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const initialState = {
  width: window.innerWidth,
  startBreakPoint: 1180,
  breakPoint: 580,
  endBreakPoint: 321,
};

const WeekTabs = ({ numbers }) => {
  const [measure, setMeasure] = useState(initialState);

  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);
  const hendleResizeWindow = () => {
    setMeasure(prev => ({ ...prev, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', hendleResizeWindow);
    return () => {
      window.addEventListener('resize', hendleResizeWindow);
    };
  }, []);

  const { t } = useTranslation();

  const getCurrentInfo = e => {
    const id = e.currentTarget.id;
    const name = e.target.textContent;
    dispatch(filterTabs(id));
    dispatch(currentDay(name));
  };

  return (
    <div className={styles.weekBox}>
      {measure.startBreakPoint > measure.width &&
        measure.width > measure.breakPoint && <CurrentWeek styles={styles} />}

      <ul className={styles.navWeekList}>
        {(measure.width > measure.startBreakPoint
          ? weekDays
          : shortWeekDays
        ).map((day, idx) => (
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
              <p className={styles.navWeekBtnText}>{t(day)}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekTabs;
