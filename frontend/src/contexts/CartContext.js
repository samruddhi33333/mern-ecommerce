import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const res = await api.get("/api/cart");
      setCart(res.data);
    } catch (err) {
      console.log("Cart load error:", err.response?.data);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    await api.post("/api/cart", { productId, quantity });
    loadCart();
  };

  const updateQuantity = async (id, quantity) => {
    await api.put(`/api/cart/${id}`, { quantity });
    loadCart();
  };

  const removeItem = async (id) => {
    await api.delete(`/api/cart/${id}`);
    loadCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem, loadCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
