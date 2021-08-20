import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Planning.module.css';
import { getTasks } from '../../redux/tasks/tasksSelector';
import { addTask } from '../../redux/tasks/tasksOperation';
import PlanningPoints from '../../components/planningPoints/PlanningPoints';
import PlanningCards from '../../components/planningCards/PlanningCards';
import { useSelector } from 'react-redux';
import NewTaskModal from '../../components/taskModal/newTaskModal/NewTaskModal';
import AddCustomTask from '../../components/addCustomTask/AddCustomTask';
import useWindowDimensions from './hooks/wirthHook';

const PlanningPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const { width } = useWindowDimensions();

  // create task for form
  const onAddTask = useCallback(
    ({ title, reward, imageUrl }) => {
      dispatch(addTask(title, reward, imageUrl));
    },
    [dispatch],
  );

  return (
    <>
      <div className={styles.planningPageContainer}>
        <div className={styles.planForWeekContainer}>
          <h2 className={styles.planningTitle}>План на неделю:</h2>
          <p>17-24.08</p>
        </div>
        <PlanningPoints tasks={tasks} />
        {width > 579 && (
          <p className={styles.motivationalText}>
            Хочешь получить больше призов - добавь задачи :)
          </p>
        )}
        <NewTaskModal onAddTask={onAddTask} />
        <AddCustomTask />
      </div>
      <PlanningCards tasks={tasks} />
    </>
  );
};

export default PlanningPage;
