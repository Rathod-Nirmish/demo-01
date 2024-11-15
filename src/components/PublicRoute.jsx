import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const authToken = localStorage.getItem('authToken');
  
  return authToken ? <Navigate to="/home" replace /> : element;
};

export default PublicRoute;
