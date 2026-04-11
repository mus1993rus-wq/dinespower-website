"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollAnimation from "@/components/ScrollAnimation";

/* ──── SAMPLE DATA ──── */

const categories = [
  { name: "Injectable", img: "/images/shop/cat-injectable.png" },
  { name: "Oral", img: "/images/shop/cat-oral.png" },
  { name: "Fat Burn", img: "/images/shop/cat-fatburn.png" },
  { name: "Peptides & HGC", img: "/images/shop/cat-peptides.png" },
  { name: "PCT", img: "/images/shop/cat-pct.png" },
  { name: "Sex Support", img: "/images/shop/cat-sexsupport.png" },
  { name: "Stacks", img: "/images/shop/cat-stacks.png" },
  { name: "Other", img: "/images/shop/cat-other.png" },
];

const popularProducts = [
  { brand: "Deus Medical", name: "3-Trenbomed 150 Injectable Steroid In Ampoules", dosage: "150 mg/ml", price: 57, oldPrice: 65, badges: ["sale", "top"], image: "/images/shop/products/injectable-trenbomed-150.jpg" },
  { brand: "Deus Medical", name: "Equimed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 42, oldPrice: 53, badges: ["sale"], image: "/images/shop/products/injectable-equimed-250.jpg" },
  { brand: "Deus Medical", name: "Sustamed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 37, oldPrice: 43, badges: ["sale", "top"], image: "/images/shop/products/injectable-sustamed-250.jpg" },
  { brand: "Biaxol", name: "Yohimbine Fat Burner Capsules", dosage: "10 mg/cap", price: 24, oldPrice: 30, badges: ["sale", "top"], image: "/images/shop/products/fat-burn-yohimbine.png" },
  { brand: "Biaxol", name: "Ibutamoren (MK677) SARM In Capsules", dosage: "10 mg/cap", price: 60, oldPrice: 65, badges: ["sale", "top"], image: "/images/shop/products/sarms-ibutamoren.png" },
  { brand: "Deus Medical", name: "BPC-157 Peptide In Vials", dosage: "5 mg/vial", price: 39, oldPrice: 43, badges: ["sale", "top"], image: "/images/shop/products/peptides-hgh-bpc-157.jpg" },
  { brand: "Deus Medical", name: "Viamed 100 (Sildenafil) 100mg Oral Jelly", dosage: "100 mg", price: 17, badges: ["new", "top"], image: "/images/shop/products/sex-support-viamed-100.webp" },
  { brand: "Deus Medical", name: "MK677 10 SARM In Tablets", dosage: "10 mg/tab", price: 40, oldPrice: 60, badges: ["sale", "top"], image: "/images/shop/products/sarms-mk677-10.jpg" },
  { brand: "Astera Labs", name: "BCAA Supplements For Muscle Recovery", dosage: "", price: 28, badges: ["new"], image: "/images/shop/products/amino-acids-bcaa.webp" },
  { brand: "Deus Medical", name: "Anavamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 25, oldPrice: 34, badges: ["sale", "top"], image: "/images/shop/products/oral-anavamed-10.jpg" },
];

const topOralProducts = [
  { brand: "Deus Medical", name: "Anavamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 25, oldPrice: 34, badges: ["sale", "top"], image: "/images/shop/products/oral-anavamed-10.jpg" },
  { brand: "Deus Medical", name: "Dianamed 10 Oral Steroid In Tablets", dosage: "10 mg/tab", price: 13, oldPrice: 17, badges: ["sale", "top"], image: "/images/shop/products/oral-dianamed-10.jpg" },
  { brand: "Deus Medical", name: "Halomed 5 Oral Steroid In Tablets", dosage: "5 mg/tab", price: 50, oldPrice: 58, badges: ["sale"], image: "/images/shop/products/oral-halomed-5.jpg" },
  { brand: "Deus Medical", name: "Primomed 25 Oral Steroid In Tablets", dosage: "25 mg/tab", price: 83, oldPrice: 92, badges: ["sale", "top"], image: "/images/shop/products/oral-primomed-25.jpg" },
  { brand: "Deus Medical", name: "Provimed 25 Oral Steroid In Tablets", dosage: "25 mg/tab", price: 25, oldPrice: 29, badges: ["sale"], image: "/images/shop/products/oral-provimed-25.jpg" },
];

const topInjectableProducts = [
  { brand: "Deus Medical", name: "3-Trenbomed 150 Injectable Steroid In Ampoules", dosage: "150 mg/ml", price: 57, oldPrice: 65, badges: ["sale", "top"], image: "/images/shop/products/injectable-trenbomed-150.jpg" },
  { brand: "Deus Medical", name: "Decamed PP 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 34, oldPrice: 44, badges: ["sale"], image: "/images/shop/products/injectable-decamed-pp-100.jpg" },
  { brand: "Deus Medical", name: "Dianamed 100 Injectable Steroid In Ampoules", dosage: "100 mg/ml", price: 40, oldPrice: 54, badges: ["sale", "top"], image: "/images/shop/products/injectable-dianamed-100.png" },
  { brand: "Deus Medical", name: "Equimed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 42, oldPrice: 53, badges: ["sale"], image: "/images/shop/products/injectable-equimed-250.jpg" },
  { brand: "Deus Medical", name: "Sustamed 250 Injectable Steroid In Ampoules", dosage: "250 mg/ml", price: 37, oldPrice: 43, badges: ["sale", "top"], image: "/images/shop/products/injectable-sustamed-250.jpg" },
];

const topStackProducts = [
  { brand: "Biaxol", name: "Muscle Building Stack", dosage: "Bundle", price: 222, oldPrice: 242, badges: ["sale", "top"], image: "/images/shop/products/stacks-muscle-building.webp" },
  { brand: "Biaxol", name: "Cutting Stack", dosage: "Bundle", price: 160, oldPrice: 180, badges: ["sale", "top"], image: "/images/shop/products/stacks-cutting.webp" },
  { brand: "Biaxol", name: "Bulking Stack", dosage: "Bundle", price: 234, oldPrice: 254, badges: ["sale"], image: "/images/shop/products/stacks-bulking.webp" },
  { brand: "Biaxol", name: "Beginner Stack", dosage: "Bundle", price: 168, oldPrice: 188, badges: ["sale", "top"], image: "/images/shop/products/stacks-beginner.webp" },
  { brand: "Biaxol", name: "Fat Burning Stack", dosage: "Bundle", price: 216, oldPrice: 236, badges: ["sale", "top"], image: "/images/shop/products/stacks-fat-burning.webp" },
];

const proSellerCards = [
  { icon: "/images/shop/pro-partner.svg", title: "Official Brand Partner", desc: "We are an authorized partner of Astera, Deus Medical & Biaxol", link: "View Verification" },
  { icon: "/images/shop/pro-labtest.png", title: "Lab Tests & Verification", desc: "Browse lab reports, batch checks, and product verification details.", link: "See All Lab Tests" },
  { icon: "/images/shop/pro-support.png", title: "Delivery & Payment", desc: "Shipping options, delivery times, tracking, and payment methods", link: "View Details" },
  { icon: "/images/shop/pro-delivery.png", title: "Customer Support 24/7", desc: "Get help with orders, shipping, payments, and product questions", link: "Contact Us" },
];

const blogPosts = [
  { title: "Best SARMs for Body Recomposition: Muscle Gain and Fat Loss", slug: "best-sarms-body-recomposition", date: "12 Nov", readTime: "7 min read", views: "3.2k views", tags: ["Bodybuilding", "SARMs", "Cutting"] },
  { title: "Peptides vs SARMs for Cutting: which is more effective for preserving muscle mass", slug: "peptides-vs-sarms-cutting", date: "12 Nov 2025", readTime: "7 min read", views: "2.8k views" },
  { title: "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism, Androgen Receptors and Safety Markers", slug: "rad-140-testolone-analysis", date: "8 Nov 2025", readTime: "9 min read", views: "4.1k views" },
  { title: "Complete Guide to Post Cycle Therapy: When and How to Start PCT", slug: "post-cycle-therapy-guide", date: "5 Nov 2025", readTime: "11 min read", views: "5.6k views" },
  { title: "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism", slug: "rad-140-anabolism-impact", date: "3 Nov 2025", readTime: "8 min read", views: "3.5k views" },
];

const faqItems = [
  "What is the minimum amount for the first order?",
  "How long does delivery take?",
  "How do we know that these products are genuine?",
  "What if the package is lost or damaged?",
  "Are all products really tested in laboratories?",
];

/* ──── SECTIONS ──── */

function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1340px] mx-auto mt-6">
      <div className="flex gap-[16px]">
        {/* Main banner - clickable hero, links to product */}
        <div className="w-[884px] h-[467px] relative rounded-[16px] overflow-hidden shrink-0 group">
          <Link href="/product" aria-label="Lean Muscle Growth" className="absolute inset-0 z-0">
            <Image src="/images/shop/hero-banner.png" alt="Weekly Bestseller - Lean Muscle Growth" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
          </Link>
          {/* Left arrow */}
          <button onClick={() => setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides)} className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-black hover:bg-[#333] transition-colors border border-[#5C5C5C] border-l-0 rounded-r-lg flex items-center justify-center z-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Right arrow */}
          <button onClick={() => setActiveSlide((activeSlide + 1) % totalSlides)} className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-black hover:bg-[#333] transition-colors border border-[#5C5C5C] border-r-0 rounded-l-lg flex items-center justify-center z-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Slider dots */}
          <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex gap-[8px] z-20">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-[64px] h-[4px] bg-[#F7F7F7] rounded-[4px] cursor-pointer transition-opacity duration-300 ${i === activeSlide ? 'opacity-100' : 'opacity-30'}`}
              />
            ))}
          </div>
        </div>

        {/* Side banners - clickable, 440px wide */}
        <div className="w-[440px] flex flex-col gap-[16px] shrink-0">
          <Link href="/catalog?category=sex-support" className="h-[225px] rounded-[16px] overflow-hidden relative group block cursor-pointer">
            <Image src="/images/shop/side-sexboost.png" alt="Sex Boost" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
          </Link>
          <Link href="/catalog?category=health" className="h-[226px] rounded-[16px] overflow-hidden relative group block cursor-pointer">
            <Image src="/images/shop/side-cbd.png" alt="CBD" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CategoriesRow() {
  return (
    <section className="max-w-[1340px] mx-auto mt-[48px]">
      <div className="flex justify-between">
        {categories.map((cat) => (
          <Link key={cat.name} href={`/catalog?category=${cat.name.toLowerCase().replace(/ & /g, '-')}`}>
            <ScrollAnimation animation="animate-fade-in-up" className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-[116px] h-[116px] rounded-full bg-[#F7F7F7] overflow-hidden flex items-center justify-center transition-colors duration-300">
                <Image src={cat.img} alt={cat.name} width={116} height={116} className="object-cover transition-transform duration-300 group-hover:scale-[1.05]" />
              </div>
              <span className="text-[14px] font-semibold text-[#181818] leading-5">{cat.name}</span>
            </ScrollAnimation>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PromoBanner({ categoryName }: { categoryName: string }) {
  const imageMap: Record<string, string> = {
    "Orals": "/images/shop/promo-oral.png",
    "Injectables": "/images/shop/promo-injectable.png",
    "Stacks": "/images/shop/promo-stacks.png",
  };
  const bgImage = imageMap[categoryName] || "/images/shop/promo-oral.png";
  return (
    <Link href={`/catalog?category=${categoryName.toLowerCase()}`} className="w-[255px] shrink-0 rounded-[16px] overflow-hidden relative flex items-center justify-center group cursor-pointer hover:shadow-lg transition-shadow">
      <Image src={bgImage} alt={`View All ${categoryName}`} fill className="object-cover" />
      <div className="relative z-10">
        <button
          data-label={`View All ${categoryName}`}
          className="bg-white border border-[#E7E7E7] rounded-[8px] h-[44px] px-8 text-[14px] font-semibold text-[#181818] hover:border-[#181818] transition-colors shadow-md"
        >
          View All {categoryName}
        </button>
      </div>
    </Link>
  );
}

function ProductSection({ title, products, className = "", promoCategoryName }: { title: string; products: typeof popularProducts; className?: string; promoCategoryName?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section className={`max-w-[1340px] mx-auto ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px]">{title}</h2>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="cursor-pointer w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] flex items-center justify-center hover:bg-[#E7E7E7] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={scrollRight} className="cursor-pointer w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] flex items-center justify-center hover:bg-[#E7E7E7] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        {/* Fixed promo banner - doesn't scroll */}
        {promoCategoryName && <PromoBanner categoryName={promoCategoryName} />}
        {/* Scrollable product cards */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 flex-1 min-w-0">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBanners() {
  return (
    <section className="max-w-[1340px] mx-auto mt-[65px]">
      <div className="flex gap-[16px]">
        {/* Left banner - Recovery */}
        <div className="flex-1 h-[272px] rounded-[16px] overflow-hidden relative group">
          <Link href="/catalog?category=sarms" aria-label="Faster Muscle Recovery" className="absolute inset-0 z-0">
            <Image src="/images/shop/banner-bg-dark.png" alt="" fill className="object-cover" />
          </Link>
          <div className="absolute left-[48px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-[32px] w-[250px] pointer-events-none">
            <h3 className="text-[28px] font-extrabold italic leading-[1.22] capitalize">
              <span className="text-[#FF6701]">Faster Muscle<br />Recovery &</span>{" "}
              <span className="text-white">Reduced Body Fat</span>
            </h3>
            <Link href="/catalog?category=sarms" className="pointer-events-auto cursor-pointer w-fit h-[44px] px-[32px] rounded-[8px] border border-[#CBCBCB] bg-white text-black text-[14px] font-semibold flex items-center hover:bg-[#E7E7E7] hover:border-transparent transition-colors">
              See More
            </Link>
          </div>
          <div className="absolute right-0 top-0 h-full w-[350px] z-10 pointer-events-none">
            <Image src="/images/shop/banner-product-recovery.png" alt="Recovery products" fill className="object-contain object-right-bottom" />
          </div>
        </div>

        {/* Right banner - Libido */}
        <div className="flex-1 h-[272px] rounded-[16px] overflow-hidden relative group">
          <Link href="/catalog?category=sex-support" aria-label="Stacks For High Libido" className="absolute inset-0 z-0">
            <Image src="/images/shop/banner-bg-dark.png" alt="" fill className="object-cover" />
          </Link>
          <div className="absolute left-[48px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-[32px] w-[250px] pointer-events-none">
            <h3 className="text-[28px] font-extrabold italic leading-[1.22] capitalize">
              <span className="text-[#FF6701]">Stacks For<br />High Libido </span>
              <span className="text-white">And Fat Burning</span>
            </h3>
            <Link href="/catalog?category=sex-support" className="pointer-events-auto cursor-pointer w-fit h-[44px] px-[32px] rounded-[8px] border border-[#CBCBCB] bg-white text-black text-[14px] font-semibold flex items-center hover:bg-[#E7E7E7] hover:border-transparent transition-colors">
              See More
            </Link>
          </div>
          <div className="absolute right-0 top-0 h-full w-[350px] z-10 pointer-events-none">
            <Image src="/images/shop/banner-product-libido.png" alt="Libido products" fill className="object-contain object-right-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FatBurningBanner() {
  return (
    <section className="max-w-[1340px] mx-auto mt-[65px]">
      <div className="relative h-[400px] rounded-[16px] overflow-hidden">
        <Link href="/catalog?category=fat-burn" aria-label="Fat Burning Stack" className="absolute inset-0 z-0">
          <Image src="/images/shop/banner-dark-1.png" alt="" fill className="object-cover" />
        </Link>
        {/* Text block: 100px left pad, 480px wide */}
        <div className="absolute left-[100px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-6 w-[480px] pointer-events-none">
          <div>
            <h2 className="text-[48px] font-black italic text-[#FF6701] uppercase leading-[56px]">Fat Burning</h2>
            <h2 className="text-[48px] font-black text-white uppercase leading-[56px]">Stack</h2>
          </div>
          <p className="text-[16px] text-white/80 leading-[24px]">
            This combination of powerful fat burners works synergistically.
          </p>
          <Link href="/catalog?category=fat-burn" className="pointer-events-auto cursor-pointer h-[44px] px-[32px] rounded-[8px] border border-[#CBCBCB] bg-white text-[#181818] text-[14px] font-semibold w-fit flex items-center hover:bg-[#E7E7E7] hover:border-transparent transition-colors">
            See More
          </Link>
        </div>
        {/* Image: 100px right pad, 600px wide */}
        <div className="absolute right-[100px] top-0 h-full w-[600px] z-[5] pointer-events-none">
          <Image src="/images/shop/fatburn-products.png" alt="Fat Burning Products" fill className="object-contain object-center" />
        </div>
      </div>
    </section>
  );
}

function ProSellersSection() {
  return (
    <section className="w-full mt-[65px] relative overflow-hidden">
      <Image src="/images/shop/pro-sellers-bg.png" alt="" fill className="object-cover" />
      <div className="max-w-[1340px] mx-auto py-[80px] relative z-10">
        <ScrollAnimation animation="animate-fade-in-up">
          <div className="text-center mb-[60px]">
            <p className="text-[14px] text-[#B6B6B6] uppercase tracking-[2px] mb-4 font-semibold">Built to Scale</p>
            <h2 className="text-[36px] font-extrabold text-white leading-[44px]">Built for Professional Sellers</h2>
            <p className="text-[14px] text-[#7E7E7E] mt-4 leading-5">We support partners who need reliable supply, stable margins, and fast operations.</p>
          </div>
        </ScrollAnimation>

        <div className="flex gap-[16px]">
          {proSellerCards.map((card, i) => (
            <ScrollAnimation key={i} animation="animate-fade-in-up" className="flex-1" delay={i * 100}>
              <div className="bg-[#212121] border border-white/[0.08] rounded-[12px] p-[25px] flex flex-col items-center gap-6 h-full text-center">
                <div className={`shrink-0 flex items-center justify-center ${card.icon.endsWith("pro-delivery.png") ? "w-[120px] h-[80px]" : "w-[80px] h-[80px]"}`}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[18px] font-extrabold text-white leading-[24px] capitalize">{card.title}</h3>
                <p className="text-[14px] text-[#B6B6B6] leading-5">{card.desc}</p>
                <Link href="#" className="text-[14px] font-semibold text-[#FF6701] hover:underline mt-auto leading-5 flex items-center gap-1">
                  {card.link}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#FF6701" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const featuredSlides = blogPosts.slice(0, 4);
  const currentSlide = featuredSlides[slideIndex];

  // Auto-advance every 10s
  useEffect(() => {
    if (featuredSlides.length < 2) return;
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % featuredSlides.length);
    }, 10000);
    return () => clearInterval(t);
  }, [featuredSlides.length]);

  return (
    <section className="max-w-[1340px] mx-auto mt-[65px]">
      <ScrollAnimation animation="animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px]">Our Blogpost</h2>
        </div>
      </ScrollAnimation>
      <div className="flex gap-6">
        {/* Featured slider */}
        <div className="flex-1 relative h-[534px] rounded-[16px] overflow-hidden">
          {featuredSlides.map((slide, i) => (
            <Image
              key={slide.slug}
              src={`/images/shop/blog-${i + 1}.png`}
              alt={slide.title}
              fill
              className={`object-cover transition-opacity duration-700 ${i === slideIndex ? "opacity-100" : "opacity-0"}`}
              priority={i === 0}
            />
          ))}
          {/* Full-card click target */}
          <Link href={`/blog/${currentSlide.slug}`} aria-label={currentSlide.title} className="absolute inset-0 z-0" />
          {/* Date badge */}
          <div className="absolute top-2 left-2 z-20 bg-white rounded-[8px] w-[72px] h-[72px] flex flex-col items-center justify-center px-3 py-2 pointer-events-none">
            <span className="text-[24px] font-extrabold text-black leading-none">{currentSlide.date.split(" ")[0]}</span>
            <span className="text-[12px] font-semibold text-black leading-4 mt-0.5">{currentSlide.date.split(" ")[1]}</span>
          </div>
          {/* Bottom gradient overlay with content */}
          <div className="absolute bottom-0 left-0 right-0 pt-[100px] pb-8 px-8 z-10 bg-gradient-to-b from-transparent to-[#232323] pointer-events-none">
            <div className="flex flex-col gap-4">
              {currentSlide.tags && (
                <div className="flex flex-wrap gap-2 pointer-events-auto">
                  {currentSlide.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?category=${tag.toLowerCase()}`}
                      className="backdrop-blur-[50px] bg-white/10 border border-white/20 rounded-[8px] px-3 py-1.5 text-[14px] text-white leading-5 hover:bg-white/20 hover:border-white/40 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              <Link href={`/blog/${currentSlide.slug}`} className="pointer-events-auto relative z-10">
                <h3 className="text-[28px] font-extrabold text-white leading-[34px]">{currentSlide.title}</h3>
              </Link>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-50"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/><path d="M12 7v5l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    <span className="text-[16px] text-white leading-6">{currentSlide.readTime}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-50"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5"/></svg>
                    <span className="text-[16px] text-white leading-6">{currentSlide.views}</span>
                  </div>
                </div>
                {/* Prev / Next arrow buttons */}
                <div className="flex gap-2 items-center pointer-events-auto">
                  <button
                    onClick={() => setSlideIndex((i) => (i - 1 + featuredSlides.length) % featuredSlides.length)}
                    aria-label="Previous slide"
                    className="cursor-pointer w-12 h-12 rounded-[8px] bg-black border border-[#5C5C5C] flex items-center justify-center hover:bg-[#181818] transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    onClick={() => setSlideIndex((i) => (i + 1) % featuredSlides.length)}
                    aria-label="Next slide"
                    className="cursor-pointer w-12 h-12 rounded-[8px] bg-black border border-[#5C5C5C] flex items-center justify-center hover:bg-[#181818] transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side posts */}
        <div className="w-[440px] flex flex-col">
          {blogPosts.slice(1).map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="flex gap-4 py-4 border-b border-[#E7E7E7] last:border-b-0 cursor-pointer group">
              <div className="w-[100px] h-[80px] bg-[#F7F7F7] rounded-lg shrink-0 relative overflow-hidden">
                <Image src={`/images/shop/blog-${i + 2}.png`} alt="" fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p className="text-xs text-[#7E7E7E]">{post.date}</p>
                <p className="text-sm font-semibold text-[#181818] leading-[18px] line-clamp-2 group-hover:text-[#FF6701] transition-colors">{post.title}</p>
                <div className="flex gap-3 text-xs text-[#7E7E7E] mt-auto">
                  <span>{post.readTime}</span>
                  <span>{post.views}</span>
                </div>
              </div>
            </Link>
          ))}
          <Link href="/blog" className="bg-[#F7F7F7] rounded-xl py-4 text-center text-sm font-semibold text-[#181818] hover:bg-[#EDEDED] transition-colors mt-4 flex items-center justify-center gap-2">
            See All News
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WholesaleBanner() {
  return (
    <section className="max-w-[1340px] mx-auto mt-[65px]">
      <div className="relative h-[400px] rounded-[16px] overflow-hidden">
        <Image src="/images/shop/banner-dark-2.png" alt="" fill className="object-cover" />
        {/* Text block: 100px left pad, 480px wide */}
        <div className="absolute left-[100px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-5 w-[480px]">
          <div>
            <h2 className="text-[48px] font-black italic text-[#FF6701] uppercase leading-[56px]">Save Up To 70%</h2>
            <h2 className="text-[48px] font-extrabold text-white uppercase leading-[56px]">With Wholesale<br/>Pricing</h2>
          </div>
          <p className="text-[16px] text-white/80">Become a Wholesale Partner in Europe</p>
          <a href="https://dinespower.to/partners-landing/" target="_blank" rel="noopener noreferrer" className="cursor-pointer h-[44px] px-[32px] rounded-[8px] border border-[#CBCBCB] bg-white text-[#181818] text-[14px] font-semibold w-fit flex items-center hover:bg-[#E7E7E7] hover:border-transparent transition-colors">
            Start as a Partner
          </a>
        </div>
        {/* Image: 100px right pad, 600px wide */}
        <div className="absolute right-[100px] top-0 h-full w-[600px] z-[5]">
          <Image src="/images/shop/wholesale-bars.png" alt="Wholesale tiers" fill className="object-contain object-center" />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="max-w-[1340px] mx-auto mt-[65px]">
      <div className="flex gap-[80px]">
        {/* Left column - Still Have Questions Card */}
        <div className="w-[440px] shrink-0">
          <div className="bg-[#F7F7F7] rounded-[12px] p-4">
            <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-4 flex flex-col items-center gap-4">
              <Image src="/images/shop/faq-help-icon.png" alt="Help" width={80} height={80} className="object-contain" />
              <h3 className="text-[16px] font-semibold text-black text-center">Still have questions?</h3>
              <p className="text-[14px] text-[#1E1E1E] text-center">Reach out to our manager right away — we&apos;re happy to help with any questions.</p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-help-popup'))}
                className="cursor-pointer bg-white border border-[#CBCBCB] rounded-[8px] h-[44px] w-full text-[14px] font-semibold text-black text-center hover:border-[#181818] transition-colors"
              >
                Ask a Question
              </button>
              <div className="flex gap-4">
                <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#00A9DE] flex items-center justify-center">
                  <Image src="/images/shop/telegram.svg" alt="Telegram" width={24} height={24} />
                </a>
                <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#00D43F] flex items-center justify-center">
                  <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - FAQ accordion */}
        <div className="w-[820px]">
          <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-col">
            {faqItems.map((q, i) => (
              <div key={i} className="border-b border-[#E7E7E7]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} className="shrink-0" />
                    <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{q}</span>
                  </div>
                  <div className={`w-[40px] h-[40px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? 'bg-[#E7E7E7] text-[#181818]' : 'text-[#181818]'}`}>
                    <span className="text-[20px] leading-none">{openIndex === i ? '−' : '+'}</span>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="pb-5 pl-[36px] pr-[56px] text-[14px] text-[#7E7E7E] leading-[22px]">
                    These boots provide good water resistance for light rain, wet grass, and damp trails, helping keep your feet dry in everyday hiking conditions. However, they are not fully waterproof and do not include a waterproof membrane like GORE-TEX. They are best suited for dry to moderately wet environments. For heavy rain or very wet terrain, a fully waterproof model would be a better choice.
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link href="/faqs" className="bg-[#F7F7F7] rounded-xl py-4 text-center text-sm font-semibold text-[#181818] hover:bg-[#EDEDED] transition-colors mt-6 flex items-center justify-center gap-2 w-full">
            See All Questions And Answers
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SEOSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="max-w-[1340px] mx-auto mt-[65px] mb-[65px]">
      <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-4">
        Dinespower is the best distributor of bodybuilding preparations in Europe
      </h2>
      <div className={`text-sm text-[#7E7E7E] leading-6 space-y-3 ${expanded ? '' : 'max-h-[120px] overflow-hidden relative'}`}>
        <p>DinesPower is a leading distributor of high-quality bodybuilding and pharmaceutical preparations in Europe. We offer a wide range of products including injectable steroids, oral steroids, SARMs, peptides, fat burners, PCT supplements, and more from trusted manufacturers.</p>
        <p>As an official representative of Deus Medical, Biaxol Supplements, and Astera Labs, we guarantee 100% product authenticity. Every item comes with lab test certificates and can be verified through our authenticity check system.</p>
        <p>We provide fast and discreet shipping across Europe, USA, and worldwide. Our dedicated customer support team is available 24/7 to assist with orders, product selection, and any questions you may have.</p>
        <p>Whether you are a professional athlete, bodybuilder, or fitness enthusiast, DinesPower offers competitive wholesale pricing with discounts up to 70% for bulk orders. Contact our team to learn more about partnership opportunities.</p>
        {!expanded && <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-white to-transparent" />}
      </div>
      <button onClick={() => setExpanded(!expanded)} className="cursor-pointer flex items-center gap-1 text-[14px] font-semibold text-[#181818] mt-4 hover:underline">
        {expanded ? 'Show Less' : 'Read More'}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
          <path d="M4 6L8 10L12 6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

/* ──── MAIN PAGE ──── */

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        <HeroBanner />
        <CategoriesRow />
        <ProductSection title="Popular products" products={popularProducts} className="mt-[64px]" />
        <CategoryBanners />
        <ProductSection title="TOP Oral" products={topOralProducts} className="mt-[65px]" promoCategoryName="Orals" />
        <FatBurningBanner />
        <ProductSection title="TOP Injectable" products={topInjectableProducts} className="mt-[65px]" promoCategoryName="Injectables" />
        <ProSellersSection />
        <ProductSection title="TOP Stacks" products={topStackProducts} className="mt-[65px]" promoCategoryName="Stacks" />
        <BlogSection />
        <WholesaleBanner />
        <FAQSection />
        <SEOSection />
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
