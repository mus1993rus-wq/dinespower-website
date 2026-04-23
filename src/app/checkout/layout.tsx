import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order securely — Bitcoin, bank transfer, worldwide discreet shipping.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
