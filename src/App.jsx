import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateUser from './views/CreateUser';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Product from './views/Product';
import ShoppingCart from './views/ShoppingCart';
import UpdateUser from './views/UpdateUser';
import DeleteUser from './views/DeleteUser';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shoppingCart" element={<ProtectedRoute element={<ShoppingCart />} />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/updateUser" element={<ProtectedRoute element={<UpdateUser />} />} />
      <Route path="/deleteUser" element={<ProtectedRoute element={<DeleteUser />} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
