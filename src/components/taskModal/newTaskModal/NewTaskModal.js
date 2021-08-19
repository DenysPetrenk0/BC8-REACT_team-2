import React from 'react';
import TaskImageInput from '../taskImageInput/TaskImageInput';
import TaskInput from '../taskInput/TaskInput';
import Modal from '../../modal/Modal';
import styles from './NewTaskModal.module.css';
import image from '../modalTaskImg.webp';
import ModalClose from '../../modal/ModalClose';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  task: Yup.string().required('Это поле обязательно'),
  points: Yup.number().required('Это поле обязательно'),
});

const NewTaskModal = ({ onClose }) => {
  const form = useFormik({
    initialValues: {
      task: '',
      points: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Modal onClose={() => {}}>
      <ModalClose onClose={() => {}} />
      <form
        onSubmit={form.handleSubmit}
        className={styles.newTaskModalContainer}
      >
        <img className={styles.taskImage} src={image} alt="task" />
        <TaskImageInput />
        <TaskInput
          name="task"
          value={form.values.task}
          onChange={form.handleChange}
          type="text"
          placeholder={
            (form.touched.task && form.errors.task) || 'Добавить задание...'
          }
          hasError={form.errors.task && form.touched.task}
        />
        <TaskInput
          name="points"
          value={form.values.points}
          onChange={form.handleChange}
          type="number"
          placeholder={
            (form.touched.points && form.errors.points) || 'Добавить баллы...'
          }
          hasError={form.errors.points && form.touched.points}
        />
        <div className={styles.taskButtonContainer}>
          <button type="submit" className={styles.taskButton}>
            Ок
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
