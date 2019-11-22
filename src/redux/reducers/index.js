import { combineReducers } from 'redux';
import adminAuth from './adminAuth';
import alert from './alert';
import products from './products';

export default combineReducers({
  products,
  adminAuth,
  alert,
});
