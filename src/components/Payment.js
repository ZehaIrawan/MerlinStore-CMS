import React from 'react';
import AdminNav from './AdminNav';
import Footer from './Footer';
import { Sidebar } from './Sidebar';

export const Payment = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className="content">
        <AdminNav />
        <div className="content-wrap">
          <h2>Payment</h2>
        </div>

        <Footer />
      </div>
    </div>
  );
};
