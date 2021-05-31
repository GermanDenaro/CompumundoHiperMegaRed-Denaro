import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Image, Col, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const ItemDetail = ({ item }) => {
  const [itemQty, setItemQty] = useState(0);

  const onAdd = (qty) => {
    console.log('Dentro de onadd');
    setItemQty(qty);
  };

  const { id } = useParams();

  // const itemDetailed = products.filter(item => item.id == id)
  // console.log(itemDetailed);

  return (
    <div className="container mt-4 animate__animated animate__fadeIn pb-5">
      <Row className="border border-dark rounded rounded-lg mb-3">
        <Col
          md={7}
          className="mr-2 animate__animated animate__fadeInLeft animate__faster text-center"
        >
          <Image src={item.pictureUrl} fluid className="image-detail" />
        </Col>
        <Col className="animate__animated animate__fadeInRight animate__faster bg-light border-left border-dark rounded-right">
          <h1 className="text-center mt-3">{item.title}</h1>
          <p>{item.extendedDesc}</p>
          <p className="text-center item-price">
            <AttachMoneyIcon fontSize="large" className="dollar-icon" />
            {item.price}
          </p>
          <ItemCount items={item} onAdd={onAdd} />
        </Col>
      </Row>
      <div className="text-center border border-dark rounded rounded-lg spec-bg">
        <h1 className="mt-2 spec-title">Especificaciones del producto</h1>
        {item.specs &&
          item.specs.map((spec) => <p className="spec-text">{spec}</p>)}
        <Image src={item.detailedDesc} fluid />
      </div>
    </div>
  );
};

export default ItemDetail;
