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
import Footer from '../../components/footer/Footer';
import { weekInfo } from '../../redux/weekTabs/weekSelectors';

const PlanningPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const weekDate = useSelector(weekInfo);
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
      <div className="container">
        <div className={styles.planningPageContainer}>
          <div className={styles.planningHeaderContainer}>
            <div className={styles.planForWeekContainer}>
              <p className={styles.planningTitle}>План на неделю:</p>
              <h2 className={styles.planningWeek}>{weekDate}</h2>
            </div>
            {width > 579 && <PlanningPoints tasks={tasks} />}
            <div className={styles.addTaskContainer}>
              {width > 579 && (
                <p className={styles.motivationalText}>
                  Хочешь получить больше призов - добавь задачи :)
                </p>
              )}
              {width > 579 && (
                <>
                  <NewTaskModal onAddTask={onAddTask} />
                  <AddCustomTask />
                </>
              )}
            </div>
          </div>
        </div>
        <PlanningCards tasks={tasks} />
        <Footer />
      </div>

      {width < 580 && (
        <div className={styles.pointsMobileContainer}>
          <div className="container">
            <PlanningPoints tasks={tasks} />
            <NewTaskModal onAddTask={onAddTask} />
            <AddCustomTask />
          </div>
        </div>
      )}
    </>
  );
};

export default PlanningPage;
