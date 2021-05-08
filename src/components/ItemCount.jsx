import React, {useState} from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import products from '../data/product-data'

const ItemCount = () => {

 const stock = 5;

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
         <div>
             <Card style={{ width: '18rem' }}>
                 <Card.Body>
                     <Row>
                         <Col xs={6} md={4}>
                         <Button variant="primary" onClick={handleSub}>-</Button>
                         </Col>
                         <Col xs={6} md={4}>
                         <input type="number" min="1" max={stock} className="text-center" value={contador} />
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

export default ItemCount
