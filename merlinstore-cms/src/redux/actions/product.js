import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
} from './types';

// Get PRODUGET_PRODUCTS
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/admin-product');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Product
export const addProduct = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/products', formData, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });

    dispatch(setAlert('Product Added', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete product
export const deleteProduct = id => async dispatch => {
  try {
    await axios.delete(`/api/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });

    dispatch(setAlert('Product Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit Product
export const editProduct = formData => async dispatch => {
  try {
    dispatch({
      type: EDIT_PRODUCT,
      payload: formData,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Product

export const updateProduct = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`/api/products/${id}`, formData, config);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });

    dispatch(setAlert('Product Edited', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
