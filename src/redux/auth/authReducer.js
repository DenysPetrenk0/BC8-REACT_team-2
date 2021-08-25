import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  registerError,
  getUserInfoSuccess,
  loginError,
  getUserInfoError,
  
} from './authActions';
import { addBalanceTaskSuccess } from '../tasks/tasksAction';

const initialUserState = {
  name: '',
  email: '',
  balance: 0,
  id: '',
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logoutSuccess]: () => initialUserState,
  [getUserInfoSuccess]: (_, action) => action.payload.user,
  [addBalanceTaskSuccess]: (state, {payload}) => {
    return {
      ...state, balance: payload.updatedBalance,
    }
  }
});

const token = createReducer(null, {
  [registerSuccess]: (_, action) => action.payload.token,
  [loginSuccess]: (_, action) => action.payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, action) => action.payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getUserInfoSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getUserInfoError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
