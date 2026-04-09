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
  { brand: "Deus Medical", name: "Andarine S4 - SARM for lean muscle growth", dosage: "25mg/cap", price: 44, oldPrice: 56, badges: ["sale", "top", "new"], image: "/images/shop/product-1.webp" },
  { brand: "Astera Labs", name: "Vaso Burn - thermogenic formula for fat oxidation", dosage: "60 caps", price: 44, badges: ["new"], image: "/images/shop/product-2.webp" },
  { brand: "Astera Labs", name: "Night Blend - recovery formula for deep sleep", dosage: "60 caps", price: 33, badges: ["top"], image: "/images/shop/product-3.jpg" },
  { brand: "Deus Medical", name: "BPC-157 - peptide for tissue repair", dosage: "5mg/vial", price: 50, badges: ["top", "new"], image: "/images/shop/product-4.jpg" },
  { brand: "Deus Medical", name: "Day Blend - energy, focus and performance", dosage: "60 caps", price: 44, badges: ["new"], image: "/images/shop/product-5.webp" },
  { brand: "Deus Medical", name: "Testosterone Enanthate 250mg injectable", dosage: "250 mg/ml", price: 38, badges: ["top"], image: "/images/shop/injectable-1.jpg" },
  { brand: "Deus Medical", name: "Boldenone Undecylenate 250mg injectable", dosage: "250 mg/ml", price: 44, oldPrice: 56, badges: ["sale", "top"], image: "/images/shop/injectable-2.jpg" },
  { brand: "Biaxol", name: "Ostarine MK-2866 SARM capsules", dosage: "25 mg/cap", price: 44, badges: ["top"], image: "/images/shop/product-1.webp" },
  { brand: "Biaxol", name: "RAD-140 Testolone SARM capsules", dosage: "10 mg/cap", price: 48, badges: ["new"], image: "/images/shop/product-2.webp" },
  { brand: "Deus Medical", name: "Sustanon 250mg injectable steroid", dosage: "250 mg/ml", price: 42, badges: ["top"], image: "/images/shop/injectable-3.jpg" },
];

const topOralProducts = [
  { brand: "Deus Medical", name: "Anavamed 10 oral steroid in tablets", dosage: "10 mg per tablet", price: 25, oldPrice: 56, badges: ["sale"], image: "/images/shop/oral-1.jpg" },
  { brand: "Deus Medical", name: "Dianamed 10 oral steroid in tablets", dosage: "10 mg per tablet", price: 30, badges: ["top"], image: "/images/shop/oral-2.jpg" },
  { brand: "Deus Medical", name: "Halomed 5 oral steroid in tablets", dosage: "5 mg per tablet", price: 28, badges: ["new"], image: "/images/shop/oral-3.jpg" },
  { brand: "Deus Medical", name: "Winimed 10 oral steroid in tablets", dosage: "10 mg per tablet", price: 32, badges: ["top"], image: "/images/shop/oral-4.jpg" },
  { brand: "Astera Labs", name: "Vaso Burn thermogenic formula", dosage: "60 caps", price: 44, badges: ["new"], image: "/images/shop/product-2.webp" },
];

const topInjectableProducts = [
  { brand: "Deus Medical", name: "Nandrolone Phenylpropionate 100mg/ml injectable", dosage: "100 mg/ml", price: 38, badges: ["top"], image: "/images/shop/injectable-1.jpg" },
  { brand: "Deus Medical", name: "Boldenone Undecylenate 250mg/ml injectable", dosage: "250 mg/ml", price: 44, oldPrice: 56, badges: ["sale", "top"], image: "/images/shop/injectable-2.jpg" },
  { brand: "Deus Medical", name: "Sustanon 250mg/ml injectable steroid", dosage: "250 mg/ml", price: 42, badges: ["top"], image: "/images/shop/injectable-3.jpg" },
  { brand: "Deus Medical", name: "Trenbolone Hex 76.5mg/ml injectable", dosage: "76.5 mg/ml", price: 62, badges: ["new"], image: "/images/shop/injectable-4.jpg" },
  { brand: "Astera Labs", name: "BPC-157 peptide in vials", dosage: "5mg/vial", price: 50, badges: ["top", "new"], image: "/images/shop/product-4.jpg" },
];

