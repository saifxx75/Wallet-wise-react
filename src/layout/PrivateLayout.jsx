import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../css/privatelayout.css'

const PrivateLayout = () => {
  const isAuthenticated = localStorage.getItem('bearerToken') !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="private-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;

