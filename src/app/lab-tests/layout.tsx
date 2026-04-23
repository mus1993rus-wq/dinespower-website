import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Tests & Certifications",
  description: "Third-party laboratory reports and batch authenticity for all Dines Power products.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
