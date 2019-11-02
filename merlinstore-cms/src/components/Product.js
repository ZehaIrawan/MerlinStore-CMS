import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../redux/actions/product';
import EditModal from './modals/EditModal';
import useEditModal from './modals/useEditModal';

const Product = ({
  title,
  price,
  description,
  img,
  deleteProduct,
  editProduct,
  id,
  dl,
}) => {
  const { isEditing, toggleEdit } = useEditModal();

  const formData = {
    id,
    title,
    description,
    img,
    dl,
    price,
  };

  const editThisPorduct = () => {
    editProduct(formData);
    toggleEdit();
  };

  return (
    <Fragment>
      <EditModal isEditing={isEditing} hideEdit={toggleEdit} />
      <div className="product">
        <h2>{title}</h2>
        <img className="product-img" src={img} alt="" />
        <p>{description}</p>
        <h3>${price}</h3>
        <h2>{dl}</h2>
        <button
          className="action-button"
          type="button"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          Remove
        </button>

        <button className="action-button " type="button" onClick={editThisPorduct}>
          Edit
        </button>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  dl: PropTypes.string.isRequired,
};

Product.propTypes = {
  editProduct: PropTypes.func.isRequired,
};

export default connect(
  null,
  { editProduct },
)(Product);
