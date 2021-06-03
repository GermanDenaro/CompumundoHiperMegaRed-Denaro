import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Item = ({ item }) => {
  return (
    <div
      className="container-card col-3 mb-4 d-flex animate__animated animate__fadeIn item"
      key={item.id}
    >
      <Card className="card-item border border-secondary">
        <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
          <Card.Img
            style={{ height: 180 }}
            className="img-card"
            variant="top"
            src={item.pictureUrl}
          />
          <hr />
          <Card.Body className="text-center">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="card-text">
              <p className="product-desc">{item.description}</p>
              <br />
              <hr />
              <strong className="justify-content-center">
                <AttachMoneyIcon fontSize="medium" className="dollar-icon" />
                {item.price}
              </strong>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default Item;
