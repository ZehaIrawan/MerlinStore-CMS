import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts,deleteProduct } from '../redux/actions/product';
import AdminNav from './AdminNav';
import Footer from './Footer';
import useModal from './modals/useModal';
import Product from './Product';
import Modal from './modals/Modal';

const ManageProducts = ({ getProducts, loading, products,deleteProduct }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const { isShowing, toggle } = useModal();

  if (loading) {
    return (
      <Fragment>
         <AdminNav />
        <p>Loading ...</p>
        <Footer />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <AdminNav />
      <button onClick={toggle}>Add Book</button>
      <Modal isShowing={isShowing} hide={toggle} />

      <div className="product-container">
        {products.products.map(product => (
          <Product
            key={product._id}
            title={product.title}
            img={product.img}
            description={product.description}
            price={product.price}
            deleteProduct={deleteProduct}
            id={product._id}
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  loading: state.products.loading,
});

export default connect(
  mapStateToProps,
  {
    getProducts,deleteProduct
  },
)(ManageProducts);
