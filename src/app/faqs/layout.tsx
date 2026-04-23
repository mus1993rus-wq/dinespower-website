import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about products, orders, shipping and payments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
