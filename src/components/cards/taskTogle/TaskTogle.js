import React, { useState } from 'react';
import s from './TaskTogle.module.css';
import { ReactComponent as CheckIcon } from '../cardsIcons/taskTogle_check.svg';
import { ReactComponent as AttentionIcon } from '../cardsIcons/taskTogle_attention.svg';

const TaskToggle = ({ id, taskCompleted }) => {
  const [disabled, setDisabled] = useState(false);

  const onChange = e => {
    setDisabled(true);
    const id = e.target.id;
    taskCompleted(id);
  };

  return (
    <label htmlFor={id} className={s.switcher}>
      <input
        id={id}
        className={s.checkbox}
        type="checkbox"
        // checked={value}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={`${s.slider}`}>
        <CheckIcon className={s.checkIcon} width="11" height="11" />
        <AttentionIcon className={s.attentionIcon} width="11" height="11" />
      </span>
    </label>
  );
};
export default TaskToggle;
