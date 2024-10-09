"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  const handleAddToCart = (name, price, image, id, quantity) => {
    const product = {
      name,
      price,
      image,
      id,
      quantity,
    };
    const existingProduct = cart.find((item) => item.id === id); // Mapear para chequear que el producto está en el cart
    if (existingProduct) {
      existingProduct.quantity += quantity; // Si lo está, se le suma quantity en cantidad de products en el cart
      return setCart([...cart]); // Devuelve el mismo cart sin sumar otro mismo producto, solo la cantidad
    } else {
      setCart([...cart, product]); // Si no es el mismo product, agrega al cart el nuevo producto y +1 a quantity
    }
  };

  const handleRemoveProduct = (id) =>{
    const restProducts = cart.filter (product => product.id !== id)
    setCart(restProducts)
  }

  const cartTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        cartTotal,
        handleRemoveProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
