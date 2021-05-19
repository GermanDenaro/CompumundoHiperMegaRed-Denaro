import React, {useContext, useState} from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'



const ItemCount = ({items, onAdd}) => {

 const context = useContext(CartContext);

 const [finalizar, setFinalizar] = useState(false)

 const [contador, setContador] = useState(1);

 const handleAdd = () => {
     if(contador < items.stock) {
         setContador(contador + 1)
     }
 }

 const handleSub = () => {
     if(contador > 1) {
         setContador(contador - 1)
     }
 }

 const finalizarTrue = () => {
    setFinalizar(true)
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
                            <input type="number" min="1" max={items.stock} className="text-center w-100" value={contador}/>
                         </Col>
                         <Col xs={6} md={4}>
                         <Button className='float-right' variant="primary" onClick={handleAdd}>+</Button>
                         </Col>                                                                                                         
                         <Button className="btn btn-dark mt-3" onClick={()=> {finalizarTrue(); onAdd(contador); context.addItem(items.id, contador, items.price, items.title, items.pictureUrl)}}>Agregar al Carrito</Button>
                        <Link to='/cart'><Button className={`btn btn-dark mt-3 ${!finalizar ? "d-none" : ""}`}>Finalizar Compra</Button></Link>
                     </Row>
                 </Card.Body>
             </Card> 
         </div>
    )
}

export default ItemCount
