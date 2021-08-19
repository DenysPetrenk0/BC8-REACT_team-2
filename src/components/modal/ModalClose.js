import React from 'react';
import closeIcon from './closeIcon.svg';
import styles from './ModalClose.module.css';

const ModalClose = ({ onClose }) => {
  return (
    <button type="button" className={styles.closeButton} onClick={onClose}>
      <svg className={styles.closeIcon} width="18" height="18">
        <use href={closeIcon + '#icon-close'}></use>
      </svg>
    </button>
  );
};

export default ModalClose;
