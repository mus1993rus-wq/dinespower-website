"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const categoryBrands: Record<string, string[]> = {
  injectable: ["Astera Labs", "Deus Medical"],
  oral: ["Astera Labs", "Deus Medical"],
  "fat-burn": ["Biaxol", "Deus Medical", "Astera Labs"],
  "peptides-hgh": ["Deus Medical", "Astera Labs", "Biaxol"],
  sarms: ["Biaxol", "Deus Medical", "Astera Labs"],
  pct: ["Biaxol", "Deus Medical", "Astera Labs"],
  energy: ["Biaxol"],
  "sex-support": ["Deus Medical", "Astera Labs"],
  health: ["Biaxol"],
  stacks: ["Biaxol", "Deus Medical"],
  "amino-acids": ["Astera Labs"],
};

// Categories with only one brand — auto-redirect to that brand
const singleBrandCategories: Record<string, string> = {
  energy: "biaxol",
  health: "biaxol",
  "amino-acids": "astera-labs",
};

const sortOptions = ["Most Popular", "Price: Low to High", "Price: High to Low", "Newest"];

const categoryList = [
  { slug: "injectable", label: "Injectable" },
  { slug: "oral", label: "Oral" },
  { slug: "fat-burn", label: "Fat Burn" },
  { slug: "sarms", label: "SARMs" },
  { slug: "peptides-hgh", label: "Peptides & HGH" },
  { slug: "pct", label: "PCT" },
  { slug: "energy", label: "Energy" },
  { slug: "sex-support", label: "Sex-Support" },
  { slug: "health", label: "Health" },
  { slug: "stacks", label: "Stacks" },
  { slug: "amino-acids", label: "Amino Acids" },
];

const categoryDescriptions: Record<string, string> = {
  injectable: "A curated selection of high-quality injectable compounds",
  oral: "Premium oral products from trusted brands",
  "fat-burn": "Effective fat-burning compounds from trusted brands",
  "peptides-hgh": "Advanced peptides for recovery and performance",
  sarms: "Performance-focused SARMs from trusted brands",
  pct: "Post-cycle therapy products",
  energy: "Energy-boosting products from trusted brands",
  "sex-support": "Support products from trusted brands",
  health: "Health products from trusted brands",
  stacks: "Pre-designed stacks for specific goals",
  "amino-acids": "Amino acid products for recovery and muscle support",
};

const brandDescriptions: Record<string, string> = {
  "Deus Medical": "DEUS MEDICAL is one of the leading Pharmaceutical manufacturing brands in India with state-of-the-art manufacturing facility situated at Kolkata.",
  "Astera Labs": "Astera Labs is one of the leading pharmaceutical companies in India.",
  "Biaxol": "Biaxol Supplements is one of the leading sports supplement stores in Europe, providing quality and trust at every step.",
};

const brandSlugToLabel: Record<string, string> = {
  "deus-medical": "Deus Medical",
  "astera-labs": "Astera Labs",
  "biaxol": "Biaxol",
};

const brandLabelToSlug: Record<string, string> = {
  "Deus Medical": "deus-medical",
  "Astera Labs": "astera-labs",
  "Biaxol": "biaxol",
};

const brandColors: Record<string, string> = {
  "Astera Labs": "#FF6701",
  "Deus Medical": "#C0202F",
  "Biaxol": "#00709F",
};

const brandBgColors: Record<string, string> = {
  "Astera Labs": "#F5ECE6",
  "Deus Medical": "#F7F3F4",
  "Biaxol": "#F2F6F7",
};

