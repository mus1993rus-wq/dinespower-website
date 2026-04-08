"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import VerifyPopup from "@/components/VerifyPopup";
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
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
      if (helpRef.current && !helpRef.current.contains(e.target as Node)) {
        setHelpDropdownOpen(false);
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
          <div className="relative" ref={helpRef}>
            <button onClick={() => setHelpDropdownOpen(!helpDropdownOpen)} className="flex items-center gap-2 h-[44px] cursor-pointer">
              <Image src="/images/shop/help-icon.svg" alt="" width={20} height={20} unoptimized />
              <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors">Need Help?</span>
            </button>
            {helpDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg py-2 min-w-[200px] z-50">
                <a
                  href="https://t.me/dinespower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#181818] hover:bg-[#F7F7F7] hover:text-[#FF6701] transition-colors"
                  onClick={() => setHelpDropdownOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#0088CC"/>
                  </svg>
                  Telegram
                </a>
                <a
                  href="https://wa.me/dinespower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#181818] hover:bg-[#F7F7F7] hover:text-[#FF6701] transition-colors"
                  onClick={() => setHelpDropdownOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:support@dinespower.com"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#181818] hover:bg-[#F7F7F7] hover:text-[#FF6701] transition-colors"
                  onClick={() => setHelpDropdownOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#7E7E7E" strokeWidth="1.5"/>
                    <path d="M2 7l10 7 10-7" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Mail
                </a>
              </div>
            )}
          </div>
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
    </header>
  );
}
