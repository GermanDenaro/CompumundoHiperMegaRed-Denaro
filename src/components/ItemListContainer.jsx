import React, {useEffect, useState} from 'react'
import {Alert} from 'react-bootstrap'
import ItemList from './ItemList'
import Spinner from './Spinner'
import { useParams } from 'react-router'
import { getFirestore } from '../firebase'




const ItemListContainer = () => {

  const {id} = useParams();
  // console.log('El id es: ', id);
  const [items, setItems] = useState([]);
  

   useEffect(() => {
     const db = getFirestore();
     const itemCollection = db.collection('items');
     itemCollection.get()
         .then((querySnapshot) => {            
          let arr = []
          querySnapshot.docs.map((c) => arr.push({ id: parseInt(c.id), ...c.data() }));
          setItems(arr)    
         })
         .catch((error) => console.error('Firestore error:', error))
 }, [])



  return (
    <div>   
      <Alert variant="success">
        <Alert.Heading className="text-center">Bienvenidos!</Alert.Heading>
        <p className="text-center">
          En nuestra tienda podras encontrar todo lo que buscas! Y lo mejor, a un precio inimaginable!
        </p>
      </Alert>
      {
        items.length < 1 ? <Spinner/> : <ItemList className='img-container' items={items}/>
      }
      
      
    </div>
  )
}

export default ItemListContainer
