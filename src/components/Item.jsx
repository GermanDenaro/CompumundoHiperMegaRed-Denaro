import React, { useState } from 'react'
import {Card, Col, Button, Row} from 'react-bootstrap'

const Item = (props) => {

    const stock =  5;

    const [contador, setContador] = useState(1);

    const handleAdd = () => {
        if(contador < stock) {
         setContador(contador + 1)
     }
 }

 const handleSub = () => {
     if(contador > 1) {
         setContador(contador - 1)
     }
 }

    return (
        
        <div className='col-3 mb-3'>        
            <Card>
                <Card.Img style={{height: 180}} className='img-card' variant="top" src={props.item.pictureUrl} />
                <hr/>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>
                    <p>{props.item.description}</p>
                    <br/>
                    <strong>${props.item.price}</strong>
                    <hr/>
                    </Card.Text>
                    <Row>
                        <Col xs={6} md={4}>
                        <Button variant="primary" onClick={handleSub}>-</Button>
                        </Col>
                        <Col xs={6} md={4}>
                        <input type="number" min="1" max={props.item.stock} className="text-center" value={contador} />
                        </Col>
                        <Col xs={6} md={4}>
                        <Button className='float-right' variant="primary" onClick={handleAdd}>+</Button>
                        </Col>
                    </Row>          
                </Card.Body>
            </Card>         
        </div>
    )
}

export default Item
