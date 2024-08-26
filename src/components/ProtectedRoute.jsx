import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = sessionStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return token ? element : null;
};

export default ProtectedRoute;
