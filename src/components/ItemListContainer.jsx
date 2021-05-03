import React, {useEffect, useState} from 'react'
import {Alert} from 'react-bootstrap'
import ItemList from './ItemList'
import products from '../data/product-data'
import Spinner from './Spinner'
import { useParams } from 'react-router'




const ItemListContainer = () => {

  const {id} = useParams();
  console.log('El id es: ', id);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    if(id !== undefined) {
      setCategory(id);
      console.log('La categorua es: ', category);
    }
  }, [id]);
  


  useEffect(() => {
    setItems([]);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    }).then((resultado) => category === 'all' ? setItems(resultado):(setItems(resultado.filter(item => item.category == category))))
  }, [category]);


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
