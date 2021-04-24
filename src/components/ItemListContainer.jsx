import React from 'react'
import {Alert} from 'react-bootstrap'
import ItemList from './ItemList'



const ItemListContainer = () => {
  return (
    <div>   
      <Alert variant="success">
        <Alert.Heading className="text-center">Bienvenidos!</Alert.Heading>
        <p className="text-center">
          En nuestra tienda podras encontrar todo lo que buscas! Y lo mejor, a un precio inimaginable!
        </p>
      </Alert>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer
