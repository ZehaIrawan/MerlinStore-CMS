import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


const Product = ({ title, price, description, img, }) => {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title,
      price,
      description,
      img,
      quantity: 1,
    };
  };

  return (
    <div className="product">
      <h2>{title}</h2>
      <img className="product-img" src={img} alt="" />
      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
};


export default connect(null,{ })(Product);
