"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const allProducts = [
  { brand: "Deus Medical", name: "Vaso burn – thermogenic formula for fat oxidation and energy", dosage: "325 mg/ml", price: 44, oldPrice: 56, badges: ["sale", "top"] as string[] },
  { brand: "Astera Labs", name: "Dietary supplements for fat burning and energy supply", dosage: "325 mg/ml", price: 44, badges: ["new"] as string[] },
  { brand: "Astera Labs", name: "Vaso burn – thermogenic formula for fat oxidation and energy", dosage: "295 mg/ml", price: 33, badges: ["top"] as string[] },
  { brand: "Deus Medical", name: "MOTS-C-Peptide mitochondrial-derived peptide", dosage: "325 mg/ml", price: 50, badges: ["top", "new"] as string[] },
  { brand: "Deus Medical", name: "Testosterone Enanthate 250mg/ml injection", dosage: "250 mg/ml", price: 38, badges: [] as string[] },
  { brand: "Biaxol", name: "CBD Recovery Complex full spectrum hemp extract", dosage: "500 mg", price: 52, badges: ["new"] as string[] },
  { brand: "Deus Medical", name: "RAD-140 Testolone selective androgen receptor modulator", dosage: "10 mg/tab", price: 62, badges: ["top"] as string[] },
  { brand: "Deus Medical", name: "MK-677 Ibutamoren growth hormone secretagogue", dosage: "25 mg/tab", price: 58, badges: [] as string[] },
];

