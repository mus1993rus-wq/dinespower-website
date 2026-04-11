"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useCart } from "@/context/CartContext";

const VerifyPopup = dynamic(() => import("@/components/VerifyPopup"), { ssr: false });

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

const searchProducts = [
  { name: "3-Trenbomed 150 Injectable Steroid In Ampoules", price: "57 \u20AC", image: "/images/shop/products/injectable-trenbomed-150.jpg" },
  { name: "Decamed PP 100 Injectable Steroid In Ampoules", price: "34 \u20AC", image: "/images/shop/products/injectable-decamed-pp-100.jpg" },
  { name: "Dianamed 100 Injectable Steroid In Ampoules", price: "40 \u20AC", image: "/images/shop/products/injectable-dianamed-100.png" },
  { name: "Equimed 250 Injectable Steroid In Ampoules", price: "42 \u20AC", image: "/images/shop/products/injectable-equimed-250.jpg" },
  { name: "Anavamed 10 Oral Steroid In Tablets", price: "25 \u20AC", image: "/images/shop/products/oral-anavamed-10.jpg" },
  { name: "Dianamed 10 Oral Steroid In Tablets", price: "13 \u20AC", image: "/images/shop/products/oral-dianamed-10.jpg" },
  { name: "BPC-157 Peptide In Vials", price: "39 \u20AC", image: "/images/shop/products/peptides-hgh-bpc-157.jpg" },
  { name: "Ibutamoren (MK677) SARM In Capsules", price: "60 \u20AC", image: "/images/shop/products/sarms-ibutamoren.png" },
];

