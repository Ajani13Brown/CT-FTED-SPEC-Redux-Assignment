import React from 'react';
import { Button, Modal } from 'react-bootstrap';
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
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Delete Account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default DeleteUser;
