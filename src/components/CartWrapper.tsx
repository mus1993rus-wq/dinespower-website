"use client";
import { useState, useEffect } from "react";
import { CartProvider, useCart } from "@/context/CartContext";
import CartPopup from "./CartPopup";
import NeedHelpPopup from "./NeedHelpPopup";

function CartPopupConnected() {
  const { isOpen, closeCart } = useCart();
  return <CartPopup isOpen={isOpen} onClose={closeCart} />;
}

function GlobalHelpPopup() {
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const handler = () => setHelpOpen(true);
    window.addEventListener("open-help-popup", handler);
    return () => window.removeEventListener("open-help-popup", handler);
  }, []);

  return <NeedHelpPopup isOpen={helpOpen} onClose={() => setHelpOpen(false)} />;
}

export default function CartWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartPopupConnected />
      <GlobalHelpPopup />
    </CartProvider>
  );
}
