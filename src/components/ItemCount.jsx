import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Spinner from './Spinner';

const ItemCount = ({ items, onAdd }) => {
  const context = useContext(CartContext);

  const [finalizar, setFinalizar] = useState(false);

  const [contador, setContador] = useState(1);

  const handleAdd = () => {
    if (contador < items.stock) {
      setContador(contador + 1);
    }
  };

  const handleSub = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const finalizarTrue = () => {
    setFinalizar(true);
  };

  return (
    <div>
      {items.length === '0' ? (
        <Spinner />
      ) : (
        <div className="container mt-3">
          <div className="text-center float-right">
            <RemoveCircleOutlineIcon
              className="remove-icon"
              fontSize="large"
              onClick={handleSub}
            />
            <input
              type="number"
              min="1"
              max={items.stock}
              className="text-center  stock-input"
              value={contador}
            />
            <AddCircleOutlineIcon
              className="add-icon mr-5"
              fontSize="large"
              onClick={handleAdd}
            />
            <Button
              className="btn btn-dark float-right"
              onClick={() => {
                finalizarTrue();
                onAdd(contador);
                context.addItem(
                  items.id,
                  contador,
                  items.price,
                  items.title,
                  items.pictureUrl
                );
              }}
            >
              Agregar al Carrito
            </Button>
          </div>
          <div className="pt-5 text-center">
            <Link to="/cart">
              <Button
                className={`btn btn-dark mt-3 ${!finalizar ? 'd-none' : ''}`}
              >
                Finalizar Compra
              </Button>
            </Link>
            <Link to="/">
              <Button className="btn btn-info mt-3 ml-4 mb-3" type="submit">
                Volver
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
