import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import s from './Logout.module.css';

const Logout = ( {onClose, onLogout}) => {
    return (
        <>
        <div className={s.logoutContainer}>
            <p className={s.logoutText}>Вы точно хотите выйти?</p>
        <button className={s.logoutBtn} onClick={onLogout}>
            Да
        </button>
        <button className={s.logoutBtn} onClick={onClose}>
            Нет
        </button>
        </div>
        </>
    );
}

export default connect(null, { onLogout: logOut })(Logout);

