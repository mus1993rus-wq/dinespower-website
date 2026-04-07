"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  qty: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "qty">, quantity?: number) => void;
  removeItem: (index: number) => void;
  updateQty: (index: number, qty: number) => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: Omit<CartItem, "qty">, quantity: number = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + quantity } : i);
      }
      return [...prev, { ...item, qty: quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (index: number) => setItems(prev => prev.filter((_, i) => i !== index));
  const updateQty = (index: number, qty: number) => setItems(prev => prev.map((item, i) => i === index ? { ...item, qty: Math.max(1, qty) } : item));
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, addItem, removeItem, updateQty, openCart, closeCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
