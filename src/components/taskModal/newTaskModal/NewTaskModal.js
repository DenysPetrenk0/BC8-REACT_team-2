import React, { useCallback, useMemo } from 'react';
import TaskImageInput from '../taskImageInput/TaskImageInput';
import TaskInput from '../taskInput/TaskInput';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../modal/Modal';
import styles from './NewTaskModal.module.css';
import image from '../modalTaskImg.webp';
import ModalClose from '../../modal/ModalClose';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getTaskModalVisible } from '../../../redux/taskModal/taskModalSelector';
import { hideTaskModal } from '../../../redux/taskModal/taskModalAction';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Это поле обязательно'),
  reward: Yup.number().required('Это поле обязательно'),
});

const NewTaskModal = ({ onAddTask, onClose }) => {
  const form = useFormik({
    initialValues: {
      imageUrl: '',
      title: '',
      reward: '',
    },
    validationSchema,
    onSubmit: values => {
      onAddTask(values);
    },
  });

  const imageUrl = useMemo(
    () =>
      !form.values.imageUrl ? '' : URL.createObjectURL(form.values.imageUrl),
    [form.values.imageUrl],
  );

  return (
    <Modal onClose={onClose}>
      <ModalClose onClose={onClose} />
      <form
        onSubmit={form.handleSubmit}
        className={styles.newTaskModalContainer}
      >
        <img className={styles.taskImage} src={imageUrl || image} alt="task" />
        <TaskImageInput
          value={form.values.imageUrl}
          onChange={file => {
            form.setFieldValue('imageUrl', file);
          }}
        />
        <TaskInput
          name="title"
          value={form.values.title}
          onChange={form.handleChange}
          type="text"
          placeholder={
            (form.touched.title && form.errors.title) || 'Добавить задание...'
          }
          hasError={form.errors.title && form.touched.title}
        />
        <TaskInput
          name="reward"
          value={form.values.reward}
          onChange={form.handleChange}
          type="number"
          placeholder={
            (form.touched.reward && form.errors.reward) || 'Добавить баллы...'
          }
          hasError={form.errors.reward && form.touched.reward}
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

export default ({ onAddTask }) => {
  const modalVisible = useSelector(getTaskModalVisible);
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(hideTaskModal());
  }, [dispatch]);
  if (!modalVisible) return null;
  return <NewTaskModal onAddTask={onAddTask} onClose={onClose} />;
};
