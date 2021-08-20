import React, { useCallback, useState } from 'react';

const initialState = {
  title: '',
  reward: 0,
  imageUrl: '',
};

const FormTest = ({ onAddTask }) => {
  const [task, setTask] = useState(initialState);
  const onHandleChange = event => {
    const { name, value } = event.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = useCallback(
    event => {
      event.preventDefault();
      onAddTask(task);
      setTask({ ...initialState });
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
};

export default FormTest;
