import React from 'react';
// import { connect } from 'react-redux';
// import operations from '../../redux/operation/index';
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

export default Logout;

// connect(null, { onLogout: operations.logout.logout})