import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Image, Row, Col } from 'react-bootstrap';
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
        // <div>
        //   <Row>
        //     {context.cart.map((item) => (
        //       <Col
        //         md={2}
        //         className="text-center mb-4 border-bottom car-img-scale"
        //       >
        //         <Image
        //           src={item.pictureUrl}
        //           fluid
        //           className="img-product-cart"
        //         />
        //         <p className="mt-2">{item.title}</p>
        //         <p>Cantidad: {item.quantity}</p>
        //         <p>
        //           Precio:{' '}
        //           <AttachMoneyIcon
        //             fontSize="small"
        //             className="dollar-icon-cart"
        //           />
        //           {item.price * item.quantity}
        //         </p>
        //         <div>
        //           <Button
        //             className="btn btn-info mb-2 btn-eliminar"
        //             type="submit"
        //             onClick={() => context.removeItem(item.id)}
        //           >
        //             Eliminar
        //           </Button>
        //         </div>
        //       </Col>
        //     ))}
        //   </Row>

        //   <div className="text-center mb-3">
        //     <p>Total de items: {context.cartItems}</p>
        //     <p>
        //       Precio total:
        //       <AttachMoneyIcon fontSize="small" className="dollar-icon-cart" />
        //       {context.cartTotal}
        //     </p>
        //     <Link to="/checkout">
        //       <Button className="btn btn-info" type="submit">
        //         Ir al Checkout
        //       </Button>
        //     </Link>
        //   </div>
        // </div>

        <div class="container mt-5 mb-5 bg-light">
          <div class="d-flex justify-content-center row">
            <div class="col-md-12">
              <div class="p-2">
                <h4>Shopping cart</h4>
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
                    <div class="d-flex flex-row product-desc">
                      <div class="size mr-1">
                        <span class="text-grey">Size:</span>
                        <span class="font-weight-bold">&nbsp;M</span>
                      </div>
                      <div class="color">
                        <span class="text-grey">Color:</span>
                        <span class="font-weight-bold">&nbsp;Grey</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center qty cart-product-w justify-content-center">
                    <i class="fa fa-minus text-danger"></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5>
                    <i class="fa fa-plus text-success"></i>
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
                  <Button class="btn btn-info btn-block" type="submit">
                    Checkout pitulin
                  </Button>
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
