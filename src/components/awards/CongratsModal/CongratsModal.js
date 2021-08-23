import React from 'react';
import Modal from '../../modal/Modal';
import ModalClose from '../../modal/ModalClose';
import styles from './CongratsModal.module.css';
import catImage from '../../../images/catModal.png';
import { useSelector } from 'react-redux';
import { getAllAwards } from '../../../redux/awards/awardsSelectors';

const CongratsModal = ({ onClose }) => {
  const awards = useSelector(getAllAwards);
  // console.log(`awards`, awards);
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
          Поздравляем! Ты получаешь:
        </h3>
        <ul className={styles.CongratsModal__List}>
          {awards.map(award => (
            <li className={styles.CongratsModal__ListItem} key={award.id}>
              <image
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
