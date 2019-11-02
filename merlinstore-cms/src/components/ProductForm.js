import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/product';

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    img: '',
    dl:''
  });

  const { title, price, description, img,dl } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addProduct(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" id="titleLabel">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          onChange={e => onChange(e)}
          value={title}
          required
        />
      </label>
      <label htmlFor="price" id="priceLabel">
        Price:
        <input
          type="text"
          name="price"
          id="price"
          onChange={e => onChange(e)}
          value={price}
          required
        />
      </label>
      <label htmlFor="description" id="descriptionLabel">
        Description:
        <input
          type="text"
          name="description"
          onChange={e => onChange(e)}
          value={description}
          required
        />
      </label>

      <label htmlFor="img" id="imgLabel">
        Img url:
        <input
          type="text"
          name="img"
          onChange={e => onChange(e)}
          value={img}
          required
        />
      </label>

      <label htmlFor="Download" id="dl">
        Download url:
        <input
          type="text"
          name="dl"
          onChange={e => onChange(e)}
          value={dl}
          required
        />
      </label>

      <button className="blue-button form-button bold" type="submit">
        Add Product
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addProduct },
)(ProductForm);
