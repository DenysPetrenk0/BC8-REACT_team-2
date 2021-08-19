import { createSelector } from '@reduxjs/toolkit';

export const getWeekDate = state => {
  const dateArray = [];
  const startDate = state.weekInfo.info.startWeekDate;
  const endDate = state.weekInfo.info.endWeekDate;
  const dateMove = new Date(startDate);
  let strDate = startDate;

  while (strDate < endDate) {
    strDate = dateMove.toISOString().slice(0, 10);
    dateArray.push(strDate);
    dateMove.setDate(dateMove.getDate() + 1);
  }

  return dateArray;
};

export const getCardsInfo = state => state.weekInfo.info.tasks;
const getFilter = state => state.weekInfo.filter;

export const getVisibleTasks = createSelector(
  [getCardsInfo, getFilter],
  (tasks, filter) => {
    return tasks.filter(task => task.days.date.includes(filter));
  },
);
