// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = getCookie('token');
  const role = getCookie('role');

  if (!token || (requiredRole && role !== requiredRole)) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Función para obtener una cookie por su nombre
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default ProtectedRoute;