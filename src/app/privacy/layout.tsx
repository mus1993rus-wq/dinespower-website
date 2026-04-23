import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dines Power collects, uses and protects your personal information.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
