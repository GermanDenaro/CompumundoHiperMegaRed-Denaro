import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Cart = () => {

     const context = useContext(CartContext);


    return (
        <div className='container mt-5'>
            {
                context.cart < 1 ?    
                <div className="container text-center">
                    <h1>No hay items en tu carrito</h1>
                    <Link to='/'><Button className="btn btn-info mt-3" type="submit">Volver</Button></Link>
                </div>  

                : 

                <div>
                    {
                        context.cart.map(item => (
                        <div>
                            <p>{item.pictureUrl}</p>       
                            <p>Titulo: {item.title}</p>       
                            <p>Cantidad: {item.quantity}</p>   
                            <Button className="btn btn-info" type="submit" onClick={()=> context.removeItem(item.id)}>Eliminar</Button>  
                            <hr/>                    
                        </div>
                        ))
                    }
                        <div>
                            <p>Total de items: {context.cartItems}</p>
                            <p>Precio total: ${context.cartTotal}</p>
                        </div>
                </div>                                          
            } 
        </div>
    )
}

export default Cart



