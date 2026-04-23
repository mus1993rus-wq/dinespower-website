import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on SARMs, peptides, steroids, bodybuilding science and lab research from Dines Power.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
