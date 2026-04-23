import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Browse SARMs, peptides, injectables, orals and supplements — all lab-tested and verified.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
