import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../redux/actions/product';

const EditProductForm = ({ product, editProduct }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    img: product.img,
  });


  const { title, price, img, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    editProduct(product._id, formData);
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

      <button className="blue-button form-button bold" type="submit">
        Submit
      </button>
    </form>
  );
};

EditProductForm.propTypes = {
  editProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.products.products[0],
});

export default connect(
  mapStateToProps,
  { editProduct },
)(EditProductForm);
