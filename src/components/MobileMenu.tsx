"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Injectable", slug: "injectable", icon: "/images/shop/cat-injectable.png", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Oral", slug: "oral", icon: "/images/shop/cat-oral.png", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Fat Burn", slug: "fat-burn", icon: "/images/shop/cat-fatburn.png", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "Peptides & HGC", slug: "peptides-hgh", icon: "/images/shop/cat-peptides.png", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "SARMs", slug: "sarms", icon: "/images/shop/cat-stacks.png", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "PCT", slug: "pct", icon: "/images/shop/cat-pct.png", brands: ["Astera Labs", "Deus Medical", "Biaxol"] },
  { name: "Energy", slug: "energy", icon: "/images/shop/cat-other.png", brands: ["Biaxol"] },
  { name: "Sex Support", slug: "sex-support", icon: "/images/shop/cat-sexsupport.png", brands: ["Astera Labs", "Deus Medical"] },
  { name: "Health", slug: "health", icon: "/images/shop/cat-other.png", brands: ["Biaxol"] },
  { name: "Stacks", slug: "stacks", icon: "/images/shop/cat-stacks.png", brands: ["Deus Medical", "Biaxol"] },
  { name: "Amino Acids", slug: "amino-acids", icon: "/images/shop/cat-other.png", brands: ["Astera Labs"] },
];

// Figma-exact icons (vuesax bold style)
const icons = {
  login: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM3 21c0-4.97 4.03-9 9-9s9 4.03 9 9H3z" />
    </svg>
  ),
  labTests: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" fill="#00B638" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  verify: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l1.5 1.2 1.9-.3.7 1.8 1.8.7-.3 1.9 1.2 1.5-1.2 1.5.3 1.9-1.8.7-.7 1.8-1.9-.3L12 14l-1.5-1.2-1.9.3-.7-1.8-1.8-.7.3-1.9L5.2 7.2l1.2-1.5-.3-1.9 1.8-.7.7-1.8 1.9.3L12 2z" fill="#1DA1F2"/>
      <path d="M9 8l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  about: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M4 2h16v20H4V2z" />
      <path d="M8 6h3v3H8zM13 6h3v3h-3zM8 11h3v3H8zM13 11h3v3h-3zM10 16h4v6h-4z" fill="white" />
    </svg>
  ),
  delivery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M21 8H3v12h18V8z" />
      <path d="M12 3l-9 5h18l-9-5z" />
      <path d="M8 14l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  blog: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M5 2h14v20H5V2z" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  faqs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9.5a2.9 2.9 0 015.8.5c0 2-3 2.5-3 4M12 17.5h.01" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  contact: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
      <path d="M22 16.92V19a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 3.18 2 2 0 014.11 1h3.08a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.01a16 16 0 006 6l1.37-1.37a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72a2 2 0 011.72 2.01z" />
    </svg>
  ),
  shopGrid: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1" fill="#FF6701" />
      <rect x="13" y="3" width="8" height="8" rx="1" fill="#FF6701" />
      <rect x="3" y="13" width="8" height="8" rx="1" fill="#FF6701" />
      <rect x="13" y="13" width="8" height="8" rx="1" fill="#FF6701" />
    </svg>
  ),
};

const mainMenuLinks = [
  { label: "Lab Tests", href: "/lab-tests", icon: icons.labTests },
  { label: "Verify Authenticity", href: "#verify", action: "verify", icon: icons.verify },
  { label: "About Us", href: "/about", icon: icons.about },
  { label: "Delivery & Payment", href: "/delivery-payment", icon: icons.delivery },
  { label: "Blog", href: "/blog", icon: icons.blog },
  { label: "FAQs", href: "/faqs", icon: icons.faqs },
  { label: "Contact", href: "/contact", icon: icons.contact },
];

