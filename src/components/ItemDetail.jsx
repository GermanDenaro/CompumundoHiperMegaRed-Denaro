import React from 'react'
import { useParams } from 'react-router';
import products from '../data/product-data'
import {Image, Col, Row} from 'react-bootstrap'
import ItemCount from './ItemCount';

const ItemDetail = () => {

    const {id} = useParams();

    const itemDetailed = products.filter(item => item.id == id)
    console.log(itemDetailed);

    return (
        <div className='container mt-5'>
            <Row>   
                <Col className='mr-2'>      
                <Image width={500} src={itemDetailed[0].pictureUrl} fluid />
                </Col>
                <Col>
                <h1>{itemDetailed[0].title}</h1>
                <p>{itemDetailed[0].description}</p>
                <span>${itemDetailed[0].price}</span>
                </Col> 
                <ItemCount/>
            </Row>          
        </div>
    )
}

export default ItemDetail
    