import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      Sidebar
      <Link to="/manage-products">
        <h2>Products</h2>
      </Link>
      <Link to="/msg">
        <h2>Messages</h2>
      </Link>
    </div>
  );
};
