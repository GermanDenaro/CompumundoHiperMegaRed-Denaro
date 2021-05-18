import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getFirestore } from '../firebase'

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [itemDetailedById, setItemDetailedById] = useState([]);

    // firebase
    useEffect(() => {
        const db = getFirestore();
        const productos = db.collection('items').doc(id);

        productos.get().then((res) => {
            setItemDetailedById({ id, ...res.data() });
        });
    }, [id]);


    return (
              
                <ItemDetail items={itemDetailedById}/>
            
    )
}

export default ItemDetailContainer
