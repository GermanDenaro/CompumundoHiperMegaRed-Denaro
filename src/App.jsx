import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import RouterApp from './components/Routes/RouterApp.jsx';
import CartContext from './context/CartContext'





function App() {

  const [cart, setCart] = useState([]);

  const addItem = (id, quantity) => {
    console.log('llamando additem');
    console.log('se recibio', id, 'con cantidad', quantity);
    const isIn = isInCart(id);
    isIn ? setCart(cart.map(item => item.id === id ? {...item, quantity: quantity}: item)) : setCart([...cart, {id, quantity}]);
    
  }

  const removeItem = () => {
    
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (id) => {
   return cart.some(item => item.id === id)
  }

  return (
    <CartContext.Provider value={{addItem, removeItem, clearCart, isInCart}}>
        <RouterApp />
    </CartContext.Provider>
  );
}

export default App;