const topLinks = [
  { label: "Delivery & Payment", href: "/delivery-payment" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const categoryData: { name: string; slug: string; brands: string[] }[] = [
  { name: "Injectable", slug: "injectable", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Oral", slug: "oral", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Fat Burn", slug: "fat-burn", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "Peptides & HGH", slug: "peptides-hgh", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "SARMs", slug: "sarms", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "PCT", slug: "pct", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "Energy", slug: "energy", brands: ["Biaxol"] },
  { name: "Sex Support", slug: "sex-support", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Health", slug: "health", brands: ["Biaxol"] },
  { name: "Stacks", slug: "stacks", brands: ["Deus Medical", "Biaxol"] },
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
    <header className="w-full flex flex-col items-center px-[185px] sticky top-0 z-50">
      {/* Top bar — full width dark, extra pb-6 so rounded overlap is more visible */}
      <div className="w-[calc(100%+370px)] -mx-[185px] bg-[#181818] pb-6">
        <div className="flex items-center justify-between h-[40px] px-[185px]">
          <div className="flex-1 flex gap-5 items-center">
            {topLinks.map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-[#B6B6B6] hover:text-white transition-colors leading-4">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/shop/shield-check.svg" alt="" width={24} height={24} />
            <span className="text-sm text-white leading-[18px]">All Products Certified & Lab Tested</span>
            <Link href="/lab-tests" className="text-sm font-semibold text-white underline leading-5 ml-1">See Lab Test</Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-1.5">
            <Image src="/images/shop/uk-flag.svg" alt="EN" width={20} height={12} />
            <span className="text-xs text-[#F7F7F7] leading-4">English</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#F7F7F7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      {/* White content wrapper — rounded top corners overlap dark top bar */}
      <div className="w-[calc(100%+370px)] -mx-[185px] bg-white rounded-t-[16px] -mt-[16px] relative pt-4 px-[185px] flex flex-col gap-[16px] z-[40]">

      {/* Middle bar */}
      <div className="w-full flex items-center gap-[40px] h-[44px]">
        <div className="flex items-center gap-[24px] shrink-0">
          <Link href="/" className="shrink-0">
            <Image src="/images/shop/logo-header.svg" alt="Dines Power" width={106} height={44} />
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
              {searchQuery.trim() ? (
                <>
                  {/* Product results — Figma 1726:45581 style */}
                  <div className="flex flex-col">
                    {searchProducts
                      .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      .slice(0, 6)
                      .map((product, i, arr) => (
                        <Link
                          key={i}
                          href={`/product`}
                          onClick={() => setSearchFocused(false)}
                          className={`flex items-center gap-4 py-3 hover:bg-[#F7F7F7] rounded-lg px-2 transition-colors ${i < arr.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                        >
                          <div className="w-[60px] h-[60px] bg-[#F7F7F7] rounded-lg shrink-0 relative overflow-hidden">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col gap-1">
                            <p className="text-[16px] font-semibold text-[#181818] leading-[22px] line-clamp-2">{product.name}</p>
                            <p className="text-[14px] text-[#7E7E7E] leading-5">{product.price}</p>
                          </div>
                        </Link>
                      ))}
                    {searchProducts.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                      <p className="text-sm text-[#7E7E7E] py-4 text-center">No products found</p>
                    )}
                  </div>
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    onClick={() => setSearchFocused(false)}
                    className="flex items-center justify-center w-full h-[52px] bg-[#181818] hover:bg-[#333333] text-white text-[14px] font-semibold rounded-[8px] mt-3 transition-colors"
                  >
                    See All
                  </Link>
                </>
              ) : (
                <>
                  {recentSearches.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[16px] font-semibold text-[#181818] leading-6">Recent Searches</span>
                        <button className="text-[14px] text-[#7E7E7E] hover:text-[#FB2F2F] transition-colors">Clear</button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => { setSearchQuery(term); }}
                            className="cursor-pointer flex items-center gap-2 px-4 h-10 rounded-[8px] border border-[#E7E7E7] bg-white text-[14px] text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#7E7E7E]"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <span className="text-[16px] font-semibold text-[#181818] leading-6 mb-3 block">Popular Searches</span>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => { setSearchQuery(term); }}
                          className="cursor-pointer flex items-center gap-2 px-4 h-10 rounded-[8px] bg-[#F7F7F7] text-[14px] text-[#181818] hover:bg-[#E7E7E7] transition-colors"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#FF6701]"><path d="M8 12l8-8m0 0l5 5m-5-5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-[24px] shrink-0">
          <button onClick={() => setVerifyOpen(true)} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <Image src="/images/shop/verify-icon.svg" alt="" width={24} height={24} className="w-6 h-6" />
            <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors">Verify Authenticity</span>
          </button>
          <div className="relative" ref={helpRef}>
            <button onClick={() => setHelpDropdownOpen(!helpDropdownOpen)} className="flex items-center gap-2 h-[44px] cursor-pointer">
              <Image src="/images/shop/help-icon.svg" alt="" width={20} height={20} />
              <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors">Need Help?</span>
            </button>
            {helpDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg p-2 min-w-[240px] z-50">
                <a
                  href="https://t.me/dinespower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-[16px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                  onClick={() => setHelpDropdownOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M3.32 11.87 18.75 5.92c.72-.26 1.34.17 1.11 1.26L17.23 19.55c-.19.88-.71 1.09-1.44.68l-4-2.95-1.93 1.86c-.21.21-.39.39-.81.39l.29-4.07 7.41-6.7c.32-.28-.07-.44-.5-.16l-9.16 5.77-3.95-1.23c-.86-.27-.88-.86.18-1.27z" fill="white"/>
                    </svg>
                  </div>
                  Telegram
                </a>
                <a
                  href="https://wa.me/dinespower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-[16px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                  onClick={() => setHelpDropdownOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00D43F] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M15.25 13.28c-.19-.13-.38-.19-.56.06l-.75 1c-.19.13-.31.19-.56.06-.94-.5-2.25-1.06-3.38-2.94-.06-.25.06-.38.19-.5l.56-.88c.13-.12.06-.25 0-.37l-.75-1.82c-.19-.5-.38-.43-.56-.43h-.5c-.13 0-.38.06-.63.31-1.37 1.38-.81 3.31.19 4.56.19.25 1.44 2.5 4.12 3.69 2 .88 2.44.75 3 .63.69-.07 1.38-.63 1.69-1.2.06-.18.38-1 .12-1.1z" fill="white"/>
                      <path d="M12.5 20.22c-2.56 0-4.5-1.38-4.5-1.38l-3.06.81.75-3c0 0-1.25-1.94-1.25-4.37 0-4.5 3.69-8.25 8.25-8.25 4.25 0 7.88 3.31 7.88 7.94 0 4.5-3.63 8.19-8.06 8.25zm-9.94 1.81 5.19-1.44c1.5.77 3.17 1.14 4.86 1.08 1.69-.07 3.33-.56 4.77-1.44 1.44-.88 2.64-2.11 3.47-3.58.83-1.47 1.27-3.13 1.28-4.81 0-5.38-4.25-9.69-9.63-9.69-1.72.01-3.42.46-4.91 1.32-1.5.86-2.74 2.1-3.61 3.59-.86 1.49-1.32 3.18-1.33 4.91 0 1.72.44 3.42 1.29 4.92z" fill="white"/>
                    </svg>
                  </div>
                  WhatsApp
                </a>
                <a
                  href="mailto:support@dinespower.com"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-[16px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                  onClick={() => setHelpDropdownOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Mail
                </a>
              </div>
            )}
          </div>
          <Link href="/login" className="flex items-center gap-2 h-[44px]">
            <Image src="/images/shop/user-icon.svg" alt="" width={20} height={20} />
            <span className="text-sm font-semibold text-[#181818] leading-5">Login</span>
          </Link>
          <button onClick={openCart} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <div className="relative">
              <Image src="/images/shop/cart-icon.svg" alt="" width={20} height={20} />
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
              {/* Dropdown - brands (only if more than 1 brand) */}
              {cat.brands.length > 1 && (
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
              )}
            </div>
          ))}
        </nav>
      </div>
      </div>
      <VerifyPopup isOpen={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </header>
  );
}
