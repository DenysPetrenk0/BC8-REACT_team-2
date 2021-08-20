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

export const getCardsInfo = state => state.weekInfo?.info?.tasks || [];
export const getFilterSelector = state => state.weekInfo.filter;

export const getVisibleTasks = createSelector(
  [getCardsInfo, getFilterSelector],
  (tasks, filter) => {
    return tasks.filter(
      ({ days }) => days.some(({ date, isActive }) => date === filter), // добавить isActive &&
    );
  },
);

export const getCardsTotalPoints = createSelector(getCardsInfo, tasks => {
  return tasks.reduce((acc, task) => {
    return acc + task.reward * task.days.filter(day => day.isActive).length;
  }, 0);
});

export const getCardsCompletedPoints = createSelector(getCardsInfo, tasks => {
  return tasks.reduce((acc, task) => {
    return (
      acc +
      task.reward *
        task.days.filter(day => day.isActive && day.isCompleted).length
    );
  }, 0);
});
