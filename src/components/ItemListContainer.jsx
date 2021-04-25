import React, {useEffect, useState} from 'react'
import {Alert} from 'react-bootstrap'
import ItemList from './ItemList'
import products from '../data/product-data'
import Spinner from './Spinner'




const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });


  return (
    <div>   
      <Alert variant="success">
        <Alert.Heading className="text-center">Bienvenidos!</Alert.Heading>
        <p className="text-center">
          En nuestra tienda podras encontrar todo lo que buscas! Y lo mejor, a un precio inimaginable!
        </p>
      </Alert>
      {
        items.length < 1 ? <Spinner/> : <ItemList items={items}/>
      }
      
      
    </div>
  )
}

export default ItemListContainer
