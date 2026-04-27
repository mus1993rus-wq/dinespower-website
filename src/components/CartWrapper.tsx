"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CartProvider, useCart } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { OrdersProvider } from "@/context/OrdersContext";
import { LocaleProvider } from "@/context/LocaleContext";

const CartPopup = dynamic(() => import("./CartPopup"), { ssr: false });
const NeedHelpPopup = dynamic(() => import("./NeedHelpPopup"), { ssr: false });
const CookieConsent = dynamic(() => import("./CookieConsent"), { ssr: false });
const Analytics = dynamic(() => import("./Analytics"), { ssr: false });
const AuthPopup = dynamic(() => import("./AuthPopup"), { ssr: false });

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
    <LocaleProvider>
      <AuthProvider>
        <OrdersProvider>
          <CartProvider>
            {children}
            <CartPopupConnected />
            <GlobalHelpPopup />
            <AuthPopup />
            <CookieConsent />
            <Analytics />
          </CartProvider>
        </OrdersProvider>
      </AuthProvider>
    </LocaleProvider>
  );
}
