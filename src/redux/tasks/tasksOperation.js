import axios from 'axios';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
} from './tasksAction';

const baseURL = 'https://kidslikev1.herokuapp.com';
const baseToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGQiLCJzaWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGUiLCJpYXQiOjE2MjkyOTQzMjd9.pOQBlPgoQLUz3RA-ywzNM1I-etuOhfGb8XHa-eajoHs';

export const addTask = (title, reward) => dispatch => {
  dispatch(createTaskRequest());
  const task = {
    title,
    reward,
  };
  axios
    .post(`${baseURL}/task`, task, {
      headers: { Authorization: `Bearer ${baseToken}` },
    })
    .then(({ data }) => dispatch(createTaskSuccess(data)))
    .catch(error => dispatch(createTaskError(error.message)));
};
