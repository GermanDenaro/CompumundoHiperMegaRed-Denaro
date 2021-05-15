import { Badge, Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'

const CartWidget = () => {

    const context = useContext(CartContext);


    return (
        <div>
             {
                context.cart.length === 0 ? <Button variant="warning" className="material-icons md-24 ml-4">shopping_cart</Button>
                : 
                (
                    <div>
                        <Button variant="warning" className="material-icons md-24 ml-4">shopping_cart</Button>
                        <Badge variant="warning">{context.cartItems}</Badge> 
                    </div>
                )
            }
            
        </div>
    )
}

export default CartWidget
