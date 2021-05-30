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
    <div className="container mt-5 animate__animated animate__fadeIn">
      <Row>
        <Col
          md={7}
          className="mr-2 animate__animated animate__fadeInLeft animate__faster text-center"
        >
          <Image src={item.pictureUrl} fluid className="image-detail" />
        </Col>
        <Col className="animate__animated animate__fadeInRight animate__faster bg-light mb-3 rounded-lg">
          <h1 className="text-center mt-3">{item.title}</h1>
          <p className="text-center">{item.extendedDesc}</p>
          <p className="text-center">
            <AttachMoneyIcon className="dollar-icon" />
            {item.price}
          </p>
          <ItemCount items={item} onAdd={onAdd} />
        </Col>
      </Row>
      <div className="text-center">
        <h1>Especificaciones del producto</h1>
        {item.specs && item.specs.map((spec) => <p>{spec}</p>)}
      </div>
    </div>
  );
};

export default ItemDetail;
