import React, { useEffect, useState } from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom';

const ItemList = ({items}) => {

    const {id} = useParams();

    const [category, setCategory] = useState('all');

    let catItems = [];

    useEffect(() => {
        console.log('entrando useeffect. cat es', id)
        if(id === undefined){
            console.log('seteamos id en all')
            setCategory('all')
        } else {
            console.log('seteamos cat en', id)
            setCategory(id);
        }
    }, [id]);

    category === 'all' ? catItems = items : catItems = items.filter(item => item.categoryId === category)

    return (
        
        <div className="container">
                <div className='row justify-content-between'>
                    {
                        catItems.map(item => (
                            <Item key={item.id} item={item} category={category}/>))
                    }
                </div>
        </div>
        
    )
}

export default ItemList
