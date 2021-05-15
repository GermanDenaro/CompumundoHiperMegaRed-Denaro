import { createContext, useEffect, useState } from "react";
  
export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const [cartItems, setCartItems] = useState(0)

    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
      cartPrice();
      cartItemsCount();
    }, [cart])

    const cartPrice = () => {
      let aux = 0;
      cart.map(item => (
        aux += item.price * item.quantity
      ))
      setCartTotal(aux)
    }
 
    const cartItemsCount = () => {
      let aux = 0;
      cart.map(item => (
        aux += item.quantity
      ))
      setCartItems(aux);
    }
  
    const addItem = (id, quantity, price, title, pictureUrl) => {
      console.log('llamando additem');
      console.log('se recibio', id, 'con cantidad', quantity, 'llamado: ', title, 'con foto: ', pictureUrl, 'costando: ', price);
      const isIn = isInCart(id);
      isIn 
        ? setCart(cart.map(item => item.id === id ? {...item, quantity: quantity}: item)) 
        : setCart([...cart, {id, quantity, price, title, pictureUrl}]);
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
      <CartContext.Provider value={{addItem, removeItem, clearCart, isInCart, cart, cartItems, cartTotal}}>
          {children}
      </CartContext.Provider>
    );
  }