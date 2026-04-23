"use client";

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
    brand: "Deus Medical",
    title: "Winimed 50 Injectible Steroid In Ampoules",
    image: "/images/shop/winimed-50.png",
    price: "17",
    slug: "winimed-50",
  },
  {
    id: 2,
    brand: "Deus Medical",
    title: "Winimed 50 Injectible Steroid In Ampoules",
    image: "/images/shop/winimed-50.png",
    price: "17",
    slug: "winimed-50",
  },
  {
    id: 3,
    brand: "Deus Medical",
    title: "Winimed 50 Injectible Steroid In Ampoules",
    image: "/images/shop/winimed-50.png",
    price: "17",
    slug: "winimed-50",
  },
];

const relatedArticles = [
  {
    id: 1,
    title:
      "How Growth Hormone Secretagogues Work: CJC-1295, Ipamorelin, GHRP-2 and GHRP-6",
    description:
      "The issue with most startups is that too many resources are spent on ideas that don't work. How can you deliver a product with minimum risk and receive max...",
    date: "12 Nov",
    readTime: "7 min read",
    views: "3.2k views",
    slug: "growth-hormone-secretagogues",
    image: "/images/shop/blog-4.png",
  },
  {
    id: 2,
    title:
      "Peptides vs SARMs for Cutting: Which Is More Effective for Preserving Muscle Mass",
    description:
      "The issue with most startups is that too many resources are spent on ideas that don't work. How can you deliver a product with minimum risk and receive max...",
    date: "12 Nov",
    readTime: "7 min read",
    views: "3.2k views",
    slug: "peptides-vs-sarms-cutting",
    image: "/images/shop/blog-5.png",
  },
];

