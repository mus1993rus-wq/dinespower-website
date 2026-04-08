"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import PaymentPopup from "@/components/PaymentPopup";
import ShippingPopup from "@/components/ShippingPopup";
import NeedHelpPopup from "@/components/NeedHelpPopup";
import VerifyPopup from "@/components/VerifyPopup";

const thumbnails = [
  "/images/shop/product-1.webp",
  "/images/shop/product-2.webp",
];

const specs = [
  { label: "Active Ingredient", value: "Methenolone Enanthate" },
  { label: "Chemical Formula", value: "C27H42O3" },
  { label: "Form", value: "Injectable solution" },
  { label: "Concentration", value: "200 mg/mL" },
  { label: "Volume", value: "10 mL vial" },
];

const trustBadges = [
  {
    icon: "/images/shop/product-icons/icon-1.png",
    title: "Certified & Lab Tested",
    desc: "Third-party lab test + batch authenticity code WHO-GMP / EU-GMP / UK-MHRA",
    button: "See Lab Test",
    orangeBg: false,
    popup: "labtest",
  },
  {
    icon: "/images/shop/product-icons/icon-2.png",
    title: "Official Brand Partner",
    desc: "Dinespower.com is an official Astera reseller (since 2019)",
    button: "Verify Partner",
    orangeBg: false,
    popup: "verify",
  },
  {
    icon: "/images/shop/product-icons/icon-3.png",
    title: "Verify Authenticity",
    desc: "Enter your code to confirm the product on Astera Labs",
    button: "Verify Product",
    orangeBg: false,
    popup: "verify",
  },
  {
    icon: "/images/shop/product-icons/icon-4.png",
    title: "Wholesale Prices (B2B)",
    desc: "Tiered discounts for partner orders from \u20AC1,500+",
    button: "Read More",
    orangeBg: true,
    popup: "wholesale",
  },
];

const benefitsData = [
  {
    title: "Muscle Growth",
    desc: "Promotes lean muscle gains without significant water retention, making it ideal for quality mass building.",
    color: "#FF6701",
  },
  {
    title: "Increased Strength",
    desc: "Improves overall strength and physical performance through enhanced protein synthesis.",
    color: "#00B638",
  },
  {
    title: "Improved Recovery",
    desc: "Accelerates recovery between training sessions, reducing muscle soreness and fatigue.",
    color: "#00A9DE",
  },
  {
    title: "Hormone Replacement",
    desc: "Used in hormone replacement therapy to maintain healthy testosterone levels and well-being.",
    color: "#FF6701",
  },
];

const reviews = [
  {
    name: "Mary Ellen",
    stars: 5,
    timeAgo: "4d ago",
    text: "This is amazing! Tried everything and this is the best product I have used. Highly recommend for anyone looking to boost performance. The quality is outstanding and shipping was discreet.",
    image: "/images/shop/product-1.webp",
  },
  {
    name: "John Doe",
    stars: 5,
    timeAgo: "1w ago",
    text: "Great quality. The delivery was fast and the results speak for themselves. Will order again.",
    image: null,
  },
  {
    name: "Alex Meier",
    stars: 4,
    timeAgo: "2w ago",
    text: "Good product overall. Packaging was discreet and arrived on time. The quality is noticeably better than competitors.",
    image: null,
  },
];

const customerPhotos = [
  "/images/shop/product-1.webp",
  "/images/shop/product-2.webp",
  "/images/shop/product-3.jpg",
  "/images/shop/product-4.jpg",
  "/images/shop/product-5.webp",
  "/images/shop/product-1.webp",
  "/images/shop/product-2.webp",
  "/images/shop/product-3.jpg",
];