const topStackProducts = [
  { brand: "Biaxol", name: "Cutting Stack - Ostarine, Testolone, Cardarine", dosage: "3 products", price: 160, badges: ["top"], image: "/images/shop/product-1.webp" },
  { brand: "Biaxol", name: "Beginner Stack - MK-677, PCT, RAD-140", dosage: "3 products", price: 168, badges: ["top"], image: "/images/shop/product-2.webp" },
  { brand: "Deus Medical", name: "Cutting Stack Package for Beginners", dosage: "Testomed, Anavamed, Clomimed", price: 155, badges: ["top"], image: "/images/shop/product-3.jpg" },
  { brand: "Deus Medical", name: "3-Trenbomed 150 injectable steroid", dosage: "1ml per ampoule", price: 57, badges: ["top"], image: "/images/shop/product-4.jpg" },
  { brand: "Astera Labs", name: "Yohimbine Fat Burner supplement", dosage: "60 caps / 5mg", price: 35, badges: ["new"], image: "/images/shop/product-5.webp" },
];

const proSellerCards = [
  { icon: "/images/shop/pro-partner.svg", title: "Official Brand Partner", desc: "We are an authorized partner of Astera, Deus Medical & Biaxol", link: "View Verification" },
  { icon: "/images/shop/pro-labtest.png", title: "Lab Tests & Verification", desc: "Browse lab reports, batch checks, and product verification details.", link: "See All Lab Tests" },
  { icon: "/images/shop/pro-delivery.png", title: "Delivery & Payment", desc: "Shipping options, delivery times, tracking, and payment methods", link: "View Details" },
  { icon: "/images/shop/pro-support.png", title: "Customer Support 24/7", desc: "Get help with orders, shipping, payments, and product questions", link: "Contact Us" },
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
        {/* Main banner - just an image, 884x467 */}
        <div className="w-[884px] h-[467px] relative rounded-[16px] overflow-hidden shrink-0 group">
          <Image src="/images/shop/hero-banner.png" alt="Weekly Bestseller - Lean Muscle Growth" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" unoptimized />
          {/* Left arrow */}
          <button onClick={() => setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides)} className="absolute left-0 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-black hover:bg-[#181818] transition-colors border border-[#5C5C5C] border-l-0 rounded-r-lg flex items-center justify-center z-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Right arrow */}
          <button onClick={() => setActiveSlide((activeSlide + 1) % totalSlides)} className="absolute right-0 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-black hover:bg-[#181818] transition-colors border border-[#5C5C5C] border-r-0 rounded-l-lg flex items-center justify-center z-20">
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

        {/* Side banners - just images, 440px wide */}
        <div className="w-[440px] flex flex-col gap-[16px] shrink-0">
          <div className="h-[225px] rounded-[16px] overflow-hidden relative group">
            <Image src="/images/shop/side-sexboost.png" alt="Sex Boost" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" unoptimized />
          </div>
          <div className="h-[226px] rounded-[16px] overflow-hidden relative group">
            <Image src="/images/shop/side-cbd.png" alt="CBD" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" unoptimized />
          </div>
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
              <div className="w-[116px] h-[116px] rounded-full bg-[#F7F7F7] overflow-hidden flex items-center justify-center group-hover:bg-[#EDEDED] transition-all duration-300">
                <Image src={cat.img} alt={cat.name} width={116} height={116} className="object-cover" unoptimized />
              </div>
              <span className="text-[14px] font-semibold text-[#181818] leading-5 group-hover:text-[#FF6701] transition-colors">{cat.name}</span>
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
    <Link href={`/catalog?category=${categoryName.toLowerCase()}`} className="w-[252px] shrink-0 rounded-[16px] overflow-hidden relative flex items-center justify-center group cursor-pointer hover:shadow-lg transition-shadow">
      <Image src={bgImage} alt={`View All ${categoryName}`} fill className="object-cover" unoptimized />
      <div className="relative z-10">
        <button className="bg-white border border-[#E7E7E7] rounded-[8px] h-[44px] px-8 text-[14px] font-semibold text-[#181818] hover:bg-[#EDEDED] transition-colors shadow-md">
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
          <button onClick={scrollLeft} className="w-[40px] h-[40px] rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={scrollRight} className="w-[40px] h-[40px] rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
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
        <div className="flex-1 h-[272px] rounded-[16px] overflow-hidden relative cursor-pointer group">
          <Image src="/images/shop/banner-bg-dark.png" alt="" fill className="object-cover" unoptimized />
          <div className="absolute left-[48px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-[32px] w-[250px]">
            <h3 className="text-[28px] font-extrabold italic leading-[1.22] capitalize">
              <span className="text-[#FF6701]">Faster Muscle<br />Recovery &</span>{" "}
              <span className="text-white">Reduced Body Fat</span>
            </h3>
            <button className="w-fit h-[44px] px-[32px] rounded-[8px] border border-[#E7E7E7] bg-white text-black text-[14px] font-semibold hover:bg-[#F7F7F7] hover:bg-white hover:text-[#FF6701] hover:border-[#FF6701] transition-all duration-200">
              See More
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-[350px] z-10">
            <Image src="/images/shop/banner-product-recovery.png" alt="Recovery products" fill className="object-contain object-right-bottom" unoptimized />
          </div>
        </div>

        {/* Right banner - Libido */}
        <div className="flex-1 h-[272px] rounded-[16px] overflow-hidden relative cursor-pointer group">
          <Image src="/images/shop/banner-bg-dark.png" alt="" fill className="object-cover" unoptimized />
          <div className="absolute left-[48px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-[32px] w-[250px]">
            <h3 className="text-[28px] font-extrabold italic leading-[1.22] capitalize">
              <span className="text-[#FF6701]">Stacks For<br />High Libido </span>
              <span className="text-white">And Fat Burning</span>
            </h3>
            <button className="w-fit h-[44px] px-[32px] rounded-[8px] border border-[#E7E7E7] bg-white text-black text-[14px] font-semibold hover:bg-[#F7F7F7] hover:bg-white hover:text-[#FF6701] hover:border-[#FF6701] transition-all duration-200">
              See More
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-[350px] z-10">
            <Image src="/images/shop/banner-product-libido.png" alt="Libido products" fill className="object-contain object-right-bottom" unoptimized />
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
        <Image src="/images/shop/banner-dark-1.png" alt="" fill className="object-cover" unoptimized />
        <div className="absolute left-[80px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-6 max-w-[400px]">
          <div>
            <h2 className="text-[48px] font-black italic text-[#FF6701] uppercase leading-[56px]">Fat Burning</h2>
            <h2 className="text-[48px] font-black text-white uppercase leading-[56px]">Stack</h2>
          </div>
          <p className="text-[16px] text-white/80 leading-[24px]">
            This combination of powerful fat burners works synergistically.
          </p>
          <button className="h-[44px] px-[32px] rounded-[8px] border border-[#E7E7E7] bg-white text-[#181818] text-[14px] font-semibold w-fit hover:bg-[#F7F7F7] transition-colors">
            See More
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-[55%] z-10 flex items-center justify-center">
          <Image src="/images/shop/fatburn-products.png" alt="Fat Burning Products" fill className="object-contain object-right" unoptimized />
        </div>
      </div>
    </section>
  );
}

