import {
  ADMIN_AUTH_ERROR,
  ADMIN_LOADED,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  adminToken: localStorage.getItem('adminToken'),
  isAuthenticated: false,
  loading: true,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        adminToken: payload.token,
      };
    case ADMIN_LOGIN_SUCCESS:
      localStorage.setItem('adminToken', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case ADMIN_AUTH_ERROR:
    case ADMIN_LOGOUT:
      // case ACCOUNT_DELETED:
      localStorage.removeItem('adminToken');
      return {
        ...state,
        adminToken: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
