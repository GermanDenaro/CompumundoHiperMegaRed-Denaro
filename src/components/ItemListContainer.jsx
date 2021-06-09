import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';
import Spinner from './Spinner';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((c) =>
          arr.push({ id: parseInt(c.id), ...c.data() })
        );
        setItems(arr);
      })
      .catch((error) => console.error('Firestore error:', error));
  }, []);

  return (
    <div>
      {items.length < 1 ? (
        <Spinner vh="100" className="jesus" />
      ) : (
        <ItemList className="img-container" items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
