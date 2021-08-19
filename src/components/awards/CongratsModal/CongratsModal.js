import React from 'react';
import Modal from '../../modal/Modal';
import ModalClose from '../../modal/ModalClose';
import styles from './CongratsModal.module.css';

const CongratsModal = ({ onClose }) => {
  return (
    <Modal onClose={() => {}}>
      <ModalClose onClose={() => {}} />
      <div className={styles.CongratsModal__Wrapper}>
        <h3 className={styles.CongratsModal__Title}>
          Поздравляем! Ты получаешь:
        </h3>
        <div>
          <image className={styles.CongratsModal__Image} src="" />
          <p className={styles.CongratsModal__Text}></p>
        </div>
      </div>
    </Modal>
  );
};

export default CongratsModal;
