import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Planning.module.css';
import { getTasks } from './redux/selectors';
import { addTask } from './redux/operation';

const initialState = {
  title: '',
  reward: 0,
};

const Planning = () => {
  const [task, setTask] = useState(initialState);
  console.log('~ task', task);

  const dispatch = useDispatch();

  const onAddTask = useCallback(
    ({ title, reward }) => {
      console.log('~ reward', reward);
      console.log('~ title', title);

      dispatch(addTask(title, reward));
    },
    [dispatch],
  );

  const onHandleChange = event => {
    const { name, value } = event.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = useCallback(
    event => {
      event.preventDefault();
      onAddTask(task);
      setTask({ title: '', reward: 0 });
    },
    [task, onAddTask],
  );
  return (
    <form onSubmit={onHandleSubmit} autoComplete="on">
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
    </form>
  );

  // <PlanningPoints />
  // <NewTaskModal/>
  // <AddCustomTask/>
};

export default Planning;
