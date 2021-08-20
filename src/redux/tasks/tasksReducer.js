import { createReducer } from '@reduxjs/toolkit';
import {
  getUserInfoSuccess,
  loginSuccess,
  registerSuccess,
} from '../auth/authActions';
// combineReducers,
import { createTaskSuccess, patchActiveTaskSuccess } from './tasksAction';

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
});

export default tasksReducer;
