import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load initial state from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (offer) => {
    // Avoid duplicates
    if (!cartItems.some((item) => item.id === offer.id)) {
      setCartItems([...cartItems, offer]); // Add new item to cart
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((offer) => offer.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
