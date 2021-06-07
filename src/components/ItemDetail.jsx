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
      <Row className="mb-3">
        <Col
          md={7}
          className="mr-2 animate__animated animate__fadeInLeft animate__faster text-center col-image-detail"
        >
          <Image src={item.pictureUrl} fluid className="image-detail" />
        </Col>
        <Col className="animate__animated animate__fadeInRight animate__faster bg-light border border-dark rounded rounded-lg text-center">
          <h1 className="mt-3">{item.title}</h1>
          <hr />
          <p>{item.extendedDesc}</p>
          <hr />
          <p className="item-price">
            <AttachMoneyIcon fontSize="large" className="dollar-icon" />
            {item.price}
          </p>
          <ItemCount items={item} onAdd={onAdd} />
        </Col>
      </Row>
      <hr className="my-4" />
      <div className="text-center">
        <Image src={item.itemBanner} fluid />
      </div>
    </div>
  );
};

export default ItemDetail;
