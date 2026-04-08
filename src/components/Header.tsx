"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import VerifyPopup from "@/components/VerifyPopup";
import NeedHelpPopup from "@/components/NeedHelpPopup";
import { useCart } from "@/context/CartContext";

const popularSearches = [
  "Ostarine MK-2866",
  "RAD-140 Testolone",
  "BPC-157 Peptide",
  "Clenbuterol",
  "Anavar",
  "HGH",
];

const recentSearches = [
  "Testosterone Enanthate",
  "PCT Stack",
  "Fat Burner",
];

const topLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Delivery & Payment", href: "/delivery-payment" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const categoryData: { name: string; slug: string; brands: string[] }[] = [
  { name: "Injectable", slug: "injectable", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Oral", slug: "oral", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Fat Burn", slug: "fat-burn", brands: ["Biaxol", "Deus Medical", "Astera Labs"] },
  { name: "Peptides & HGH", slug: "peptides-hgh", brands: ["Deus Medical", "Astera Labs", "Biaxol"] },
  { name: "SARMs", slug: "sarms", brands: ["Biaxol", "Deus Medical", "Astera Labs"] },
  { name: "PCT", slug: "pct", brands: ["Biaxol", "Deus Medical", "Astera Labs"] },
  { name: "Energy", slug: "energy", brands: ["Biaxol"] },
  { name: "Sex Support", slug: "sex-support", brands: ["Deus Medical", "Astera Labs"] },
  { name: "Health", slug: "health", brands: ["Biaxol"] },
  { name: "Stacks", slug: "stacks", brands: ["Biaxol", "Deus Medical"] },
  { name: "Amino Acids", slug: "amino-acids", brands: ["Astera Labs"] },
];

export default function Header() {
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full flex flex-col items-center gap-[16px] px-[185px]">
      {/* Top bar */}
      <div className="w-[calc(100%+370px)] -mx-[185px] bg-[#181818]">
        <div className="flex items-center justify-between h-[40px] px-[185px]">
          <div className="flex-1 flex gap-5 items-center">
            {topLinks.map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-[#B6B6B6] hover:text-white transition-colors leading-4">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/shop/shield-check.svg" alt="" width={24} height={24} unoptimized />
            <span className="text-sm text-white leading-[18px]">All Products Certified & Lab Tested</span>
            <Link href="/lab-tests" className="text-sm font-semibold text-white underline leading-5 ml-1">See Lab Test</Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-1.5">
            <Image src="/images/shop/uk-flag.svg" alt="EN" width={20} height={12} unoptimized />
            <span className="text-xs text-[#F7F7F7] leading-4">English</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#F7F7F7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="w-full flex items-center gap-[40px] h-[44px]">
        <div className="flex items-center gap-[24px] shrink-0">
          <Link href="/" className="shrink-0">
            <Image src="/images/shop/logo-header.svg" alt="Dines Power" width={106} height={44} unoptimized />
          </Link>
          <span className="text-xs text-[#7E7E7E] leading-4">
            Official Representative Of<br/>Deus Medical, Biaxol, Astera Labs
          </span>
        </div>
        <div className="flex-1 h-[44px] relative" ref={searchRef}>
          <div className={`bg-[#F7F7F7] border rounded-lg flex items-center gap-3 px-4 h-full transition-colors ${searchFocused ? "border-[#FF6701] bg-white" : "border-[#E7E7E7]"}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-30 shrink-0">
              <circle cx="9.17" cy="9.17" r="6.67" stroke="#181818" strokeWidth="1.5"/>
              <path d="M16.67 16.67L14.17 14.17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent flex-1 text-sm text-[#181818] placeholder:text-[#7E7E7E] outline-none leading-5"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-[#7E7E7E] hover:text-[#181818] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            )}
          </div>
          {/* Search dropdown */}
          {searchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg z-50 p-4">
              {recentSearches.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider">Recent Searches</span>
                    <button className="text-xs text-[#FF6701] hover:underline">Clear</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => { setSearchQuery(term); setSearchFocused(false); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F7F7] text-sm text-[#181818] hover:bg-[#EDEDED] transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-40"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <span className="text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider mb-2 block">Popular Searches</span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => { setSearchQuery(term); setSearchFocused(false); }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F7F7] text-sm text-[#181818] hover:bg-[#EDEDED] hover:text-[#FF6701] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-40"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-[24px] shrink-0">
          <button onClick={() => setVerifyOpen(true)} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <Image src="/images/shop/verify-icon.svg" alt="" width={20} height={20} unoptimized />
            <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors">Verify Authenticity</span>
          </button>
          <button onClick={() => setHelpOpen(true)} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <Image src="/images/shop/help-icon.svg" alt="" width={20} height={20} unoptimized />
            <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors">Need Help?</span>
          </button>
          <Link href="/login" className="flex items-center gap-2 h-[44px]">
            <Image src="/images/shop/user-icon.svg" alt="" width={20} height={20} unoptimized />
            <span className="text-sm font-semibold text-[#181818] leading-5">Login</span>
          </Link>
          <button onClick={openCart} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <div className="relative">
              <Image src="/images/shop/cart-icon.svg" alt="" width={20} height={20} unoptimized />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#FF6701] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">{totalItems}</span>
              )}
            </div>
            <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors">Cart</span>
          </button>
        </div>
      </div>

      {/* Navigation bar with dropdowns */}
      <div className="w-full border-t border-b border-[#EDEDED]">
        <nav className="flex items-center justify-between h-[48px]">
          {categoryData.map((cat) => (
            <div key={cat.name} className="relative group h-full flex items-center">
              <Link
                href={`/catalog?category=${cat.slug}`}
                className="flex items-center gap-1 text-sm font-semibold text-[#181818] group-hover:text-[#FF6701] transition-colors leading-5"
              >
                {cat.name}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:rotate-180">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              {/* Dropdown - brands */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg p-3 min-w-[200px]">
                  {cat.brands.map((brand) => (
                    <Link
                      key={brand}
                      href={`/catalog?category=${cat.slug}&brand=${brand.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-3 py-2 text-sm text-[#181818] hover:text-[#FF6701] hover:bg-[#F7F7F7] rounded-lg transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
      <VerifyPopup isOpen={verifyOpen} onClose={() => setVerifyOpen(false)} />
      <NeedHelpPopup isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
    </header>
  );
}
