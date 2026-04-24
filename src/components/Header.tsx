"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { resolveProductHref } from "@/data/products";
import type { Locale } from "@/i18n/dictionary";

const VerifyPopup = dynamic(() => import("@/components/VerifyPopup"), { ssr: false });
const MobileMenu = dynamic(() => import("@/components/MobileMenu"), { ssr: false });

const popularSearches = [
  "Astera Oral",
  "DM Injectable",
  "Gardarine",
  "Fat Burn",
  "Viagra",
  "Health",
];

const popularProducts = [
  { name: "Viamed 100 (Seldenafilcitrat 100mg Oral Jelly - Viagra)", price: "12 \u20AC", image: "/images/shop/products/sex-support-viamed-100.webp" },
  { name: "Yohimbine Fat Burner Capsules", price: "24 \u20AC", image: "/images/shop/products/fat-burn-yohimbine.png" },
  { name: "Viamed 100 (Seldenafilcitrat 100mg Oral Jelly - Viagra)", price: "33 \u20AC", image: "/images/shop/products/sex-support-viamed-100.webp" },
  { name: "MOTS-C-Peptide (Mitochondrien-Abgeleitetes Peptid MOTS-C) In Ampullen", price: "22 \u20AC", image: "/images/shop/products/peptides-hgh-bpc-157.jpg" },
];

const searchProducts = [
  { name: "3-Trenbomed 150 Injectable Steroid In Ampoules", price: "57 \u20AC", image: "/images/shop/products/injectable-trenbomed-150.jpg", brand: "Deus Medical" },
  { name: "Decamed PP 100 Injectable Steroid In Ampoules", price: "34 \u20AC", image: "/images/shop/products/injectable-decamed-pp-100.jpg", brand: "Deus Medical" },
  { name: "Dianamed 100 Injectable Steroid In Ampoules", price: "40 \u20AC", image: "/images/shop/products/injectable-dianamed-100.png", brand: "Deus Medical" },
  { name: "Equimed 250 Injectable Steroid In Ampoules", price: "42 \u20AC", image: "/images/shop/products/injectable-equimed-250.jpg", brand: "Deus Medical" },
  { name: "Anavamed 10 Oral Steroid In Tablets", price: "25 \u20AC", image: "/images/shop/products/oral-anavamed-10.jpg", brand: "Deus Medical" },
  { name: "Dianamed 10 Oral Steroid In Tablets", price: "13 \u20AC", image: "/images/shop/products/oral-dianamed-10.jpg", brand: "Deus Medical" },
  { name: "BPC-157 Peptide In Vials", price: "39 \u20AC", image: "/images/shop/products/peptides-hgh-bpc-157.jpg", brand: "Deus Medical" },
  { name: "Ibutamoren (MK677) SARM In Capsules", price: "60 \u20AC", image: "/images/shop/products/sarms-ibutamoren.png", brand: "Biaxol" },
  // Astera Labs
  { name: "Astera Methenolone Enanthate Injectable Steroid In Vials", price: "125 \u20AC", image: "/images/shop/products/injectable-primomed-100.jpg", brand: "Astera Labs" },
  { name: "Astera Trenbolone Enanthate Injectable Steroid In Ampoules", price: "55 \u20AC", image: "/images/shop/products/injectable-trenbomed-150.jpg", brand: "Astera Labs" },
  { name: "Astera Bacteriostatic Water In Vials", price: "11 \u20AC", image: "/images/shop/products/peptides-hgh-bpc-157.jpg", brand: "Astera Labs" },
  { name: "Astera L-Carnitine In Vials", price: "16 \u20AC", image: "/images/shop/products/fat-burn-yohimbine.png", brand: "Astera Labs" },
  { name: "Astera Nandrolone Phenylpropionate (NPP) Injectable Steroid", price: "34 \u20AC", image: "/images/shop/products/injectable-decamed-pp-100.jpg", brand: "Astera Labs" },
  { name: "Astera Methenolone Enanthate 100 Injectable Steroid In Vials", price: "65 \u20AC", image: "/images/shop/products/injectable-primomed-100.jpg", brand: "Astera Labs" },
];

