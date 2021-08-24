import { useTranslation } from 'react-i18next';
import styles from './PlanningPoints.module.css';
import useWindowDimensions from '../../pages/planning/hooks/widthHook';

const PlanningPoints = ({ tasks }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  let sum = 0;
  tasks.map(task => (sum = sum + task.reward));
  return (
    <div className={styles.pointsContainer}>
      <p className={styles.points}>
        {width > 579 && t('Defined tasks')}
        <span className={styles.sumPoints}>{sum}</span>
        {sum === 1 && t('point1')}
        {sum > 1 && sum < 5 && sum > 21 && t('point')}
        {sum >= 5 && t('points')}
        {sum === 0 && t('points')}
      </p>
    </div>
  );
};

export default PlanningPoints;
