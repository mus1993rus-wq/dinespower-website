"use client";
import { CartProvider, useCart } from "@/context/CartContext";
import CartPopup from "./CartPopup";

function CartPopupConnected() {
  const { isOpen, closeCart } = useCart();
  return <CartPopup isOpen={isOpen} onClose={closeCart} />;
}

export default function CartWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartPopupConnected />
    </CartProvider>
  );
}
