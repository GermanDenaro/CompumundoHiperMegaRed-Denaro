import { createContext, useState } from "react";
  
export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
  
    const addItem = (id, quantity) => {
      console.log('llamando additem');
      console.log('se recibio', id, 'con cantidad', quantity);
      const isIn = isInCart(id);
      isIn ? setCart(cart.map(item => item.id === id ? {...item, quantity: quantity}: item)) : setCart([...cart, {id, quantity}]);
      
    }
  
    const removeItem = (id) => {
      const newCart = cart.filter( item => item.id !== id)
      setCart(newCart);
    }
  
    const clearCart = () => {
      setCart([]);
    }
  
    const isInCart = (id) => {
     return cart.some(item => item.id === id)
    }
  
    return (
      <CartContext.Provider value={{addItem, removeItem, clearCart, isInCart}}>
          {children}
      </CartContext.Provider>
    );
  }