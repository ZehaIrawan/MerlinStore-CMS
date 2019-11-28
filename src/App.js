import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import AdminNav from './components/AdminNav';
import { Dashboard } from './components/Dashboard';
import Footer from './components/Footer';
import Alert from './components/layout/Alert';
import ManageProducts from './components/ManageProducts';
import { Messages } from './components/Messages';
import { Payment } from './components/Payment';
import AdminRoutes from './components/routing/AdminRoutes';
import setAdminToken from './components/utils/setAdminToken';
import { loadAdmin } from './redux/actions/adminAuth';
import store from './redux/store';

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
          <Alert />
          <Switch>
            <Route exact path="/" component={Admin} />
            <Route exact path="/admin" component={Admin} />
            <AdminRoutes exact path="/dashboard" component={Dashboard} />
            <AdminRoutes exact path="/payment" component={Payment} />
            <AdminRoutes
              exact
              path="/manage-products"
              component={ManageProducts}
            />
            <AdminRoutes exact path="/msg" component={Messages} />
            <AdminNav />
            <Footer />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
