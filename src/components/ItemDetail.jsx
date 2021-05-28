import React, { useState } from 'react'
import { useParams } from 'react-router';
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
        <div className='container mt-5 animate__animated animate__fadeIn'>
            <Row>   
                <Col md={7}className='mr-2 animate__animated animate__fadeInLeft animate__faster text-center'>      
                    <Image src={items.pictureUrl} fluid  className='image-detail'/>
                </Col>
                <Col className='animate__animated animate__fadeInRight animate__faster bg-light mb-3 rounded-lg'>
                    <h1 className='text-center mt-3'>{items.title}</h1>
                    <p className='text-center'>{items.description}</p>
                    <p className='text-center'>${items.price}</p>
                    <ItemCount items={items} onAdd={onAdd} />
                </Col> 
            </Row>          
        </div>
    )
}

export default ItemDetail
    