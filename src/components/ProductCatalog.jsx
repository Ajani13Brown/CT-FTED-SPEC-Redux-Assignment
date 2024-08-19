import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { addItem } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';

const ProductCatalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productsStatus = useSelector((state) => state.products.status);
    const productsError = useSelector((state) => state.products.error);

    useEffect(() => {
      if (productsStatus === 'idle') {
        dispatch(fetchProducts());
      }
    }, [productsStatus, dispatch]);

    const handleAddToCart = (id) => {
        dispatch(addItem({ id }));
    };

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: '20px' }}
            />
            <div>
                {filteredProducts.map((product, idx) => (
                    <Card key={idx} style={{ width: '18rem', marginTop: '10px' }}>
                        <Card.Body>
                            <img className='w-100' src={product.image} alt={product.title}/>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            <Button variant="warning" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default ProductCatalog;
