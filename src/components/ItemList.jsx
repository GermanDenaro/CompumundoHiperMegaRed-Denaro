import React from 'react'
import products from '../data/product-data'
import Item from './Item'

const ItemList = () => {
    return (
        <div className="container">
            <div className='row justify-content-between'>
                {
                    products.map(item => (
                        <Item key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
