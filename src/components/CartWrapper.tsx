"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CartProvider, useCart } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { OrdersProvider } from "@/context/OrdersContext";

const CartPopup = dynamic(() => import("./CartPopup"), { ssr: false });
const NeedHelpPopup = dynamic(() => import("./NeedHelpPopup"), { ssr: false });

function CartPopupConnected() {
  const { isOpen, closeCart } = useCart();
  if (!isOpen) return null;
  return <CartPopup isOpen={isOpen} onClose={closeCart} />;
}

function GlobalHelpPopup() {
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const handler = () => setHelpOpen(true);
    window.addEventListener("open-help-popup", handler);
    return () => window.removeEventListener("open-help-popup", handler);
  }, []);

  if (!helpOpen) return null;
  return <NeedHelpPopup isOpen={helpOpen} onClose={() => setHelpOpen(false)} />;
}

export default function CartWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <OrdersProvider>
        <CartProvider>
          {children}
          <CartPopupConnected />
          <GlobalHelpPopup />
        </CartProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}