export default function BlogArticlePage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleShare = (platform: "facebook" | "twitter" | "telegram" | "email") => {
    if (typeof window === "undefined") return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(articleData.title);
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}`,
      telegram: `https://t.me/share/url?url=${url}`,
      email: `mailto:?subject=${title}&body=${url}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4  py-4">
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
        <div className="max-w-[1340px] mx-auto px-4 ">
          <h1 className="text-[20px] tablet:text-[28px] font-extrabold text-[#181818] leading-[26px] tablet:leading-[34px] mb-4">
            {articleData.title}
          </h1>
          <div className="flex items-center gap-3 tablet:gap-4 mb-4 text-[12px] tablet:text-sm text-[#7E7E7E] flex-wrap">
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
          <div className="flex flex-wrap gap-2 mb-8">
            {["Bodybuilding", "SARMs", "Cutting"].map((tag) => (
              <Link
                key={tag}
                href={`/blog?category=${tag.toLowerCase()}`}
                className="px-3 py-2 rounded-[8px] border border-[#D8D8D8] bg-white text-[14px] font-semibold text-[#181818] leading-5 hover:bg-[#E7E7E7] hover:border-transparent transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-[1340px] mx-auto px-4  pb-10">
          <div className="flex flex-col desktop:flex-row gap-6 desktop:gap-[80px]">
            {/* Main content - LEFT COLUMN */}
            <div className="flex-1 min-w-0 max-w-[820px]">
              <article>
                {/* Hero image - separate, not overlay */}
                <div className="relative h-[240px] tablet:h-[480px] rounded-[16px] overflow-hidden mb-6 tablet:mb-8">
                  <Image src="/images/shop/blog-1.png" alt={articleData.title} fill className="object-cover" />
                </div>

                {/* TOC Card — What's Inside (Figma 1608:17013) */}
                <div className="bg-[#F7F7F7] rounded-[16px] p-2 mb-8">
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col">
                    <div className="px-2 py-2">
                      <p className="text-[16px] text-[#7E7E7E] leading-6 capitalize">What&apos;s Inside?</p>
                    </div>
                    <ol className="flex flex-col list-decimal list-inside">
                      {tocItems.map((item, i) => (
                        <li key={i} className="px-3 py-2 rounded-[8px]">
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className="cursor-pointer text-left text-[14px] font-semibold text-[#181818] leading-5 hover:text-[#FF6701] transition-colors"
                          >
                            {item.text}
                          </button>
                        </li>
                      ))}
                    </ol>
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

                {/* Product Card — horizontal Figma layout */}
                <Link href="/catalog" className="relative block bg-[#181818] rounded-[16px] p-6 my-10 overflow-hidden group">
                  <Image src="/icons/newsletter-bg.jpg" alt="" fill className="object-cover opacity-50 mix-blend-lighten pointer-events-none" />
                  <div className="absolute top-[10px] left-0 z-10 pt-2">
                    <span className="inline-flex items-center bg-[#FB2F2F] rounded-tr-[6px] rounded-br-[6px] px-3 py-1 text-[12px] font-semibold text-white leading-4">Sale -14%</span>
                  </div>
                  <div className="relative z-10 flex flex-col tablet:flex-row gap-4 tablet:items-center">
                    <div className="flex gap-3 tablet:gap-4 items-center">
                      <div className="w-[90px] h-[90px] tablet:w-[120px] tablet:h-[120px] shrink-0 relative">
                        <Image src="/images/shop/eca-xtreme.png" alt="ECA Xtreme Fat Burner" fill className="object-contain" />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 min-w-0">
                        <p className="text-[13px] tablet:text-[14px] text-[#B6B6B6] leading-5">Biaxol</p>
                        <p className="text-[16px] tablet:text-[18px] font-semibold text-white leading-[20px] tablet:leading-[26px]">Yohimbine Fat Burner Capsules</p>
                        <div className="flex gap-2 tablet:gap-3 items-center flex-wrap">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FF6701">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <p className="text-[13px] tablet:text-[14px] text-white/70 leading-5">(325 Reviews)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 tablet:gap-4 tablet:shrink-0 justify-between tablet:justify-start">
                      <div className="flex gap-2 items-center">
                        <span className="text-[18px] tablet:text-[20px] font-extrabold text-[#FB2F2F] leading-6">24 €</span>
                        <span className="text-[14px] tablet:text-[16px] text-[#7E7E7E] line-through">30 €</span>
                      </div>
                      <span className="inline-flex items-center justify-center bg-[#FF6701] group-hover:bg-[#E65D00] rounded-[8px] px-4 tablet:px-5 py-2.5 tablet:py-3 text-[13px] tablet:text-[14px] font-semibold text-white transition-colors">
                        Learn More
                      </span>
                    </div>
                  </div>
                </Link>

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

                {/* Quote — Light wrapped */}
                <div className="bg-[#F7F7F7] rounded-[16px] p-4 my-8">
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-6 flex flex-col gap-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M16 12c-5 0-9 4-9 9v7h9v-8h-4c0-2 2-4 4-4v-4zm14 0c-5 0-9 4-9 9v7h9v-8h-4c0-2 2-4 4-4v-4z" fill="#FF6701"/>
                    </svg>
                    <p className="text-[16px] font-semibold text-black leading-7">
                      &ldquo;It is impossible to name the best technology out of these two. First of all, the best technology is the one that your developer is familiar with. Secondly, both frameworks are from the new generation of technologies and bring the same results - help create modern, dynamic, and fast apps.&rdquo;
                    </p>
                    <p className="text-[14px] text-[#7E7E7E] leading-5">&mdash; Sergii Opanasenko, co-founder of Greenice</p>
                  </div>
                </div>

                <p className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                  The convenient capsule form ensures accurate dosing. The
                  product offered by Dinespower has been tested for purity, is
                  WHO-GMP certified, and comes with full batch traceability for
                  maximum confidence in quality.
                </p>

                {/* Read Also Card — dark Figma style */}
                <Link
                  href="/blog/growth-hormone-secretagogues"
                  className="relative block bg-[#181818] rounded-[16px] p-4 tablet:p-6 my-8 overflow-hidden group"
                >
                  <Image src="/icons/newsletter-bg.jpg" alt="" fill className="object-cover opacity-50 mix-blend-lighten pointer-events-none" />
                  <div className="relative z-10 flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-5">
                    <div className="flex gap-3 tablet:gap-5 items-center">
                      <div className="w-[90px] h-[60px] tablet:w-[120px] tablet:h-[80px] rounded-[8px] overflow-hidden shrink-0 relative">
                        <Image src="/images/shop/blog-4.png" alt="Read Also" fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 min-w-0">
                        <p className="text-[12px] tablet:text-[14px] text-white/60 leading-4 tablet:leading-5">Read Also:</p>
                        <p className="text-[14px] tablet:text-[18px] font-extrabold text-white leading-[18px] tablet:leading-[24px] line-clamp-2">
                          How Growth Hormone Secretagogues Work: CJC-1295, Ipamorelin, GHRP-2 and GHRP-6
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center justify-center tablet:shrink-0 h-11 px-6 bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black group-hover:bg-[#E7E7E7] group-hover:border-transparent transition-colors">
                      Read More
                    </span>
                  </div>
                </Link>

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
                {/* Quote — Light wrapped */}
                <div className="bg-[#F7F7F7] rounded-[16px] p-4 my-8">
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-6 flex flex-col gap-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M16 12c-5 0-9 4-9 9v7h9v-8h-4c0-2 2-4 4-4v-4zm14 0c-5 0-9 4-9 9v7h9v-8h-4c0-2 2-4 4-4v-4z" fill="#FF6701"/>
                    </svg>
                    <p className="text-[16px] font-semibold text-black leading-7">
                      &ldquo;It is impossible to name the best technology out of these two. Each option is good in its own way, and the choice depends on the specific needs and context of the project.&rdquo;
                    </p>
                    <p className="text-[14px] text-[#7E7E7E] leading-5">&mdash; Sergii Opanasenko, co-founder of Greenice</p>
                  </div>
                </div>

                {/* Banner — WEEKLY BESTSELLER Figma 1513:15754 */}
                <div className="relative w-full h-auto tablet:h-[260px] rounded-[16px] overflow-hidden my-8 tablet:my-10 bg-[#181818]">
                  <Image src="/icons/newsletter-bg.jpg" alt="" fill className="object-cover opacity-50 mix-blend-lighten pointer-events-none" />
                  {/* Right image — absolute on desktop, top-full on mobile */}
                  <div className="relative tablet:absolute tablet:right-0 tablet:top-0 tablet:h-[260px] tablet:w-[400px] h-[160px] w-full z-0 pointer-events-none">
                    <Image src="/images/shop/banner-bottle-badges.png" alt="Andarine S4 with quality badges" fill className="object-cover object-right tablet:object-cover" />
                  </div>
                  {/* Left: text block */}
                  <div className="relative tablet:absolute tablet:left-10 tablet:top-1/2 tablet:-translate-y-1/2 z-10 flex flex-col gap-2 tablet:gap-3 tablet:w-[340px] p-5 tablet:p-0">
                    <p className="text-[14px] tablet:text-[18px] font-semibold text-[#FF6701] leading-[20px] tablet:leading-[26px] uppercase">Weekly bestseller</p>
                    <h3 className="text-[22px] tablet:text-[28px] font-black italic text-white leading-[28px] tablet:leading-[34px]">Lean Muscle Growth</h3>
                    <p className="text-[13px] tablet:text-[16px] text-[#F7F7F7] leading-5 tablet:leading-6">Non-steroidal selective androgen receptor modulator</p>
                    <Link
                      href="/shop"
                      className="cursor-pointer inline-flex items-center justify-center h-11 px-8 bg-white border border-[#E7E7E7] rounded-[8px] text-[14px] font-semibold text-black self-start hover:border-[#181818] transition-colors mt-1">Shop Now</Link>
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

                {/* Popular Categories */}
                <div className="mt-10 pt-8 border-t border-[#E7E7E7]">
                  <p className="text-[14px] text-[#7E7E7E] mb-3">Popular Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {["Bodybuilding", "SARMs", "Cutting", "PCT", "Peptides", "Fat Burn", "Injectable"].map((cat) => (
                      <Link
                        key={cat}
                        href={`/blog?category=${cat.toLowerCase()}`}
                        className="px-3 py-2 rounded-[8px] border border-[#D8D8D8] bg-white text-[14px] font-semibold text-[#181818] leading-5 hover:bg-[#E7E7E7] hover:border-transparent transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share buttons — pill style with colored icon circles */}
                <div className="mt-8 pt-8 border-t border-[#E7E7E7]">
                  <p className="text-[14px] text-[#7E7E7E] mb-3">Share:</p>
                  <div className="grid grid-cols-2 tablet:grid-cols-4 gap-3">
                    <button
                      type="button"
                      onClick={() => handleShare("facebook")}
                      className="cursor-pointer flex items-center justify-center gap-3 h-14 px-4 bg-white border border-[#E7E7E7] rounded-[12px] hover:bg-[#F7F7F7] hover:border-transparent transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                        </svg>
                      </span>
                      <span className="text-[14px] font-semibold text-[#181818]">Facebook</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare("twitter")}
                      className="cursor-pointer flex items-center justify-center gap-3 h-14 px-4 bg-white border border-[#E7E7E7] rounded-[12px] hover:bg-[#F7F7F7] hover:border-transparent transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </span>
                      <span className="text-[14px] font-semibold text-[#181818]">Twitter</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare("telegram")}
                      className="cursor-pointer flex items-center justify-center gap-3 h-14 px-4 bg-white border border-[#E7E7E7] rounded-[12px] hover:bg-[#F7F7F7] hover:border-transparent transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M3.32168 11.8714L18.7484 5.92338C19.4644 5.66472 20.0897 6.09805 19.8577 7.18072L19.859 7.17938L17.2323 19.5541C17.0377 20.4314 16.5164 20.6447 15.787 20.2314L11.787 17.2834L9.85768 19.1421C9.64435 19.3554 9.46435 19.5354 9.05102 19.5354L9.33502 15.4647L16.7483 8.76738C17.071 8.48338 16.6763 8.32338 16.251 8.60605L7.08968 14.374L3.14035 13.1421C2.28302 12.8701 2.26435 12.2847 3.32168 11.8714Z" fill="white"/>
                        </svg>
                      </span>
                      <span className="text-[14px] font-semibold text-[#181818]">Telegram</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare("email")}
                      className="cursor-pointer flex items-center justify-center gap-3 h-14 px-4 bg-white border border-[#E7E7E7] rounded-[12px] hover:bg-[#F7F7F7] hover:border-transparent transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#FF6701] flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2"/>
                          <path d="M2 6l10 7 10-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-[14px] font-semibold text-[#181818]">Email</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* You might also like — Figma Option 3 */}
              <div className="mt-12 bg-[#F7F7F7] rounded-[16px] p-2 flex flex-col gap-2">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-[#E7E7E7] rounded-[16px] px-3 tablet:px-4 py-2 tablet:py-0 flex items-center gap-3 tablet:gap-4">
                    <Link href={`/shop/${product.slug}`} className="w-[80px] h-[80px] tablet:w-[120px] tablet:h-[120px] shrink-0 relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"

                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col tablet:flex-row tablet:items-center gap-2 tablet:gap-4">
                      <Link href={`/shop/${product.slug}`} className="flex-1 min-w-0 group flex flex-col gap-1 tablet:gap-1.5">
                        <p className="text-[12px] text-[#7E7E7E] leading-4">{product.brand}</p>
                        <p className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] leading-5 tablet:leading-6 capitalize line-clamp-2 group-hover:text-[#FF6701] transition-colors">
                          {product.title}
                        </p>
                      </Link>
                      <div className="flex items-center gap-2 tablet:gap-4 shrink-0">
                        <div className="flex items-center justify-center h-9 tablet:py-2 w-[70px] tablet:w-[140px] bg-[#F7F7F7] rounded-[8px]">
                          <span className="text-[14px] font-semibold text-[#181818] leading-5">{product.price}€</span>
                        </div>
                        <button className="group cursor-pointer relative h-9 w-[44px] tablet:w-[140px] bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="tablet:transition-all tablet:duration-300 tablet:ease-out tablet:group-hover:translate-y-[150%] tablet:group-hover:opacity-0">
                            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 6H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="hidden tablet:inline absolute text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-300 ease-out -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            Add to cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Still Have Questions — Figma 1504:14818 */}
              <div className="mt-12 bg-[#F7F7F7] rounded-[12px] p-2">
                <div className="bg-white border border-[#E7E7E7] rounded-[8px] tablet:pl-6 tablet:pr-8 p-4 tablet:p-0 flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-8 overflow-hidden">
                  <div className="relative w-[100px] h-[100px] tablet:w-[145px] tablet:h-[150px] shrink-0 overflow-hidden mx-auto tablet:mx-0">
                    <Image src="/images/shop/manager.png" alt="Manager" fill className="object-cover object-top scale-110" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 min-w-0 text-center tablet:text-left">
                    <p className="text-[18px] tablet:text-[24px] font-extrabold text-black leading-[24px] tablet:leading-[30px]">Still have questions?</p>
                    <p className="text-[13px] tablet:text-[14px] text-[#1E1E1E] leading-5">
                      Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.
                    </p>
                  </div>
                  <button onClick={() => window.dispatchEvent(new CustomEvent('open-help-popup'))} className="cursor-pointer inline-flex items-center justify-center h-11 px-4 bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black tablet:shrink-0 hover:border-[#181818] transition-colors">Ask a Question</button>
                </div>
              </div>

              {/* Read Also — horizontal rows matching Figma News Card - Vertical */}
              <div className="mt-12 mb-4">
                <h2 className="text-[20px] tablet:text-[24px] font-extrabold text-[#181818] leading-[26px] tablet:leading-[30px] mb-4 tablet:mb-6">
                  Read Also
                </h2>
                <div className="flex flex-col">
                  {relatedArticles.map((article, idx) => (
                    <div key={article.id}>
                      {idx > 0 && <div className="h-px bg-[#E7E7E7] my-6 tablet:my-8" />}
                      <Link
                        href={`/blog/${article.slug}`}
                        className="flex flex-col tablet:flex-row gap-4 tablet:gap-6 tablet:items-start cursor-pointer group"
                      >
                        <div className="relative w-full tablet:w-[300px] aspect-[16/10] tablet:aspect-auto tablet:h-[188px] rounded-[8px] tablet:shrink-0 overflow-hidden bg-[#F7F7F7]">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                           
                          />
                          <div className="absolute top-2 left-2 bg-white rounded-[8px] w-12 h-12 flex flex-col items-center justify-center px-3 py-2">
                            <span className="text-[20px] font-extrabold text-black leading-6">{article.date.split(" ")[0]}</span>
                            <span className="text-[12px] font-semibold text-black leading-4">{article.date.split(" ")[1]}</span>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-4 self-stretch min-w-0">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-[20px] font-extrabold text-black leading-[24px] line-clamp-2 group-hover:text-[#FF6701] transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-[14px] text-[#7E7E7E] leading-[20px] line-clamp-2">
                              {article.description}
                            </p>
                          </div>
                          <div className="flex gap-4 items-start">
                            <div className="flex gap-2 items-center">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="#7E7E7E" strokeWidth="1.5" />
                                <path d="M12 7v5l3 2" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                              <span className="text-[14px] text-[#7E7E7E] leading-5">{article.readTime}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="#7E7E7E" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="3" stroke="#7E7E7E" strokeWidth="1.5" />
                              </svg>
                              <span className="text-[14px] text-[#7E7E7E] leading-5">{article.views}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-[440px] shrink-0 hidden desktop:block">
              <div className="sticky top-[24px] flex flex-col gap-6">
                {/* Product Recommendation Card — horizontal Figma layout */}
                <Link href="/catalog" className="relative block bg-[#181818] rounded-[16px] p-6 overflow-hidden group">
                  <Image src="/icons/newsletter-bg.jpg" alt="" fill className="object-cover opacity-50 mix-blend-lighten pointer-events-none" />
                  <div className="absolute top-[10px] left-0 z-10 pt-2">
                    <span className="inline-flex items-center bg-[#FB2F2F] rounded-tr-[6px] rounded-br-[6px] px-3 py-1 text-[12px] font-semibold text-white leading-4">Sale -14%</span>
                  </div>
                  <div className="relative z-10 flex gap-4 items-center">
                    <div className="w-[120px] h-[120px] shrink-0 relative">
                      <Image src="/images/shop/eca-xtreme.png" alt="ECA Xtreme Fat Burner" fill className="object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3 min-w-0">
                      <div className="flex flex-col gap-1">
                        <p className="text-[14px] text-[#B6B6B6] leading-5">Biaxol</p>
                        <p className="text-[18px] font-semibold text-white leading-[26px]">Yohimbine Fat Burner Capsules</p>
                        <div className="flex gap-3 items-center">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FF6701">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <p className="text-[14px] text-white/70 leading-5">(325 Reviews)</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="flex-1 flex gap-2 items-center min-w-0">
                          <span className="text-[20px] font-extrabold text-[#FB2F2F] leading-6">24 €</span>
                          <span className="text-[16px] text-[#7E7E7E] line-through">30 €</span>
                        </div>
                        <span className="inline-flex items-center justify-center bg-[#FF6701] group-hover:bg-[#E65D00] rounded-[8px] px-4 py-3 text-[14px] font-semibold text-white transition-colors">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Telegram Subscription — Figma 1940:19238 */}
                <div className="bg-[#F7F7F7] rounded-[16px] p-4">
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-6 flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3.32168 11.8714L18.7484 5.92338C19.4644 5.66472 20.0897 6.09805 19.8577 7.18072L19.859 7.17938L17.2323 19.5541C17.0377 20.4314 16.5164 20.6447 15.787 20.2314L11.787 17.2834L9.85768 19.1421C9.64435 19.3554 9.46435 19.5354 9.05102 19.5354L9.33502 15.4647L16.7483 8.76738C17.071 8.48338 16.6763 8.32338 16.251 8.60605L7.08968 14.374L3.14035 13.1421C2.28302 12.8701 2.26435 12.2847 3.32168 11.8714Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex-1 flex flex-col gap-1 min-w-0">
                        <p className="text-[16px] font-semibold text-black leading-6 capitalize">Official Telegram channel</p>
                        <p className="text-[14px] text-[#1E1E1E] leading-5">Get instant updates on new articles and limited offers</p>
                      </div>
                    </div>
                    <a
                      href="https://t.me/+eFl6hboMcbxlNDI0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center justify-center w-full h-11 bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black hover:border-[#181818] transition-colors">Join Channel</a>
                  </div>
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