const topLinks = [
  { label: "Delivery & Payment", href: "/delivery-payment" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const languages: { code: string; label: string; flag: string }[] = [
  { code: "de", label: "Deutsch", flag: "/images/flags/de.svg" },
  { code: "en", label: "English", flag: "/images/flags/gb.svg" },
  { code: "fr", label: "Français", flag: "/images/flags/fr.svg" },
  { code: "es", label: "Español", flag: "/images/flags/es.svg" },
  { code: "it", label: "Italiano", flag: "/images/flags/it.svg" },
  { code: "sv", label: "Svenska", flag: "/images/flags/se.svg" },
  { code: "cs", label: "Čeština", flag: "/images/flags/cz.svg" },
  { code: "nl", label: "Nederlands", flag: "/images/flags/nl.svg" },
  { code: "ru", label: "Русский", flag: "/images/flags/ru.svg" },
  { code: "uk", label: "Українська", flag: "/images/flags/ua.svg" },
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
  const [langOpen, setLangOpen] = useState(false);
  const { locale: currentLang, setLocale, t } = useLocale();
  const setCurrentLang = (code: string) => setLocale(code as Locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((l) => l.code === currentLang) || languages[1];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
      if (helpRef.current && !helpRef.current.contains(e.target as Node)) {
        setHelpDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full flex flex-col relative z-50">
      {/* ========================= MOBILE HEADER (≤640) ========================= */}
      {/* Spacer that reserves layout space for the fixed bar below so content doesn't slide under it */}
      <div className="tablet:hidden h-[106px] shrink-0" aria-hidden />
      <div className="w-full tablet:hidden flex flex-col fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Top announcement bar */}
        <div className="bg-[#181818] flex items-center justify-center px-4 pt-2 pb-5 -mb-4 gap-2">
          <Image src="/images/shop/shield-check.svg" alt="" width={20} height={20} className="shrink-0" />
          <span className="text-[12px] text-white leading-4">{t("header.allProductsTested")}</span>
          <Link href="/lab-tests" className="text-[10px] font-semibold text-white underline leading-[14px] ml-1">See Lab Test</Link>
        </div>
        {/* Main mobile bar */}
        <div className="bg-white h-[68px] flex items-center justify-between px-5 gap-3 border-b border-[#EDEDED] rounded-tl-[12px] rounded-tr-[12px] relative z-10">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
            className="w-10 h-10 flex items-center justify-center shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/" className="shrink-0">
            <Image src="/images/shop/logo-header.svg" alt="Dines Power" width={90} height={38} />
          </Link>
          <div className="flex-1" />
          <button
            onClick={() => setSearchFocused(true)}
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center shrink-0"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#181818" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
            aria-label="Help"
            className="w-10 h-10 flex items-center justify-center shrink-0 relative"
          >
            <svg width="24" height="24" viewBox="0 0 20 17.3293" fill="#FF6701" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0259 17.2494L14.4957 14.6615L3.39174 14.6655C1.45393 14.6664 -0.00179552 13.1482 1.66224e-06 11.2225L0.00763971 3.34591C0.0089876 1.48942 1.48178 0 3.34277 0L16.6945 0.00179719C18.5128 0.00179719 19.9982 1.47953 19.9982 3.30008L20 16.6487C20 16.8972 19.8751 17.093 19.7196 17.1991C19.526 17.3312 19.2667 17.3873 19.0255 17.2494H19.0259ZM6.2933 6.09336C5.61711 6.22006 5.22982 6.86885 5.37269 7.49652C5.51108 8.10172 6.1046 8.49396 6.72418 8.37939C7.3478 8.26437 7.7652 7.65557 7.65377 7.03644C7.54145 6.41326 6.95961 5.96846 6.2933 6.09336ZM9.79198 6.09291C9.11309 6.22096 8.72984 6.8684 8.87092 7.49697C9.00705 8.10217 9.60282 8.49575 10.2255 8.37804C10.8483 8.26032 11.2625 7.65647 11.152 7.03689C11.041 6.41506 10.4565 5.96801 9.79198 6.09336V6.09291ZM13.2889 6.09381C12.6127 6.22096 12.2263 6.86975 12.3687 7.49652C12.5066 8.10262 13.1028 8.4962 13.7229 8.37894C14.3429 8.26167 14.7607 7.65512 14.6498 7.03689C14.5388 6.41865 13.957 5.96846 13.2884 6.09426L13.2889 6.09381Z" />
            </svg>
          </button>
          <button onClick={openCart} aria-label="Cart" className="w-10 h-10 flex items-center justify-center shrink-0 relative">
            <Image src="/images/shop/cart-icon.svg" alt="" width={22} height={22} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-[#FF6701] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">{totalItems}</span>
            )}
          </button>
        </div>
      </div>

      {/* ========================= TABLET HEADER (641-960) ========================= */}
      <div className="w-full hidden tablet:flex desktop:hidden flex-col sticky top-0 z-50 bg-white">
        {/* Top announcement bar */}
        <div className="bg-[#181818] h-[36px] flex items-center justify-center px-6 gap-2">
          <Image src="/images/shop/shield-check.svg" alt="" width={16} height={16} className="shrink-0" />
          <span className="text-[12px] text-white leading-none">{t("header.allProductsTested")}</span>
          <Link href="/lab-tests" className="text-[12px] font-semibold text-white underline leading-none ml-1">See Lab Test</Link>
          <div className="flex-1" />
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="cursor-pointer flex items-center gap-1.5 py-1 px-2 rounded hover:bg-white/[0.06] transition-colors"
              aria-label="Select language"
            >
              <Image src={selectedLang.flag} alt="" width={18} height={11} className="object-cover rounded-[2px]" />
              <span className="text-[12px] text-[#F7F7F7] leading-4">{selectedLang.label}</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform ${langOpen ? "rotate-180" : ""}`}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#F7F7F7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#E7E7E7] p-2 z-[60] flex flex-col">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setCurrentLang(lang.code); setLangOpen(false); }}
                    className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-[8px] transition-colors text-left ${
                      currentLang === lang.code ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                    }`}
                  >
                    <Image src={lang.flag} alt="" width={24} height={16} className="object-cover rounded-[2px] shrink-0" />
                    <span className="text-[14px] font-medium text-[#181818] leading-5">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main tablet bar: hamburger + logo + search + icons */}
        <div className="bg-white h-[76px] flex items-center px-6 gap-4 border-b border-[#F0F0F0]">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
            className="w-10 h-10 flex items-center justify-center shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <Link href="/" className="shrink-0">
            <Image src="/images/shop/logo-header.svg" alt="Dines Power" width={96} height={40} />
          </Link>

          {/* Search input — takes flex-1 */}
          <div className="flex-1 h-[44px] relative min-w-0" ref={searchRef}>
            <div className={`border rounded-lg flex items-center gap-3 px-4 h-full transition-colors ${searchFocused ? "bg-white border-[#E0E0E0]" : "bg-[#F7F7F7] border-[#E7E7E7]"}`}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className={`shrink-0 ${searchFocused ? "opacity-60" : "opacity-30"}`}>
                <circle cx="9.17" cy="9.17" r="6.67" stroke="#181818" strokeWidth="1.5"/>
                <path d="M16.67 16.67L14.17 14.17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search…"
                className="bg-transparent flex-1 min-w-0 text-[14px] text-[#181818] placeholder:text-[#7E7E7E] outline-none leading-5"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-[#7E7E7E] hover:text-[#181818] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              )}
            </div>
            {searchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#F7F7F7] border border-[#E7E7E7] rounded-[12px] shadow-lg z-50 p-4 flex flex-col gap-4">
                {searchQuery.trim() ? (
                  <>
                    {(() => {
                      const results = searchProducts.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6);
                      if (results.length === 0) {
                        return <div className="bg-white rounded-[12px] py-8 text-center text-[14px] text-[#7E7E7E]">No products found</div>;
                      }
                      return (
                        <div className="bg-white rounded-[12px] flex flex-col">
                          {results.map((product, i) => (
                            <Link key={i} href={resolveProductHref(product.name)} onClick={() => setSearchFocused(false)}
                              className={`flex items-center gap-3 px-3 py-2.5 hover:bg-[#F7F7F7] transition-colors ${i < results.length - 1 ? "border-b border-[#E7E7E7]" : ""}`}>
                              <div className="w-[44px] h-[44px] bg-[#F7F7F7] rounded-[8px] shrink-0 relative overflow-hidden p-1">
                                <Image src={product.image} alt={product.name} fill sizes="48px" className="object-contain p-1" />
                              </div>
                              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                                <p className="text-[13px] font-semibold text-[#181818] leading-[18px] line-clamp-2">{product.name}</p>
                                <p className="text-[13px] text-[#7E7E7E] leading-4">{product.price}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      );
                    })()}
                    <Link href={`/search?q=${encodeURIComponent(searchQuery)}`} onClick={() => setSearchFocused(false)}
                      className="flex items-center justify-center w-full h-[48px] bg-[#181818] hover:bg-[#333] text-white text-[15px] font-semibold rounded-[10px] transition-colors">
                      See All
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-2.5">
                      <span className="text-[13px] text-[#7E7E7E] leading-5">Popular Searches</span>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button key={term} onClick={() => setSearchQuery(term)}
                            className="cursor-pointer px-3 h-8 rounded-full bg-white border border-[#E7E7E7] text-[13px] font-semibold text-[#181818] hover:border-[#181818] transition-colors">
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

          {/* Icons cluster */}
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => setVerifyOpen(true)} aria-label="Verify Authenticity" className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-[#F7F7F7] rounded-lg transition-colors">
              <Image src="/images/shop/verify-icon.svg" alt="" width={22} height={22} />
            </button>
            <div className="relative" ref={helpRef}>
              <button onClick={() => setHelpDropdownOpen(!helpDropdownOpen)} aria-label="Need Help?" className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-[#F7F7F7] rounded-lg transition-colors">
                <Image src="/images/shop/need-help-icon.svg" alt="" width={22} height={22} />
              </button>
              {helpDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg p-2 min-w-[220px] z-50">
                  <a href="https://t.me/+eFl6hboMcbxlNDI0" target="_blank" rel="noopener noreferrer" onClick={() => setHelpDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[14px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3.32 11.87 18.75 5.92c.72-.26 1.34.17 1.11 1.26L17.23 19.55c-.19.88-.71 1.09-1.44.68l-4-2.95-1.93 1.86c-.21.21-.39.39-.81.39l.29-4.07 7.41-6.7c.32-.28-.07-.44-.5-.16l-9.16 5.77-3.95-1.23c-.86-.27-.88-.86.18-1.27z" fill="white"/></svg>
                    </div>
                    Telegram
                  </a>
                  <a href="https://wa.me/dinespower" target="_blank" rel="noopener noreferrer" onClick={() => setHelpDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[14px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#00D43F] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15.25 13.28c-.19-.13-.38-.19-.56.06l-.75 1c-.19.13-.31.19-.56.06-.94-.5-2.25-1.06-3.38-2.94-.06-.25.06-.38.19-.5l.56-.88c.13-.12.06-.25 0-.37l-.75-1.82c-.19-.5-.38-.43-.56-.43h-.5c-.13 0-.38.06-.63.31-1.37 1.38-.81 3.31.19 4.56.19.25 1.44 2.5 4.12 3.69 2 .88 2.44.75 3 .63.69-.07 1.38-.63 1.69-1.2.06-.18.38-1 .12-1.1z" fill="white"/></svg>
                    </div>
                    WhatsApp
                  </a>
                  <a href="mailto:support@dinespower.com" onClick={() => setHelpDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[14px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    Mail
                  </a>
                </div>
              )}
            </div>
            <Link href="/login" aria-label="Login" className="w-10 h-10 flex items-center justify-center hover:bg-[#F7F7F7] rounded-lg transition-colors">
              <Image src="/images/shop/user-icon.svg" alt="" width={20} height={20} />
            </Link>
            <button onClick={openCart} aria-label="Cart" className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-[#F7F7F7] rounded-lg transition-colors relative">
              <Image src="/images/shop/cart-icon.svg" alt="" width={20} height={20} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-[#FF6701] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">{totalItems}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================= DESKTOP HEADER (≥961) ========================= */}
      {/* Top bar — full width dark. pb-6 is the overlap zone for the rounded white bar below (-mt-[16px]). */}
      <div className="hidden desktop:block w-full bg-[#181818] pb-6">
        <div className="max-w-[1340px] mx-auto w-full px-4 flex items-center justify-between h-[40px]">
          <div className="flex-1 flex gap-5 items-center">
            {topLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-[#B6B6B6] hover:text-white transition-colors leading-4"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/shop/shield-check.svg" alt="" width={24} height={24} />
            <span className="text-sm text-white leading-[18px]">{t("header.allProductsTested")}</span>
            <Link href="/lab-tests" className="text-sm font-semibold text-white underline leading-5 ml-1">See Lab Test</Link>
          </div>
          <div className="flex-1 flex items-center justify-end" ref={langRef}>
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="cursor-pointer flex items-center gap-1.5 py-1 px-2 rounded hover:bg-white/[0.06] transition-colors"
                aria-label="Select language"
              >
                <Image src={selectedLang.flag} alt="" width={20} height={12} className="object-cover rounded-[2px]" />
                <span className="text-xs text-[#F7F7F7] leading-4">{selectedLang.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${langOpen ? "rotate-180" : ""}`}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#F7F7F7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#E7E7E7] p-2 z-[60] flex flex-col">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-[8px] transition-colors text-left ${
                        currentLang === lang.code ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                      }`}
                    >
                      <Image src={lang.flag} alt="" width={24} height={16} className="object-cover rounded-[2px] shrink-0" />
                      <span className="text-[14px] font-medium text-[#181818] leading-5">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* White content wrapper — rounded top corners overlap dark top bar */}
      <div className="hidden desktop:flex w-full bg-white rounded-t-[16px] -mt-[16px] relative pt-4 flex-col gap-[16px] z-[40]">
      <div className="max-w-[1340px] mx-auto w-full px-4 flex flex-col gap-[16px]">

      {/* Middle bar */}
      <div className="w-full flex items-center gap-6 wide:gap-[40px] h-[44px]">
        <div className="flex items-center gap-4 wide:gap-[24px] shrink-0">
          <Link href="/" className="shrink-0">
            <Image src="/images/shop/logo-header.svg" alt="Dines Power" width={106} height={44} />
          </Link>
          <span className="hidden wide:inline text-xs text-[#7E7E7E] leading-4">
            {t("header.officialRep")}<br/>{t("header.officialRepBrands")}
          </span>
        </div>
        <div className="flex-1 h-[44px] relative" ref={searchRef}>
          <div className={`border rounded-lg flex items-center gap-3 px-4 h-full transition-colors ${searchFocused ? "bg-white border-[#E0E0E0]" : "bg-[#F7F7F7] border-[#E7E7E7]"}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`shrink-0 ${searchFocused ? "opacity-60" : "opacity-30"}`}>
              <circle cx="9.17" cy="9.17" r="6.67" stroke="#181818" strokeWidth="1.5"/>
              <path d="M16.67 16.67L14.17 14.17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder={t("header.searchPlaceholder")}
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
          {/* Search dropdown — Figma style: popular tags + popular products list */}
          {searchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#F7F7F7] border border-[#E7E7E7] rounded-[12px] shadow-lg z-50 p-4 flex flex-col gap-4">
              {searchQuery.trim() ? (
                <>
                  {/* Search results — only product list + See All */}
                  {(() => {
                    const results = searchProducts.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 7);
                    if (results.length === 0) {
                      return (
                        <div className="bg-white rounded-[12px] py-8 text-center text-[14px] text-[#7E7E7E]">No products found</div>
                      );
                    }
                    return (
                      <div className="bg-white rounded-[12px] flex flex-col">
                        {results.map((product, i) => (
                          <Link
                            key={i}
                            href={resolveProductHref(product.name)}
                            onClick={() => setSearchFocused(false)}
                            className={`flex items-center gap-4 px-4 py-3 hover:bg-[#F7F7F7] transition-colors ${i < results.length - 1 ? "border-b border-[#E7E7E7]" : ""} ${i === 0 ? "rounded-t-[12px]" : ""} ${i === results.length - 1 ? "rounded-b-[12px]" : ""}`}
                          >
                            <div className="w-[48px] h-[48px] bg-[#F7F7F7] rounded-[8px] shrink-0 relative overflow-hidden p-1">
                              <Image src={product.image} alt={product.name} fill sizes="48px" className="object-contain p-1" />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col gap-1">
                              <p className="text-[14px] font-semibold text-[#181818] leading-5 line-clamp-2">{product.name}</p>
                              <p className="text-[14px] text-[#7E7E7E] leading-5">{product.price}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    );
                  })()}
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    onClick={() => setSearchFocused(false)}
                    className="flex items-center justify-center w-full h-[52px] bg-[#181818] hover:bg-[#333] text-white text-[16px] font-semibold rounded-[12px] transition-colors"
                  >
                    See All
                  </Link>
                </>
              ) : (
                <>
                  {/* Idle state: popular tags + popular products */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[14px] text-[#7E7E7E] leading-5">Popular Searches</span>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="cursor-pointer px-4 h-9 rounded-full bg-white border border-[#E7E7E7] text-[14px] font-semibold text-[#181818] hover:border-[#181818] transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-[14px] text-[#7E7E7E] leading-5">Popular Products</span>
                    <div className="bg-white rounded-[12px] flex flex-col">
                      {popularProducts.map((product, i) => (
                        <Link
                          key={i}
                          href={resolveProductHref(product.name)}
                          onClick={() => setSearchFocused(false)}
                          className={`flex items-center gap-4 px-4 py-3 hover:bg-[#F7F7F7] transition-colors ${i < popularProducts.length - 1 ? "border-b border-[#E7E7E7]" : ""} ${i === 0 ? "rounded-t-[12px]" : ""} ${i === popularProducts.length - 1 ? "rounded-b-[12px]" : ""}`}
                        >
                          <div className="w-[48px] h-[48px] bg-[#F7F7F7] rounded-[8px] shrink-0 relative overflow-hidden p-1">
                            <Image src={product.image} alt={product.name} fill sizes="48px" className="object-contain p-1" />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col gap-1">
                            <p className="text-[14px] font-semibold text-[#181818] leading-5 line-clamp-2">{product.name}</p>
                            <p className="text-[14px] text-[#7E7E7E] leading-5">{product.price}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 wide:gap-[24px] shrink-0">
          <button onClick={() => setVerifyOpen(true)} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <Image src="/images/shop/verify-icon.svg" alt="" width={24} height={24} className="w-6 h-6" />
            <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors whitespace-nowrap">{t("header.verifyAuthenticity")}</span>
          </button>
          <div className="relative" ref={helpRef}>
            <button onClick={() => setHelpDropdownOpen(!helpDropdownOpen)} className="flex items-center gap-2 h-[44px] cursor-pointer group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#181818] group-hover:text-[#FF6701] transition-colors">
                <path d="M21.75 12V20.26C21.75 20.68 21.54 21.06 21.2 21.3C20.99 21.44 20.74 21.52 20.5 21.52C20.34 21.52 20.18 21.49 20.04 21.43L16.94 19.79C16.68 19.77 16 19.75 15.81 19.75H11C9.48 19.75 8.25 18.52 8.25 17V15.92H15.25C17.49 15.92 19.25 13.76 19.25 11V9.26C20.65 9.39 21.75 10.56 21.75 12ZM17.75 5.666V10.999C17.75 12.915 16.652 14.416 15.25 14.416H6.84L4.265 17.359C4.041 17.614 3.745 17.751 3.441 17.751C3.317 17.751 3.193 17.729 3.071 17.683C2.573 17.495 2.251 16.965 2.251 16.332V5.666C2.251 3.751 3.349 2.25 4.751 2.25H15.251C16.653 2.25 17.75 3.751 17.75 5.666ZM11.75 10C11.75 9.586 11.414 9.25 11 9.25H6C5.586 9.25 5.25 9.586 5.25 10C5.25 10.414 5.586 10.75 6 10.75H11C11.414 10.75 11.75 10.414 11.75 10ZM14.75 7C14.75 6.586 14.414 6.25 14 6.25H6C5.586 6.25 5.25 6.586 5.25 7C5.25 7.414 5.586 7.75 6 7.75H14C14.414 7.75 14.75 7.414 14.75 7Z" fill="currentColor"/>
              </svg>
              <span className="text-sm font-semibold text-[#181818] leading-5 group-hover:text-[#FF6701] transition-colors whitespace-nowrap">{t("header.needHelp")}</span>
            </button>
            {helpDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg p-2 min-w-[240px] z-50">
                <a
                  href="https://t.me/+eFl6hboMcbxlNDI0"
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
            <span className="text-sm font-semibold text-[#181818] leading-5 whitespace-nowrap">{t("header.login")}</span>
          </Link>
          <button onClick={openCart} className="flex items-center gap-2 h-[44px] cursor-pointer">
            <div className="relative">
              <Image src="/images/shop/cart-icon.svg" alt="" width={20} height={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#FF6701] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">{totalItems}</span>
              )}
            </div>
            <span className="text-sm font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors whitespace-nowrap">{t("header.cart")}</span>
          </button>
        </div>
      </div>

      {/* Navigation bar with dropdowns */}
      <div className="w-full border-t border-b border-[#EDEDED]">
        <nav className="flex items-center wide:justify-between gap-4 wide:gap-0 h-[48px]">
          {categoryData.map((cat) => {
            const hasDropdown = cat.brands.length > 1;
            return (
            <div key={cat.name} className="relative group h-full flex items-center shrink-0">
              <Link
                href={`/catalog?category=${cat.slug}`}
                className="flex items-center gap-1 text-sm font-semibold text-[#181818] group-hover:text-[#FF6701] transition-colors leading-5 whitespace-nowrap"
              >
                {cat.name}
                {hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:rotate-180">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {/* Dropdown - brands (only if more than 1 brand) */}
              {hasDropdown && (
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
            );
          })}
        </nav>
      </div>
      </div>
      </div>
      <VerifyPopup isOpen={verifyOpen} onClose={() => setVerifyOpen(false)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
