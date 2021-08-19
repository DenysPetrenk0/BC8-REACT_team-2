import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  filterTabs,
  getWeekError,
  getWeekSuccess,
} from '../actions/weekActions';

const infoWeekReduser = createReducer([], {
  [getWeekSuccess]: (_, { payload }) => payload.week,
});

const errorWeekReduser = createReducer(null, {
  [getWeekError]: (_, { payload }) => payload,
});

const filterWeekTabs = createReducer('', {
  [filterTabs]: (_, { payload }) => payload,
});

const weekReducer = combineReducers({
  info: infoWeekReduser,
  error: errorWeekReduser,
  filter: filterWeekTabs,
});

export default weekReducer;
