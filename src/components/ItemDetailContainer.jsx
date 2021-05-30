import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getFirestore } from '../firebase'

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [db, setDb] = useState(getFirestore())
    const [itemDetailedById, setItemDetailedById] = useState([]);

    // firebase
     useEffect(() => {
         const productos = db.collection('items').doc(id);

         productos.get().then((res) => {
             setItemDetailedById({ id, ...res.data() });
         });
     }, [id]);


    return (
              
                <ItemDetail item={itemDetailedById}/>
            
    )
}

export default ItemDetailContainer
