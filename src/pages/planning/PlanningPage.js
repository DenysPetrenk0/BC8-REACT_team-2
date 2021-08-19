import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Planning.module.css';
// import { getTasks } from './redux/selectors';
import { addTask } from '../../redux/tasks/tasksOperation';
import PlanningPoints from '../../components/planningPoints/PlanningPoints';
import PlanningCards from '../../components/planningCards/PlanningCards';

const initialState = {
  title: '',
  reward: 0,
  imageUrl: '',
};

const PlanningPage = () => {
  const dispatch = useDispatch();

  // create task for form
  const onAddTask = useCallback(
    ({ title, reward, imageUrl }) => {
      dispatch(addTask(title, reward, imageUrl));
    },
    [dispatch],
  );

  // select week

  // const selectDay = e => {
  //   const week = e.target.value;
  //   setWeek(date);
  // };

  // get tasks
  // только активные или все таски?
  // const tasks = useSelector(getActiveTask);
  return (
    <>
      <div>
        <h2 className={styles.planningTitle}>План на неделю:</h2>
        <PlanningPoints />
        <div>
          <select>
            <option>17-24</option>
          </select>
        </div>
      </div>
      <PlanningCards />
      {/*<NewTaskModal onAddTask={onAddTask}/>
      <AddCustomTask /> */}
    </>
  );
};

export default PlanningPage;

/* <select value={week} onChange={selectweek}>
  {weeks.list.map(lang => (
    <option value={week} key={week}>
      17-24
    </option>
  ))}
</select>; */

// const onHandleChange = event => {
//   const { name, value } = event.target;
//   setTask(prev => ({ ...prev, [name]: value }));
// };

// const onHandleSubmit = useCallback(
//   event => {
//     event.preventDefault();
//     onAddTask(task);
//     setTask({ ...initialState });
//   },
//   [task, onAddTask],
// );

/* <form onSubmit={onHandleSubmit} autoComplete="on">
      <input
        type="text"
        name="title"
        value={task.title}
        minLength="3"
        required
        onChange={onHandleChange}
        label="title"
      />
      <input
        type="number"
        name="reward"
        onChange={onHandleChange}
        value={task.reward}
        minLength="3"
        required
        label="reward"
      />
      <button type="submit" className="registerBtn">
        отправить
      </button>
    </form> */
