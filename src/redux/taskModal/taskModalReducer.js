import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { showTaskModal, hideTaskModal } from './taskModalAction';

const visible = createReducer(false, {
  [showTaskModal]: () => true,
  [hideTaskModal]: () => false,
});

export default combineReducers({ visible });
