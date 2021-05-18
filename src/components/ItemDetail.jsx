import React, { useState } from 'react'
import { useParams } from 'react-router';
import products from '../data/product-data'
import {Image, Col, Row} from 'react-bootstrap'
import ItemCount from './ItemCount';




const ItemDetail = ({ items }) => {

    const [itemQty, setItemQty] = useState(0);

    const onAdd = (qty) => {
        console.log('Dentro de onadd');
        setItemQty(qty)
    }



    const {id} = useParams();

    // const itemDetailed = products.filter(item => item.id == id)
    // console.log(itemDetailed);

    return (
        <div className='container mt-5'>
            <Row>   
                <Col className='mr-2'>      
                <Image width={500} src={items.pictureUrl} fluid />
                </Col>
                <Col>
                <h1>{items.title}</h1>
                <p>{items.description}</p>
                <span>${items.price}</span>
                <ItemCount items={items} onAdd={onAdd} />
                </Col> 
            </Row>          
        </div>
    )
}

export default ItemDetail
    