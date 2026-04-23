"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface OrderItem {
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  qty: number;
  image?: string;
}

export interface Order {
  id: string;
  date: string; // ISO
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: "bank" | "bitcoin";
  shippingAddress: {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    street: string;
    stateRegion: string;
    zip: string;
    phone: string;
    email: string;
  };
  notes?: string;
}

interface OrdersContextType {
  orders: Order[];
  hydrated: boolean;
  createOrder: (order: Omit<Order, "id" | "date" | "status">) => Order;
  getOrder: (id: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextType | null>(null);
const STORAGE_KEY = "dinespower_orders_v1";

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setOrders(parsed as Order[]);
        }
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
      }
    } catch {
      // ignore
    }
  }, [orders, hydrated]);

  const createOrder = (orderData: Omit<Order, "id" | "date" | "status">): Order => {
    const n = Math.floor(20000 + Math.random() * 80000);
    const newOrder: Order = {
      ...orderData,
      id: `${n}`,
      date: new Date().toISOString(),
      status: "Processing",
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrder = (id: string) => orders.find((o) => o.id === id);

  return (
    <OrdersContext.Provider value={{ orders, hydrated, createOrder, getOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
  return ctx;
}
