import React from 'react';
import styles from './TaskImageInput.module.css';
import modalTaskIcon from '../modalTaskIcon.svg';

const TaskImageInput = () => {
  return (
    <label className={styles.inputImageLabel}>
      <input className={styles.inputImage} type="file" />
      <svg className={styles.modalTaskIcon} width="20" height="18">
        <use href={modalTaskIcon + '#modal-task-icon'}></use>
      </svg>
    </label>
  );
};

export default TaskImageInput;