// Maps category slug + brand slug to banner image filenames
function getBannerImage(categorySlug: string | null, brandSlug: string | null): string | null {
  if (!categorySlug) return null;

  const cat = categoryList.find((c) => c.slug === categorySlug);
  if (!cat) return null;

  const brandLabel = brandSlug ? brandSlugToLabel[brandSlug] : null;

  const bannerMap: Record<string, { base: string; brandMap: Record<string, string> }> = {
    injectable: {
      base: "Injectable.png",
      brandMap: {
        "Deus Medical": "Injectable  Deus Medical.png",
        "Astera Labs": "Injectable  Astera Labs.png",
      },
    },
    oral: {
      base: "Oral.png",
      brandMap: {
        "Deus Medical": "Oral  Deus Medical.png",
        "Astera Labs": "Oral Astera Labs.png",
      },
    },
    "fat-burn": {
      base: "Fat Burn.png",
      brandMap: {
        "Deus Medical": "Fat burn   Deus Medical.png",
        "Astera Labs": "Fat burn   Astera Labs.png",
        "Biaxol": "Fat burn  Biaxol.png",
      },
    },
    sarms: {
      base: "SARMs.png",
      brandMap: {
        "Deus Medical": "SARMs Deus Medical.png",
        "Astera Labs": "SARMs  Astera Labs.png",
        "Biaxol": "SARMs Biaxol.png",
      },
    },
    "peptides-hgh": {
      base: "Peptides & HGH.png",
      brandMap: {
        "Deus Medical": "Peptides & HCG   Deus Medical.png",
        "Astera Labs": "Peptides & HCG  Astera Labs.png",
        "Biaxol": "Peptides & HCG   Biaxol.png",
      },
    },
    pct: {
      base: "",
      brandMap: {},
    },
    energy: {
      base: "Energy.png",
      brandMap: {
        "Biaxol": "Energy Biaxol.png",
      },
    },
    "sex-support": {
      base: "Sex-Support.png",
      brandMap: {
        "Deus Medical": "Sex-Support Deus Medical.png",
        "Astera Labs": "Sex-Support Astera Labs.png",
      },
    },
    health: {
      base: "Health.png",
      brandMap: {
        "Biaxol": "Health Biaxol.png",
      },
    },
    stacks: {
      base: "Stacks.png",
      brandMap: {
        "Deus Medical": "Stacks Deus Medical.png",
        "Biaxol": "Stacks Biaxol.png",
      },
    },
    "amino-acids": {
      base: "Amino Acids.png",
      brandMap: {
        "Astera Labs": "Amino Acids Astera Labs.png",
      },
    },
  };

  const entry = bannerMap[categorySlug];
  if (!entry) return null;

  if (brandLabel && entry.brandMap[brandLabel]) {
    return `/images/shop/banners/${entry.brandMap[brandLabel]}`;
  }

  if (entry.base) {
    return `/images/shop/banners/${entry.base}`;
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  Real product data per category                                     */
/* ------------------------------------------------------------------ */

interface Product {
  brand: string;
  name: string;
  dosage: string;
  price: number;
  oldPrice?: number;
  image: string;
  badges: string[];
  category: string;
  inStock?: boolean;
}

const allProducts: Product[] = [
  // Injectable
  { category: "injectable", brand: "Deus Medical", name: "Testosterone Enanthate 250mg", dosage: "250 mg/ml", price: 38, image: "/images/shop/injectable-1.jpg", badges: ["top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Boldenone Undecylenate 250mg", dosage: "250 mg/ml", price: 44, image: "/images/shop/injectable-2.jpg", badges: ["top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Sustanon 250mg", dosage: "250 mg/ml", price: 42, image: "/images/shop/injectable-3.jpg", badges: ["top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Trenbolone Hex 76.5mg", dosage: "76.5 mg/ml", price: 62, image: "/images/shop/injectable-4.jpg", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Nandrolone Decanoate 300mg", dosage: "300 mg/ml", price: 48, image: "/images/shop/injectable-1.jpg", badges: ["top"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Primobolan Enanthate 100mg", dosage: "100 mg/ml", price: 55, image: "/images/shop/product-1.webp", badges: ["new"], inStock: true },
  { category: "injectable", brand: "Astera Labs", name: "Masteron Propionate 100mg", dosage: "100 mg/ml", price: 40, image: "/images/shop/product-2.webp", badges: ["top"], inStock: false },
  { category: "injectable", brand: "Deus Medical", name: "Testosterone Cypionate 250mg", dosage: "250 mg/ml", price: 38, image: "/images/shop/injectable-2.jpg", badges: ["top"], inStock: true },

  // Oral
  { category: "oral", brand: "Deus Medical", name: "Anavamed 10 (Oxandrolone)", dosage: "10 mg", price: 25, oldPrice: 56, image: "/images/shop/oral-1.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Dianamed 10 (Methandienone)", dosage: "10 mg", price: 30, image: "/images/shop/oral-2.jpg", badges: ["top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Halomed 5 (Fluoxymesterone)", dosage: "5 mg", price: 28, image: "/images/shop/oral-3.jpg", badges: ["top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Winimed 10 (Stanozolol)", dosage: "10 mg", price: 32, image: "/images/shop/oral-4.jpg", badges: ["top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Turinamed 10", dosage: "10 mg", price: 35, image: "/images/shop/oral-1.jpg", badges: ["new"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Superdrol 10", dosage: "10 mg", price: 40, image: "/images/shop/oral-2.jpg", badges: ["new"], inStock: false },
  { category: "oral", brand: "Deus Medical", name: "Anadromed 50", dosage: "50 mg", price: 30, image: "/images/shop/oral-3.jpg", badges: ["top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Proviron 25mg", dosage: "25 mg", price: 22, image: "/images/shop/oral-4.jpg", badges: ["top"], inStock: true },

  // SARMs
  { category: "sarms", brand: "Biaxol", name: "Ostarine MK-2866", dosage: "25 mg", price: 44, image: "/images/shop/product-1.webp", badges: ["top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "RAD-140 Testolone", dosage: "10 mg", price: 48, image: "/images/shop/product-2.webp", badges: ["top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Ligandrol LGD-4033", dosage: "10 mg", price: 46, image: "/images/shop/product-3.jpg", badges: ["top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Andarine S4", dosage: "25 mg", price: 42, image: "/images/shop/product-4.jpg", badges: ["new"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "YK-11", dosage: "5 mg", price: 52, image: "/images/shop/product-5.webp", badges: ["new"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Cardarine GW501516", dosage: "20 mg", price: 44, image: "/images/shop/product-1.webp", badges: ["top"], inStock: true },

  // Fat Burn
  { category: "fat-burn", brand: "Biaxol", name: "Yohimbine Fat Burner", dosage: "10 mg", price: 35, image: "/images/shop/product-5.webp", badges: ["top"], inStock: true },
  { category: "fat-burn", brand: "Biaxol", name: "DMAA Pre-Workout", dosage: "75 mg", price: 38, image: "/images/shop/product-1.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Deus Medical", name: "Clenbuterol 40mcg", dosage: "40 mcg", price: 28, image: "/images/shop/oral-1.jpg", badges: ["top"], inStock: true },
  { category: "fat-burn", brand: "Deus Medical", name: "T3 Cytomel 50mcg", dosage: "50 mcg", price: 25, image: "/images/shop/oral-2.jpg", badges: ["top"], inStock: true },

  // Peptides & HGH
  { category: "peptides-hgh", brand: "Deus Medical", name: "BPC-157", dosage: "5 mg", price: 50, image: "/images/shop/product-4.jpg", badges: ["top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "HGH 10IU", dosage: "10 IU", price: 120, image: "/images/shop/injectable-1.jpg", badges: ["top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "MOTS-C Peptide", dosage: "10 mg", price: 65, image: "/images/shop/product-3.jpg", badges: ["new"], inStock: true },
  { category: "peptides-hgh", brand: "Astera Labs", name: "TB-500", dosage: "5 mg", price: 55, image: "/images/shop/product-2.webp", badges: ["new"], inStock: true },

  // Stacks
  { category: "stacks", brand: "Biaxol", name: "Cutting Stack (Ostarine, Testolone, Cardarine)", dosage: "3-in-1", price: 160, image: "/images/shop/product-1.webp", badges: ["top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Beginner Stack (MK-677, PCT, RAD-140)", dosage: "3-in-1", price: 168, image: "/images/shop/product-2.webp", badges: ["top"], inStock: true },
  { category: "stacks", brand: "Deus Medical", name: "Cutting Package", dosage: "Multi-compound", price: 155, image: "/images/shop/product-3.jpg", badges: ["new"], inStock: true },
  { category: "stacks", brand: "Deus Medical", name: "Bulking Stack", dosage: "Multi-compound", price: 180, image: "/images/shop/product-4.jpg", badges: ["top"], inStock: true },

  // PCT
  { category: "pct", brand: "Deus Medical", name: "Clomimed 50 (Clomiphene)", dosage: "50 mg", price: 22, image: "/images/shop/oral-1.jpg", badges: ["top"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Tamoximed 20 (Nolvadex)", dosage: "20 mg", price: 20, image: "/images/shop/oral-2.jpg", badges: ["top"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Arimimed 1 (Anastrozole)", dosage: "1 mg", price: 28, image: "/images/shop/oral-3.jpg", badges: ["new"], inStock: true },

  // Energy
  { category: "energy", brand: "Biaxol", name: "Caffeine + L-Theanine", dosage: "200 mg", price: 22, image: "/images/shop/product-5.webp", badges: ["top"], inStock: true },
  { category: "energy", brand: "Biaxol", name: "Pre-Workout Extreme", dosage: "300 mg", price: 34, image: "/images/shop/product-1.webp", badges: ["new"], inStock: true },

  // Sex-Support
  { category: "sex-support", brand: "Deus Medical", name: "Sildenafil 100mg", dosage: "100 mg", price: 30, image: "/images/shop/oral-4.jpg", badges: ["top"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Tadalafil 20mg", dosage: "20 mg", price: 28, image: "/images/shop/oral-3.jpg", badges: ["top"], inStock: true },

  // Health
  { category: "health", brand: "Biaxol", name: "Omega-3 Fish Oil", dosage: "1000 mg", price: 18, image: "/images/shop/product-3.jpg", badges: ["top"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Liver Support Complex", dosage: "500 mg", price: 24, image: "/images/shop/product-4.jpg", badges: ["top"], inStock: true },

  // Amino Acids
  { category: "amino-acids", brand: "Astera Labs", name: "BCAA 2:1:1", dosage: "5 g", price: 26, image: "/images/shop/product-1.webp", badges: ["top"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "L-Glutamine", dosage: "5 g", price: 20, image: "/images/shop/product-2.webp", badges: ["top"], inStock: true },
];

/* ------------------------------------------------------------------ */
/*  Brand badge component                                              */
/* ------------------------------------------------------------------ */

function BrandBadge({ brand }: { brand: string }) {
  if (brand === "Astera Labs") {
    return (
      <div className="w-[32px] h-[32px] rounded-[6px] bg-[#FF8C38] flex items-center justify-center shrink-0">
        <span className="text-white text-[10px] font-bold leading-none">ASTERA</span>
      </div>
    );
  }
  if (brand === "Deus Medical") {
    return (
      <div className="w-[32px] h-[32px] rounded-[6px] bg-[#1A1A1A] flex items-center justify-center shrink-0">
        <span className="text-white text-[9px] font-bold leading-none">DM</span>
      </div>
    );
  }
  // Biaxol
  return (
    <div className="w-[32px] h-[32px] rounded-[6px] bg-[#F0F0F0] flex items-center justify-center shrink-0">
      <span className="text-[#181818] text-[8px] font-bold leading-none">Biaxol</span>
    </div>
  );
}

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categorySlug = searchParams.get("category");
  const brandSlug = searchParams.get("brand");

  const [activeSort, setActiveSort] = useState(0);
  const [sortOpen, setSortOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [inStockChecked, setInStockChecked] = useState(true);
  const [outOfStockChecked, setOutOfStockChecked] = useState(false);

  const currentCategory = categoryList.find((c) => c.slug === categorySlug);
  const currentBrandLabel = brandSlug ? brandSlugToLabel[brandSlug] : null;
  const bannerImage = getBannerImage(categorySlug, brandSlug);

  // Auto-redirect for single-brand categories
  useEffect(() => {
    if (categorySlug && singleBrandCategories[categorySlug] && !brandSlug) {
      router.replace(`/catalog?category=${categorySlug}&brand=${singleBrandCategories[categorySlug]}`);
    }
  }, [categorySlug, brandSlug, router]);

  // No "All Products" page — redirect to home if no category
  useEffect(() => {
    if (!categorySlug) {
      router.replace("/");
    }
  }, [categorySlug, router]);

  if (!categorySlug) {
    return null;
  }

  const bannerDescription = currentBrandLabel
    ? brandDescriptions[currentBrandLabel] || ""
    : categorySlug
    ? categoryDescriptions[categorySlug] || ""
    : "";

  // Brands available for the current category
  const brandsForCategory = categorySlug ? (categoryBrands[categorySlug] || []) : ["Astera Labs", "Deus Medical", "Biaxol"];

  // Build active filters list — brand is navigation, NOT a removable filter
  const activeFilters: { label: string; onRemove: () => void }[] = [];
  if (inStockChecked && !outOfStockChecked) {
    activeFilters.push({ label: "In stock", onRemove: () => setInStockChecked(false) });
  }
  if (outOfStockChecked && !inStockChecked) {
    activeFilters.push({ label: "Out of stock", onRemove: () => setOutOfStockChecked(false) });
  }

  function clearAllFilters() {
    setInStockChecked(true);
    setOutOfStockChecked(false);
    setPriceRange([0, 100000]);
  }

  // Filter products
  const filteredProducts = useMemo(() => {
    let list = allProducts;

    if (categorySlug) {
      list = list.filter((p) => p.category === categorySlug);
    }

    if (currentBrandLabel) {
      list = list.filter((p) => p.brand === currentBrandLabel);
    }

    // Availability filter
    if (inStockChecked && !outOfStockChecked) {
      list = list.filter((p) => p.inStock !== false);
    } else if (outOfStockChecked && !inStockChecked) {
      list = list.filter((p) => p.inStock === false);
    }

    // Price filter
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (activeSort === 1) {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (activeSort === 2) {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [categorySlug, currentBrandLabel, activeSort, inStockChecked, outOfStockChecked, priceRange]);

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb - Figma style: Home / Category / Brand */}
        <div className="max-w-[1340px] mx-auto py-3">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            {currentCategory && (
              <>
                <span>/</span>
                {currentBrandLabel ? (
                  <Link
                    href={`/catalog?category=${categorySlug}`}
                    className="hover:text-[#181818] transition-colors"
                  >
                    {currentCategory.label}
                  </Link>
                ) : (
                  <span className="text-[#181818]">{currentCategory.label}</span>
                )}
              </>
            )}
            {!currentCategory && !currentBrandLabel && (
              <>
                <span>/</span>
                <span className="text-[#181818]">Catalog</span>
              </>
            )}
            {currentBrandLabel && (
              <>
                <span>/</span>
                <span className="text-[#181818]">{currentBrandLabel}</span>
              </>
            )}
          </div>
        </div>

        {/* Banner */}
        {bannerImage ? (
          <div className="max-w-[1340px] mx-auto mb-8">
            <div className="relative h-[278px] rounded-[16px] overflow-hidden" style={{ backgroundColor: currentBrandLabel ? (brandBgColors[currentBrandLabel] || '#F7F7F7') : '#F7F7F7' }}>
              <Image
                src={bannerImage}
                alt={`${currentCategory?.label || "Catalog"}${currentBrandLabel ? ` - ${currentBrandLabel}` : ""}`}
                fill
                className="object-cover"
               
              />
              <div className="absolute left-[60px] top-1/2 -translate-y-1/2 max-w-[50%]">
                <h1 className="text-[40px] font-black text-[#181818] uppercase leading-[44px]">
                  {currentCategory?.label || "All Products"}
                </h1>
                {currentBrandLabel && (
                  <h2
                    className="text-[40px] font-extrabold italic uppercase leading-[44px] mt-1"
                    style={{ color: brandColors[currentBrandLabel] || "#FF6701" }}
                  >
                    {currentBrandLabel}
                  </h2>
                )}
                {bannerDescription && (
                  <p className="text-[16px] text-[#000000] leading-[22px] mt-3 max-w-[400px] capitalize">
                    {bannerDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1340px] mx-auto mb-8">
            <div className="relative h-[278px] rounded-[16px] overflow-hidden bg-[#F7F7F7]">
              <div className="absolute left-[60px] top-1/2 -translate-y-1/2 max-w-[50%]">
                <h1 className="text-[40px] font-black text-[#181818] uppercase leading-[44px]">
                  {currentCategory?.label}
                </h1>
                {bannerDescription && (
                  <p className="text-[16px] text-[#4A4A4A] leading-[22px] mt-2">
                    {bannerDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-[1340px] mx-auto flex gap-6 pb-16">
          {/* Sidebar Filters — Figma 1249:5311 card style */}
          <aside className="w-[256px] shrink-0 flex flex-col gap-4">
            {/* Brands card — Figma: simple list, chevron on active, See All */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col">
              {brandsForCategory.map((b) => {
                const isActive = brandSlug === brandLabelToSlug[b];
                return (
                  <Link
                    key={b}
                    href={`/catalog?category=${categorySlug}&brand=${brandLabelToSlug[b]}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-[8px] transition-colors ${
                      isActive ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                    }`}
                  >
                    <span className="text-[14px] font-semibold text-[#181818] leading-5">{b}</span>
                    {isActive && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 6l6 6-6 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </Link>
                );
              })}
              {currentBrandLabel && (
                <>
                  <div className="h-px bg-[#E7E7E7] mx-4 my-1" />
                  <Link
                    href={`/catalog?category=${categorySlug}`}
                    className="flex items-center px-4 py-3 rounded-[8px] text-[14px] font-semibold text-[#181818] leading-5 hover:bg-[#F7F7F7] transition-colors"
                  >
                    See All
                  </Link>
                </>
              )}
            </div>

            {/* Availability card */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4">
              <h4 className="text-[12px] text-[#7E7E7E] leading-4 mb-3">Availability</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <span
                    onClick={() => setInStockChecked(!inStockChecked)}
                    className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                      inStockChecked ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                    }`}
                  >
                    {inStockChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-[14px] text-[#181818] leading-5">In Stock</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <span
                    onClick={() => setOutOfStockChecked(!outOfStockChecked)}
                    className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                      outOfStockChecked ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                    }`}
                  >
                    {outOfStockChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-[14px] text-[#181818] leading-5">Out of Stock</span>
                </label>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4">
              <h4 className="text-[12px] text-[#7E7E7E] leading-4 mb-3">Price</h4>
              <div className="flex gap-2 items-center">
                <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                    className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                  />
                </div>
                <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100000}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="w-full mt-4 accent-[#181818]"
              />
            </div>
          </aside>

          {/* Products area */}
          <div className="flex-1">
            {/* Active filters + Sort row */}
            <div className="flex items-center justify-between mb-6">
              {/* Active filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {activeFilters.length > 0 && (
                  <>
                    <span className="text-sm text-[#7E7E7E]">Active filters:</span>
                    {activeFilters.map((f) => (
                      <button
                        key={f.label}
                        onClick={f.onRemove}
                        className="flex items-center gap-1.5 bg-[#F7F7F7] border border-[#E7E7E7] rounded-lg px-3 py-1.5 text-sm text-[#181818] hover:border-[#FF6701] transition-colors"
                      >
                        {f.label}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M9 3L3 9M3 3L9 9" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ))}
                    {activeFilters.length > 1 && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm font-semibold text-[#FF6701] hover:underline ml-1"
                      >
                        Clear All
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 border border-[#E7E7E7] rounded-lg px-4 py-2 text-sm text-[#181818] hover:border-[#B6B6B6] transition-colors"
                >
                  {sortOptions[activeSort]}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#181818" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {sortOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-[#E7E7E7] rounded-lg shadow-lg z-20 min-w-[180px]">
                    {sortOptions.map((opt, i) => (
                      <button
                        key={opt}
                        onClick={() => { setActiveSort(i); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          i === activeSort
                            ? "text-[#FF6701] font-semibold bg-[#FFF8F3]"
                            : "text-[#181818] hover:bg-[#F7F7F7]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-4 gap-4">
              {filteredProducts.map((p, i) => (
                <ProductCard key={i} {...p} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16 text-[#7E7E7E]">
                <p className="text-lg font-semibold mb-2">No products found</p>
                <p className="text-sm">Try adjusting your filters to find what you&apos;re looking for.</p>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                {[1, 2, 3, "...", 12].map((p, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors ${
                      p === 1 ? "bg-[#FF6701] text-white" : "border border-[#E7E7E7] text-[#181818] hover:border-[#FF6701]"
                    }`}
                  >
                    {p === "..." ? "..." : p}
                  </button>
                ))}
                <button className="w-10 h-10 rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6701]" />
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
