import React, { Component } from 'react';
import styles from './AwardsSubmitButton.module.css';

class AwardsSubmitButton extends Component {
  state = {
    showModal: false,
  };

  onHandleSubmit = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className={styles.AwardsSubmitButtonWrapper}>
        <button
          type="submit"
          className={styles.AwardsSubmitButton}
          onClick={this.onHandleSubmit}
        >
          Подтвердить
        </button>
      </div>
    );
  }
}

export default AwardsSubmitButton;
