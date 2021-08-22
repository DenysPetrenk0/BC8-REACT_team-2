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
import CurrentWeek from '../../components/currentInfo/currentWeek/CurrentWeek';
import Footer from '../../components/footer/Footer';

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
        <div className={styles.planningHeaderContainer}>
          <div className={styles.planForWeekContainer}>
            <h2 className={styles.planningTitle}>План на неделю:</h2>
            <CurrentWeek />
          </div>
          <PlanningPoints tasks={tasks} />
          <div className={styles.addTaskContainer}>
            {width > 579 && (
              <p className={styles.motivationalText}>
                Хочешь получить больше призов - добавь задачи :)
              </p>
            )}
            <div className={styles.modalContainer}>
              <NewTaskModal onAddTask={onAddTask} />
              <AddCustomTask />
            </div>
          </div>
        </div>
      </div>
      <PlanningCards tasks={tasks} />
      <Footer />
    </>
  );
};

export default PlanningPage;
