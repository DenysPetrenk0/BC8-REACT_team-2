import React from 'react';
import styles from './PlanningCards.module.css';
import sprite from './image/symbol-defs.svg';
import defaultImg from './image/calendar.webp';

const PlanningCards = ({ tasks }) => {
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
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
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
