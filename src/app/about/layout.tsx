import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Official worldwide distributor of Deus Medical, Biaxol and Astera Labs — pharmaceutical manufacturers based in India.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
