import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery & Payment",
  description: "Everything you need to know about shipping, payment methods and delivery times.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
