import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Dines Power website and purchasing products.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
