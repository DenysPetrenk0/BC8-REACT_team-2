import axios from 'axios';
import {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
} from './awardsActions';

const fetchAwards = () => async dispatch => {
  dispatch(fetchAwardsRequest());
  try {
    const data = await axios.get('https://kidslikev1.herokuapp.com/gift', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWEiLCJzaWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWIiLCJpYXQiOjE2MjkyOTU1ODV9.dri2dzlsnubjeNl6DKWKQR87cVihgWaVRrfxODq5QI0`,
      },
    });
    // console.log(`data`, data.data.ruGifts);
    dispatch(fetchAwardsSuccess(data.data.ruGifts));
  } catch (error) {
    dispatch(fetchAwardsError(error.message));
  }
};

export default fetchAwards;
