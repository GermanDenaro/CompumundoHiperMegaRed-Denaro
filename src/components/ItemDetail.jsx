import React, { useState } from 'react'
// import products from '../data/product-data'
import {Image, Col, Row} from 'react-bootstrap'
import ItemCount from './ItemCount';




const ItemDetail = ({items: {id, title, price, pictureUrl, description, stock}}) => {

    const [itemQty, setItemQty] = useState(0);
    

    const onAdd = (qty) => {
        console.log('Dentro de onadd');
        setItemQty(qty)
    }



    // const {id} = useParams();

    // const itemDetailed = items.filter(item => item.id == id)
    // console.log(itemDetailed);

    return (
        <div className='container mt-5'>
            <Row>   
                <Col className='mr-2'>      
                <Image width={500} src={pictureUrl} fluid />
                </Col>
                <Col>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>${price}</span>
                <ItemCount stock={stock} onAdd={onAdd} id={id} price={price} title={title} pictureUrl={pictureUrl}/>
                </Col> 
            </Row>          
        </div>
    )
}

export default ItemDetail
    