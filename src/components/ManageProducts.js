import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteProduct, getProducts } from '../redux/actions/product';
import AdminNav from './AdminNav';
import Footer from './Footer';
import Modal from './modals/Modal';
import useModal from './modals/useModal';
import Product from './Product';

const ManageProducts = ({ getProducts, loading, products, deleteProduct }) => {
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
      <button className="theme-button" onClick={toggle}>
        +Add Product
      </button>
      <Modal isShowing={isShowing} hide={toggle} />

      <div className="product-container">
      <Product
            key={12}
            title={'Title'}
            img={'Image'}
            description={'Description'}
            price={'Price'}
            deleteProduct={deleteProduct}
            dl={'Download Link'}
          />
        {products.products.map(product => (
          <Product
            key={product._id}
            title={product.title}
            img={product.img}
            description={product.description}
            price={product.price}
            deleteProduct={deleteProduct}
            id={product._id}
            dl={product.dl}
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

export default connect(mapStateToProps, {
  getProducts,
  deleteProduct,
})(ManageProducts);
