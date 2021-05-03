import React from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const {id} = useParams();

    return (
              
                <ItemDetail/>
            
    )
}

export default ItemDetailContainer
