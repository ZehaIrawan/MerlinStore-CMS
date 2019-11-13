import { combineReducers } from 'redux';
import products from './products';
import adminAuth from './adminAuth'

export default combineReducers({
  products,
  adminAuth
});