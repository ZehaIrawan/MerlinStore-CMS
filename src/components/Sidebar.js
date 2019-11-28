import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      Sidebar
      <Link to="/dashboard">
        <h2>Dashboard</h2>
      </Link>
      <Link to="/manage-products">
        <h2>Products</h2>
      </Link>
      <Link to="/msg">
        <h2>Messages</h2>
      </Link>
      <Link to="/payment">
        <h2>Payment</h2>
      </Link>
    </div>
  );
};
