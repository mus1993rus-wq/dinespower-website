import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account / Login",
  description: "Sign in or create your Dines Power account to track orders and manage your profile.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
