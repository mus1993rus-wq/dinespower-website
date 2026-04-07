"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sidebarCategories = [
  "Injectable",
  "Oral",
  "Fat burn",
  "Peptides & HGH",
  "SARMs",
  "PCT",
  "Energy",
  "Sex Support",
  "Health",
  "Amino Acids",
];

type Product = {
  name: string;
  brand: string;
  passed: boolean;
};

type Category = {
  title: string;
  products: Product[];
};

const productData: Category[] = [
  {
    title: "Injectable",
    products: [
      { name: "Testosterone Enanthate 250mg", brand: "Deus Medical", passed: true },
      { name: "Testosterone Cypionate 250mg", brand: "Deus Medical", passed: true },
      { name: "Nandrolone Decanoate 300mg", brand: "Deus Medical", passed: true },
      { name: "Boldenone Undecylenate 250mg", brand: "Deus Medical", passed: true },
      { name: "Trenbolone Enanthate 200mg", brand: "Deus Medical", passed: true },
      { name: "Masteron Propionate 100mg", brand: "Deus Medical", passed: true },
      { name: "Primobolan Enanthate 100mg", brand: "Deus Medical", passed: true },
      { name: "Sustanon 250mg/ml", brand: "Deus Medical", passed: true },
      { name: "NPP (Nandrolone Phenylpropionate)", brand: "Astera Labs", passed: true },
      { name: "Trenbolone Acetate 100mg", brand: "Astera Labs", passed: true },
      { name: "Testosterone Propionate 100mg", brand: "Astera Labs", passed: true },
      { name: "Drostanolone Enanthate 200mg", brand: "Astera Labs", passed: false },
    ],
  },
  {
    title: "Oral",
    products: [
      { name: "Dianabol 10mg", brand: "Deus Medical", passed: true },
      { name: "Anavar (Oxandrolone) 10mg", brand: "Deus Medical", passed: true },
      { name: "Winstrol (Stanozolol) 10mg", brand: "Deus Medical", passed: true },
      { name: "Turinabol 10mg", brand: "Deus Medical", passed: true },
      { name: "Anadrol (Oxymetholone) 50mg", brand: "Deus Medical", passed: true },
      { name: "Proviron (Mesterolone) 25mg", brand: "Deus Medical", passed: true },
      { name: "Superdrol 10mg", brand: "Astera Labs", passed: true },
      { name: "Halotestin 5mg", brand: "Astera Labs", passed: true },
    ],
  },
  {
    title: "Fat burn",
    products: [
      { name: "Clenbuterol 40mcg", brand: "Deus Medical", passed: true },
      { name: "T3 Cytomel 25mcg", brand: "Deus Medical", passed: true },
      { name: "Vaso Burn Thermogenic", brand: "Biaxol", passed: true },
      { name: "Yohimbine HCL 5mg", brand: "Biaxol", passed: true },
      { name: "ECA Stack", brand: "Astera Labs", passed: true },
      { name: "DNP Alternative 200mg", brand: "Astera Labs", passed: false },
      { name: "Sibutramine 15mg", brand: "Deus Medical", passed: true },
      { name: "Salbutamol 4mg", brand: "Deus Medical", passed: true },
    ],
  },
  {
    title: "Peptides & HGH",
    products: [
      { name: "HGH Fragment 176-191", brand: "Deus Medical", passed: true },
      { name: "BPC-157 5mg", brand: "Deus Medical", passed: true },
      { name: "TB-500 2mg", brand: "Deus Medical", passed: true },
      { name: "GHRP-6 5mg", brand: "Deus Medical", passed: true },
      { name: "CJC-1295 DAC 2mg", brand: "Deus Medical", passed: true },
      { name: "MOTS-C Peptide 10mg", brand: "Astera Labs", passed: true },
      { name: "Ipamorelin 5mg", brand: "Astera Labs", passed: true },
      { name: "Semaglutide 3mg", brand: "Astera Labs", passed: true },
    ],
  },
  {
    title: "SARMs",
    products: [
      { name: "RAD-140 (Testolone) 10mg", brand: "Biaxol", passed: true },
      { name: "MK-677 (Ibutamoren) 25mg", brand: "Biaxol", passed: true },
      { name: "Andarine S4 25mg", brand: "Biaxol", passed: true },
      { name: "Ostarine MK-2866 10mg", brand: "Biaxol", passed: true },
      { name: "Ligandrol LGD-4033 10mg", brand: "Biaxol", passed: true },
      { name: "YK-11 5mg", brand: "Biaxol", passed: true },
      { name: "Cardarine GW-501516 10mg", brand: "Biaxol", passed: true },
      { name: "S-23 10mg", brand: "Biaxol", passed: false },
    ],
  },
  {
    title: "PCT",
    products: [
      { name: "Clomid (Clomiphene) 50mg", brand: "Deus Medical", passed: true },
      { name: "Nolvadex (Tamoxifen) 20mg", brand: "Deus Medical", passed: true },
      { name: "Aromasin (Exemestane) 25mg", brand: "Deus Medical", passed: true },
      { name: "Arimidex (Anastrozole) 1mg", brand: "Deus Medical", passed: true },
      { name: "HCG 5000IU", brand: "Deus Medical", passed: true },
      { name: "Raloxifene 60mg", brand: "Astera Labs", passed: true },
    ],
  },
  {
    title: "Energy",
    products: [
      { name: "Pre-Workout Energy Blend", brand: "Astera Labs", passed: true },
      { name: "Caffeine Anhydrous 200mg", brand: "Biaxol", passed: true },
      { name: "DMAA Pre-Workout", brand: "Astera Labs", passed: true },
      { name: "Modafinil 200mg", brand: "Deus Medical", passed: true },
    ],
  },
  {
    title: "Sex Support",
    products: [
      { name: "Tadalafil (Cialis) 20mg", brand: "Deus Medical", passed: true },
      { name: "Sildenafil (Viagra) 100mg", brand: "Deus Medical", passed: true },
      { name: "PT-141 (Bremelanotide) 10mg", brand: "Deus Medical", passed: true },
      { name: "Dapoxetine 60mg", brand: "Astera Labs", passed: true },
    ],
  },
  {
    title: "Health",
    products: [
      { name: "Omega-3 Fish Oil 1000mg", brand: "Biaxol", passed: true },
      { name: "CBD Recovery Complex 500mg", brand: "Biaxol", passed: true },
      { name: "Liver Support (TUDCA) 250mg", brand: "Biaxol", passed: true },
      { name: "CoQ10 100mg", brand: "Biaxol", passed: true },
      { name: "NAC 600mg", brand: "Biaxol", passed: true },
      { name: "Vitamin D3 5000IU", brand: "Astera Labs", passed: true },
    ],
  },
  {
    title: "Amino Acids",
    products: [
      { name: "BCAA 2:1:1 Complex", brand: "Biaxol", passed: true },
      { name: "L-Glutamine 500mg", brand: "Biaxol", passed: true },
      { name: "L-Carnitine 500mg", brand: "Biaxol", passed: true },
      { name: "Beta-Alanine 750mg", brand: "Astera Labs", passed: true },
    ],
  },
];