const topInjectableProducts = [
  { brand: "Deus Medical", name: "Testosterone Enanthate 250 Injectable Steroid In Vials", dosage: "250 mg/ml", price: 38, badges: ["top"], image: "/images/shop/injectable-1.jpg" },
  { brand: "Astera Labs", name: "Nandrolone Decanoate 300 Injectable Steroid In Vials", dosage: "300 mg/ml", price: 52, badges: ["new"], image: "/images/shop/injectable-2.jpg" },
  { brand: "Deus Medical", name: "Boldenone Undecylenate 250 Injectable Steroid In Vials", dosage: "250 mg/ml", price: 44, oldPrice: 56, badges: ["sale", "top"], image: "/images/shop/injectable-3.jpg" },
  { brand: "Astera Labs", name: "Trenbolone Enanthate 200 Injectable Steroid In Vials", dosage: "200 mg/ml", price: 62, badges: ["top"], image: "/images/shop/injectable-4.jpg" },
  { brand: "Deus Medical", name: "Masteron Propionate 100 Injectable Steroid In Vials", dosage: "100 mg/ml", price: 40, badges: ["new"], image: "/images/shop/product-5.webp" },
];

const relatedProducts = [
  { brand: "Deus Medical", name: "Vaso burn - thermogenic formula for fat oxidation and energy", dosage: "325 mg/ml", price: 44, oldPrice: 56, badges: ["sale", "top", "new"], image: "/images/shop/product-1.webp" },
  { brand: "Astera Labs", name: "Dietary supplements for fat burning and energy supply", dosage: "325 mg/ml", price: 44, badges: ["new"], image: "/images/shop/product-2.webp" },
  { brand: "Astera Labs", name: "Vaso burn - thermogenic formula for fat oxidation and energy", dosage: "295 mg/ml", price: 33, badges: ["top"], image: "/images/shop/product-3.jpg" },
  { brand: "Deus Medical", name: "MOTS-C-Peptide (Mitochondrien-abgeleitetes Peptid MOTS-C) in...", dosage: "325 mg/ml", price: 50, badges: ["top", "new"], image: "/images/shop/product-4.jpg" },
  { brand: "Deus Medical", name: "Daily blend for energy, focus and performance", dosage: "325 mg/ml", price: 44, badges: ["new"], image: "/images/shop/product-5.webp" },
];

