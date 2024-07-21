import { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from cookies on mount
  useEffect(() => {
    const storedCart = Cookies.get('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to cookies whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      Cookies.set('cart', JSON.stringify(cart), { expires: 7 }); // Set cookie to expire in 7 days
    } else {
      Cookies.remove('cart'); // Remove the cookie if the cart is empty
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
