import React from 'react';
import ProgressIndicator from './progressIndicator/ProgressIndicator';
import { useTranslation } from 'react-i18next';
import styles from './ProgressBar.module.css';
import { useSelector } from 'react-redux';
import {
  getCardsTotalPoints,
  getCardsCompletedPoints,
} from '../../redux/weekTabs/weekSelectors';

const ProgressBar = () => {
  const rewardsPlanned = useSelector(getCardsTotalPoints);
  const rewardsGained = useSelector(getCardsCompletedPoints);
  const { t } = useTranslation();

  const currentProgress =
    rewardsPlanned && rewardsGained
      ? Math.floor((rewardsGained / rewardsPlanned) * 100)
      : 0;
  const progress = Math.min(currentProgress, 100);

  return (
    <div className={styles.progressBarContainer}>
      <p className={styles.currentPointsTitle}>
        {t('Earned points')}
        <span className={styles.hideTitle}>&nbsp;{t('this week')}</span>:
        <span className={styles.points}>{rewardsGained}</span>
      </p>
      <p className={styles.commonPointsTitle}>
        {t('Total points this week')}
        <span className={styles.points}>{rewardsPlanned}</span>
      </p>
      <div className={styles.progressContainer}>
        <div className={styles.commonPoints}>
          <span className={styles.currentPoints}>{rewardsGained}</span> /
          {rewardsPlanned}
        </div>
        <ProgressIndicator progress={progress} />
      </div>
    </div>
  );
};

export default ProgressBar;
