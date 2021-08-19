import React from 'react';
// import closeIcon from './closeIcon.svg';
import styles from './ModalClose.module.css';

const ModalClose = ({ onClose }) => {
  return (
    <button type="button" className={styles.closeButton} onClick={onClose}>
      {/* <svg className={styles.closeIcon} width="24" height="24" fill="#000">
        <use href={closeIcon + '#icon-close'}></use>
      </svg> */}
      X
    </button>
  );
};

export default ModalClose;
