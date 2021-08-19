import React from 'react';
import CurrentWeekRange from '../../currentWeekRange/CurrentWeekRange';

const WeekTabsContents = ({ tasks }) => {
  return (
    <div>
      <h2>Неделя:</h2>
      <p>Мoи задачи:</p>
      <p>ВТОРНИК, 22-12-2020</p>
      <p>Заработано баллов за эту неделю:</p>
      <p>Запланировано баллов на эту неделю:</p>
      <CurrentWeekRange tasks={tasks} />
    </div>
  );
};

export default WeekTabsContents;
