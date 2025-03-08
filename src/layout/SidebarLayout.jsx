import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import '../css/sidebarlayout.css'
import { Outlet } from 'react-router-dom';

const SidebarLayout = ({ children }) => {
  return (
    <div className="sidebar-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      {/* <div className="content">{children}</div> */}
      </div>
    </div>
  );
};

export default SidebarLayout;
