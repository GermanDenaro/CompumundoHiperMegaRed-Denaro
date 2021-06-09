import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Trash from '@material-ui/icons/DeleteForever';

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

        <div class="container mt-5 mb-5 bg-light rounded rounded-large">
          <div class="d-flex justify-content-center row">
            <div class="col-md-12">
              <div class="my-4 text-center">
                <h4>Carrito</h4>
              </div>
              {context.cart.map((item) => (
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                  <div class="mr-1 cart-product-w">
                    <img
                      class="rounded img-product-cart"
                      src={item.pictureUrl}
                      width="70"
                      height="80"
                    />
                  </div>
                  <div class="d-flex flex-column align-items-center product-details cart-product-w">
                    <span class="font-weight-bold text-center">
                      {item.title}
                    </span>
                  </div>
                  <div class="d-flex flex-row align-items-center qty cart-product-w justify-content-center">
                    <h5 class="text-grey mt-1 mr-1 ml-1">
                      Cantidad: {item.quantity}
                    </h5>
                  </div>
                  <div>
                    <h5 className="mt-2 cart-price cart-product-w text-center">
                      <AttachMoneyIcon
                        fontSize="medium"
                        className="dollar-icon-cart"
                      />
                      {item.price * item.quantity}
                    </h5>
                  </div>
                  <div class="d-flex align-items-center">
                    <button
                      className="btn"
                      type="submit"
                      onClick={() => context.removeItem(item.id)}
                    >
                      <Trash className="text-danger" />
                    </button>
                  </div>
                </div>
              ))}
              <div class="align-items-center mt-3 p-2 rounded">
                <p className="text-center bg-white py-2 cart-total-price">
                  Precio total:
                  <AttachMoneyIcon
                    fontSize="small"
                    className="dollar-icon-cart"
                  />
                  <strong>{context.cartTotal}</strong>
                </p>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                  <button class="btn btn-block btn-info" type="submit">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
