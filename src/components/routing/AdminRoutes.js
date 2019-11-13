import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AdminRoutes = ({
  component: Component,
  adminAuth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/admin" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

AdminRoutes.propTypes = {
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  adminAuth: state.adminAuth,
});

export default connect(mapStateToProps)(AdminRoutes);