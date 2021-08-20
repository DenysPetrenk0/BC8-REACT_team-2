import React, { useState } from 'react';
import Logout from '../logout/Logout';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import exitButton from './exit.svg';
// import { connect } from 'react-redux';
import s from './UserInfo.module.css';
import { getUserEmail } from '../../redux/auth/authSelectors';

// const initialState = {
//   isRenderModal: false,
// }
const UserInfo = () => {
const email = useSelector(getUserEmail);
const [state, setState] = useState(false);

  const handleCloseModal = ()  => {
    setState(false );
  };

  const handleOpenModal = () => {
      setState( true);
      };

  return (
    <>
        <div className={s.userInfoContainer}>
          <p className={s.userName}>{email}</p>
          <button onClick={handleOpenModal} className={s.userInfoBtn}>
            <svg className={s.exit}>
              <use href={exitButton + '#exit'} />
            </svg>
          </button>

          {state && (
            <Modal onClose={handleCloseModal}>
              <Logout onClose={handleCloseModal} />
            </Modal>
          )}
        </div>
      </>
  );
}

export default UserInfo;

// class UserInfo extends Component {
//   state = {
//     isRenderModal: false,
//   };

//   handleCloseModal = e => {
//     this.setState({ isRenderModal: false });
//   };

//   handleOpenModal = e => {
//     this.setState({ isRenderModal: true });
//   };

//   render() {
//     const { isRenderModal } = this.state;
//     const { email } = this.props;
//     return (
      
//     );
//   }
// }

// const mapStateToProps = state => ({
//   email: getUserEmail(state),
// });

// export default connect(mapStateToProps)(UserInfo);
