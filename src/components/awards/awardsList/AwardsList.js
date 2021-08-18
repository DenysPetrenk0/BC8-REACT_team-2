import React from 'react';
import awards from '../awardsOld.json';
import styles from './awardsList.module.css';

const AwardsList = () => {
  return (
    <div className={styles.Awards__Container}>
      <ul className={styles.Awards__List}>
        {awards.map(award => (
          <li className={styles.Awards__ListItem}>
            <img
              src={award.image}
              alt={award.title}
              className={styles.Awards__ListImage}
            />
            <div className={styles.Awards__ListFooter}>
              <h3 className={styles.Awards__ListName}>{award.title}</h3>
              <div className={styles.Awards__ListTextWrapper}>
                <p className={styles.Awards__ListText}>{award.price} БАЛЛОВ</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsList;
