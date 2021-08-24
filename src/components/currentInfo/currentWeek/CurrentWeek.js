import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { weekInfo } from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentWeek.module.css';

const CurrentWeek = () => {
  const { dates, month } = useSelector(weekInfo);
  const { t } = useTranslation();
  return (
    <div className={styles.tabsInfo}>
      <p className={styles.tabsWeekInfo}>
        {dates && month ? (
          <>
            {t('Week')} {dates} {t(month)}
          </>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};

export default CurrentWeek;
