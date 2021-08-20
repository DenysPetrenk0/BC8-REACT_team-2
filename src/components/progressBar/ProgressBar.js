import React from 'react';
import ProgressIndicator from './progressIndicator/ProgressIndicator';
import styles from './ProgressBar.module.css';
import { useSelector } from 'react-redux';
import {
  getCardsTotalPoints,
  getCardsCompletedPoints,
} from '../../redux/weekTabs/weekSelectors';

const ProgressBar = () => {
  const rewardsPlanned = useSelector(getCardsTotalPoints);
  const rewardsGained = useSelector(getCardsCompletedPoints);

  const currentProgress =
    rewardsPlanned && rewardsGained
      ? Math.floor((rewardsGained / rewardsPlanned) * 100)
      : 0;
  const progress = Math.min(currentProgress, 100);

  return (
    <div className={styles.progressBarContainer}>
      <p className={styles.currentPointsTitle}>
        Заработано баллов
        <span className={styles.hideTitle}>&nbsp;за эту неделю</span>:
        <span className={styles.points}>{rewardsGained}</span>
      </p>
      <p className={styles.commonPointsTitle}>
        Запланировано баллов на эту неделю:
        <span className={styles.points}>{rewardsPlanned}</span>
      </p>
      <div className={styles.progressContainer}>
        <div className={styles.commonPoints}>
          <span className={styles.currentPoints}>{rewardsGained}</span> /{' '}
          {rewardsPlanned}
        </div>
        <ProgressIndicator progress={progress} />
      </div>
    </div>
  );
};

export default ProgressBar;
