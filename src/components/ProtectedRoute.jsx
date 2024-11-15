// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { userName } = useUser();
console.log('userName', userName);
  if (!userName) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
