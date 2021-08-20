import React, { Component } from 'react';
import Logout from '../logout/Logout';
import Modal from '../modal/Modal';
import exitButton from './exit.svg';
// import selectors from '../../redux/selectors/index';
import { connect } from 'react-redux';
import s from './UserInfo.module.css';
import { getUserEmail } from '../../redux/auth/authSelectors';

class UserInfo extends Component {
  state = {
    isRenderModal: false,
  };

  handleCloseModal = e => {
    this.setState({ isRenderModal: false });
  };

  handleOpenModal = e => {
    this.setState({ isRenderModal: true });
  };

  render() {
    const { isRenderModal } = this.state;
    const { email } = this.props;
    return (
      <>
        <div className={s.userInfoContainer}>
          <p className={s.userName}>{email}</p>
          <button onClick={this.handleOpenModal} className={s.userInfoBtn}>
            <svg className={s.exit}>
              <use href={exitButton + '#exit'} />
            </svg>
          </button>

          {isRenderModal && (
            <Modal onClose={this.handleCloseModal}>
              <Logout onClose={this.handleCloseModal} />
            </Modal>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

export default connect(mapStateToProps)(UserInfo);
