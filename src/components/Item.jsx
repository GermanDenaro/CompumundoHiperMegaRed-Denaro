import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Item = ({item}) => {

    return (
        
        <div className='container-card col-3 mb-3 d-flex animate__animated animate__fadeIn item' key={item.id}>        
            <Card className='card-item'>
                <Link to={`/item/${item.id}`}>
                    <Card.Img style={{height: 180}} className='img-card' variant="top" src={item.pictureUrl} />
                    <hr/>
                    <Card.Body  className='text-center'>
                        <Card.Title >{item.title}</Card.Title>
                        <Card.Text>
                        <p className='product-desc'>{item.description}</p>
                        <br/>
                        <hr/>
                        <strong className="justify-content-center">${item.price}</strong>
                        </Card.Text>      
                    </Card.Body>
                </Link>
            </Card>         
        </div>
    )
}

export default Item
