import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Agentation } from "agentation";
import CartWrapper from "@/components/CartWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dines Power - Official Representative of Deus Medical, Biaxol, Astera Labs",
  description: "Buy steroids, SARMs, peptides and supplements online. Official distributor of DEUS MEDICAL, BIAXOL, ASTERA LABS in Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-[#181818] font-[var(--font-inter)]">
        <CartWrapper>
          {children}
          {/* Wholesale sidebar button - fixed left, all pages */}
          <a
            href="https://dinespower.to/partners-landing/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#FF6701] hover:bg-[#E65D00] transition-colors rounded-r-lg flex items-center justify-center cursor-pointer"
            style={{ width: "44px", height: "237px", writingMode: "vertical-rl" }}
          >
            <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ transform: "rotate(180deg)" }}>
              Wholesale & Dropshipping
            </span>
          </a>
        </CartWrapper>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
