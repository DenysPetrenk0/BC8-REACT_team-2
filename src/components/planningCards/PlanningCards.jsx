import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PlanningCards.module.css';
import sprite from './image/symbol-defs.svg';
import defaultImg from './image/calendar.webp';
import dataDays from './dataDays.json';
import { patchActiveTask } from '../../redux/tasks/tasksOperation';

const initialState = {
  isVisible: false,
};

const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const PlanningCards = ({ tasks }) => {
  const [state, setstate] = useState(initialState);
  const [days, setDays] = useState(dataDays);
  const dispatch = useDispatch();

  const toggleVisible = e => {
    setstate(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  const onHandleChange = e => {
    const { name } = e.target;
    setDays(
      days.map(day =>
        day.date === name ? { ...day, isActive: !day.isActive } : day,
      ),
    );
  };

  const onAddActiveTask = useCallback(
    (taskId, dataObj) => {
      dispatch(patchActiveTask(taskId, dataObj));
    },
    [dispatch],
  );

  const onHandleSubmit = e => {
    const taskId = e.target.id;
    console.log('~ taskId', taskId);

    console.log('~ на эвенте taskId', e.target.id);
    const data = days.map(day => day.isActive);
    const dataObj = { days: data };
    console.log('~ dataObj', dataObj);
    toggleVisible();
    onAddActiveTask(taskId, dataObj);
  };

  return (
    <div className={styles.cartContainer}>
      {tasks.length > 0 ? (
        <ul className={styles.cardList}>
          {tasks.map(task => (
            <li className={styles.cardItem} key={task.id}>
              <img
                className={styles.cardImg}
                src={task.imageUrl}
                alt={task.title}
              />
              <div className={styles.cadrFooter}>
                <div>
                  <p className={styles.cardName}>{task.title}</p>
                  <p className={styles.cardReward}>{task.reward} балла</p>
                </div>
                {state.isVisible ? (
                  <button
                    className={styles.buttonOk}
                    onClick={onHandleSubmit}
                    type="submit"
                    id={task.id}
                  >
                    <svg className={styles.okIcon} width="12" height="12">
                      <use href={sprite + '#icon-ok'}></use>
                    </svg>
                  </button>
                ) : (
                  <button
                    className={styles.buttonPluse}
                    onClick={toggleVisible}
                    type="button"
                  >
                    <svg className={styles.plusIcon} width="12" height="12">
                      <use href={sprite + '#icon-plus'}></use>
                    </svg>
                  </button>
                )}
              </div>
              {state.isVisible && (
                <ul className={styles.daysCheckbox}>
                  {days.map((day, idx) => (
                    <li className={styles.daysCheckboxItem} key={day.date}>
                      <label key={day.value} className={styles.checkboxLabel}>
                        <input
                          name={day.date}
                          type="checkbox"
                          checked={day.isActive}
                          onChange={onHandleChange}
                          className={styles.checkboxInput}
                        />
                        {daysName[idx]}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </li>
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

/* <button className={styles.buttonOk} type="button">
              <svg className={styles.okIcon} width="12" height="12">
                <use href={sprite + '#icon-ok'}></use>
              </svg>
            </button> */

/* <form>
              {days.map(day => (
                <li key={day.id}>
                  <input
                    name={day.name}
                    type="checkbox"
                    value={day.value}
                    checked={day.checked}
                    onChange={onHandleChange}
                  />
                  <p>{day.value}</p>
                </li>
              ))}
            </form> */

// const [days, setDays] = useState();

// const onHandleChange = e => {
//   days.forEach(day => {
//     if (day.value === e.target.value) day.isChecked = e.target.checked;
//   });
//   setDays(days);
// };

// 280/262 размер 1 карточки
