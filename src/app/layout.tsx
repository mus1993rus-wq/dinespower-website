import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Agentation } from "agentation";
import CartWrapper from "@/components/CartWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF6701",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dinespower.info"),
  title: {
    default: "Dines Power — Official Distributor of Deus Medical, Biaxol, Astera Labs",
    template: "%s | Dines Power",
  },
  description:
    "Buy SARMs, peptides, injectables and supplements online. Dines Power is the official European distributor of Deus Medical, Biaxol and Astera Labs — lab-tested, fast shipping.",
  keywords: [
    "SARMs",
    "peptides",
    "steroids",
    "Deus Medical",
    "Biaxol",
    "Astera Labs",
    "sports pharmacology",
    "lab tested supplements",
    "Dinespower",
  ],
  authors: [{ name: "Dines Power" }],
  creator: "Dines Power",
  publisher: "Dines Power",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dines Power",
    title: "Dines Power — Official Distributor of Deus Medical, Biaxol, Astera Labs",
    description:
      "Buy SARMs, peptides, injectables and supplements online. Official European distributor — lab-tested, fast shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dines Power — Lab-Tested SARMs, Peptides & Supplements",
    description:
      "Official European distributor of Deus Medical, Biaxol, Astera Labs. Fast shipping, verified products.",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
            href="https://dinespower.to/partners-landing-en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#FF6701] hover:bg-[#E65D00] transition-colors rounded-r-lg items-center justify-center cursor-pointer"
            style={{ width: "44px", height: "237px", writingMode: "vertical-rl" }}
          >
            <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ transform: "rotate(180deg)" }}>
              Wholesale & Dropshipping
            </span>
          </a>
        </CartWrapper>
        <Agentation />
      </body>
    </html>
  );
}
