import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../modal/Modal';
import ModalClose from '../../modal/ModalClose';
import styles from './CongratsModal.module.css';
import catImage from '../../../images/catModal.png';
import { useSelector } from 'react-redux';
import {
  getAllAwards,
  getGiftIds,
} from '../../../redux/awards/awardsSelectors';

const CongratsModal = ({ onClose }) => {
  const { t } = useTranslation();
  const awards = useSelector(getAllAwards);
  const selectedAwardsId = useSelector(getGiftIds);
  console.log(`selectedAwardsId`, selectedAwardsId);

  const congratsAwards = awards.filter(({ id }) =>
    selectedAwardsId.includes(id),
  );

  return (
    <Modal onClose={onClose}>
      <ModalClose onClose={onClose} />
      <div className={styles.CongratsModal__Wrapper}>
        <img
          className={styles.CongratsModal__CatImage}
          src={catImage}
          alt="cat"
        />
        <h3 className={styles.CongratsModal__Title}>
          {t('Congratulations You get')}
        </h3>
        <ul className={styles.CongratsModal__List}>
          {console.log(`congratsAwards`, congratsAwards)}
          {congratsAwards.map(award => (
            // award => console.log(`award`, award)
            <li className={styles.CongratsModal__ListItem} key={award.id}>
              <img
                className={styles.CongratsModal__Image}
                src={award.imageUrl}
                alt={award.title}
              />
              <p className={styles.CongratsModal__Text}>{award.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default CongratsModal;
