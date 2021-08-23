import React from 'react';
// import { useSelector } from 'react-redux';
// import { getCardsCompletedPoints } from '../../redux/weekTabs/weekSelectors';
import AwardsTitle from '../../components/awards/awardsTitle/AwardsTitle';
import AwardsList from '../../components/awards/awardsList/AwardsList';
import ProgressBar from '../../components/progressBar/ProgressBar';
import styles from './AwardsPage.module.css';

import useWindowDimensions from '../../pages/planning/hooks/wirthHook';

export default function AwardsPage() {
  // const completedPoints = useSelector(getCardsCompletedPoints);
  const { width } = useWindowDimensions();

  return (
    <>
      {width > 579 && (
        <div className="container">
          <div className={styles.AwardsTitleWrapper}>
            <AwardsTitle />
            <ProgressBar />
          </div>
          <AwardsList />
        </div>
      )}
      {width < 580 && (
        <div className="container">
          <AwardsTitle />
          <AwardsList />
          <ProgressBar />
        </div>
      )}
    </>
  );
}
