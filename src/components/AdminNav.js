import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/adminAuth';


const AdminNav = ({ adminAuth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link to="/manage-products">
        <h2>Products</h2>
      </Link>

      <Link to="/logout">
        <h2 onClick={logout}>Logout</h2>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/admin">
        <h2>Login</h2>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
    <nav>
      <h1>
        <Link to="/">
          <h1>MerlinStore CMS</h1>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
    </Fragment>
  );
};

AdminNav.propTypes = {
  logout: PropTypes.func.isRequired,
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  adminAuth: state.adminAuth,
});

export default connect(
  mapStateToProps,
  { logout },
)(AdminNav);
