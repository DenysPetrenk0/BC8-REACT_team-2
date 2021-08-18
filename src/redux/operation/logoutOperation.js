import axios from 'axios';
import actions from '../actions/index';


const API = "https://kidslikev1.herokuapp.com/api";

const refresh = async (res, refreshToken, dispatch) => {

  try {
      return await axios(res);
  } catch (error) {
      axios.defaults.headers.common.Authorization = `Bearer ` + refreshToken;
      const tokens = await axios
      .post(`${API}/token/token_refresh/`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
      if (tokens) {
          dispatch(actions.logout.loginUserSuccess(tokens));
      }
      res.headers.Authorization = `Bearer ` + tokens.accessToken;
      const result = await axios(res);
      return result;
     
  }
};

const unsetAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = ' ';
};

const logout = () => (dispatch, getState) => {
    const {
      user: { accessToken: acToken, refreshToken },
    } = getState();
    if (!acToken) {
      return;
    }
    dispatch(actions.logout.logoutRequest());

    const url = `${API}/auth/logout`;
    refresh({
        method: 'delete',
        headers: {
          Authorization: 'Bearer ' + acToken,
        }, url,
    },
    refreshToken,
    dispatch,
    )
    .then(() => {
      unsetAuthToken();
      dispatch(actions.logout.logoutSuccess());
    })
    .catch((error) => (dispatch(actions.logout.logoutError(error.message))));
  }

// eslint-disable-next-line import/no-anonymous-default-export    
export default {
    logout,
};   