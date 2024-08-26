import React from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, checkout } from '../redux/cartSlice';

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();

    const handleAddItem = (id) => {
        dispatch(addItem({ id }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id }));
    };

    const handleCheckout = () => {
        dispatch(checkout());
        sessionStorage.removeItem('cartItems');
        alert('Checkout successful!');
    };

    const getProductName = (id) => {
        const product = products.find((product) => product.id === Number(id));
        return product ? product.title : 'Unknown Product';
    };

    const totalAmount = Object.values(cart.items).reduce((sum, quantity) => sum + quantity, 0);
    const totalPrice = Object.entries(cart.items).reduce((total, [id, quantity]) => {
        const product = products.find((product) => product.id === Number(id));
        return total + (product ? product.price * quantity : 0);
    }, 0);

    return (
        <Container>
            <h2>Shopping Cart</h2>
            <ListGroup>
                {Object.entries(cart.items).map(([id, quantity], idx) => (
                    <ListGroupItem key={idx}>
                        <span>{getProductName(id)} - Quantity: {quantity}</span>
                        <div>
                            <Button variant="success" onClick={() => handleAddItem(id)}>+</Button>
                            <Button variant="danger" onClick={() => handleRemoveItem(id)}>-</Button>
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h4>Total Items: {totalAmount}</h4>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            <Button onClick={handleCheckout}>Checkout</Button>
        </Container>
    );
};

export default ShoppingCart;
