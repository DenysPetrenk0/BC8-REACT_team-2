import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Planning.module.css';
import { getTasks } from '../../redux/tasks/tasksSelector';
import { addTask } from '../../redux/tasks/tasksOperation';
import PlanningPoints from '../../components/planningPoints/PlanningPoints';
import PlanningCards from '../../components/planningCards/PlanningCards';
import { useSelector } from 'react-redux';
import FormTest from './FormTest';

const PlanningPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  // create task for form
  const onAddTask = useCallback(
    ({ title, reward, imageUrl }) => {
      dispatch(addTask(title, reward, imageUrl));
    },
    [dispatch],
  );

  // get tasks
  // только активные или все таски?
  // const tasks = useSelector(getActiveTask);
  return (
    <>
      <div>
        <h2 className={styles.planningTitle}>План на неделю:</h2>
        <div>
          <p>17-24.08</p>
        </div>
        <PlanningPoints />
        <FormTest onAddTask={onAddTask} />
      </div>
      <PlanningCards tasks={tasks} />
      {/*<NewTaskModal onAddTask={onAddTask}/>
      <AddCustomTask /> */}
    </>
  );
};

export default PlanningPage;