function ProSellersSection() {
  return (
    <section className="w-full mt-[65px] relative overflow-hidden">
      <Image src="/images/shop/pro-sellers-bg.png" alt="" fill className="object-cover" unoptimized />
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
                <div className="w-[80px] h-[80px] shrink-0">
                  <Image src={card.icon} alt={card.title} width={80} height={80} className="object-contain" unoptimized />
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
  return (
    <section className="max-w-[1340px] mx-auto mt-[65px]">
      <ScrollAnimation animation="animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px]">Our Blogpost</h2>
        </div>
      </ScrollAnimation>
      <div className="flex gap-6">
        {/* Featured post */}
        <Link href={`/blog/${blogPosts[0].slug}`} className="flex-1 relative h-[534px] rounded-2xl overflow-hidden group cursor-pointer block">
          <Image src="/images/shop/blog-1.png" alt="" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <div className="absolute top-6 left-6 z-20 bg-white rounded-lg px-3 py-2 text-center">
            <span className="text-2xl font-bold text-[#181818] leading-6 block">12</span>
            <span className="text-xs text-[#7E7E7E]">Nov</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex gap-2 mb-3">
              {blogPosts[0].tags?.map((tag) => (
                <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl font-extrabold text-white leading-[30px]">{blogPosts[0].title}</h3>
            <div className="flex gap-4 mt-3 text-sm text-white/60">
              <span>{blogPosts[0].readTime}</span>
              <span>{blogPosts[0].views}</span>
            </div>
          </div>
        </Link>

        {/* Side posts */}
        <div className="w-[440px] flex flex-col">
          {blogPosts.slice(1).map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="flex gap-4 py-4 border-b border-[#E7E7E7] last:border-b-0 cursor-pointer group">
              <div className="w-[100px] h-[80px] bg-[#F7F7F7] rounded-lg shrink-0 relative overflow-hidden">
                <Image src={`/images/shop/blog-${i + 2}.png`} alt="" fill className="object-cover" unoptimized />
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
        <Image src="/images/shop/banner-dark-2.png" alt="" fill className="object-cover" unoptimized />
        {/* Left text */}
        <div className="absolute left-[80px] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-5 max-w-[420px]">
          <div>
            <h2 className="text-[48px] font-black italic text-[#FF6701] uppercase leading-[56px]">Save Up To 70%</h2>
            <h2 className="text-[48px] font-extrabold text-white uppercase leading-[56px]">With Wholesale<br/>Pricing</h2>
          </div>
          <p className="text-[16px] text-white/80">Become a Wholesale Partner in Europe</p>
          <button className="bg-white hover:bg-[#F7F7F7] text-[#181818] text-[14px] font-semibold px-8 py-3 rounded-[8px] w-fit transition-colors">
            Start as a Partner
          </button>
        </div>
        {/* Bars on right */}
        <div className="absolute right-0 top-0 h-full w-[550px] z-[5] flex items-center justify-center">
          <Image src="/images/shop/wholesale-bars.png" alt="Wholesale tiers" width={550} height={400} className="object-contain" unoptimized />
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
              <Image src="/images/shop/faq-help-icon.png" alt="Help" width={80} height={80} className="object-contain" unoptimized />
              <h3 className="text-[16px] font-semibold text-black text-center">Still have questions?</h3>
              <p className="text-[14px] text-[#1E1E1E] text-center">Reach out to our manager right away — we&apos;re happy to help with any questions.</p>
              <button className="bg-white border border-[#CBCBCB] rounded-[8px] h-[44px] w-full text-[14px] font-semibold text-black text-center">
                Ask a Question
              </button>
              <div className="flex gap-4">
                <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#00A9DE] flex items-center justify-center">
                  <Image src="/images/shop/telegram.svg" alt="Telegram" width={24} height={24} unoptimized />
                </a>
                <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#00D43F] flex items-center justify-center">
                  <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={24} height={24} unoptimized />
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
                    <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} unoptimized className="shrink-0" />
                    <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{q}</span>
                  </div>
                  <div className={`w-[40px] h-[40px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? 'bg-[#FF6701] text-white' : 'text-[#181818]'}`}>
                    <span className="text-[20px] leading-none">{openIndex === i ? '−' : '+'}</span>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="pb-5 pl-[40px] text-sm text-[#7E7E7E] leading-6">
                    These boots provide good water resistance for light rain, wet grass, and damp trails, helping keep your feet dry in everyday hiking conditions. However, they are not fully waterproof and do not include a waterproof membrane like GORE-TEX.
                    <br/><br/>
                    They are best suited for dry to moderately wet environments. For heavy rain or very wet terrain, a fully waterproof model would be a better choice.
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
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1 text-[14px] font-semibold text-[#FF6701] mt-4 hover:underline">
        {expanded ? 'Show Less' : 'Read More'}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
          <path d="M4 6L8 10L12 6" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
