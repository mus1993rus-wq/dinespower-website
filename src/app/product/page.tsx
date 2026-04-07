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

const thumbnails = [
  "/images/shop/product-1.webp",
  "/images/shop/product-2.webp",
  "/images/shop/product-3.jpg",
  "/images/shop/product-4.jpg",
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
    emoji: "\u{1F4CB}",
    title: "Certified & Lab Tested",
    desc: "Third-party lab test + batch authenticity code WHO-GMP / EU-GMP / UK-MHRA",
    button: "See Lab Test",
    orangeBg: false,
  },
  {
    emoji: "\u{1F6E1}\uFE0F",
    title: "Official Brand Partner",
    desc: "Dinespower.com is an official Astera reseller (since 2019)",
    button: "Verify Partner",
    orangeBg: false,
  },
  {
    emoji: "\u2705",
    title: "Verify Authenticity",
    desc: "Enter your code to confirm the product on Astera Labs",
    button: "Verify Product",
    orangeBg: false,
  },
  {
    emoji: "\u{1F4B0}",
    title: "Wholesale Prices (B2B)",
    desc: "Tiered discounts for partner orders from \u20AC1,500+",
    button: "Read More",
    orangeBg: true,
  },
];

const helpCards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Need Help?",
    desc: "Ask about dosing, shipping, or verification",
    link: "Ask a Question",
    href: "/contact",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="3" width="15" height="13" rx="2" stroke="#FF6701" strokeWidth="1.5"/>
        <path d="M16 8L22 5V16L16 13V8Z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Shipping Methods",
    desc: "Delivery times, tracking, discreet packaging",
    link: "Learn more",
    href: "/delivery-payment",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="4" width="22" height="16" rx="2" stroke="#FF6701" strokeWidth="1.5"/>
        <path d="M1 10H23" stroke="#FF6701" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Payment Methods",
    desc: "Bitcoin, bank transfer",
    link: "Learn more",
    href: "/delivery-payment",
  },
];

const benefits = [
  "Muscle Growth - Promotes lean muscle gains without significant water retention",
  "Enhanced Strength - Improves overall strength and physical performance",
  "Fat Loss Support - Helps preserve muscle tissue during cutting phases",
  "Low Side Effects - Mild androgenic properties with low estrogenic risk",
  "Long-Acting Formula - Enanthate ester provides sustained release over weeks",
  "Versatile Use - Suitable for both bulking and cutting cycles",
];

const reviews = [
  { name: "John Doe", stars: 5, date: "12 Nov 2025", text: "This is amazing! Tried everything and this is the best product I have used. Highly recommend for anyone looking to boost performance." },
  { name: "Mike Silva", stars: 5, date: "8 Nov 2025", text: "Great quality. The delivery was fast and the results speak for themselves. Will order again." },
  { name: "Alex Meier", stars: 4, date: "2 Nov 2025", text: "Good product overall. Packaging was discreet and arrived on time. The quality is noticeably better than competitors." },
];

