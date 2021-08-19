import axios from 'axios';
import {
  getWeekError,
  getWeekRequest,
  getWeekSuccess,
} from '../actions/weekActions';

axios.defaults.baseURL = 'https://kidslikev1.herokuapp.com';
const baseToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkNWNiMzgyZTljNjAwMTcxMmIxOWQiLCJzaWQiOiI2MTFkNWNiMzgyZTljNjAwMTcxMmIxOWUiLCJpYXQiOjE2MjkzMTQyMjd9.wrHrO1h-7Lwa3-FV2hpIMIdPagqGR1fcFjRi2CxuKF8';

export const getWeekOperation = () => async dispatch => {
  dispatch(getWeekRequest());
  try {
    const { data } = await axios.get('/user/info', {
      headers: { Authorization: `Bearer ${baseToken}` },
    });
    dispatch(getWeekSuccess(data));
  } catch (error) {
    dispatch(getWeekError(error.message));
  }
};