const popularSearches = ["Ostarine", "Testosterone", "SARMs", "Peptides", "Fat Burner", "CBD"];
const recentSearches = ["Vaso burn", "MOTS-C", "Deus Medical"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const results = submitted && query.length >= 2
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const suggestions = !submitted && query.length >= 1
    ? allProducts
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase())
        )
        .map((p) => p.name)
        .slice(0, 5)
    : [];

  const handleSearch = () => {
    if (query.length >= 2) {
      setSubmitted(true);
      setIsFocused(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setSubmitted(false);
  };

  const handleSuggestionClick = (text: string) => {
    setQuery(text);
    setSubmitted(true);
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showDropdown = isFocused && !submitted;

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Search</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16">
          {/* Search input */}
          <div className="relative max-w-[700px] mb-8">
            <div className="flex gap-3">
              <div className="flex-1 bg-[#F7F7F7] border border-[#E7E7E7] rounded-[16px] flex items-center gap-3 px-6 h-[56px]">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="opacity-30 shrink-0">
                  <circle cx="9.17" cy="9.17" r="6.67" stroke="#181818" strokeWidth="1.5" />
                  <path d="M16.67 16.67L14.17 14.17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent flex-1 text-base text-[#181818] placeholder:text-[#7E7E7E] outline-none"
                  autoFocus
                />
                {query && (
                  <button onClick={() => { setQuery(""); setSubmitted(false); }} className="text-[#7E7E7E] hover:text-[#181818] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold px-6 rounded-[16px] h-[56px] transition-colors shrink-0"
              >
                Search
              </button>
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute top-[64px] left-0 right-[90px] bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg z-50 py-4 px-5"
              >
                {query.length >= 1 && suggestions.length > 0 ? (
                  /* Suggestions state */
                  <div>
                    <p className="text-[12px] font-semibold text-[#7E7E7E] uppercase tracking-wide mb-3">Suggestions</p>
                    <div className="flex flex-col">
                      {suggestions.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestionClick(s)}
                          className="text-left text-[14px] text-[#181818] py-2 px-2 rounded-[8px] hover:bg-[#F7F7F7] transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Default state: Recent + Popular */
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-[12px] font-semibold text-[#7E7E7E] uppercase tracking-wide mb-3">Recent Searches</p>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSuggestionClick(s)}
                            className="text-[13px] text-[#181818] bg-[#F7F7F7] hover:bg-[#EFEFEF] px-3 py-1.5 rounded-[8px] transition-colors flex items-center gap-1.5"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-40">
                              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#7E7E7E] uppercase tracking-wide mb-3">Popular Searches</p>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSuggestionClick(s)}
                            className="text-[13px] text-[#181818] bg-[#F7F7F7] hover:bg-[#EFEFEF] px-3 py-1.5 rounded-[8px] transition-colors"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Results */}
          {submitted && query.length >= 2 ? (
            results.length === 0 ? (
              <div className="max-w-[720px] mx-auto py-10 tablet:py-16">
                {/* Illustration */}
                <div className="flex justify-center mb-6 tablet:mb-8">
                  <div className="relative w-[120px] h-[120px] tablet:w-[160px] tablet:h-[160px] rounded-full bg-[#F7F7F7] flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="tablet:w-[88px] tablet:h-[88px]">
                      <circle cx="28" cy="28" r="18" stroke="#181818" strokeWidth="3" />
                      <path d="M42 42L54 54" stroke="#181818" strokeWidth="3" strokeLinecap="round" />
                      <path d="M22 28L34 28M28 22L28 34" stroke="#FF6701" strokeWidth="3" strokeLinecap="round" transform="rotate(45 28 28)" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8 tablet:mb-10">
                  <h2 className="text-[24px] tablet:text-[32px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[40px] mb-3">
                    Nothing Found For <span className="text-[#FF6701]">&ldquo;{query}&rdquo;</span>
                  </h2>
                  <p className="text-[14px] tablet:text-[15px] text-[#7E7E7E] leading-[22px] max-w-[480px] mx-auto">
                    Try a different keyword, check spelling, or explore popular categories below.
                  </p>
                </div>

                {/* Popular searches chips */}
                <div className="mb-8 tablet:mb-10">
                  <p className="text-[12px] font-semibold text-[#7E7E7E] uppercase tracking-wide mb-3 text-center">Popular Searches</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {popularSearches.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSuggestionClick(s)}
                        className="text-[13px] tablet:text-[14px] text-[#181818] bg-[#F7F7F7] hover:bg-[#EFEFEF] border border-[#E7E7E7] px-4 py-2 rounded-[10px] transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category tiles */}
                <div className="grid grid-cols-2 tablet:grid-cols-4 gap-3 mb-8">
                  {[
                    { label: "Injectables", slug: "injectable" },
                    { label: "Oral", slug: "oral" },
                    { label: "SARMs", slug: "sarms" },
                    { label: "Peptides", slug: "peptides" },
                  ].map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/catalog?category=${cat.slug}`}
                      className="border border-[#E7E7E7] hover:border-[#181818] rounded-[12px] px-4 py-4 text-center text-[13px] tablet:text-[14px] font-semibold text-[#181818] transition-colors"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col tablet:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setQuery(""); setSubmitted(false); inputRef.current?.focus(); }}
                    className="h-[48px] px-6 rounded-[12px] border border-[#E7E7E7] hover:border-[#181818] text-[14px] font-semibold text-[#181818] transition-colors"
                  >
                    Clear Search
                  </button>
                  <Link
                    href="/catalog"
                    className="h-[48px] px-8 rounded-[12px] bg-[#FF6701] hover:bg-[#E65D00] text-white text-[14px] font-semibold flex items-center justify-center transition-colors"
                  >
                    Browse All Products
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-2">
                  Search Results &lsquo;{query}&rsquo;
                </h1>
                <p className="text-sm text-[#7E7E7E] mb-6">{results.length} result{results.length !== 1 ? "s" : ""} found</p>
                <div className="flex flex-wrap gap-4">
                  {results.map((p, i) => (
                    <ProductCard key={i} {...p} />
                  ))}
                </div>
              </>
            )
          ) : !submitted ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-bold text-[#181818] mb-2">Start Searching</h2>
              <p className="text-sm text-[#7E7E7E]">Type at least 2 characters and press Search or Enter.</p>
            </div>
          ) : null}
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
