import styles from './PlanningPoints.module.css';
import useWindowDimensions from '../../pages/planning/hooks/widthHook';

const PlanningPoints = ({ tasks }) => {
  const { width } = useWindowDimensions();
  let sum = 0;
  tasks.map(task => (sum = sum + task.reward));
  return (
    <div className={styles.pointsContainer}>
      <p className={styles.points}>
        {width > 579 && 'Определены задачи на'}
        <span className={styles.sumPoints}>{sum}</span>
        {sum === 1 && 'бал'}
        {sum > 1 && sum < 5 && sum > 21 && 'балла'}
        {sum >= 5 && 'баллов'}
        {sum === 0 && 'баллов'}
      </p>
    </div>
  );
};

export default PlanningPoints;
