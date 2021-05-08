import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Item = (props) => {


    const [contador, setContador] = useState(1);

    const handleAdd = () => {
        if(contador < props.item.stock) {
         setContador(contador + 1)
     }
 }

 const handleSub = () => {
     if(contador > 1) {
         setContador(contador - 1)
     }
 }

    return (
        
        <div className='col-3 mb-3 d-flex'>        
            <Card>
                <Link to={`/item/${props.item.id}`}>
                    <Card.Img style={{height: 180}} className='img-card' variant="top" src={props.item.pictureUrl} />
                </Link>
                <hr/>
                <Card.Body  className='text-center'>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>
                    <p>{props.item.description}</p>
                    <br/>
                    <hr/>
                    <strong className="justify-content-center">${props.item.price}</strong>
                    </Card.Text>      
                </Card.Body>
            </Card>         
        </div>
    )
}

export default Item
