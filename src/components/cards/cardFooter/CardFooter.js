import React from 'react';
import CardTitle from '../cardTitle';
import PointAmount from '../pointAmount';
import TaskState from '../taskState/TaskState';
import TaskToggle from '../taskTogle/TaskTogle';
import s from './CardFooter.module.css';

// ===========ЗНАЧЕННЯ для перевірки=============
// const title = 'ЗАСТЕЛИТЬ КРОВАТЬ';
// const taskPoints = 10;
// ==============================================
const CardFooter = ({ ...data }) => {
  console.log(data.days);
  const {
    title,
    reward,
    days: [{ date, isCompleted, isActive }],
  } = data;

  let parseDate = new Date(Date.parse(date));
  console.log(parseDate);
  // ==========================================================
  const curentTime = new Date();

  let sameDay =
    curentTime.getFullYear() === parseDate.getFullYear() &&
    curentTime.getMonth() === parseDate.getMonth() &&
    curentTime.getDate() === parseDate.getDate();

  console.log(sameDay);
  // ============================================================

  // ============================================================
  return (
    <div className={s.cardFooter}>
      <div>
        <CardTitle title={title} />
        <PointAmount reward={reward} />
      </div>
      <TaskToggle value={isCompleted} />
      {/* <TaskState taskState={taskState} /> */}
    </div>
  );
};

export default CardFooter;
