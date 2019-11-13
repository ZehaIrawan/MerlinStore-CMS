import axios from 'axios';
import setAdminToken from '../../components/utils/setAdminToken';
import { setAlert } from './alert';
import {
  ADMIN_AUTH_ERROR,
  ADMIN_LOADED,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from './types';

// Load User
export const loadAdmin = () => async dispatch => {
  if (localStorage.adminToken) {
    setAdminToken(localStorage.adminToken);
  }
  try {
    const res = await axios.get('/api/admin');

    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_AUTH_ERROR,
    });
  }
};

export const adminLogin = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/admin', body, config);

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadAdmin());
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    // dispatch({
    //   type: LOGIN_FAIL,
    // });
    console.log(errors);
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: ADMIN_LOGOUT });
};
