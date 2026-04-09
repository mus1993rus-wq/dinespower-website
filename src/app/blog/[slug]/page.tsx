"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articleData = {
  title:
    "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism, Androgen Receptors and Safety Markers",
  date: "12 Nov 2025",
  readTime: "7 min read",
  views: "3.2k views",
  tags: ["Bodybuilding", "Nutrition"],
};

const tocItems = [
  {
    id: "mechanism",
    text: "Mechanism of Interaction Between RAD-140 and Androgen Receptors",
  },
  { id: "anabolic-activity", text: "Anabolic Activity of Testolone" },
  {
    id: "comparison",
    text: "Comparison of RAD-140 with Other Popular SARMs",
  },
  {
    id: "catalog",
    text: "Testolone (RAD-140) and Other SARMs in the Dinespower Catalog",
  },
];

const comparisonData = [
  {
    compound: "RAD-140",
    anabolic: "High",
    sideEffects: "Low",
    halfLife: "20h",
    bestFor: "Bulking / Recomp",
  },
  {
    compound: "MK-2866",
    anabolic: "Moderate",
    sideEffects: "Very Low",
    halfLife: "24h",
    bestFor: "Cutting / First cycle",
  },
  {
    compound: "YK-11",
    anabolic: "Very High",
    sideEffects: "Moderate",
    halfLife: "6-10h",
    bestFor: "Advanced bulking",
  },
  {
    compound: "LGD-4033",
    anabolic: "High",
    sideEffects: "Low",
    halfLife: "24-36h",
    bestFor: "Bulking",
  },
];

const recommendedProducts = [
  {
    id: 1,
    title: "Ostarine MK-2866",
    image: "/images/shop/blog-3.png",
    price: "38",
    oldPrice: "44",
    slug: "ostarine-mk2866",
  },
  {
    id: 2,
    title: "Ligandrol LGD-4033",
    image: "/images/shop/blog-4.png",
    price: "42",
    oldPrice: "49",
    slug: "ligandrol-lgd4033",
  },
  {
    id: 3,
    title: "Testolone RAD-140",
    image: "/images/shop/blog-5.png",
    price: "45",
    oldPrice: "52",
    slug: "testolone-rad140",
  },
];

const relatedArticles = [
  {
    id: 1,
    title:
      "How Growth Hormone Secretagogues Work: CJC-1295, Ipamorelin, GHRP-2 and GHRP-6",
    date: "10 Nov 2025",
    readTime: "5 min read",
    views: "2.8k views",
    slug: "growth-hormone-secretagogues",
    image: "/images/shop/blog-4.png",
  },
  {
    id: 2,
    title:
      "Peptides vs SARMs for Cutting: Which Is More Effective for Preserving Muscle Mass",
    date: "8 Nov 2025",
    readTime: "9 min read",
    views: "4.1k views",
    slug: "peptides-vs-sarms-cutting",
    image: "/images/shop/blog-5.png",
  },
];