export default function LabTestsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredData = activeCategory
    ? productData.filter((cat) => cat.title === activeCategory)
    : productData;

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Lab Tests</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto py-8">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-8">
            Lab Tests
          </h1>

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-[240px] shrink-0">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`text-left px-4 py-3 rounded-lg text-[14px] font-semibold transition-colors ${
                    activeCategory === null
                      ? "bg-[#FF6701] text-white"
                      : "text-[#181818] hover:bg-[#F7F7F7]"
                  }`}
                >
                  All Categories
                </button>
                {sidebarCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 rounded-lg text-[14px] font-semibold transition-colors ${
                      activeCategory === cat
                        ? "bg-[#FF6701] text-white"
                        : "text-[#181818] hover:bg-[#F7F7F7]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {filteredData.map((category, catIdx) => (
                <div key={category.title} className="mb-10">
                  <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-5">
                    {category.title}
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="border border-[#E7E7E7] rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                        <div className="relative h-[140px] bg-[#F7F7F7]">
                          <Image src={`/images/shop/product-${(idx % 5) + 1}.${(idx % 5) < 2 || (idx % 5) === 4 ? 'webp' : 'jpg'}`} alt={product.name} fill className="object-contain p-2" unoptimized />
                          <div className="absolute top-2 right-2">
                            {product.passed ? (
                              <div className="w-6 h-6 rounded-full bg-[#00B638] flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-[#FF3B30] flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="text-[13px] font-semibold text-[#181818] leading-[18px] line-clamp-2">{product.name}</p>
                          <p className="text-[12px] text-[#7E7E7E] mt-1">{product.brand}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
