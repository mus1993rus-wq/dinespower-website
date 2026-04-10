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
  "fat-burn": ["Astera Labs", "Deus Medical", "Biaxol"],
  "peptides-hgh": ["Astera Labs", "Deus Medical", "Biaxol"],
  sarms: ["Astera Labs", "Deus Medical", "Biaxol"],
  pct: ["Astera Labs", "Deus Medical", "Biaxol"],
  energy: ["Biaxol"],
  "sex-support": ["Astera Labs", "Deus Medical"],
  health: ["Biaxol"],
  stacks: ["Deus Medical", "Biaxol"],
  "amino-acids": ["Astera Labs"],
};

// Categories with only one brand — auto-redirect to that brand
const singleBrandCategories: Record<string, string> = {
  energy: "biaxol",
  health: "biaxol",
  "amino-acids": "astera-labs",
};

const sortOptions = ["Most Popular", "Price: Low to High", "Price: High to Low", "Newest"];

const faqItems = [
  { q: "What is the minimum amount for the first order?", a: "There is no minimum order amount for retail customers. For wholesale/partner orders, please contact our sales team." },
  { q: "How long does delivery take?", a: "Europe: 5-14 days. USA & Worldwide: 7-21 days. We ship discreetly and provide tracking information." },
  { q: "How do we know that these products are genuine?", a: "Every product comes with a unique verification code and can be checked on the manufacturer's official website. All items are sourced directly from authorized manufacturers." },
  { q: "What if the package is lost or damaged?", a: "We offer reshipment guarantee for any packages that are lost or damaged during shipping. Contact our support team with your order details." },
  { q: "Are all products really tested in laboratories?", a: "Yes, every batch is independently tested by third-party laboratories. Lab reports are available on our Lab Tests page." },
];

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
  // Injectable — Deus Medical
  { category: "injectable", brand: "Deus Medical", name: "3-Trenbomed 150 Injectable Steroid In Ampoules", dosage: "150 mg/ml", price: 57, oldPrice: 65, image: "/images/shop/products/injectable-trenbomed-150.jpg", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Decamed PP 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 34, oldPrice: 44, image: "/images/shop/products/injectable-decamed-pp-100.jpg", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Dianamed 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 40, oldPrice: 54, image: "/images/shop/products/injectable-dianamed-100.png", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Equimed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 42, oldPrice: 53, image: "/images/shop/products/injectable-equimed-250.jpg", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Paramed 76.5 Injectable Steroid In Ampoules", dosage: "76.5 mg/ml", price: 55, oldPrice: 64, image: "/images/shop/products/injectable-paramed-76-5.jpg", badges: ["new", "sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Sustamed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 37, oldPrice: 43, image: "/images/shop/products/injectable-sustamed-250.jpg", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Primomed 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 70, oldPrice: 76, image: "/images/shop/products/injectable-primomed-100.jpg", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Testomed 100 (No Ester) In Ampoules", dosage: "100 mg/ml", price: 31, oldPrice: 43, image: "/images/shop/products/injectable-testomed-100.png", badges: ["sale"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Testomed E 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 35, oldPrice: 45, image: "/images/shop/products/injectable-testomed-e-250.jpg", badges: ["sale", "top"], inStock: true },
  { category: "injectable", brand: "Deus Medical", name: "Testomed P 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 29, oldPrice: 33, image: "/images/shop/products/injectable-testomed-p-100.jpg", badges: ["sale"], inStock: true },

  // Oral — Deus Medical
  { category: "oral", brand: "Deus Medical", name: "Anadromed 50 Oral Steroid In Tablets", dosage: "50 mg/tab", price: 30, oldPrice: 38, image: "/images/shop/products/oral-anadromed-50.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Anavamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 25, oldPrice: 34, image: "/images/shop/products/oral-anavamed-10.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Cabermed 0.5 Oral Steroid In Tablets", dosage: "0.5 mg/tab", price: 66, oldPrice: 68, image: "/images/shop/products/oral-cabermed-05.png", badges: ["new"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Dianamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 13, oldPrice: 17, image: "/images/shop/products/oral-dianamed-10.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Ezetimed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 28, oldPrice: 32, image: "/images/shop/products/oral-ezetimed-10.png", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Halomed 5 Oral Steroid In Tablets", dosage: "5 mg/tab", price: 50, oldPrice: 58, image: "/images/shop/products/oral-halomed-5.jpg", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Livamed 1 Oral Steroid In Tablets", dosage: "1 mg/tab", price: 22, oldPrice: 25, image: "/images/shop/products/oral-livamed-1.png", badges: ["new"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Nebimed 5 Oral Steroid In Tablets", dosage: "5 mg/tab", price: 17, oldPrice: 22, image: "/images/shop/products/oral-nebimed-5.png", badges: ["sale"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Primomed 25 Oral Steroid In Tablets", dosage: "25 mg/tab", price: 83, oldPrice: 92, image: "/images/shop/products/oral-primomed-25.jpg", badges: ["sale", "top"], inStock: true },
  { category: "oral", brand: "Deus Medical", name: "Provimed 25 Oral Steroid In Tablets", dosage: "25 mg/tab", price: 25, oldPrice: 29, image: "/images/shop/products/oral-provimed-25.jpg", badges: ["sale"], inStock: true },

  // Fat Burn
  { category: "fat-burn", brand: "Deus Medical", name: "Clenomed 40 Sympathomimetic Amine In Tablets", dosage: "40 mcg/tab", price: 12, oldPrice: 16, image: "/images/shop/products/fat-burn-clenomed-40.jpg", badges: ["sale", "top"], inStock: true },
  { category: "fat-burn", brand: "Deus Medical", name: "Cytomed 25 Thyroid Hormone In Tablets", dosage: "25 mcg/tab", price: 13, oldPrice: 17, image: "/images/shop/products/fat-burn-cytomed-25.jpg", badges: ["sale"], inStock: true },
  { category: "fat-burn", brand: "Deus Medical", name: "Thyromed 50 Thyroid Hormone In Tablets", dosage: "50 mcg/tab", price: 10, oldPrice: 13, image: "/images/shop/products/fat-burn-thyromed-50.jpg", badges: ["sale"], inStock: true },
  { category: "fat-burn", brand: "Biaxol", name: "Yohimbine Fat Burner Capsules", dosage: "10 mg/cap", price: 24, oldPrice: 30, image: "/images/shop/products/fat-burn-yohimbine.png", badges: ["sale", "top"], inStock: true },
  { category: "fat-burn", brand: "Astera Labs", name: "Clenbuterol HCL In Tablets", dosage: "40 mcg/tab", price: 24, image: "/images/shop/products/fat-burn-clenbuterol-hcl.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Astera Labs", name: "Liothyronine Sodium (T3) In Tablets", dosage: "25 mcg/tab", price: 13, image: "/images/shop/products/fat-burn-liothyronine-t3.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Astera Labs", name: "Levothyroxine Sodium (T4) In Tablets", dosage: "100 mcg/tab", price: 10, image: "/images/shop/products/fat-burn-levothyroxine-t4.webp", badges: ["new"], inStock: true },
  { category: "fat-burn", brand: "Biaxol", name: "ECA Fat Burner Capsules", dosage: "3-in-1", price: 40, oldPrice: 48, image: "/images/shop/products/fat-burn-eca-xtreme-new.png", badges: ["sale", "top"], inStock: true },

  // Peptides & HGH
  { category: "peptides-hgh", brand: "Deus Medical", name: "Tirzepatide (GIP and GLP-1 Agonist) In Vials", dosage: "10 mg/vial", price: 100, image: "/images/shop/products/peptides-hgh-tirzepatide.webp", badges: ["new"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "Retatrutide 10mg (GLP-1, GIP, Glucagon Agonist)", dosage: "10 mg/vial", price: 90, image: "/images/shop/products/peptides-hgh-retatrutide.webp", badges: ["new", "top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "BPC-157 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, image: "/images/shop/products/peptides-hgh-bpc-157.jpg", badges: ["sale", "top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "CJC-1295 DAC Peptide In Vials", dosage: "2 mg/vial", price: 33, oldPrice: 39, image: "/images/shop/products/peptides-hgh-cjc-1295.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "DSIP Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, image: "/images/shop/products/peptides-hgh-dsip.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "Epitalon (Epitalamin) Peptide Vials", dosage: "10 mg/vial", price: 33, oldPrice: 40, image: "/images/shop/products/peptides-hgh-epitalon.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "GHRP-2 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, image: "/images/shop/products/peptides-hgh-ghrp-2.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "GHRP-6 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 44, image: "/images/shop/products/peptides-hgh-ghrp-6.png", badges: ["sale"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "HCG Hormone In Vials", dosage: "5000 IU/vial", price: 44, oldPrice: 49, image: "/images/shop/products/peptides-hgh-hcg.png", badges: ["sale", "top"], inStock: true },
  { category: "peptides-hgh", brand: "Deus Medical", name: "Hexarelin Peptide In Vials", dosage: "5 mg/vial", price: 30, oldPrice: 37, image: "/images/shop/products/peptides-hgh-hexarelin.png", badges: ["sale"], inStock: true },

  // SARMs
  { category: "sarms", brand: "Deus Medical", name: "S4 25 SARM In Tablets", dosage: "25 mg/tab", price: 45, oldPrice: 55, image: "/images/shop/products/sarms-s4-25.jpg", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "YK-11 SARM Capsules", dosage: "5 mg/cap", price: 72, oldPrice: 78, image: "/images/shop/products/sarms-yk-11.jpg", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Andarine (S4) Capsules", dosage: "25 mg/cap", price: 60, oldPrice: 67, image: "/images/shop/products/sarms-andarine-s4.png", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Cardarine (GW501516) SARM Capsules", dosage: "20 mg/cap", price: 54, oldPrice: 63, image: "/images/shop/products/sarms-cardarine.png", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "GW501516 10 SARM In Tablets", dosage: "10 mg/tab", price: 35, oldPrice: 44, image: "/images/shop/products/sarms-gw501516-10.jpg", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Ibutamoren (MK677) SARM In Capsules", dosage: "10 mg/cap", price: 60, oldPrice: 65, image: "/images/shop/products/sarms-ibutamoren.png", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "LGD4033 (Ligandrol) SARM Tablets", dosage: "10 mg/tab", price: 60, oldPrice: 76, image: "/images/shop/products/sarms-lgd4033-10.jpg", badges: ["sale", "top"], inStock: true },
  { category: "sarms", brand: "Biaxol", name: "Ligandrol (LGD4033) SARM In Capsules", dosage: "10 mg/cap", price: 60, oldPrice: 65, image: "/images/shop/products/sarms-ligandrol.png", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "MK2866 SARM In Tablets", dosage: "25 mg/tab", price: 33, oldPrice: 40, image: "/images/shop/products/sarms-mk2866.jpg", badges: ["sale"], inStock: true },
  { category: "sarms", brand: "Deus Medical", name: "MK677 10 SARM In Tablets", dosage: "10 mg/tab", price: 40, oldPrice: 60, image: "/images/shop/products/sarms-mk677-10.jpg", badges: ["sale", "top"], inStock: true },

  // PCT
  { category: "pct", brand: "Deus Medical", name: "Enclomimed 25 (Enclomiphene Citrate) Tablets", dosage: "25 mg/tab", price: 66, oldPrice: 69, image: "/images/shop/products/pct-enclomimed-25.png", badges: ["new"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Arimimed 1 (Anastrozole) Tablets", dosage: "1 mg/tab", price: 30, oldPrice: 35, image: "/images/shop/products/pct-arimimed-1.jpg", badges: ["sale", "top"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Aromamed 25 Aromatase Inhibitor In Tablets", dosage: "25 mg/tab", price: 33, oldPrice: 38, image: "/images/shop/products/pct-aromamed-25.jpg", badges: ["sale"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Clomimed 50 (Clomiphene Citrate) Tablets", dosage: "50 mg/tab", price: 23, oldPrice: 27, image: "/images/shop/products/pct-clomimed-50.jpg", badges: ["sale", "top"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Evimed 60 (Raloxifene Hydrochloride) Tablets", dosage: "60 mg/tab", price: 28, oldPrice: 33, image: "/images/shop/products/pct-evimed-60.jpg", badges: ["sale"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Femamed 2.5 Aromatase Inhibitor In Tablets", dosage: "2.5 mg/tab", price: 39, oldPrice: 44, image: "/images/shop/products/pct-femamed-25.jpg", badges: ["sale"], inStock: true },
  { category: "pct", brand: "Deus Medical", name: "Nolvamed 20 (Tamoxifen Citrate) SERM Tablets", dosage: "20 mg/tab", price: 25, oldPrice: 32, image: "/images/shop/products/pct-nolvamed-20.jpg", badges: ["sale", "top"], inStock: true },
  { category: "pct", brand: "Astera Labs", name: "Tamoxifen Citrate SERM In Tablets", dosage: "20 mg/tab", price: 24, image: "/images/shop/products/pct-tamoxifen-citrate.webp", badges: ["new"], inStock: true },
  { category: "pct", brand: "Astera Labs", name: "Anastrozole Aromatase Inhibitor In Tablets", dosage: "1 mg/tab", price: 30, image: "/images/shop/products/pct-anastrozole.webp", badges: ["new"], inStock: true },
  { category: "pct", brand: "Astera Labs", name: "Clomiphene Citrate SERM In Tablets", dosage: "50 mg/tab", price: 28, image: "/images/shop/products/pct-clomiphene-citrate.webp", badges: ["new"], inStock: true },

  // Energy
  { category: "energy", brand: "Biaxol", name: "Caffeine Nasal Spray With DMAA In Bottle", dosage: "", price: 24, oldPrice: 28, image: "/images/shop/products/energy-caffeine-nasal.png", badges: ["sale"], inStock: true },
  { category: "energy", brand: "Biaxol", name: "DMAA (Pre-Workout Booster) In Capsules", dosage: "75 mg/cap", price: 36, oldPrice: 46, image: "/images/shop/products/energy-dmaa-capsules.jpg", badges: ["sale", "top"], inStock: true },

  // Sex Support
  { category: "sex-support", brand: "Deus Medical", name: "Viamed 100 (Sildenafil) 100mg Oral Jelly - Viagra", dosage: "100 mg", price: 17, image: "/images/shop/products/sex-support-viamed-100.webp", badges: ["new", "top"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Ciamed 5 PDE5 Inhibitor In Tablets", dosage: "5 mg/tab", price: 22, oldPrice: 29, image: "/images/shop/products/sex-support-ciamed-5.jpg", badges: ["sale"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Prilimed 30 Oral Steroid In Tablets", dosage: "30 mg/tab", price: 17, oldPrice: 22, image: "/images/shop/products/sex-support-prilimed-30.png", badges: ["sale"], inStock: true },
  { category: "sex-support", brand: "Deus Medical", name: "Viamed 20 PDE5 Inhibitor In Tablets", dosage: "20 mg/tab", price: 12, oldPrice: 18, image: "/images/shop/products/sex-support-viamed-20.jpg", badges: ["sale", "top"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Tadalafil (Cialis) - 50 Tabs PDE5 Inhibitor", dosage: "20 mg/tab", price: 44, image: "/images/shop/products/sex-support-tadalafil-50.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Tadalafil (Cialis) - 100 Tabs PDE5 Inhibitor", dosage: "20 mg/tab", price: 72, image: "/images/shop/products/sex-support-tadalafil-100.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Sildenafil Citrate (Viagra) - 50 Tabs", dosage: "100 mg/tab", price: 40, image: "/images/shop/products/sex-support-sildenafil-50.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Dapoxetine HCL Sex Support In Tablets", dosage: "60 mg/tab", price: 33, image: "/images/shop/products/sex-support-dapoxetine.webp", badges: ["new"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Sex Hard Mix (Viagra + Cialis)", dosage: "Mix", price: 77, image: "/images/shop/products/sex-support-sex-hard-mix.webp", badges: ["new", "top"], inStock: true },
  { category: "sex-support", brand: "Astera Labs", name: "Sex Hard & Strong Mix (Viagra + Cialis + Dapoxetine)", dosage: "Mix", price: 99, image: "/images/shop/products/sex-support-sex-hard-strong.webp", badges: ["new"], inStock: true },

  // Health
  { category: "health", brand: "Biaxol", name: "CBD Health Products In Capsules", dosage: "25 mg/cap", price: 60, oldPrice: 65, image: "/images/shop/products/health-cbd.png", badges: ["sale", "top"], inStock: true },
  { category: "health", brand: "Biaxol", name: "DHEA (Hormone Support) Health Products", dosage: "50 mg/cap", price: 42, oldPrice: 52, image: "/images/shop/products/health-dhea.webp", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Anti Stress (Emotional Wellness) In Capsules", dosage: "", price: 30, oldPrice: 33, image: "/images/shop/products/health-anti-stress.jpg", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Detox (Body Cleanse) In Capsules", dosage: "", price: 25, oldPrice: 30, image: "/images/shop/products/health-detox.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Cortisol (Health & Balance) In Capsules", dosage: "", price: 45, oldPrice: 54, image: "/images/shop/products/health-cortisol.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "GDA (Glucose Support) In Capsules", dosage: "", price: 40, oldPrice: 48, image: "/images/shop/products/health-gda.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Immune Boost In Capsules", dosage: "", price: 35, oldPrice: 42, image: "/images/shop/products/health-immune.png", badges: ["sale", "top"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Nootropic (Brain & Memory Support)", dosage: "", price: 35, oldPrice: 42, image: "/images/shop/products/health-nootropic.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "Sleep (Body & Mind Relax) In Capsules", dosage: "", price: 35, oldPrice: 42, image: "/images/shop/products/health-sleep.png", badges: ["sale"], inStock: true },
  { category: "health", brand: "Biaxol", name: "TUDCA (Liver Support) In Capsules", dosage: "", price: 54, oldPrice: 64, image: "/images/shop/products/health-tudca.png", badges: ["sale", "top"], inStock: true },

  // Stacks
  { category: "stacks", brand: "Biaxol", name: "Muscle Building Stack", dosage: "Bundle", price: 222, oldPrice: 242, image: "/images/shop/products/stacks-muscle-building.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Cutting Stack", dosage: "Bundle", price: 160, oldPrice: 180, image: "/images/shop/products/stacks-cutting.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Bulking Stack", dosage: "Bundle", price: 234, oldPrice: 254, image: "/images/shop/products/stacks-bulking.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Beginner Stack", dosage: "Bundle", price: 168, oldPrice: 188, image: "/images/shop/products/stacks-beginner.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Valhalla Cutting Stack", dosage: "Bundle", price: 282, oldPrice: 298, image: "/images/shop/products/stacks-valhalla-cutting.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Valhalla Muscle Stack", dosage: "Bundle", price: 156, oldPrice: 186, image: "/images/shop/products/stacks-valhalla-muscle.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "Fat Burning Stack", dosage: "Bundle", price: 216, oldPrice: 236, image: "/images/shop/products/stacks-fat-burning.webp", badges: ["sale", "top"], inStock: true },
  { category: "stacks", brand: "Biaxol", name: "High Libido & Fat Burning Stack", dosage: "Bundle", price: 144, oldPrice: 165, image: "/images/shop/products/stacks-high-libido-stack.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Deus Medical", name: "SARMs Bulking Stack For Beginners", dosage: "Bundle", price: 210, oldPrice: 221, image: "/images/shop/products/stacks-sarms-bulking-beginner.webp", badges: ["sale"], inStock: true },
  { category: "stacks", brand: "Deus Medical", name: "SARMs Muscle Building Stack For Advanced", dosage: "Bundle", price: 349, oldPrice: 387, image: "/images/shop/products/stacks-sarms-muscle-advanced.webp", badges: ["sale", "top"], inStock: true },

  // Amino Acids
  { category: "amino-acids", brand: "Astera Labs", name: "Burn Supplement For Fat Loss And Energy", dosage: "", price: 44, image: "/images/shop/products/amino-acids-burn.webp", badges: ["new", "top"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Vaso Burn - Thermogenic Formula", dosage: "", price: 33, image: "/images/shop/products/amino-acids-vaso-burn.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Pump Supplement For Blood Flow", dosage: "", price: 33, image: "/images/shop/products/amino-acids-pump.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Night Blend Supplement For Sleep Recovery", dosage: "", price: 33, image: "/images/shop/products/amino-acids-night-blend.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Bones & Joint Recovery Formula", dosage: "", price: 39, image: "/images/shop/products/amino-acids-bones-joint.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Daily Blend For Energy And Focus", dosage: "", price: 33, image: "/images/shop/products/amino-acids-daily-blend.webp", badges: ["new", "top"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "BCAA Supplements For Muscle Recovery", dosage: "", price: 28, image: "/images/shop/products/amino-acids-bcaa.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Lipo Burn Supplement For Fat Metabolism", dosage: "", price: 28, image: "/images/shop/products/amino-acids-lipo-burn.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Lipo-C Supplement For Fat Metabolism", dosage: "", price: 33, image: "/images/shop/products/amino-acids-lipo-c.webp", badges: ["new"], inStock: true },
  { category: "amino-acids", brand: "Astera Labs", name: "Power Supplement For Energy And Endurance", dosage: "", price: 33, image: "/images/shop/products/amino-acids-power.webp", badges: ["new"], inStock: true },
];

/* ------------------------------------------------------------------ */
/*  Brand badge component                                              */
/* ------------------------------------------------------------------ */

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
  const [openFAQ, setOpenFAQ] = useState<number | null>(2);
  const [seoExpanded, setSeoExpanded] = useState(false);

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

  // Filter products (hook must be before any early return)
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
            {/* Brands card — only if more than 1 brand */}
            {brandsForCategory.length > 1 && (
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
            )}

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
                    onChange={(e) => setPriceRange([Math.min(+e.target.value, priceRange[1]), priceRange[1]])}
                    className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                  />
                </div>
                <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-10 flex-1 px-3">
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Math.max(+e.target.value, priceRange[0])])}
                    className="w-full text-[14px] text-[#181818] outline-none bg-transparent text-center"
                  />
                </div>
              </div>
              {/* Dual-range slider */}
              <div className="relative h-6 mt-4">
                {/* Track background */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-[#E7E7E7] rounded-full" />
                {/* Active range */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#181818] rounded-full"
                  style={{
                    left: `${(priceRange[0] / 100000) * 100}%`,
                    right: `${100 - (priceRange[1] / 100000) * 100}%`,
                  }}
                />
                {/* Min handle */}
                <input
                  type="range"
                  min={0}
                  max={100000}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Math.min(+e.target.value, priceRange[1]), priceRange[1]])}
                  className="dual-range absolute top-0 left-0 w-full h-6 appearance-none bg-transparent pointer-events-none"
                  style={{ zIndex: priceRange[0] > 95000 ? 5 : 3 }}
                />
                {/* Max handle */}
                <input
                  type="range"
                  min={0}
                  max={100000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Math.max(+e.target.value, priceRange[0])])}
                  className="dual-range absolute top-0 left-0 w-full h-6 appearance-none bg-transparent pointer-events-none"
                  style={{ zIndex: 4 }}
                />
              </div>
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

            {/* Pagination — Figma 1249:6504 style: Prev / nums / Next */}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-between mt-10">
                <button className="cursor-pointer flex items-center gap-2 h-10 px-4 rounded-[8px] text-sm font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Prev
                </button>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, "...", 12].map((p, i) => (
                    <button
                      key={i}
                      disabled={p === "..."}
                      className={`w-10 h-10 rounded-[8px] flex items-center justify-center text-sm font-semibold transition-colors ${
                        p === 1
                          ? "bg-[#181818] text-white"
                          : p === "..."
                            ? "text-[#7E7E7E] cursor-default"
                            : "text-[#181818] hover:bg-[#F7F7F7] cursor-pointer"
                      }`}
                    >
                      {p === "..." ? "..." : p}
                    </button>
                  ))}
                </div>
                <button className="cursor-pointer flex items-center gap-2 h-10 px-4 rounded-[8px] text-sm font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors">
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}

            {/* SEO text block — inside right column */}
            <div className="pt-12 pb-8">
              <h3 className="text-[28px] font-extrabold text-[#181818] leading-[34px] mb-6">
                Dinespower is the best distributor of bodybuilding preparations in Europe
              </h3>
              <div className={`relative text-[14px] text-[#7E7E7E] leading-[22px] flex flex-col gap-3 ${!seoExpanded ? "max-h-[72px] overflow-hidden" : ""}`}>
                <p>DinesPower is a leading distributor of high-quality bodybuilding products such as steroids, testosterone, and anabolic steroids in Europe. We offer high-quality performance enhancers and nutritional supplements. If you are looking for muscle gain and fat loss simultaneously, you will find the right products, such as anabolic steroids, with us.</p>
                <p>As the sole worldwide distributor of DEUS MEDICAL® testosterone and steroids, a renowned brand from Kolkata and India, we are committed to the highest standards. Do you want to build muscle quickly? We have exactly what you need to achieve your goals.</p>
                <p>What sets us apart? Our absolute reliability, our outstanding service, and our attention to detail. If you are considering buying anabolic steroids or anabolic steroids, you can rely on the quality of our legal anabolic steroids or testosterone.</p>
                {!seoExpanded && <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent" />}
              </div>
              <button onClick={() => setSeoExpanded(!seoExpanded)} className="cursor-pointer flex items-center gap-1 text-[14px] font-semibold text-[#181818] mt-4 hover:underline">
                {seoExpanded ? 'Show Less' : 'Read More'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${seoExpanded ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* FAQ section — inside right column */}
            <div className="pb-16">
              <h2 className="text-[28px] font-extrabold text-[#181818] leading-[34px] mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col">
                {faqItems.map((item, i) => (
                  <div key={i} className="border-b border-[#E7E7E7]">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                      className="w-full flex items-center justify-between py-5 cursor-pointer gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} className="shrink-0" />
                        <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{item.q}</span>
                      </div>
                      <div className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center shrink-0 transition-colors ${openFAQ === i ? 'bg-[#E7E7E7]' : 'bg-[#F7F7F7]'}`}>
                        <span className="text-[20px] leading-none text-[#181818]">{openFAQ === i ? '−' : '+'}</span>
                      </div>
                    </button>
                    {openFAQ === i && (
                      <div className="pb-5 pl-[36px] pr-[56px] text-[14px] text-[#7E7E7E] leading-[22px]">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
