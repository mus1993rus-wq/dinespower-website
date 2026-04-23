"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Injectable", slug: "injectable", icon: "/images/shop/cat-injectable.png" },
  { name: "Oral", slug: "oral", icon: "/images/shop/cat-oral.png" },
  { name: "Fat Burn", slug: "fat-burn", icon: "/images/shop/cat-fatburn.png" },
  { name: "Peptides & HGC", slug: "peptides-hgh", icon: "/images/shop/cat-peptides.png" },
  { name: "SARMs", slug: "sarms", icon: "/images/shop/cat-stacks.png" },
  { name: "PCT", slug: "pct", icon: "/images/shop/cat-pct.png" },
  { name: "Energy", slug: "energy", icon: "/images/shop/cat-other.png" },
  { name: "Sex Support", slug: "sex-support", icon: "/images/shop/cat-sexsupport.png" },
  { name: "Health", slug: "health", icon: "/images/shop/cat-other.png" },
  { name: "Stacks", slug: "stacks", icon: "/images/shop/cat-stacks.png" },
  { name: "Amino Acids", slug: "amino-acids", icon: "/images/shop/cat-other.png" },
];

const menuLinks = [
  { label: "Lab Tests", href: "/lab-tests", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" fill="#00B638" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) },
  { label: "Verify Authenticity", href: "#verify", action: true, icon: (
    <Image src="/images/shop/verify-icon.svg" alt="" width={24} height={24} />
  ) },
  { label: "About Us", href: "/about", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
    </svg>
  ) },
  { label: "Delivery & Payment", href: "/delivery-payment", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M20 8H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-8a2 2 0 00-2-2z" />
      <path d="M12 12l-3 3m0 0l3 3m-3-3h6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ) },
  { label: "Blog", href: "/blog", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ) },
  { label: "FAQs", href: "/faqs", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
      <path d="M9.1 9.5a2.9 2.9 0 015.8.5c0 2-3 2.5-3 4m.1 3h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ) },
  { label: "Contact", href: "/contact", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M22 16.92V19a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 3.18 2 2 0 014.11 1h3.08a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.01a16 16 0 006 6l1.37-1.37a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72a2 2 0 011.72 2.01z" />
    </svg>
  ) },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [level, setLevel] = useState<"main" | "categories">("main");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[375px] bg-white overflow-y-auto">
        {level === "main" ? (
          <div className="flex flex-col">
            {/* Language + close */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0]">
              <button className="flex items-center gap-2 py-1">
                <Image src="/images/flags/gb.svg" alt="" width={20} height={12} className="object-cover rounded-[2px]" />
                <span className="text-[14px] font-semibold text-[#181818]">English</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#181818" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              {/* Shop Categories — highlighted */}
              <button
                onClick={() => setLevel("categories")}
                className="bg-[#FFE8D6] rounded-[12px] px-4 py-4 flex items-center gap-3"
              >
                <div className="w-6 h-6 grid grid-cols-2 gap-[3px]">
                  {[0,1,2,3].map(i => <div key={i} className="bg-[#FF6701] rounded-[2px]" />)}
                </div>
                <span className="flex-1 text-left text-[14px] font-semibold text-[#181818]">Shop Categories</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Login */}
              <Link
                href="/login"
                onClick={onClose}
                className="bg-white border border-[#E7E7E7] rounded-[12px] px-4 py-4 flex items-center gap-3"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
                  <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM3 21c0-4.97 4.03-9 9-9s9 4.03 9 9H3z" />
                </svg>
                <span className="flex-1 text-[14px] font-semibold text-[#181818]">Login</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Links group */}
              <div className="bg-white border border-[#E7E7E7] rounded-[12px] py-2 flex flex-col">
                {menuLinks.map((link, i) => (
                  link.action ? (
                    <button
                      key={link.label}
                      onClick={() => {
                        onClose();
                        window.dispatchEvent(new CustomEvent('open-verify-popup'));
                      }}
                      className={`flex items-center gap-3 px-4 py-3 ${i < menuLinks.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                    >
                      <span className="w-6 h-6 flex items-center justify-center shrink-0">{link.icon}</span>
                      <span className="flex-1 text-left text-[14px] font-semibold text-[#181818]">{link.label}</span>
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-4 py-3 ${i < menuLinks.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                    >
                      <span className="w-6 h-6 flex items-center justify-center shrink-0">{link.icon}</span>
                      <span className="flex-1 text-[14px] font-semibold text-[#181818]">{link.label}</span>
                    </Link>
                  )
                ))}
              </div>

              {/* Wholesale banner */}
              <div className="mt-4 bg-[#181818] rounded-[16px] overflow-hidden relative p-4 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 relative shrink-0">
                    <Image src="/images/shop/wholesale-banner-icon.png" alt="" fill className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#FF6701] text-[16px] font-extrabold leading-5">Save Up To 50% On Shipping</p>
                    <p className="text-white/70 text-[12px] leading-4 mt-1">Wholesale orders unlock better shipping rates and partner discounts.</p>
                  </div>
                </div>
                <a
                  href="https://dinespower.to/partners-landing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#181818] h-11 rounded-[8px] flex items-center justify-center text-[14px] font-semibold"
                >
                  Get Wholesale Prices
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Level 2 — Categories */
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0]">
              <button onClick={() => setLevel("main")} className="w-8 h-8 flex items-center justify-center" aria-label="Back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-[14px] font-semibold text-[#7E7E7E]">Shop Categories</span>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col">
              {categories.map((cat, i) => (
                <Link
                  key={cat.slug}
                  href={`/catalog?category=${cat.slug}`}
                  onClick={onClose}
                  className={`flex items-center gap-4 px-4 py-3 ${i < categories.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center overflow-hidden shrink-0">
                    <Image src={cat.icon} alt="" width={40} height={40} className="object-contain" />
                  </div>
                  <span className="flex-1 text-[14px] font-semibold text-[#181818]">{cat.name}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
