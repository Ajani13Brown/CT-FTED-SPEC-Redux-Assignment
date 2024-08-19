import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItem, checkout, removeItem } from "../redux/cartSlice"

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart)
    const products = useSelector((state) => state.products.items)
    const dispatch = useDispatch()

    const handleAddItem = (id) => {
        dispatch(addItem({ id }))
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id }))
    }

    const handleCheckout = () => {
        dispatch(checkout())
    }

    const getProductName = (id) => {
        const product = products.find((product) => {
            console.log(product)
            return product.id === Number(id)
        })
        return product ? product.title : 'Unknown Product'
    }

  return (
    <Container>
        <h2>Shopping Cart</h2>
        <ListGroup>
                {(Object.entries(cart.items).map(([id, quantity], idx) => (
                    <ListGroupItem key={idx}>
                        <span>{getProductName(id)} - Quantity: {quantity}</span>
                        <div>
                            <Button variant="success" onClick={() => handleAddItem(id)}>+</Button>
                            <Button variant="danger" onClick={() => handleRemoveItem(id)}>-</Button>
                        </div>
                    </ListGroupItem>
                )))}
        </ListGroup>
        <Button onClick={handleCheckout}>Checkout</Button>
    </Container>
  )
}
export default ShoppingCart