const topInjectableProducts = [
  { brand: "Deus Medical", name: "Testosterone Enanthate 250 Injectable Steroid In Vials", dosage: "250 mg/ml", price: 38, badges: ["top"], image: "/images/shop/product-1.webp" },
  { brand: "Astera Labs", name: "Nandrolone Decanoate 300 Injectable Steroid In Vials", dosage: "300 mg/ml", price: 52, badges: ["new"], image: "/images/shop/product-2.webp" },
  { brand: "Deus Medical", name: "Boldenone Undecylenate 250 Injectable Steroid In Vials", dosage: "250 mg/ml", price: 44, oldPrice: 56, badges: ["sale", "top"], image: "/images/shop/product-3.jpg" },
  { brand: "Astera Labs", name: "Trenbolone Enanthate 200 Injectable Steroid In Vials", dosage: "200 mg/ml", price: 62, badges: ["top"], image: "/images/shop/product-4.jpg" },
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
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(2);
  const [copied, setCopied] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
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

  const accordionSections = [
    {
      title: "Product overview",
      content: (
        <div className="text-sm text-[#7E7E7E] leading-6 space-y-3">
          <p>Methenolone Enanthate, commonly known as Primobolan Depot, is a long-acting injectable anabolic steroid. It is widely considered one of the safer anabolic steroids, with relatively mild androgenic properties and low risk of estrogenic side effects.</p>
          <p>Originally developed for medical use, including treating muscle-wasting conditions, Methenolone Enanthate has become popular in bodybuilding for its ability to promote lean muscle gains without significant water retention.</p>
          <p>The enanthate ester attached to the methenolone base provides a sustained release of the hormone, allowing for less frequent injections compared to shorter-acting compounds. This makes it a convenient option for athletes and bodybuilders looking for steady, quality gains over time.</p>
        </div>
      ),
    },
    {
      title: "Benefits",
      content: (
        <ul className="flex flex-col gap-3">
          {benefits.map((benefit, i) => {
            const dotColors = ["#FF6701", "#00B638", "#00A9DE", "#FF6701", "#00B638", "#00A9DE"];
            return (
              <li key={i} className="flex items-start gap-3">
                <div className="w-[8px] h-[8px] rounded-full mt-[7px] shrink-0" style={{ backgroundColor: dotColors[i % dotColors.length] }} />
                <span className="text-sm text-[#7E7E7E] leading-6">{benefit}</span>
              </li>
            );
          })}
        </ul>
      ),
    },
    {
      title: "Reviews (323 Reviews)",
      content: (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#FF6701"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              ))}
            </div>
            <span className="text-sm font-semibold">4.9</span>
            <span className="text-sm text-[#7E7E7E]">(323 Reviews)</span>
            <button className="ml-auto bg-[#FF6701] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#E65D00] transition-colors">Write a review</button>
          </div>
          {reviews.map((r, i) => (
            <div key={i} className="border-b border-[#E7E7E7] py-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center text-sm font-semibold text-[#181818]">
                  {r.name.charAt(0)}
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= r.stars ? "#FF6701" : "#E7E7E7"}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#181818]">{r.name}</span>
                <span className="text-xs text-[#7E7E7E] ml-auto">{r.date}</span>
              </div>
              <p className="text-sm text-[#7E7E7E] leading-5 pl-10">{r.text}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4 py-3">
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
        <div className="max-w-[1340px] mx-auto px-4 flex gap-10 pb-10">
          {/* LEFT COLUMN - Thumbnails + Main Image */}
          <div className="w-[600px] shrink-0 flex gap-4">
            {/* Vertical thumbnails */}
            <div className="flex flex-col gap-3 w-[100px] shrink-0">
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-[100px] h-[100px] rounded-[8px] bg-white border-2 transition-colors flex items-center justify-center overflow-hidden ${
                    selectedImage === i ? "border-[#FF6701]" : "border-[#E7E7E7]"
                  }`}
                >
                  <Image src={src} alt={`Thumbnail ${i + 1}`} width={70} height={70} className="object-contain" unoptimized />
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
          <div className="flex-1 max-w-[560px]">
            {/* Stars rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#FF6701"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                ))}
              </div>
              <span className="text-sm text-[#7E7E7E]">(325 Reviews)</span>
            </div>

            {/* Product name */}
            <h1 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-4">
              Methenolone Enanthate 200 Injectable Steroid In Vials
            </h1>

            {/* Brand badge */}
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

            {/* Specs as bullet list */}
            <ul className="flex flex-col gap-2 mb-6">
              {specs.map((spec) => (
                <li key={spec.label} className="flex items-start gap-2 text-sm">
                  <span className="text-[#7E7E7E] mt-[2px]">&bull;</span>
                  <span className="text-[#7E7E7E]">{spec.label}: <span className="font-bold text-[#181818]">{spec.value}</span></span>
                </li>
              ))}
            </ul>

            {/* Price row */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[36px] font-extrabold text-[#FF6701] leading-[42px]">44 &euro;</span>
              <span className="text-lg text-[#B6B6B6] line-through">56 &euro;</span>
              <span className="bg-[#FF6701]/10 text-[#FF6701] text-xs font-bold px-2.5 py-1 rounded-[4px]">Sale -14%</span>
            </div>

            {/* Quantity + Add to Cart */}
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

            {/* In Stock */}
            <div className="flex items-center gap-2 mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium text-[#00B638]">In Stock (5-20 days)</span>
            </div>

            {/* Promo code section */}
            <div className="bg-[#181818] rounded-[12px] p-4 mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6701]/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12V22H4V12" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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

            {/* Trust Badges */}
            <div className="flex flex-col gap-3 mb-6">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-[12px] border ${
                    badge.orangeBg
                      ? "bg-[#FFF8F4] border-[#FF6701]"
                      : "bg-white border-[#E7E7E7]"
                  }`}
                >
                  <div className="w-[48px] h-[48px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0">
                    <span className="text-[24px]">{badge.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#181818]">{badge.title}</p>
                    <p className="text-xs text-[#7E7E7E] mt-0.5">{badge.desc}</p>
                  </div>
                  <button className="text-sm font-semibold text-[#FF6701] hover:underline whitespace-nowrap shrink-0">
                    {badge.button}
                  </button>
                </div>
              ))}
            </div>

            {/* Help Cards - 3 in a row */}
            <div className="grid grid-cols-3 gap-3">
              <button onClick={() => setHelpOpen(true)} className="border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col items-center text-center cursor-pointer hover:border-[#FF6701] transition-colors">
                <div className="mb-3">{helpCards[0].icon}</div>
                <p className="text-sm font-bold text-[#181818] mb-1">{helpCards[0].title}</p>
                <p className="text-xs text-[#7E7E7E] mb-3">{helpCards[0].desc}</p>
                <span className="text-xs font-semibold text-[#FF6701] underline">{helpCards[0].link}</span>
              </button>
              <button onClick={() => setShippingOpen(true)} className="border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col items-center text-center cursor-pointer hover:border-[#FF6701] transition-colors">
                <div className="mb-3">{helpCards[1].icon}</div>
                <p className="text-sm font-bold text-[#181818] mb-1">{helpCards[1].title}</p>
                <p className="text-xs text-[#7E7E7E] mb-3">{helpCards[1].desc}</p>
                <span className="text-xs font-semibold text-[#FF6701] underline">{helpCards[1].link}</span>
              </button>
              <button onClick={() => setPaymentOpen(true)} className="border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col items-center text-center cursor-pointer hover:border-[#FF6701] transition-colors">
                <div className="mb-3">{helpCards[2].icon}</div>
                <p className="text-sm font-bold text-[#181818] mb-1">{helpCards[2].title}</p>
                <p className="text-xs text-[#7E7E7E] mb-3">{helpCards[2].desc}</p>
                <span className="text-xs font-semibold text-[#FF6701] underline">{helpCards[2].link}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Description Section - Accordion style */}
        <div className="max-w-[1340px] mx-auto px-4 pb-10">
          <div className="flex flex-col">
            {accordionSections.map((section, i) => (
              <div key={i} className="border-b border-[#E7E7E7]">
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#181818]">{section.title}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${openAccordion === i ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openAccordion === i && (
                  <div className="pb-6">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TOP Injectable */}
        <div className="max-w-[1340px] mx-auto px-4 pb-10">
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
            {topInjectableProducts.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="max-w-[1340px] mx-auto px-4 pb-10">
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
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-[1340px] mx-auto px-4 pb-16">
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
    </>
  );
}
