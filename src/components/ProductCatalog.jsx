import { Container, Card, Button } from 'react-bootstrap';
import { addItem } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/productsSlice';

const ProductCatalog = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.items)
    const productsStatus = useSelector((state) => state.products.status)
    const productsError = useSelector((state) => state.products.error)

    console.log(products)

    useEffect(() => {
      if (productsStatus === 'idle') {
        dispatch(fetchProducts())
      }
    }, [productsStatus, dispatch])

    const handleAddToCart = (id) => {
        dispatch(addItem({id}))
    }

  return (
    <Container>
      <div>
        {products.map((product, idx) => (
          <Card key={idx} style={{ width: '18rem', marginTop: '10px' }}>
            <Card.Body>
              <img className='w-100' src={product.image}/>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                ${product.price}
              </Card.Text>
              <Button variant="warning" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};
export default ProductCatalog;