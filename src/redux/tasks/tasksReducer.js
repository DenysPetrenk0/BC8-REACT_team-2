import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getUserInfoSuccess,
  loginSuccess,
  registerSuccess,
} from '../auth/authActions';
import {
  addBalanceTaskSuccess,
  createTaskSuccess,
  patchActiveTaskSuccess,
  createTaskError,
  patchActiveTaskError,
  addBalanceTaskError,
} from './tasksAction';

const tasksRequests = createReducer([], {
  [createTaskSuccess]: (state, action) => [action.payload, ...state],
  [registerSuccess]: (_, action) => action.payload.week.tasks,
  [loginSuccess]: (_, action) => action.payload.week.tasks,
  [getUserInfoSuccess]: (_, action) => action.payload.week.tasks,
  [patchActiveTaskSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.id) return payload;
      return item;
    }),
  [addBalanceTaskSuccess]: (state, { payload }) =>
    state.map(day => {
      if (day._id === payload.id) return payload.updatedTask.days;
      return day;
    }),
});

const error = createReducer(null, {
  [createTaskError]: (_, action) => action.payload,
  [patchActiveTaskError]: (_, action) => action.payload,
  [addBalanceTaskError]: (_, action) => action.payload,
});

const tasksReducer = combineReducers({
  tasksRequests,
  error,
});
export default tasksReducer;
