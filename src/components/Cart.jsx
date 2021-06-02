import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <div className="container mt-5">
      {context.cart < 1 ? (
        <div className="container text-center">
          <h1>No hay items en tu carrito</h1>
          <Link to="/">
            <Button className="btn btn-info mt-3" type="submit">
              Volver
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <Row>
            {context.cart.map((item) => (
              <Col
                md={2}
                className="text-center mb-4 border-bottom car-img-scale"
              >
                <Image
                  src={item.pictureUrl}
                  fluid
                  className="img-product-cart"
                />
                <p className="mt-2">{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>
                  Precio:{' '}
                  <AttachMoneyIcon
                    fontSize="small"
                    className="dollar-icon-cart"
                  />
                  {item.price * item.quantity}
                </p>
                <div>
                  <Button
                    className="btn btn-info mb-2 btn-eliminar"
                    type="submit"
                    onClick={() => context.removeItem(item.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center mb-3">
            <p>Total de items: {context.cartItems}</p>
            <p>
              Precio total:
              <AttachMoneyIcon fontSize="small" className="dollar-icon-cart" />
              {context.cartTotal}
            </p>
            <Link to="/checkout">
              <Button className="btn btn-info" type="submit">
                Ir al Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
