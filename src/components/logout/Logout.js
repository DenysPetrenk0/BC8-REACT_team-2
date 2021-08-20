import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import s from './Logout.module.css';

const Logout = ( {onClose}) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        // console.log(`hello`);
        dispatch(logOut())};

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

