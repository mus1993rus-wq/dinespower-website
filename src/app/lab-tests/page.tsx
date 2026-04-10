"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="relative w-full h-full overflow-hidden rounded-[8px] bg-white select-none">
      <Image
        src="/images/shop/lab-test-report.png"
        alt="Lab Test Report"
        fill
        className="object-cover"
       
      />
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
      {/* Close button — top-right of screen, white */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#F0F0F0] flex items-center justify-center transition-colors shadow-md cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Navigation arrows — at screen edges */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-[#F0F0F0] shadow-md flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-[#F0F0F0] shadow-md flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Larger modal, no inner border */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "min(680px, calc(100vw - 160px))", maxHeight: "calc(100vh - 80px)" }}
      >
        {/* Large document preview — no inner border */}
        <div className="p-6">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/shop/lab-test-report.png"
              alt={`Lab test report for ${product.name}`}
              fill
              className="object-contain"
              sizes="680px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LabTestsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Injectable");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // All products shown at once (no filtering)
  const allVisibleProducts: { product: Product; catTitle: string }[] = [];
  productData.forEach((cat) => {
    cat.products.forEach((p) => {
      allVisibleProducts.push({ product: p, catTitle: cat.title });
    });
  });

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById(`lab-section-${cat.replace(/\s+/g, '-').replace(/&/g, 'and')}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Precompute starting index offset for each category (no mutation during render)
  const categoryOffsets = productData.reduce<number[]>((acc, cat, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + productData[i - 1].products.length);
    return acc;
  }, []);

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
          <h1 className="text-[28px] font-extrabold text-[#181818] leading-[34px] mb-6">
            Lab Tests
          </h1>

          <div className="flex gap-[80px]">
            {/* LEFT sidebar — Figma FAQ style */}
            <div className="w-[440px] shrink-0">
              <div className="sticky top-4 bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
                {/* Category menu card */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col gap-2">
                  {sidebarCategories.map((cat) => {
                    const active = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => scrollToCategory(cat)}
                        className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-[8px] w-full transition-colors ${
                          active ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                        }`}
                      >
                        <span className="flex-1 text-left text-[14px] font-semibold text-[#181818] leading-5">{cat}</span>
                        {active && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0">
                            <path d="M9 6l6 6-6 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Still Have Questions Card */}
                <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-4 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image src="/icons/question-bubble.png" alt="" fill className="object-contain" />
                  </div>
                  <p className="text-[16px] font-semibold text-black leading-6 capitalize">Still have questions?</p>
                  <p className="text-[14px] text-[#1E1E1E] leading-5 text-center">
                    Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.
                  </p>
                  <button className="cursor-pointer flex items-center justify-center h-11 w-full bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black hover:bg-[#E7E7E7] hover:border-transparent transition-colors">
                    Ask a Question
                  </button>
                  <div className="flex gap-4 items-center">
                    <a href="https://t.me/dinespower" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#00A9DE] flex items-center justify-center hover:opacity-90 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.32168 11.8714L18.7484 5.92338C19.4644 5.66472 20.0897 6.09805 19.8577 7.18072L19.859 7.17938L17.2323 19.5541C17.0377 20.4314 16.5164 20.6447 15.787 20.2314L11.787 17.2834L9.85768 19.1421C9.64435 19.3554 9.46435 19.5354 9.05102 19.5354L9.33502 15.4647L16.7483 8.76738C17.071 8.48338 16.6763 8.32338 16.251 8.60605L7.08968 14.374L3.14035 13.1421C2.28302 12.8701 2.26435 12.2847 3.32168 11.8714Z" fill="white"/>
                      </svg>
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#00D43F] flex items-center justify-center hover:opacity-90 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.25 13.2808C15.0625 13.1558 14.875 13.0933 14.6875 13.3433L13.9375 14.3433C13.75 14.4683 13.625 14.5308 13.375 14.4058C12.4375 13.9058 11.125 13.3433 10 11.4683C9.93753 11.2183 10.0625 11.0933 10.1875 10.9683L10.75 10.0933C10.875 9.96832 10.8125 9.84332 10.75 9.71832L10 7.90582C9.81253 7.40582 9.62503 7.46832 9.43753 7.46832H8.93753C8.81253 7.46832 8.56253 7.53082 8.31253 7.78082C6.93753 9.15582 7.50003 11.0933 8.50003 12.3433C8.68753 12.5933 9.93753 14.8433 12.625 16.0308C14.625 16.9058 15.0625 16.7808 15.625 16.6558C16.3125 16.5933 17 16.0308 17.3125 15.4683C17.375 15.2808 17.6875 14.4683 17.4375 14.3433" fill="white"/>
                        <path d="M12.5 20.2183C9.9375 20.2183 8 18.8433 8 18.8433L4.9375 19.6558L5.6875 16.6558C5.6875 16.6558 4.4375 14.7183 4.4375 12.2808C4.4375 7.78076 8.125 4.03076 12.6875 4.03076C16.9375 4.03076 20.5625 7.34326 20.5625 11.9683C20.5625 16.4683 16.9375 20.1558 12.5 20.2183ZM2.5625 22.0308L7.75 20.5933C9.25239 21.3624 10.9268 21.7336 12.6135 21.6715C14.3002 21.6094 15.9428 21.116 17.3846 20.2384C18.8263 19.3608 20.019 18.1284 20.8489 16.6587C21.6788 15.189 22.1182 13.5311 22.125 11.8433C22.125 6.46826 17.875 2.15576 12.5 2.15576C10.7748 2.16018 9.08091 2.61647 7.58694 3.4792C6.09297 4.34194 4.85109 5.58101 3.98497 7.07301C3.11884 8.56502 2.65871 10.2579 2.65038 11.9831C2.64205 13.7082 3.08582 15.4055 3.9375 16.9058" fill="white"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content — categories with 5-column grid */}
            <div className="flex-1 min-w-0">
              {productData.map((category, catIdx) => {
                const startIndex = categoryOffsets[catIdx];
                const items = category.products.map((product, idx) => {
                  const thisIndex = startIndex + idx;
                  return (
                    <div
                      key={idx}
                      className="group cursor-pointer"
                      onClick={() => setModalIndex(thisIndex)}
                    >
                      <div className="relative w-full aspect-[157/242] rounded-[12px] overflow-hidden border border-[#EBEBEB] hover:border-[#D0D0D0] transition-colors">
                        <TestReportThumbnail />
                        {/* Hover overlay with eye icon */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                            <EyeIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });

                const sectionId = `lab-section-${category.title.replace(/\s+/g, '-').replace(/&/g, 'and')}`;

                return (
                  <div key={category.title} id={sectionId} className="mb-10 scroll-mt-6">
                    <h2 className="text-[22px] font-extrabold text-[#181818] leading-[28px] mb-5">
                      {category.title}
                    </h2>
                    <div className="grid grid-cols-5 gap-2">
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