const faqItems = [
  "What is the minimum amount for the first order?",
  "How long does delivery take?",
  "How do we know that these products are genuine?",
  "What if the package is lost or damaged?",
  "Are all products really tested in laboratories?",
];

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    overview: true,
    benefits: true,
    reviews: true,
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(2);
  const [copied, setCopied] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const { addItem } = useCart();

  const handleCopy = () => {
    navigator.clipboard.writeText("DINES2026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddToCart = () => {
    addItem(
      {
        brand: "Astera Labs",
        name: "Methenolone Enanthate 200 Injectable Steroid In Vials",
        price: 44,
        oldPrice: 56,
        image: "/images/shop/product-1.webp",
      },
      qty
    );
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTrustBadgeClick = (popup: string) => {
    if (popup === "verify" || popup === "labtest") {
      setVerifyOpen(true);
    } else if (popup === "wholesale") {
      // scroll or navigate
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-3">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818]">Home</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-[#181818]">Injectable</Link>
            <span>/</span>
            <span className="hover:text-[#181818]">Astera Labs</span>
            <span>/</span>
            <span className="text-[#181818]">Methenolone Enanthate 200</span>
          </div>
        </div>

        {/* Product Detail: Two Columns */}
        <div className="max-w-[1340px] mx-auto flex gap-[60px] pb-10">
          {/* LEFT COLUMN - Thumbnails + Main Image */}
          <div className="w-[560px] shrink-0 flex gap-3 sticky top-[180px] self-start">
            {/* Vertical thumbnails */}
            <div className="flex flex-col gap-2 w-[64px] shrink-0">
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-[64px] h-[64px] rounded-[8px] bg-white border-2 transition-colors flex items-center justify-center overflow-hidden ${
                    selectedImage === i ? "border-[#FF6701]" : "border-[#E7E7E7]"
                  }`}
                >
                  <Image src={src} alt={`Thumbnail ${i + 1}`} width={56} height={56} className="object-contain" unoptimized />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 h-[500px] bg-white rounded-[16px] flex items-center justify-center relative overflow-hidden border border-[#E7E7E7]">
              <Image
                src={thumbnails[selectedImage]}
                alt="Methenolone Enanthate 200"
                width={380}
                height={380}
                className="object-contain"
                unoptimized
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center hover:bg-[#F7F7F7] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#181818" strokeWidth="1.5"/><path d="M21 21L16.65 16.65" stroke="#181818" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 8V14M8 11H14" stroke="#181818" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Product Info */}
          <div className="flex-1">
            {/* 1. Rating row - 5 orange stars + (325 Reviews) */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#FF6701"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                ))}
              </div>
              <span className="text-sm text-[#7E7E7E]">(325 Reviews)</span>
            </div>

            {/* 2. Title */}
            <h1 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-4">
              Methenolone Enanthate 200 Injectable Steroid In Vials
            </h1>

            {/* 3. Brand badge */}
            <div className="flex items-center gap-3 border border-[#E7E7E7] rounded-[8px] p-3 mb-5">
              <div className="bg-[#F7F7F7] rounded-[6px] px-3 py-2 text-center shrink-0">
                <span className="text-[12px] font-black text-[#181818] leading-[14px] block">ASTERA</span>
                <span className="text-[10px] font-bold text-[#7E7E7E] leading-[12px] block">LABS</span>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#181818]">Official Astera Labs Product</p>
                <p className="text-[12px] text-[#7E7E7E]">Certified &amp; Lab Tested</p>
              </div>
            </div>

            {/* 4. Specs bullet list */}
            <ul className="flex flex-col gap-2 mb-6">
              {specs.map((spec) => (
                <li key={spec.label} className="flex items-start gap-2 text-sm">
                  <span className="text-[#7E7E7E] mt-[2px]">&bull;</span>
                  <span className="text-[#7E7E7E]">{spec.label}: <span className="font-bold text-[#181818]">{spec.value}</span></span>
                </li>
              ))}
            </ul>

            {/* 5. Price row */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[36px] font-extrabold text-[#FF6701] leading-[42px]">44 &euro;</span>
              <span className="text-lg text-[#B6B6B6] line-through">56 &euro;</span>
              <span className="bg-[#FF6701]/10 text-[#FF6701] text-xs font-bold px-2.5 py-1 rounded-[4px]">Sale -14%</span>
            </div>

            {/* 6. Qty + Add To Cart */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-[48px]">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 h-full flex items-center justify-center text-[#B6B6B6] hover:text-[#181818] transition-colors text-xl">&#8722;</button>
                <span className="w-8 text-center text-base font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-12 h-full flex items-center justify-center text-[#B6B6B6] hover:text-[#181818] transition-colors text-xl">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#FF6701] hover:bg-[#E65D00] text-white font-semibold rounded-[8px] h-[48px] flex items-center justify-center gap-2 transition-colors text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Add To Cart
              </button>
            </div>

            {/* 7. In Stock */}
            <div className="flex items-center gap-2 mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium text-[#00B638]">In Stock (5-20 days)</span>
            </div>

            {/* 8. Promo code block */}
            <div className="bg-[#181818] rounded-[12px] p-4 mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] shrink-0">
                  <Image src="/images/shop/product-icons/discount.png" alt="" width={48} height={48} className="object-contain" unoptimized />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Get 5% Off Your First Order</p>
                  <p className="text-xs text-white/60">Use Code &quot;DINES2026&quot; for get 5% Discount</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#2A2A2A] border border-dashed border-[#FF6701] rounded-lg px-4 py-2.5 shrink-0">
                <span className="text-sm font-bold text-[#FF6701] tracking-wider">DINES2026</span>
                <button onClick={handleCopy} className="text-white/60 hover:text-white transition-colors">
                  {copied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="1.5"/></svg>
                  )}
                </button>
              </div>
            </div>

            {/* 9. Trust Badges */}
            <div className="flex flex-col gap-2 mb-6">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-[12px] border ${
                    badge.orangeBg
                      ? "bg-[#FFF8F4] border-[#FF6701]"
                      : "bg-white border-[#E7E7E7]"
                  }`}
                >
                  <div className="w-[80px] h-[80px] shrink-0 flex items-center justify-center">
                    <Image src={badge.icon} alt={badge.title} width={80} height={80} className="object-contain" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#181818]">{badge.title}</p>
                    <p className="text-xs text-[#7E7E7E] mt-0.5">{badge.desc}</p>
                  </div>
                  <button
                    onClick={() => handleTrustBadgeClick(badge.popup)}
                    className={`text-sm font-semibold whitespace-nowrap shrink-0 border rounded-[8px] px-4 py-2 transition-colors ${
                      badge.orangeBg
                        ? "text-[#FF6701] border-transparent hover:underline"
                        : "text-[#181818] border-[#E7E7E7] hover:border-[#FF6701] hover:text-[#FF6701]"
                    }`}
                  >
                    {badge.button}
                  </button>
                </div>
              ))}
            </div>

            {/* 10. Help Cards - 3 in a row */}
            <div className="grid grid-cols-3 gap-3">
              <button onClick={() => setHelpOpen(true)} className="border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col items-center text-center cursor-pointer hover:border-[#FF6701] transition-colors">
                <div className="w-[48px] h-[48px] mb-3">
                  <Image src="/images/shop/product-icons/icon-5.png" alt="" width={48} height={48} className="object-contain" unoptimized />
                </div>
                <p className="text-sm font-bold text-[#181818] mb-1">Need Help?</p>
                <p className="text-xs text-[#7E7E7E] mb-3">Ask about dosing, shipping, or verification</p>
                <span className="text-xs font-semibold text-[#181818] underline">Ask a Question</span>
              </button>
              <button onClick={() => setShippingOpen(true)} className="border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col items-center text-center cursor-pointer hover:border-[#FF6701] transition-colors">
                <div className="w-[48px] h-[48px] mb-3">
                  <Image src="/images/shop/product-icons/icon-6.png" alt="" width={48} height={48} className="object-contain" unoptimized />
                </div>
                <p className="text-sm font-bold text-[#181818] mb-1">Shipping Methods</p>
                <p className="text-xs text-[#7E7E7E] mb-3">Delivery times, tracking, discreet packaging</p>
                <span className="text-xs font-semibold text-[#181818] underline">Learn more</span>
              </button>
              <button onClick={() => setPaymentOpen(true)} className="border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col items-center text-center cursor-pointer hover:border-[#FF6701] transition-colors">
                <div className="w-[48px] h-[48px] mb-3">
                  <Image src="/images/shop/product-icons/icon-7.png" alt="" width={48} height={48} className="object-contain" unoptimized />
                </div>
                <p className="text-sm font-bold text-[#181818] mb-1">Payment Methods</p>
                <p className="text-xs text-[#7E7E7E] mb-3">Bitcoin, bank transfer</p>
                <span className="text-xs font-semibold text-[#181818] underline">Learn more</span>
              </button>
            </div>

            {/* 11. Product Overview Accordion */}
            <div className="mt-6">
              <div className="border-b border-[#E7E7E7]">
                <button
                  onClick={() => toggleAccordion("overview")}
                  className="w-full flex items-center justify-between py-5 cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#181818]">Product overview</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${openAccordions.overview ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openAccordions.overview && (
                  <div className="pb-6">
                    <h3 className="text-base font-bold text-[#181818] mb-3">What Is The Methenolone Enanthate 200mg Used For</h3>
                    <div className={`text-sm text-[#7E7E7E] leading-6 space-y-3 ${!overviewExpanded ? "max-h-[180px] overflow-hidden relative" : ""}`}>
                      <p>Methenolone Enanthate, commonly known as Primobolan Depot, is a long-acting injectable anabolic steroid. It is widely considered one of the safer anabolic steroids, with relatively mild androgenic properties and low risk of estrogenic side effects.</p>
                      <p>Originally developed for medical use, including treating muscle-wasting conditions, Methenolone Enanthate has become popular in bodybuilding for its ability to promote lean muscle gains without significant water retention.</p>
                      <p>The enanthate ester attached to the methenolone base provides a sustained release of the hormone, allowing for less frequent injections compared to shorter-acting compounds. This makes it a convenient option for athletes and bodybuilders looking for steady, quality gains over time.</p>
                      <p>Methenolone Enanthate is often preferred during cutting cycles, where the goal is to preserve lean muscle mass while reducing body fat. Its mild nature makes it a suitable choice for both men and women, though dosages differ significantly between the sexes.</p>
                      <p>The compound has a favorable safety profile compared to many other anabolic steroids. It does not aromatize to estrogen, meaning users are less likely to experience water retention, gynecomastia, or other estrogen-related side effects. This characteristic makes it particularly popular among athletes who want to avoid the bloated appearance associated with some other steroids.</p>
                      {!overviewExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-white to-transparent" />
                      )}
                    </div>
                    <button
                      onClick={() => setOverviewExpanded(!overviewExpanded)}
                      className="w-full bg-[#F7F7F7] rounded-[8px] py-3 text-center text-sm font-semibold text-[#181818] hover:bg-[#EDEDED] transition-colors mt-4 flex items-center justify-center gap-2"
                    >
                      {overviewExpanded ? "Show less" : "Read more"}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform ${overviewExpanded ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9L12 15L18 9" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 12. Benefits Accordion */}
            <div>
              <div className="border-b border-[#E7E7E7]">
                <button
                  onClick={() => toggleAccordion("benefits")}
                  className="w-full flex items-center justify-between py-5 cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#181818]">Benefits</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${openAccordions.benefits ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openAccordions.benefits && (
                  <div className="pb-6">
                    <div className="flex flex-col gap-4">
                      {benefitsData.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className="w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${benefit.color}15` }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17L4 12" stroke={benefit.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#181818]">{benefit.title}</p>
                            <p className="text-sm text-[#7E7E7E] mt-0.5">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 13. Reviews Accordion */}
            <div className="pb-4">
              <div className="border-b border-[#E7E7E7]">
                <button
                  onClick={() => toggleAccordion("reviews")}
                  className="w-full flex items-center justify-between py-5 cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#181818]">Reviews (325 Reviews)</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${openAccordions.reviews ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openAccordions.reviews && (
                  <div className="pb-6">
                    {/* Large stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="32" height="32" viewBox="0 0 24 24" fill="#FF6701"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                      ))}
                    </div>

                    {/* Review This Product */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold text-[#181818] mb-1">Review This Product</h3>
                      <p className="text-sm text-[#7E7E7E] mb-3">Share your thoughts with other customers</p>
                      <button className="bg-[#181818] hover:bg-[#333] text-white text-sm font-semibold px-6 py-3 rounded-[8px] transition-colors">
                        Write a customer review
                      </button>
                    </div>

                    {/* Photos And Videos From Customers */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold text-[#181818] mb-3">Photos And Videos From Customers</h3>
                      <div className="flex gap-2 flex-wrap">
                        {customerPhotos.map((photo, i) => (
                          <div key={i} className="w-[72px] h-[72px] rounded-[8px] overflow-hidden border border-[#E7E7E7] shrink-0">
                            <Image src={photo} alt={`Customer photo ${i + 1}`} width={72} height={72} className="object-cover w-full h-full" unoptimized />
                          </div>
                        ))}
                        <div className="w-[72px] h-[72px] rounded-[8px] bg-[#F7F7F7] border border-[#E7E7E7] flex items-center justify-center shrink-0">
                          <span className="text-sm font-semibold text-[#7E7E7E]">+24</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Cards */}
                    {reviews.map((r, i) => (
                      <div key={i} className="border-b border-[#E7E7E7] py-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center text-sm font-semibold text-[#181818]">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-[#181818]">{r.name}</span>
                              <span className="text-xs text-[#7E7E7E]">{r.timeAgo}</span>
                            </div>
                            <div className="flex mt-0.5">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= r.stars ? "#FF6701" : "#E7E7E7"}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-[#7E7E7E] leading-6">{r.text}</p>
                        {r.image && (
                          <div className="mt-3 w-[80px] h-[80px] rounded-[8px] overflow-hidden border border-[#E7E7E7]">
                            <Image src={r.image} alt="Review" width={80} height={80} className="object-cover w-full h-full" unoptimized />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 14. TOP Injectable */}
        <div className="max-w-[1340px] mx-auto pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px]">TOP Injectable</h2>
            <div className="flex gap-2">
              <button className="w-[40px] h-[40px] rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="w-[40px] h-[40px] rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {/* Promo banner card */}
            <div className="w-[240px] shrink-0 rounded-[16px] overflow-hidden relative">
              <Image src="/images/shop/promo-injectable.png" alt="Injectable Promo" width={240} height={340} className="object-cover w-full h-full" unoptimized />
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/catalog" className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-[8px] h-[40px] flex items-center justify-center transition-colors">
                  View All Injectable
                </Link>
              </div>
            </div>
            {topInjectableProducts.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* 15. Related Products */}
        <div className="max-w-[1340px] mx-auto pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px]">Related products</h2>
            <div className="flex gap-2">
              <button className="w-[40px] h-[40px] rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="w-[40px] h-[40px] rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {relatedProducts.map((p, i) => (
              <div key={i} className="w-[200px] shrink-0 cursor-pointer group">
                <div className="h-[200px] bg-white rounded-[12px] border border-[#E7E7E7] flex items-center justify-center p-3 mb-3 overflow-hidden">
                  <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain" unoptimized />
                </div>
                <p className="text-xs text-[#7E7E7E]">{p.brand}</p>
                <p className="text-sm font-semibold text-[#181818] line-clamp-2 group-hover:text-[#FF6701] transition-colors">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 16. FAQ Section */}
        <section className="max-w-[1340px] mx-auto pb-16">
          <div className="flex gap-[80px]">
            {/* Left column - Still Have Questions Card */}
            <div className="w-[440px] shrink-0">
              <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-4 flex flex-col items-center gap-4">
                  <Image src="/images/shop/faq-help-icon.png" alt="Help" width={64} height={64} className="object-contain" unoptimized />
                  <h3 className="text-[16px] font-semibold text-black text-center">Still have questions?</h3>
                  <p className="text-[14px] text-[#1E1E1E] text-center">Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.</p>
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
            <div className="flex-1">
              <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col">
                {faqItems.map((q, i) => (
                  <div key={i} className="border-b border-[#E7E7E7]">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                      className="w-full flex items-center justify-between py-5 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-[#E7E7E7] flex items-center justify-center shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#7E7E7E" strokeWidth="1.5"/><path d="M6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 8.8 7.4 8.4 8.2C8.2 8.6 8 9 8 9.5" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11.5" r="0.75" fill="#7E7E7E"/></svg>
                        </div>
                        <span className="text-base font-semibold text-[#181818] text-left leading-6">{q}</span>
                      </div>
                      <span className="text-xl text-[#181818] shrink-0 ml-4">{openFAQ === i ? "\u2212" : "+"}</span>
                    </button>
                    {openFAQ === i && (
                      <div className="pb-5 pl-11 text-sm text-[#7E7E7E] leading-6">
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
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
      <PaymentPopup isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} />
      <ShippingPopup isOpen={shippingOpen} onClose={() => setShippingOpen(false)} />
      <NeedHelpPopup isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
      <VerifyPopup isOpen={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </>
  );
}