export default function BlogArticlePage() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#181818] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold line-clamp-1">
              {articleData.title}
            </span>
          </div>
        </div>

        {/* Title + Meta + Tags (NOT on hero image) */}
        <div className="max-w-[1340px] mx-auto">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-4">
            {articleData.title}
          </h1>
          <div className="flex items-center gap-4 mb-4 text-sm text-[#7E7E7E]">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {articleData.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {articleData.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
              {articleData.views}
            </span>
          </div>
          <div className="flex gap-2 mb-8">
            {["Bodybuilding", "Nutrition", "Nutrition"].map((tag, i) => (
              <span key={i} className="border border-[#E7E7E7] text-[#181818] text-sm px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-[1340px] mx-auto pb-10">
          <div className="flex gap-[80px]">
            {/* Main content - LEFT COLUMN */}
            <div className="flex-1 min-w-0 max-w-[820px]">
              <article>
                {/* Hero image - separate, not overlay */}
                <div className="relative h-[480px] rounded-[16px] overflow-hidden mb-8">
                  <Image src="/images/shop/blog-1.png" alt={articleData.title} fill className="object-cover" unoptimized />
                </div>

                {/* TOC Card */}
                <div className="border border-[#E7E7E7] rounded-[16px] p-6 mb-8">
                  <h3 className="text-[18px] font-extrabold text-[#181818] mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="2"
                        y="2"
                        width="16"
                        height="16"
                        rx="3"
                        stroke="#FF6701"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6 7h8M6 10h8M6 13h5"
                        stroke="#FF6701"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    What&apos;s Inside?
                  </h3>
                  <div className="flex flex-col gap-1">
                    {tocItems.map((item, i) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={i}
                          onClick={() => scrollToSection(item.id)}
                          className={`text-left text-sm leading-7 px-3 py-1 rounded-md transition-all ${
                            isActive
                              ? "text-[#FF6701] font-semibold bg-[#FFF5EE]"
                              : "text-[#4A4A4A] hover:text-[#181818] hover:bg-[#F7F7F7]"
                          }`}
                        >
                          {item.text}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Intro paragraphs */}
                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  RAD-140 is a powerful selective androgen receptor modulator
                  that is widely used by bodybuilders. This compound is
                  considered one of the most thoroughly studied SARMs due to
                  extensive laboratory testing. The primary goal of early
                  research was to develop an alternative to traditional
                  testosterone replacement therapy. As early as 2014, scientists
                  from the University of Los Angeles concluded that RAD-140
                  demonstrates a favorable safety profile.
                </p>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  The effect of Testolone is based on the stimulation of
                  endogenous testosterone production and an increase in its
                  physiological levels in the body. Thanks to this mechanism of
                  action, users experience muscle mass growth, increased strength
                  and endurance, as well as an acceleration of metabolic
                  processes.
                </p>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  Choosing the right supplementation strategy becomes easier with
                  an expert review of RAD-140 provided by Dinespower
                  specialists. This SARM has already proven its effectiveness,
                  and the laboratory analysis of Testolone available at the
                  Dinespower store confirms the safety of the compound.
                </p>

                {/* Section 1 */}
                <h2
                  id="mechanism"
                  className="text-[22px] font-extrabold text-[#181818] leading-[30px] mt-10 mb-3 scroll-mt-24"
                >
                  Mechanism of Interaction Between RAD-140 and Androgen Receptors
                </h2>

                <div className="relative w-full h-[320px] rounded-[12px] overflow-hidden my-8">
                  <Image
                    src="/images/shop/blog-2.png"
                    alt="RAD-140 mechanism of action"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  This review of RAD-140&apos;s mechanism of action focuses on
                  selectivity, binding strength and its influence on muscle
                  tissue. The compound demonstrates tissue-specific activation of
                  androgen receptors, which contributes to the following
                  benefits:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Faster muscle recovery
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Increased lean muscle mass
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Improved endurance and strength
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Enhanced muscle definition
                  </li>
                </ul>

                {/* Quote */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-6 my-8 relative">
                  <span className="text-[48px] leading-none text-[#FF6701]/30 font-serif absolute top-3 left-5">
                    {"\u275D"}
                  </span>
                  <p className="text-[15px] text-[#4A4A4A] leading-[26px] italic pl-8 pr-2">
                    It is impossible to name the best technology out of these
                    two. Each option is good in its own way, and the choice
                    depends on the specific needs and context of the project.
                  </p>
                  <p className="text-sm text-[#7E7E7E] mt-3 pl-8">
                    &mdash; Sergii Opanasenko, co-founder of Greenice
                  </p>
                </div>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  The convenient capsule form ensures accurate dosing. The
                  product offered by Dinespower has been tested for purity, is
                  WHO-GMP certified, and comes with full batch traceability for
                  maximum confidence in quality.
                </p>

                {/* Read Also Card */}
                <div className="border border-[#E7E7E7] rounded-[12px] p-5 my-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF5EE] flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 19V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"
                        stroke="#FF6701"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14 3v6h6"
                        stroke="#FF6701"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#FF6701] font-semibold mb-1">
                      Read Also
                    </p>
                    <Link
                      href="/blog/growth-hormone-secretagogues"
                      className="text-[15px] font-bold text-[#181818] hover:text-[#FF6701] transition-colors leading-[20px]"
                    >
                      How Growth Hormone Secretagogues Work: CJC-1295,
                      Ipamorelin, GHRP-2 and GHRP-6
                    </Link>
                  </div>
                </div>

                {/* Section 2 */}
                <h2
                  id="anabolic-activity"
                  className="text-[22px] font-extrabold text-[#181818] leading-[30px] mt-10 mb-3 scroll-mt-24"
                >
                  Anabolic Activity of Testolone
                </h2>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  Studies on effectiveness of RAD-140 have demonstrated
                  significant anabolic potential with favorable safety markers. A
                  dosage of 10 mg is generally sufficient for most users. Typical
                  cycle duration ranges from 6 to 12 weeks depending on
                  individual goals and experience level.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Faster muscle recovery
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Increased lean muscle mass
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Improved endurance and strength
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    Enhanced muscle definition
                  </li>
                </ul>

                {/* Comparison Table */}
                <div className="bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden my-8">
                  <div className="bg-[#F7F7F7] px-6 py-4 border-b border-[#E7E7E7]">
                    <h3 className="text-[16px] font-extrabold text-[#181818]">
                      SARMs Comparison Table
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#FAFAFA]">
                          <th className="text-left text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">
                            Compound
                          </th>
                          <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">
                            Anabolic
                          </th>
                          <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">
                            Side Effects
                          </th>
                          <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">
                            Half-Life
                          </th>
                          <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">
                            Best For
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr
                            key={i}
                            className={`border-t border-[#E7E7E7] ${i % 2 === 1 ? "bg-[#FAFAFA]" : ""}`}
                          >
                            <td className="text-sm font-semibold text-[#181818] px-4 py-3 whitespace-nowrap">
                              {row.compound}
                            </td>
                            <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">
                              {row.anabolic}
                            </td>
                            <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">
                              {row.sideEffects}
                            </td>
                            <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">
                              {row.halfLife}
                            </td>
                            <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">
                              {row.bestFor}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 3 */}
                <h2
                  id="comparison"
                  className="text-[22px] font-extrabold text-[#181818] leading-[30px] mt-10 mb-3 scroll-mt-24"
                >
                  Comparison of RAD-140 with Other Popular SARMs
                </h2>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  In professional bodybuilding, precision and optimization are
                  key factors in compound selection. Understanding how different
                  SARMs compare allows athletes to make informed decisions based
                  on their specific goals and experience level.
                </p>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-2 font-semibold">
                  How popular SARMs work:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    <strong>Testolone (RAD-140)</strong> &mdash; targets androgen
                    receptors in muscle and bone tissue with high binding
                    affinity, delivering potent anabolic effects with minimal
                    androgenic side effects.
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    <strong>Ligandrol (LGD-4033)</strong> &mdash; known for
                    strong muscle-building properties, particularly effective
                    during bulking phases with dose-dependent increases in lean
                    mass.
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    <strong>YK-11</strong> &mdash; acts as both a SARM and a
                    myostatin inhibitor, offering very high anabolic potential
                    suited for advanced users.
                  </li>
                  <li className="text-[15px] text-[#4A4A4A] leading-[26px]">
                    <strong>Ostarine (MK-2866)</strong> &mdash; the mildest SARM
                    with a very favorable safety profile, ideal for cutting
                    cycles and first-time users.
                  </li>
                </ul>

                {/* Quote */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-6 my-8 relative">
                  <span className="text-[48px] leading-none text-[#FF6701]/30 font-serif absolute top-3 left-5">
                    {"\u275D"}
                  </span>
                  <p className="text-[15px] text-[#4A4A4A] leading-[26px] italic pl-8 pr-2">
                    It is impossible to name the best technology out of these
                    two. Each option is good in its own way, and the choice
                    depends on the specific needs and context of the project.
                  </p>
                  <p className="text-sm text-[#7E7E7E] mt-3 pl-8">
                    &mdash; Sergii Opanasenko, co-founder of Greenice
                  </p>
                </div>

                {/* Banner */}
                <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden my-10">
                  <Image
                    src="/images/shop/hero-banner.png"
                    alt="Lean Muscle Growth"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <div className="absolute inset-0 z-20 flex items-center justify-between px-10">
                    <h3 className="text-[28px] font-extrabold text-white leading-[36px]">
                      LEAN MUSCLE GROWTH
                    </h3>
                    <Link
                      href="/shop"
                      className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] px-8 transition-colors flex items-center"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>

                {/* Section 4 */}
                <h2
                  id="catalog"
                  className="text-[22px] font-extrabold text-[#181818] leading-[30px] mt-10 mb-3 scroll-mt-24"
                >
                  Testolone (RAD-140) and Other SARMs in the Dinespower Catalog
                </h2>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  The Dinespower website features safe and laboratory-tested
                  sports pharmacology products for athletes at every level. Our
                  catalog includes a carefully curated selection of SARMs,
                  peptides, and performance compounds with full quality
                  certification.
                </p>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  Among the most popular products you will find:{" "}
                  <strong>Ostarine MK2866</strong> for cutting and
                  recomposition, <strong>Ligandrol LGD4033</strong> for lean
                  bulking, <strong>Testolone RAD140</strong> for maximum
                  anabolic potential, and{" "}
                  <strong>Ibutamoren MK677</strong> for growth hormone
                  optimization and recovery support.
                </p>

                {/* Categories Tags */}
                <div className="flex items-center gap-3 mt-10 pt-8 border-t border-[#E7E7E7]">
                  <span className="text-sm font-semibold text-[#181818]">
                    Tags:
                  </span>
                  <div className="flex gap-2">
                    {["Bodybuilding", "SARMs", "Nutrition"].map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag.toLowerCase()}`}
                        className="px-4 py-2 rounded-lg bg-[#F7F7F7] text-sm font-medium text-[#181818] hover:bg-[#EDEDED] transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#E7E7E7]">
                  <span className="text-sm font-semibold text-[#181818]">
                    Share:
                  </span>
                  <div className="flex gap-3">
                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                          fill="#181818"
                        />
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleData.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 4.01c-1 .49-2.01.73-3.04.86 1.1-.66 1.94-1.7 2.33-2.94-1.03.61-2.17 1.05-3.38 1.29C17 2.29 15.73 1.7 14.32 1.7c-2.7 0-4.87 2.18-4.87 4.87 0 .38.04.75.13 1.1C6.24 7.48 3.42 5.56 1.56 2.84c-.42.72-.66 1.56-.66 2.46 0 1.69.86 3.18 2.17 4.06-.8-.03-1.55-.25-2.2-.61v.06c0 2.36 1.68 4.33 3.9 4.77-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.09.62 1.95 2.43 3.37 4.57 3.41-1.67 1.31-3.78 2.09-6.07 2.09-.39 0-.78-.02-1.17-.07 2.17 1.39 4.74 2.2 7.5 2.2 9.01 0 13.93-7.46 13.93-13.93 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z"
                          fill="#181818"
                        />
                      </svg>
                    </a>
                    {/* Telegram */}
                    <a
                      href={`https://t.me/share/url?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.47-.01.06.01.24 0 .37z"
                          fill="#181818"
                        />
                      </svg>
                    </a>
                    {/* Email */}
                    <a
                      href={`mailto:?subject=${encodeURIComponent(articleData.title)}&body=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                      className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                          stroke="#181818"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2 6l10 7 10-7"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    {/* Copy Link */}
                    <button
                      onClick={handleCopyLink}
                      className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors relative"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
                          stroke="#181818"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
                          stroke="#181818"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#181818] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </article>

              {/* You might also like - Product Cards */}
              <div className="mt-12">
                <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-6">
                  You Might Also Like
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.slug}`}
                      className="group border border-[#E7E7E7] rounded-[12px] overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-[160px] bg-[#F0F0F0]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-bold text-[#181818] leading-[18px] mb-2 line-clamp-2">
                          {product.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-extrabold text-[#181818]">
                            {product.price}&euro;
                          </span>
                          <span className="text-[13px] text-[#B6B6B6] line-through">
                            {product.oldPrice}&euro;
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Still Have Questions */}
              <div className="mt-12">
                <div className="bg-[#F7F7F7] rounded-[16px] p-8 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#FF6701"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 16v-4M12 8h.01"
                          stroke="#FF6701"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-extrabold text-[#181818] mb-1">
                        Still Have Questions?
                      </h3>
                      <p className="text-sm text-[#7E7E7E]">
                        Reach out to our manager right away &mdash; we&apos;re
                        happy to help with any questions about SARMs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-6">
                    <a
                      href="#"
                      className="w-[48px] h-[48px] rounded-full bg-[#00A9DE] flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.47-.01.06.01.24 0 .37z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-[48px] h-[48px] rounded-full bg-[#00D43F] flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Read Also */}
              <div className="mt-12 mb-4">
                <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-6">
                  Read Also
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/blog/${article.slug}`}
                      className="group cursor-pointer"
                    >
                      <div className="h-[180px] rounded-[12px] overflow-hidden relative mb-4">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <h3 className="text-[16px] font-extrabold text-[#181818] leading-[22px] line-clamp-2 group-hover:text-[#FF6701] transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[#7E7E7E] mt-2">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                        <span>{article.views}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-[440px] shrink-0 hidden lg:block">
              <div className="sticky top-[24px] flex flex-col gap-6">
                {/* Product Recommendation Card */}
                <div className="bg-[#181818] rounded-[12px] p-4">
                  <div className="bg-[#181818] rounded-[8px] overflow-hidden">
                    {/* Product image */}
                    <div className="relative h-[200px] bg-[#252525]">
                      <Image
                        src="/images/shop/product-1.webp"
                        alt="Yohimbine Fat Burner Capsules"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <span className="absolute top-3 left-3 bg-[#FF3B30] text-white text-xs font-bold px-2 py-1 rounded-md">
                        Sale -14%
                      </span>
                    </div>
                    {/* Product info */}
                    <div className="p-4">
                      <p className="text-xs text-[#999] mb-1 uppercase tracking-wider">
                        Biaxol
                      </p>
                      <h4 className="text-[15px] font-bold text-white leading-[20px] mb-2">
                        Yohimbine Fat Burner Capsules
                      </h4>
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="#FF6701"
                          >
                            <path
                              d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.07l-3.52 1.78.67-3.93L1.3 5.14l3.94-.57L7 1z"
                              stroke="#FF6701"
                              strokeWidth="1"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ))}
                        <span className="text-xs text-[#7E7E7E] ml-1">
                          (325 Reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[14px] text-[#B6B6B6] line-through">
                          30&euro;
                        </span>
                        <span className="text-[20px] font-extrabold text-[#181818]">
                          24&euro;
                        </span>
                      </div>
                      <Link
                        href="/shop/yohimbine"
                        className="block bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] w-full transition-colors text-center leading-[44px]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="16"
                        height="12"
                        rx="2"
                        stroke="#FF6701"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 6l8 5 8-5"
                        stroke="#FF6701"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-[16px] font-extrabold text-[#181818]">
                      New Articles By Email
                    </h3>
                  </div>
                  <p className="text-sm text-[#7E7E7E] mb-4">
                    Subscribe and get the latest articles delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-[44px] bg-white border border-[#E7E7E7] rounded-lg px-4 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors mb-3"
                  />
                  <button className="w-full bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] transition-colors">
                    Get updates
                  </button>
                </div>

                {/* Telegram Card */}
                <div className="bg-[#00A9DE] rounded-[12px] p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.47-.01.06.01.24 0 .37z" />
                    </svg>
                  </div>
                  <h3 className="text-[16px] font-extrabold text-white mb-1">
                    Telegram Dinespower
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    Get exclusive deals, news and community discussion
                  </p>
                  <a
                    href="#"
                    className="block bg-white text-[#00A9DE] text-sm font-semibold rounded-lg h-[44px] w-full transition-colors text-center leading-[44px] hover:bg-white/90"
                  >
                    Go to Telegram
                  </a>
                </div>
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
