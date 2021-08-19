import { useState } from 'react';
import styles from '../PlanningCards.module.css';
import sprite from '../image/symbol-defs.svg';
import dataDays from '../dataDays.json';

const initialState = {
  isVisible: false,
};

const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const PlanningCardItem = ({ onAddActiveTask, task }) => {
  console.log('~ task', task);

  const [visible, setVisible] = useState(initialState);
  const [days, setDays] = useState(dataDays);

  const toggleVisible = e => {
    setVisible(({ isVisible }) => ({ isVisible: !isVisible }));
  };
  const onHandleChange = e => {
    const { name } = e.target;
    setDays(
      days.map(day =>
        day.date === name ? { ...day, isActive: !day.isActive } : day,
      ),
    );
  };

  const onHandleSubmit = e => {
    const taskId = task.id;
    const data = days.map(day => day.isActive);
    const dataObj = { days: data };
    toggleVisible();
    onAddActiveTask(taskId, dataObj);
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
  );
};

export default PlanningCardItem;
