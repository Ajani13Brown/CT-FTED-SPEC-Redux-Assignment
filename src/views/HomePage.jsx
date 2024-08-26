import React, { useState, useEffect } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import ProductCatalog from '../components/ProductCatalog';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const cartCount = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const categories = await response.json();
        setCategories(categories);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Container>
      <p>Current Cart Count: {cartCount}</p>
      <Link to={'/shoppingCart'}>
        <Button>Go to Cart</Button>
      </Link>
      <ListGroup>
        {categories.map((category, index) => (
          <ListGroup.Item key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ProductCatalog/>
    </Container>
  );
};

export default HomePage;
