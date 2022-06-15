import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) =>{
    if  (isInCart(item.id)) {
      setCart(cart.map(prod => {
        return prod.id === item.id ? {...prod, quantity : prod.quantity + quantity} : prod
      }));

    } else {
setCart([...cart, {...item, quantity}]);
    }

  }

  const totalPrice = () => {
    return cart.reduce((prev,act) => prev + act.quantity * act.price, 0)
  }

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
 

  const cleanCart = () => setCart([]);

  const isInCart = (id) => (cart.find(prod => prod.id === id) ? true : false);

  const removeProduct = (id) => setCart(cart.filter( prod => prod.id !== id));


  return (
    <CartContext.Provider value={{
    cleanCart,
    isInCart,
    removeProduct,
    addProduct,
    totalPrice,
    totalProducts
  }}>
{children}
    </CartContext.Provider>
  );
};

export default CartProvider;
