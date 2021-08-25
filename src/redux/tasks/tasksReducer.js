import { createReducer } from '@reduxjs/toolkit';
import {
  getUserInfoSuccess,
  loginSuccess,
  registerSuccess,
} from '../auth/authActions';
// combineReducers,
import { addBalanceTaskSuccess, createTaskSuccess, patchActiveTaskSuccess } from './tasksAction';

const tasksReducer = createReducer([], {
  [createTaskSuccess]: (state, action) => [action.payload, ...state],
  [registerSuccess]: (_, action) => action.payload.week.tasks,
  [loginSuccess]: (_, action) => action.payload.week.tasks,
  [getUserInfoSuccess]: (_, action) => action.payload.week.tasks,
  [patchActiveTaskSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.id) return payload;
      return item;
    }),
    [addBalanceTaskSuccess]: (state, {payload}) => 
    state.map(day => {
      if (day._id === payload.id) return payload.updatedTask.days;
      return day;
    })
});

export default tasksReducer;
