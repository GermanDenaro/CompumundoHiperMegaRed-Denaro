import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    return (
        
        <div className='col-3 mb-3 d-flex' key={item.id}>        
            <Card>
                <Link to={`/item/${item.id}`}>
                    <Card.Img style={{height: 180}} className='img-card' variant="top" src={item.pictureUrl} />
                </Link>
                <hr/>
                <Card.Body  className='text-center'>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    <p>{item.description}</p>
                    <br/>
                    <hr/>
                    <strong className="justify-content-center">${item.price}</strong>
                    </Card.Text>      
                </Card.Body>
            </Card>         
        </div>
    )
}

export default Item
