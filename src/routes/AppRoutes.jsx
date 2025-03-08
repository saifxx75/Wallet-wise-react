import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/signup';
import Home from '../pages/Home';
import Dashboard from '../components/Dashboard';
import Savings from '../pages/Savings';
import Profile from '../pages/Profile';
import PrivateLayout from '../layout/PrivateLayout';

const AppRoutes = () => {
  const isLogin = localStorage.getItem('token') !== null; // Check if token exists in local storage

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Private Routes (Require Authentication) */}
      <Route 
        path="/" 
        element={isLogin ? <PrivateLayout /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Home />} /> {/* Default Route */}
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="savings-tracker" element={<Savings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Fallback Route (Redirect unknown paths) */}
      <Route path="*" element={<Navigate to={isLogin ? "/" : "/login"} replace />} />
    </Routes>
  );
};

export default AppRoutes;