const languages = [
  { code: "en", label: "English", flag: "/images/flags/gb.svg" },
  { code: "de", label: "Deutsch", flag: "/images/flags/de.svg" },
  { code: "fr", label: "Français", flag: "/images/flags/fr.svg" },
  { code: "es", label: "Español", flag: "/images/flags/es.svg" },
  { code: "it", label: "Italiano", flag: "/images/flags/it.svg" },
  { code: "sv", label: "Svenska", flag: "/images/flags/se.svg" },
  { code: "cs", label: "Čeština", flag: "/images/flags/cz.svg" },
  { code: "nl", label: "Nederlands", flag: "/images/flags/nl.svg" },
  { code: "ru", label: "Русский", flag: "/images/flags/ru.svg" },
  { code: "uk", label: "Українська", flag: "/images/flags/ua.svg" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [level, setLevel] = useState<"main" | "shop" | "brands">("main");
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  if (!isOpen) return null;

  const selectedLang = languages.find((l) => l.code === currentLang) || languages[0];

  const close = () => {
    setLevel("main");
    setSelectedCategory(null);
    setLangOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] desktop:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="absolute left-0 top-0 bottom-0 w-[90%] max-w-[375px] bg-[#F7F7F7] overflow-y-auto">
        {level === "main" && (
          <div className="flex flex-col">
            {/* Language + close */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F7F7F7]">
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 bg-white border border-[#E7E7E7] rounded-[8px] py-1.5 px-3"
                >
                  <Image src={selectedLang.flag} alt="" width={20} height={14} className="object-cover rounded-[2px]" />
                  <span className="text-[14px] font-semibold text-[#181818]">{selectedLang.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${langOpen ? "rotate-180" : ""}`}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[200px] bg-white rounded-[12px] shadow-lg border border-[#E7E7E7] p-2 z-10 flex flex-col">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangOpen(false);
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-[8px] text-left ${
                          currentLang === lang.code ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                        }`}
                      >
                        <Image src={lang.flag} alt="" width={20} height={14} className="object-cover rounded-[2px] shrink-0" />
                        <span className="text-[14px] font-medium text-[#181818]">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={close} className="w-8 h-8 flex items-center justify-center" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="px-4 pb-4 flex flex-col gap-2">
              {/* Shop highlighted */}
              <button
                onClick={() => setLevel("shop")}
                className="bg-[#FFE8D6] rounded-[12px] px-4 py-3 flex items-center gap-3"
              >
                <span className="w-6 h-6">{icons.shopGrid}</span>
                <span className="flex-1 text-left text-[14px] font-semibold text-[#181818]">Shop</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Login */}
              <Link
                href="/login"
                onClick={close}
                className="bg-white border border-[#E7E7E7] rounded-[12px] px-4 py-3 flex items-center gap-3"
              >
                <span className="w-6 h-6">{icons.login}</span>
                <span className="flex-1 text-[14px] font-semibold text-[#181818]">Login</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Links group */}
              <div className="bg-white border border-[#E7E7E7] rounded-[12px] py-1 flex flex-col">
                {mainMenuLinks.map((link, i) => (
                  link.action === "verify" ? (
                    <button
                      key={link.label}
                      onClick={() => {
                        close();
                        window.dispatchEvent(new CustomEvent("open-verify-popup"));
                      }}
                      className={`flex items-center gap-3 px-4 py-3 ${i < mainMenuLinks.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                    >
                      <span className="w-6 h-6 flex items-center justify-center shrink-0">{link.icon}</span>
                      <span className="flex-1 text-left text-[14px] font-semibold text-[#181818]">{link.label}</span>
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={close}
                      className={`flex items-center gap-3 px-4 py-3 ${i < mainMenuLinks.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
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
                    <p className="text-[#FF6701] text-[14px] font-extrabold leading-5">Save Up To 50% On Shipping</p>
                    <p className="text-white/70 text-[11px] leading-4 mt-1">Wholesale orders unlock better shipping rates and partner discounts.</p>
                  </div>
                </div>
                <a
                  href="https://dinespower.to/partners-landing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#181818] h-10 rounded-[8px] flex items-center justify-center text-[13px] font-semibold"
                >
                  Get Wholesale Prices
                </a>
              </div>
            </div>
          </div>
        )}

        {level === "shop" && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0] bg-white">
              <button onClick={() => setLevel("main")} className="w-8 h-8 flex items-center justify-center" aria-label="Back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-[14px] font-semibold text-[#181818]">Shop</span>
              <button onClick={close} className="w-8 h-8 flex items-center justify-center" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col bg-white">
              {categories.map((cat, i) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLevel("brands");
                  }}
                  className={`flex items-center gap-4 px-4 py-3 ${i < categories.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center overflow-hidden shrink-0">
                    <Image src={cat.icon} alt="" width={40} height={40} className="object-contain" />
                  </div>
                  <span className="flex-1 text-left text-[14px] font-semibold text-[#181818]">{cat.name}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}

        {level === "brands" && selectedCategory && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0] bg-white">
              <button onClick={() => setLevel("shop")} className="w-8 h-8 flex items-center justify-center" aria-label="Back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-[14px] font-semibold text-[#181818]">{selectedCategory.name}</span>
              <button onClick={close} className="w-8 h-8 flex items-center justify-center" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col bg-white">
              {selectedCategory.brands.map((brand) => (
                <Link
                  key={brand}
                  href={`/catalog?category=${selectedCategory.slug}&brand=${brand.toLowerCase().replace(/ /g, "-")}`}
                  onClick={close}
                  className="flex items-center px-4 py-4 border-b border-[#F0F0F0]"
                >
                  <span className="flex-1 text-[14px] font-semibold text-[#181818]">{brand}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
              <Link
                href={`/catalog?category=${selectedCategory.slug}`}
                onClick={close}
                className="flex items-center px-4 py-4"
              >
                <span className="flex-1 text-[14px] font-semibold text-[#181818]">See All</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
