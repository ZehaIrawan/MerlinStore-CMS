import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Footer from './components/Footer';
import ManageProducts from './components/ManageProducts';
import AdminRoutes from './components/routing/AdminRoutes';
import setAdminToken from './components/utils/setAdminToken';
import { loadAdmin } from './redux/actions/adminAuth';
import store from './redux/store';
import AdminNav from './components/AdminNav';

if (localStorage.adminToken) {
  setAdminToken(localStorage.adminToken);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Admin} />
            <Route exact path="/admin" component={Admin} />
            <AdminRoutes
              exact
              path="/manage-products"
              component={ManageProducts}
            />
            <AdminNav />
            <Footer />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
