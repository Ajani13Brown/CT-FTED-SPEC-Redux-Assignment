import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('authToken');

  const handleDelete = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      if (!response.ok) throw new Error('Deletion failed');
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('user');
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="delete-user-container">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <button onClick={() => navigate('/')} style={{ marginRight: '10px' }}>Cancel</button>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
    </div>
  );
};

export default DeleteUser;

