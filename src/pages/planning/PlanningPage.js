import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './Planning.module.css';
import { getTasks } from '../../redux/tasks/tasksSelector';
import { addTask } from '../../redux/tasks/tasksOperation';
import PlanningPoints from '../../components/planningPoints/PlanningPoints';
import PlanningCards from '../../components/planningCards/PlanningCards';
import { useSelector } from 'react-redux';
import NewTaskModal from '../../components/taskModal/newTaskModal/NewTaskModal';
import AddCustomTask from '../../components/addCustomTask/AddCustomTask';
import useWindowDimensions from './hooks/widthHook';
import Footer from '../../components/footer/Footer';
import { weekInfo } from '../../redux/weekTabs/weekSelectors';
import { getWeekOperation } from '../../redux/weekTabs/weekOperation';

const PlanningPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const { dates, month } = useSelector(weekInfo);
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getWeekOperation());
  }, [dispatch]);

  // create task for form
  const onAddTask = useCallback(
    ({ title, reward, imageUrl }) => {
      dispatch(addTask(title, reward, imageUrl));
    },
    [dispatch],
  );
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className={styles.planningPageContainer}>
          <div className={styles.planningHeaderContainer}>
            <div className={styles.planForWeekContainer}>
              <p className={styles.planningTitle}>{t('Plan for the week')}</p>
              {dates && month ? (
                <h2 className={styles.planningWeek}>
                  {dates} {t(month)}
                </h2>
              ) : null}
            </div>
            {width > 579 && <PlanningPoints tasks={tasks} />}
            <div className={styles.addTaskContainer}>
              {width > 579 && (
                <p className={styles.motivationalText}>
                  {t('Want to get gifts add tasks')}
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
