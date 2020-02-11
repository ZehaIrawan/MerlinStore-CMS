import React from 'react';
import AdminNav from './AdminNav';
import Footer from './Footer';
import { Sidebar } from './Sidebar';

export const Messages = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <AdminNav />
        <h2>Messages</h2>
        <Footer />
      </div>
    </div>
  );
};
