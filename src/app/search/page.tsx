"use client";

import { useState } from "react";
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

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = query.length >= 2
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const hasSearched = query.length >= 2;

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
          <h1 className="text-3xl font-extrabold text-[#181818] mb-8">Search Products</h1>

          {/* Search input */}
          <div className="flex gap-3 mb-8 max-w-[700px]">
            <div className="flex-1 bg-[#F7F7F7] border border-[#E7E7E7] rounded-[16px] flex items-center gap-3 px-6 h-[56px]">
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="opacity-30 shrink-0">
                <circle cx="9.17" cy="9.17" r="6.67" stroke="#181818" strokeWidth="1.5" />
                <path d="M16.67 16.67L14.17 14.17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent flex-1 text-base text-[#181818] placeholder:text-[#7E7E7E] outline-none"
                autoFocus
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-[#7E7E7E] hover:text-[#181818] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              )}
            </div>
            <button className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold px-6 rounded-[16px] h-[56px] transition-colors shrink-0">
              Search
            </button>
          </div>

          {/* Results */}
          {!hasSearched ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-xl font-bold text-[#181818] mb-2">Start Searching</h2>
              <p className="text-sm text-[#7E7E7E]">Type at least 2 characters to search for products.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">😕</div>
              <h2 className="text-xl font-bold text-[#181818] mb-2">No Results Found</h2>
              <p className="text-sm text-[#7E7E7E] mb-6">
                We couldn&apos;t find any products matching &ldquo;{query}&rdquo;. Try a different search term.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
                Browse All Products
              </Link>
            </div>
          ) : (
            <>
              <p className="text-sm text-[#7E7E7E] mb-6">{results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;</p>
              <div className="flex flex-wrap gap-4">
                {results.map((p, i) => (
                  <ProductCard key={i} {...p} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
