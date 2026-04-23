import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach the Dines Power team via Telegram, WhatsApp, or email for any questions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
