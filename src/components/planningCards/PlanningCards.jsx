import { useState } from 'react';
import styles from './PlanningCards.module.css';
import sprite from './image/symbol-defs.svg';
import defaultImg from './image/calendar.webp';
import dataDays from './dataDays.json';

const initialState = {
  isVisible: false,
};

const PlanningCards = ({ tasks }) => {
  const [state, setstate] = useState(initialState);

  const toggleVisible = e => {
    setstate(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  const onHandleChange = e => {
    console.log(e);
  };
  return (
    <div className={styles.cartContainer}>
      {tasks.length > 0 ? (
        <ul className={styles.cardList}>
          {tasks.map(task => (
            <li className={styles.cardItem}>
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
                <button
                  className={styles.buttonPluse}
                  onClick={toggleVisible}
                  type="button"
                >
                  {state.isVisible ? (
                    <svg className={styles.okIcon} width="12" height="12">
                      <use href={sprite + '#icon-ok'}></use>
                    </svg>
                  ) : (
                    <svg className={styles.plusIcon} width="12" height="12">
                      <use href={sprite + '#icon-plus'}></use>
                    </svg>
                  )}
                </button>
              </div>
              {state.isVisible && (
                <ul>
                  {dataDays.map(day => (
                    <li key={day.name}>
                      {day.name}
                      <label>
                        <input
                          name={day.name}
                          type="checkbox"
                          value={day.date}
                          checked={day.isChecked}
                          onChange={onHandleChange}
                        />
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
