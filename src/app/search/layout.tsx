import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Dines Power catalog for SARMs, peptides, steroids and supplements.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
