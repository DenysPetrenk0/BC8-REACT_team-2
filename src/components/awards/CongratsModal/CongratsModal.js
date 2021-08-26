import React, { useContext } from 'react';
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
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const CongratsModal = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const awards = useSelector(getAllAwards);
  const selectedAwardsId = useSelector(getGiftIds);

  const congratsAwards = awards.filter(({ id }) =>
    selectedAwardsId.includes(id),
  );

  return (
    <Modal onClose={onClose}>
      <ModalClose onClose={onClose} />
      <div
        className={cx(
          styles.CongratsModal__Wrapper,
          styles[theme.colors.modalBg],
        )}
      >
        <img
          className={styles.CongratsModal__CatImage}
          src={catImage}
          alt="cat"
        />
        <h3
          className={cx(styles.CongratsModal__Title, styles[theme.colors.text])}
        >
          {t('Congratulations You get')}
        </h3>
        <ul className={styles.CongratsModal__List}>
          {congratsAwards.map(award => (
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
