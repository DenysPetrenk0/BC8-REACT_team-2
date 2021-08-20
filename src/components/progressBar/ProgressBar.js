import React from 'react';
import ProgressIndicator from './progressIndicator/ProgressIndicator';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.progressBarContainer}>
      <p className={styles.currentPointsTitle}>
        Заработано баллов
        <span className={styles.hideTitle}>&nbsp;за эту неделю</span>:
        <span className={styles.points}>8</span>
      </p>
      <p className={styles.commonPointsTitle}>
        Запланировано баллов на эту неделю:
        <span className={styles.points}>16</span>
      </p>
      <div className={styles.progressContainer}>
        <div className={styles.commonPoints}>
          <span className={styles.currentPoints}>8</span> / 16
        </div>
        <ProgressIndicator />
      </div>
    </div>
  );
};

export default ProgressBar;
