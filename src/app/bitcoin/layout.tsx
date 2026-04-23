import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay with Bitcoin",
  description: "Guide to paying for your Dines Power order with Bitcoin — private, secure and fast.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
