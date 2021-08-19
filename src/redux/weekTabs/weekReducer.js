import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterTabs, getWeekError, getWeekSuccess } from './weekActions';

const currentDate = () => {
  const date = new Date();
  const padStart = num => String(num).padStart(2, '0');
  const year = date.getFullYear();
  const month = padStart(date.getMonth() + 1);
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

const infoWeekReduser = createReducer([], {
  [getWeekSuccess]: (_, { payload }) => payload.week,
});

const errorWeekReduser = createReducer(null, {
  [getWeekError]: (_, { payload }) => payload,
});

const filterWeekTabs = createReducer(currentDate(), {
  [filterTabs]: (_, { payload }) => payload,
});

const weekReducer = combineReducers({
  info: infoWeekReduser,
  error: errorWeekReduser,
  filter: filterWeekTabs,
});

export default weekReducer;
