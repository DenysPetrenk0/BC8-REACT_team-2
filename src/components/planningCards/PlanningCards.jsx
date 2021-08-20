import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PlanningCards.module.css';
import defaultImg from './image/calendar.webp';
import useWindowDimensions from '../../pages/planning/hooks/wirthHook';
import { patchActiveTask } from '../../redux/tasks/tasksOperation';
import PlanningCardItem from './planningCardItem/PlanningCardItem';
import PlanningPoints from '../planningPoints/PlanningPoints';

const PlanningCards = ({ tasks }) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const onAddActiveTask = useCallback(
    (taskId, dataObj) => {
      dispatch(patchActiveTask(taskId, dataObj));
    },
    [dispatch],
  );

  return (
    <div className={styles.cartContainer}>
      {tasks.length > 0 ? (
        <ul className={styles.cardList}>
          {tasks.map(task => (
            <PlanningCardItem onAddActiveTask={onAddActiveTask} task={task} />
          ))}
        </ul>
      ) : (
        <h2>Создайте свой список привычек</h2>
      )}
    </div>
  );
};

export default PlanningCards;

PlanningCards.defaultProps = {
  imageUrl: defaultImg,
};

// <li className={styles.cardItem} key={task.id}>
//               <img
//                 className={styles.cardImg}
//                 src={task.imageUrl}
//                 alt={task.title}
//               />
//               <div className={styles.cadrFooter}>
//                 <div>
//                   <p className={styles.cardName}>{task.title}</p>
//                   <p className={styles.cardReward}>{task.reward} балла</p>
//                 </div>
//                 {state.isVisible ? (
//                   <button
//                     className={styles.buttonOk}
//                     onClick={onHandleSubmit}
//                     type="submit"
//                     id={task.id}
//                   >
//                     <svg className={styles.okIcon} width="12" height="12">
//                       <use href={sprite + '#icon-ok'}></use>
//                     </svg>
//                   </button>
//                 ) : (
//                   <button
//                     className={styles.buttonPluse}
//                     onClick={toggleVisible}
//                     type="button"
//                   >
//                     <svg className={styles.plusIcon} width="12" height="12">
//                       <use href={sprite + '#icon-plus'}></use>
//                     </svg>
//                   </button>
//                 )}
//               </div>
//               {state.isVisible && (
//                 <ul className={styles.daysCheckbox}>
//                   {days.map((day, idx) => (
//                     <li className={styles.daysCheckboxItem} key={day.date}>
//                       <label key={day.value} className={styles.checkboxLabel}>
//                         <input
//                           name={day.date}
//                           type="checkbox"
//                           checked={day.isActive}
//                           onChange={onHandleChange}
//                           className={styles.checkboxInput}
//                         />
//                         {daysName[idx]}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
