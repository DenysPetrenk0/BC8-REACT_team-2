import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchTaskSwitch } from '../../../redux/tasks/tasksOperation';
import { getFilterSelector } from '../../../redux/weekTabs/weekSelectors';
import CardTitle from '../cardTitle';
import PointAmount from '../pointAmount';
import TaskToggle from '../taskToggle/TaskToggle';
import s from './CardFooter.module.css';

// ===========ЗНАЧЕННЯ для перевірки=============
// const title = 'ЗАСТЕЛИТЬ КРОВАТЬ';
// const taskPoints = 10;
// ==============================================
const CardFooter = ({ ...data }) => {
  const dispatch = useDispatch();
  const filterDate = useSelector(getFilterSelector);
  const {
    title,
    reward,
    days: [{ date }],
  } = data;

  const taskCompleted = id => {
    dispatch(patchTaskSwitch(id, { date: filterDate }));
  };

  // let parseDate = new Date(Date.parse(date));
  // // ==========================================================
  // const curentTime = new Date();

  // let sameDay =
  //   curentTime.getFullYear() === parseDate.getFullYear() &&
  //   curentTime.getMonth() === parseDate.getMonth() &&
  //   curentTime.getDate() === parseDate.getDate();

  // ============================================================

  // ============================================================
  return (
    <div className={s.cardFooter}>
      <div>
        <CardTitle title={title} />
        <PointAmount reward={reward} />
      </div>
      <TaskToggle id={data._id} taskCompleted={taskCompleted} />
    </div>
  );
};

export default CardFooter;
