import { useState, useMemo } from 'react';
import styles from '../PlanningCards.module.css';
import sprite from '../image/symbol-defs.svg';
import dataDays from '../dataDays.json';

const initialState = {
  isVisible: false,
};

const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const PlanningCardItem = ({ onAddActiveTask, task }) => {
  console.log('~ task', task);
  const daysActive = useMemo(
    () => task.days.map(itemDay => itemDay.isActive),
    [],
  );

  const [visible, setVisible] = useState(initialState.isVisible);
  const [checkDays, setCheckDays] = useState(daysActive);

  const toggleVisible = e => {
    setVisible(({ isVisible }) => ({ isVisible: !isVisible }));
  };
  const onHandleChange = index => {
    const newCheckDays = checkDays.map((day, idx) => {
      if (idx === index) {
        return !day;
      }
      return day;
    });
    setCheckDays(newCheckDays);
  };

  const onHandleSubmit = e => {
    const taskId = task._id;
    toggleVisible();
    onAddActiveTask(taskId, { days: checkDays });
  };
  return (
    <li className={styles.cardItem} key={task.id}>
      <img className={styles.cardImg} src={task.imageUrl} alt={task.title} />
      <div className={styles.cadrFooter}>
        <div>
          <p className={styles.cardName}>{task.title}</p>
          <p className={styles.cardReward}>{task.reward} балла</p>
        </div>
        {visible.isVisible ? (
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
      {visible.isVisible && (
        <ul className={styles.daysCheckbox}>
          {checkDays.map((isCheck, idx) => (
            <li className={styles.daysCheckboxItem} key={daysName[idx]}>
              <label className={styles.checkboxLabel}>
                <input
                  name={dataDays[idx].name}
                  type="checkbox"
                  checked={isCheck}
                  onChange={() => onHandleChange(idx)}
                  className={styles.checkboxInput}
                />
                {daysName[idx]}
              </label>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default PlanningCardItem;
