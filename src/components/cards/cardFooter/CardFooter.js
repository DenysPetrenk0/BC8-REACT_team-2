import React from "react";
import CardTitle from "../cardTitle";
import PointAmount from "../pointAmount";
import TaskState from "../taskState/TaskState";
import TaskToggle from "../taskTogle/TaskTogle";
import s from "./CardFooter.module.css";

// ===========ЗНАЧЕННЯ для перевірки=============
// const title = 'ЗАСТЕЛИТЬ КРОВАТЬ';
// const taskPoints = 10;
// ==============================================
const CardFooter = ({ ...data }) => {
  const {
    title = "ЗАСТЕЛИТЬ КРОВАТЬ",
    taskPoints = 10,
    taskState = true,
    isSelected,
  } = data;
  return (
    <div className={s.cardFooter}>
      <div>
        <CardTitle title={title} />
        <PointAmount point={taskPoints} />
      </div>
      <TaskToggle value={isSelected} />
      {/* <TaskState taskState={taskState} /> */}
    </div>
  );
};

export default CardFooter;
