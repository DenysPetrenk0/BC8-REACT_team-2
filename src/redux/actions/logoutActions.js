import { createAction } from "@reduxjs/toolkit";

const loginUserRequest = createAction('user/login/request');
const loginUserSuccess = createAction('user/login/success');
const loginUserError = createAction('user/login/error');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    loginUserRequest,
    loginUserSuccess,
    loginUserError,
    logoutRequest,
    logoutSuccess,
    logoutError 
};