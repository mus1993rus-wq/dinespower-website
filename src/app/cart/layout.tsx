import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review items in your cart before checkout — secure payment and worldwide shipping.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
