import { Badge } from 'react-bootstrap';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const context = useContext(CartContext);

  return (
    <div>
      {context.cart.length === 0 ? (
        <button className="material-icons md-24 ml-4 btn-icon-cart">
          shopping_cart
        </button>
      ) : (
        <div className="d-flex align-items-center">
          <button
            // variant="warning"
            className="material-icons md-24 ml-4 btn-icon-cart"
          >
            shopping_cart
          </button>
          <Badge className="btn-icon-cart">{context.cartItems}</Badge>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
