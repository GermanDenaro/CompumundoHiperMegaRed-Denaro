import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemList = ({ items }) => {
  const { id } = useParams();

  const [category, setCategory] = useState('all');

  let catItems = [];

  useEffect(() => {
    if (id === undefined) {
      setCategory('all');
    } else {
      setCategory(id);
    }
  }, [id]);

  category === 'all'
    ? (catItems = items)
    : (catItems = items.filter((item) => item.categoryId === category));

  return (
    <div className="container bg-light py-4 px-4 my-4 rounded-top rounded-lg">
      <div className="row">
        {catItems.map((item) => (
          <Item key={item.id} item={item} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
