import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { FaEdit } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
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
        <img className="product-img" src={img} alt="" />
        <p>{title}</p>
        <p>`{description.substring(0, 100)}...`</p>
        <h3>${price}</h3>
        <p>{dl.substring(0, 25)}...</p>
        <button
          className="in-button"
          type="button"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          <GoX className="edit_delete_icon" />
        </button>

        <button className="in-button" type="button" onClick={editThisPorduct}>
          <FaEdit className="edit_delete_icon" />
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

export default connect(null, { editProduct })(Product);
