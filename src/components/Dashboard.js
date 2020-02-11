import React from 'react';
import AdminNav from './AdminNav';
import Footer from './Footer';
import { Sidebar } from './Sidebar';

export const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <AdminNav />
        <h2>Dashboard</h2>
        <Footer />
      </div>
    </div>
  );
};
