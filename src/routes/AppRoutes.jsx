import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Dashboard from '../components/Dashboard';
import Savings from '../pages/Savings';
import Profile from '../pages/Profile';
import PrivateLayout from '../layout/PrivateLayout';
import Landing from '../pages/Landing';
import Signup from '../pages/Signup';

const AppRoutes = () => {
  const isLogin = localStorage.getItem('bearerToken') !== null; // Check if token exists in local storage

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Landing />} /> {/* Default Route set to Landing */}

      {/* Private Routes (Require Authentication) */}
      <Route 
        path="/app" 
        element={isLogin ? <PrivateLayout /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Home />} /> {/* Default Route within PrivateLayout */}
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="savings-tracker" element={<Savings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Fallback Route (Redirect unknown paths) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

