import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  currentDateInfo,
  getDaySelector,
} from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentDays.module.css';

const CurrentDays = () => {
  const date = useSelector(currentDateInfo);
  const day = useSelector(getDaySelector);
  const { t } = useTranslation();
  return (
    <div className={styles.tabsTasksInfo}>
      <p className={styles.tabsTasksTitle}>{t('My tasks')}</p>
      <p className={styles.tabsTasksText}>
        {day}, {date}
      </p>
    </div>
  );
};

export default CurrentDays;
