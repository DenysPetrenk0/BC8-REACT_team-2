import { useState } from 'react';
import styles from './PlanningCards.module.css';
import sprite from './image/symbol-defs.svg';
import defaultImg from './image/calendar.webp';

const PlanningCards = ({ tasks }) => {
  const [days, setDays] = useState();

  const onHandleChange = e => {
    days.forEach(day => {
      if (day.value === e.target.value) day.isChecked = e.target.checked;
    });
    setDays(days);
  };
  return (
    <div className={styles.cartContainer}>
      <ul className={styles.cardList}>
        {/* {tasks.map(task => (
            const {imageUrl, title, reward} = task;
          <li className={styles.cardItem}>
            <img className={styles.cardImg} src={imageUrl} alt={title} />
            <p>{title}</p>
            <p>{reward} балла</p>
          </li>
        ))} */}
        <li className={styles.cardItem}>
          <img
            className={styles.cardImg}
            src={defaultImg}
            alt="полезные привычки"
          />
          <div className={styles.cadrFooter}>
            <div>
              <p className={styles.cardName}>Застелить постель</p>
              <p className={styles.cardReward}>3 балла</p>
            </div>
            <button className={styles.buttonPluse} type="button">
              <svg className={styles.plusIcon} width="12" height="12">
                <use href={sprite + '#icon-plus'}></use>
              </svg>
            </button>
            {/* <button className={styles.buttonOk} type="button">
              <svg className={styles.okIcon} width="12" height="12">
                <use href={sprite + '#icon-ok'}></use>
              </svg>
            </button> */}
            {/* <form>
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
            </form> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PlanningCards;

PlanningCards.defaultProps = {
  imageUrl: defaultImg,
};

// 280/262 размер 1 карточки
