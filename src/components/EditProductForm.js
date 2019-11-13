import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../redux/actions/product';

const EditProductForm = ({ product, updateProduct }) => {

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    img: product.img,
    dl: product.dl,
  });

  const { title, price, img, description, dl } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateProduct(product.id, formData);
  };

  return (
    <form className="popForm" onSubmit={handleSubmit}>
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
      <br />
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
      <br />
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
      <br />
      <label htmlFor="Download" id="DownloadLabel">
        Download url:
        <input
          type="text"
          name="dl"
          onChange={e => onChange(e)}
          value={dl}
          required
        />
      </label>
      <br />
      <br />
      <button className="theme-button" type="submit">
        Submit
      </button>
    </form>
  );
};

EditProductForm.propTypes = {
  updateProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.products.product[0],
});

export default connect(
  mapStateToProps,
  { updateProduct },
)(EditProductForm);
