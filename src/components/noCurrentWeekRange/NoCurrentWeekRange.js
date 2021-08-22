import React, { useEffect } from 'react';
import { useState } from 'react';
import img_des from './images/planer-des.png';
import img_tab from './images/planer-tab.png';
import img_mob from './images/planer-mob.png';

import styles from './NoCurrentWeekRange.module.css';
import { Link } from 'react-router-dom';

const initialState = {
  width: window.innerWidth,
  endBreakPoint: 1279,
  startBreakPoint: 768,
};

const NoCurrentWeekRange = () => {
  const [state, setState] = useState(initialState);

  const hendleResizeWindow = () => {
    setState(prev => ({ ...prev, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', hendleResizeWindow);
    return () => {
      window.addEventListener('resize', hendleResizeWindow);
    };
  }, []);

  return (
    <>
      <p className={styles.text}>На этот день задач нет</p>
      <Link to="/planing" className={styles.btn}>
        Запланировать задачи
      </Link>
      {(state.startBreakPoint > state.width && (
        <img src={img_mob} alt="childrens" width="320" />
      )) ||
        (state.width > state.endBreakPoint && (
          <img src={img_des} alt="childrens" width="1040" />
        )) ||
        (state.startBreakPoint < state.width < state.endBreakPoint && (
          <img src={img_tab} alt="childrens" width="768" />
        ))}
    </>
  );
};

export default NoCurrentWeekRange;
