"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "dinespower_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount (client-only).
  // setState inside effect is required: localStorage isn't available during SSR,
  // so we must defer to after-mount to avoid hydration mismatch.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // Basic shape validation
          const valid = parsed.filter(
            (i) =>
              i &&
              typeof i.name === "string" &&
              typeof i.price === "number" &&
              typeof i.qty === "number" &&
              i.qty > 0,
          );
          if (valid.length > 0) setItems(valid as CartItem[]);
        }
      }
    } catch {
      // Corrupt storage — ignore
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Persist to localStorage whenever items change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      }
    } catch {
      // Storage full or blocked — ignore silently
    }
  }, [items, hydrated]);

  // Cross-tab sync
  useEffect(() => {
    if (typeof window === "undefined") return;
    function onStorage(e: StorageEvent) {
      if (e.key !== STORAGE_KEY || e.newValue == null) return;
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed)) setItems(parsed as CartItem[]);
      } catch {
        // ignore
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

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
  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, addItem, removeItem, updateQty, clearCart, openCart, closeCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
