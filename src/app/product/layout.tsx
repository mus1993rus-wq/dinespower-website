import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Lab-tested SARMs, peptides, injectables and supplements from Dines Power.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
