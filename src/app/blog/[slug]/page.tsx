"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articleData = {
  title: "Best SARMs for Body Recomposition: Muscle Gain and Fat Loss",
  date: "12 Nov 2025",
  readTime: "12 min read",
  views: "3.2k views",
  tags: ["Bodybuilding", "SARMs", "Cutting", "Recomposition"],
  content: [
    {
      type: "paragraph" as const,
      id: "",
      text: "Body recomposition is one of the most sought-after goals in fitness \u2014 simultaneously building lean muscle mass while reducing body fat. While traditionally considered difficult to achieve, selective androgen receptor modulators (SARMs) have emerged as a promising tool for those pursuing this dual objective. In this comprehensive guide, we break down the science behind recomposition, the best compounds for the job, optimal dosing protocols, and the nutritional strategies that tie everything together.",
    },
    {
      type: "heading" as const,
      id: "what-is-recomposition",
      text: "1. What Is Body Recomposition?",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: 'Body recomposition, often referred to as "recomp," is the process of changing your body composition by simultaneously gaining muscle and losing fat. Unlike traditional bulk-and-cut cycles, recomposition aims to improve your physique without significant changes in overall body weight. The key lies in nutrient partitioning \u2014 directing calories toward muscle protein synthesis while mobilizing stored body fat for energy.',
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "This approach is particularly appealing because it allows athletes and fitness enthusiasts to maintain their current weight class while dramatically improving their body composition and performance metrics. Research published in sports science journals has shown that recomposition is most effective in individuals who are relatively new to resistance training, those returning after a layoff, and individuals carrying moderate body fat levels between 15-25%.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "The traditional approach of bulking followed by cutting can lead to significant hormonal fluctuations, metabolic adaptation, and psychological fatigue. Body recomposition offers a more sustainable path by keeping caloric intake close to maintenance while manipulating macronutrient timing and leveraging pharmacological support where appropriate.",
    },
    {
      type: "image" as const,
      id: "",
      text: "",
      src: "/images/shop/blog-1.png",
      alt: "Body recomposition overview",
    },
    {
      type: "quote" as const,
      id: "",
      text: "Body recomposition represents the holy grail of physique transformation \u2014 the ability to build muscle and burn fat simultaneously, challenging the conventional wisdom that you must choose one or the other.",
    },
    {
      type: "heading" as const,
      id: "how-sarms-work",
      text: "2. How SARMs Support Recomposition",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Selective androgen receptor modulators work by binding to androgen receptors in muscle and bone tissue with high specificity. Unlike traditional anabolic compounds, SARMs are designed to target these receptors selectively, which is why they have gained significant attention in both clinical research and the athletic community. Their tissue-selective mechanism means they can promote anabolic activity in muscle without many of the broader systemic effects associated with traditional androgens.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "For recomposition specifically, SARMs help by increasing the rate of muscle protein synthesis even when the body is in a slight caloric deficit. This is the fundamental challenge of recomposition \u2014 building muscle typically requires a caloric surplus, while losing fat requires a deficit. SARMs help bridge this gap by enhancing the anabolic signaling cascade, allowing the body to prioritize lean tissue accretion even when overall energy availability is limited.",
    },
    {
      type: "heading" as const,
      id: "top-sarms",
      text: "3. Top SARMs for Recomposition",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Several SARMs have shown particular promise for body recomposition due to their unique mechanisms of action. Here we examine the most effective compounds based on available research, user experiences, and pharmacological profiles.",
    },
    {
      type: "subheading" as const,
      id: "ostarine",
      text: "Ostarine (MK-2866)",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Ostarine is widely considered the best SARM for beginners and recomposition. It provides moderate anabolic effects while helping preserve muscle mass during caloric deficits. Typical dosages range from 10-25mg per day for 8-12 week cycles. Ostarine has been the subject of multiple clinical trials, including studies on age-related muscle wasting and cancer cachexia, which demonstrated its ability to increase lean body mass even in catabolic conditions.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "What makes Ostarine particularly suited for recomposition is its favorable side-effect profile at moderate doses. Users consistently report steady gains in lean mass of 2-4 kg over an 8-week cycle, alongside noticeable reductions in body fat percentage. Its mild nature means that hormonal suppression is typically minimal, making recovery straightforward with or without a formal post-cycle therapy protocol.",
    },
    {
      type: "subheading" as const,
      id: "rad140",
      text: "RAD-140 (Testolone)",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "RAD-140 is one of the most potent SARMs available, with strong anabolic properties that make it excellent for building lean muscle. Its high binding affinity to androgen receptors in muscle tissue makes it particularly effective for recomposition when combined with proper training and nutrition. RAD-140 was originally developed as a potential treatment for muscle-wasting conditions and has demonstrated an anabolic-to-androgenic ratio of approximately 90:1 in preclinical models.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Users of RAD-140 frequently report significant strength gains within the first two weeks of use, accompanied by improvements in muscular endurance and recovery capacity. Dosages typically range from 10-20mg per day, with most users opting for 8-week cycles. Due to its potency, RAD-140 does carry a higher likelihood of hormonal suppression compared to Ostarine, so a structured PCT protocol is generally recommended following its use.",
    },
    {
      type: "subheading" as const,
      id: "cardarine",
      text: "Cardarine (GW-501516)",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "While technically not a SARM but a PPAR-delta receptor agonist, Cardarine is often stacked with SARMs for recomposition due to its powerful fat-oxidation properties. It works by activating the PPAR-delta pathway, fundamentally shifting the body\u2019s energy substrate utilization toward fatty acids. This means the body preferentially burns fat for fuel during both exercise and rest, creating an ideal metabolic environment for recomposition.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Cardarine has been shown in research to increase endurance capacity by up to 50% in animal models, and user reports consistently confirm dramatic improvements in cardiovascular performance. At standard doses of 10-20mg per day, users experience enhanced fat loss without the muscle-wasting effects associated with traditional caloric restriction. Because Cardarine does not interact with the androgen receptor, it does not cause hormonal suppression and can be used for extended periods.",
    },
    {
      type: "subheading" as const,
      id: "lgd4033",
      text: "LGD-4033 (Ligandrol)",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Ligandrol is another strong contender for recomposition, particularly for intermediate and advanced users. It demonstrates potent anabolic activity with dosages as low as 5-10mg per day, making it one of the most efficient SARMs on a milligram-per-milligram basis. Clinical trials have shown that LGD-4033 can increase lean body mass by up to 1.2 kg in just 21 days at 1mg per day, with dose-dependent increases observed at higher dosages.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "For recomposition purposes, LGD-4033 is best utilized at moderate doses of 5-10mg per day over 6-8 weeks. It pairs well with Cardarine to create a synergistic recomposition effect \u2014 LGD-4033 handles the anabolic side of the equation while Cardarine optimizes fat oxidation. Users should be aware that LGD-4033 does suppress natural hormone levels and a proper PCT is essential for recovery.",
    },
    {
      type: "image" as const,
      id: "",
      text: "",
      src: "/images/shop/blog-3.png",
      alt: "SARMs compounds for recomposition",
    },
    {
      type: "comparison-table" as const,
      id: "comparison",
      text: "",
    },
    {
      type: "quote" as const,
      id: "",
      text: "The most successful recomposition protocols combine the right compounds with disciplined nutrition and progressive training \u2014 pharmacology alone is never the answer.",
    },
    {
      type: "heading" as const,
      id: "recommended-stacks",
      text: "4. Recommended Stacks for Recomposition",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "For those with some experience, a popular recomposition stack combines Ostarine at 20mg/day with Cardarine at 10mg/day for an 8-week cycle. This combination provides muscle-building stimulus while dramatically improving fat oxidation capacity. It is considered the entry-level recomp stack due to the mild side-effect profiles of both compounds.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "More advanced users may opt for a RAD-140 (10-15mg/day) and Cardarine (15-20mg/day) stack, which provides significantly stronger anabolic stimulus alongside enhanced fat metabolism. This stack typically yields more dramatic results but also requires a more structured PCT protocol. Some users also add a low dose of Ostarine (10mg/day) to this stack for additional joint support and recovery benefits.",
    },
    {
      type: "heading" as const,
      id: "nutrition-training",
      text: "5. Nutrition and Training During a Recomp",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Pharmacological support alone is insufficient for optimal recomposition. Nutrition plays a critical role: most successful recomp protocols call for eating at or slightly below maintenance calories (a deficit of 200-300 kcal at most). Protein intake should be elevated to 2.2-2.8g per kilogram of body weight to maximize muscle protein synthesis while in a caloric deficit. Carbohydrate timing around training sessions helps fuel workouts and drive nutrient partitioning toward muscle tissue.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Training should emphasize progressive overload with a focus on compound movements. A well-designed program incorporating 4-5 resistance training sessions per week, with moderate volume (12-18 working sets per muscle group per week), provides the mechanical stimulus needed for muscle growth. Cardiovascular exercise should be included but kept moderate \u2014 2-3 sessions of 20-30 minutes of low-to-moderate intensity cardio is sufficient to support fat loss without compromising recovery.",
    },
    {
      type: "image" as const,
      id: "",
      text: "",
      src: "/images/shop/blog-5.png",
      alt: "Nutrition and training for recomposition",
    },
    {
      type: "heading" as const,
      id: "pct-recovery",
      text: "6. Post-Cycle Therapy and Recovery",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "After completing a SARMs cycle, post-cycle therapy is an important consideration for restoring natural hormonal balance. The extent of PCT required depends on the compounds used and the duration of the cycle. Milder SARMs like Ostarine at moderate doses may only require a brief recovery period, while more potent compounds like RAD-140 and LGD-4033 typically warrant a structured PCT protocol lasting 4-6 weeks.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Blood work before, during, and after a cycle is highly recommended to monitor hormone levels, liver enzymes, and lipid panels. This data-driven approach allows for informed decision-making regarding the necessity and duration of PCT. During the recovery phase, maintaining a caloric surplus, adequate sleep (7-9 hours), and continued resistance training helps preserve the gains made during the cycle.",
    },
    {
      type: "heading" as const,
      id: "product-quality",
      text: "7. Importance of Product Quality and Verification",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "One of the most overlooked aspects of SARMs use is product quality. Independent testing of SARMs products available online has revealed that a significant percentage contain inaccurate dosages, undisclosed ingredients, or are mislabeled entirely. This underscores the critical importance of sourcing from reputable suppliers who provide third-party laboratory analysis for every batch.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "At DinesPower, all SARMs products are sourced from verified manufacturers with full batch traceability. Each product comes with a unique authentication code that can be verified directly on the manufacturer\u2019s website, and independent COA (Certificate of Analysis) documents are available upon request. This level of transparency ensures that what is listed on the label is exactly what is in the product.",
    },
    {
      type: "heading" as const,
      id: "conclusion",
      text: "8. Conclusion",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "SARMs offer a promising avenue for body recomposition when used responsibly and in conjunction with proper training and nutrition. The key to a successful recomp lies in choosing the right compounds for your experience level, dialing in nutrition and training, and sourcing verified, lab-tested products. Whether you opt for a mild Ostarine cycle or a more aggressive RAD-140 stack, the fundamental principles remain the same: consistency, patience, and a data-driven approach to monitoring your progress.",
    },
    {
      type: "paragraph" as const,
      id: "",
      text: "Always consult with a qualified healthcare professional before beginning any pharmacological protocol, and ensure you have baseline blood work completed to allow for meaningful before-and-after comparisons. With the right approach, body recomposition can deliver remarkable results that neither traditional bulking nor cutting can achieve on their own.",
    },
  ],
};

const comparisonData = [
  { name: "Ostarine (MK-2866)", strength: "Moderate", fatLoss: "Moderate", dosage: "10-25mg/day", cycle: "8-12 weeks", pct: "Optional", level: "Beginner" },
  { name: "RAD-140 (Testolone)", strength: "High", fatLoss: "Moderate", dosage: "10-20mg/day", cycle: "8 weeks", pct: "Required", level: "Intermediate" },
  { name: "Cardarine (GW-501516)", strength: "Low", fatLoss: "Very High", dosage: "10-20mg/day", cycle: "8-12 weeks", pct: "Not needed", level: "Any" },
  { name: "LGD-4033 (Ligandrol)", strength: "Very High", fatLoss: "Low", dosage: "5-10mg/day", cycle: "6-8 weeks", pct: "Required", level: "Intermediate+" },
];

const relatedArticles = [
  {
    id: 2,
    title: "Peptides vs SARMs for Cutting: Which Is More Effective for Preserving Muscle Mass",
    date: "10 Nov 2025",
    readTime: "5 min read",
    views: "2.8k views",
    slug: "peptides-vs-sarms-cutting",
    image: "/images/shop/blog-2.png",
  },
  {
    id: 3,
    title: "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism",
    date: "8 Nov 2025",
    readTime: "9 min read",
    views: "4.1k views",
    slug: "rad-140-testolone-analysis",
    image: "/images/shop/blog-3.png",
  },
  {
    id: 4,
    title: "Complete Guide to Post Cycle Therapy: When and How to Start PCT",
    date: "5 Nov 2025",
    readTime: "11 min read",
    views: "5.6k views",
    slug: "post-cycle-therapy-guide",
    image: "/images/shop/blog-4.png",
  },
];

export default function BlogArticlePage() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const tocItems = articleData.content.filter(
    (b) => b.type === "heading" || b.type === "subheading"
  );

  useEffect(() => {
    const headingIds = tocItems.map((h) => h.id).filter(Boolean);
    const elements = headingIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

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

  const renderComparisonTable = () => (
    <div className="bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden my-8">
      <div className="bg-[#F7F7F7] px-6 py-4 border-b border-[#E7E7E7]">
        <h3 className="text-[16px] font-extrabold text-[#181818]">SARMs Comparison Table</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFA]">
              <th className="text-left text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">Compound</th>
              <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">Strength</th>
              <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">Fat Loss</th>
              <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">Dosage</th>
              <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">Cycle</th>
              <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">PCT</th>
              <th className="text-center text-xs font-semibold text-[#7E7E7E] uppercase tracking-wider px-4 py-3">Level</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className={`border-t border-[#E7E7E7] ${i % 2 === 1 ? "bg-[#FAFAFA]" : ""}`}>
                <td className="text-sm font-semibold text-[#181818] px-4 py-3 whitespace-nowrap">{row.name}</td>
                <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">{row.strength}</td>
                <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">{row.fatLoss}</td>
                <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">{row.dosage}</td>
                <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">{row.cycle}</td>
                <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">{row.pct}</td>
                <td className="text-sm text-[#4A4A4A] text-center px-4 py-3">{row.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#181818] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold line-clamp-1">{articleData.title}</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-[1340px] mx-auto">
          <div className="relative h-[420px] rounded-[16px] overflow-hidden">
            <Image
              src="/images/shop/blog-2.png"
              alt={articleData.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
              <div className="flex gap-2 mb-4">
                {articleData.tags.map((tag) => (
                  <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-[36px] font-extrabold text-white leading-[44px] max-w-[800px]">
                {articleData.title}
              </h1>
              <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
                <span>{articleData.date}</span>
                <span>{articleData.readTime}</span>
                <span>{articleData.views}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-[1340px] mx-auto py-10">
          <div className="flex gap-10">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-[860px]">
              <article className="prose-custom">
                {/* What's Inside TOC Card - inside content */}
                <div className="border border-[#E7E7E7] rounded-[16px] p-6 mb-8">
                  <h3 className="text-[18px] font-extrabold text-[#181818] mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="2" width="16" height="16" rx="3" stroke="#FF6701" strokeWidth="1.5"/>
                      <path d="M6 7h8M6 10h8M6 13h5" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    What&apos;s Inside?
                  </h3>
                  <div className="flex flex-col gap-1">
                    {tocItems.filter(h => h.type === "heading").map((heading, i) => {
                      const isActive = activeSection === heading.id;
                      return (
                        <button
                          key={i}
                          onClick={() => scrollToSection(heading.id)}
                          className={`text-left text-sm leading-7 px-3 py-1 rounded-md transition-all ${
                            isActive
                              ? "text-[#FF6701] font-semibold bg-[#FFF5EE]"
                              : "text-[#4A4A4A] hover:text-[#181818] hover:bg-[#F7F7F7]"
                          }`}
                        >
                          {heading.text}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {articleData.content.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} id={block.id} className="text-[22px] font-extrabold text-[#181818] leading-[30px] mt-10 mb-3 scroll-mt-24">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "subheading") {
                    return (
                      <h3 key={i} id={block.id} className="text-[18px] font-bold text-[#181818] leading-[26px] mt-6 mb-2 scroll-mt-24">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "image") {
                    const imgBlock = block as typeof block & { src: string; alt: string };
                    return (
                      <div key={i} className="relative w-full h-[320px] rounded-[12px] overflow-hidden my-8">
                        <Image
                          src={imgBlock.src}
                          alt={imgBlock.alt}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <div key={i} className="bg-[#F7F7F7] rounded-[12px] p-6 my-8 relative">
                        <span className="text-[48px] leading-none text-[#FF6701]/30 font-serif absolute top-3 left-5">{"\u275D"}</span>
                        <p className="text-[15px] text-[#4A4A4A] leading-[26px] italic pl-8 pr-2">
                          {block.text}
                        </p>
                      </div>
                    );
                  }
                  if (block.type === "comparison-table") {
                    return <div key={i}>{renderComparisonTable()}</div>;
                  }
                  return (
                    <p key={i} className="text-[15px] text-[#4A4A4A] leading-[26px] mb-4">
                      {block.text}
                    </p>
                  );
                })}
              </article>

              {/* Tags */}
              <div className="flex items-center gap-3 mt-10 pt-8 border-t border-[#E7E7E7]">
                <span className="text-sm font-semibold text-[#181818]">Tags:</span>
                <div className="flex gap-2">
                  {articleData.tags.map((tag) => (
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
                <span className="text-sm font-semibold text-[#181818]">Share:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleData.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 4.01c-1 .49-2.01.73-3.04.86 1.1-.66 1.94-1.7 2.33-2.94-1.03.61-2.17 1.05-3.38 1.29C17 2.29 15.73 1.7 14.32 1.7c-2.7 0-4.87 2.18-4.87 4.87 0 .38.04.75.13 1.1C6.24 7.48 3.42 5.56 1.56 2.84c-.42.72-.66 1.56-.66 2.46 0 1.69.86 3.18 2.17 4.06-.8-.03-1.55-.25-2.2-.61v.06c0 2.36 1.68 4.33 3.9 4.77-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.09.62 1.95 2.43 3.37 4.57 3.41-1.67 1.31-3.78 2.09-6.07 2.09-.39 0-.78-.02-1.17-.07 2.17 1.39 4.74 2.2 7.5 2.2 9.01 0 13.93-7.46 13.93-13.93 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z" fill="#181818"/>
                    </svg>
                  </a>
                  <a
                    href={`https://t.me/share/url?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.53.17.14.12.18.28.2.47-.01.06.01.24 0 .37z" fill="#181818"/>
                    </svg>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-[40px] h-[40px] rounded-lg bg-[#F7F7F7] hover:bg-[#EDEDED] flex items-center justify-center transition-colors relative"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#181818] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-[440px] shrink-0 hidden lg:block">
              <div className="sticky top-6 flex flex-col gap-6">
                {/* Product Recommendation Card */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                  <div className="bg-white border border-[#E7E7E7] rounded-[8px] overflow-hidden">
                    {/* Product image */}
                    <div className="relative h-[200px] bg-[#F0F0F0]">
                      <Image
                        src="/images/shop/blog-4.png"
                        alt="Yohimbine HCL"
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
                      <p className="text-xs text-[#7E7E7E] mb-1 uppercase tracking-wider">DinesPower</p>
                      <h4 className="text-[15px] font-bold text-[#181818] leading-[20px] mb-2">Yohimbine HCL 10mg</h4>
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} width="14" height="14" viewBox="0 0 14 14" fill={star <= 4 ? "#FF6701" : "none"}>
                            <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.07l-3.52 1.78.67-3.93L1.3 5.14l3.94-.57L7 1z" stroke="#FF6701" strokeWidth="1" strokeLinejoin="round"/>
                          </svg>
                        ))}
                        <span className="text-xs text-[#7E7E7E] ml-1">4.0</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[20px] font-extrabold text-[#181818]">30&euro;</span>
                        <span className="text-[14px] text-[#B6B6B6] line-through">35&euro;</span>
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#FF6701" strokeWidth="1.5"/>
                      <path d="M2 6l8 5 8-5" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="text-[16px] font-extrabold text-[#181818]">New Articles By Email</h3>
                  </div>
                  <p className="text-sm text-[#7E7E7E] mb-4">Subscribe and get the latest articles delivered to your inbox</p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-[44px] bg-white border border-[#E7E7E7] rounded-lg px-4 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors mb-3"
                  />
                  <button className="w-full bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] transition-colors">
                    Subscribe
                  </button>
                </div>

                {/* Telegram Card */}
                <div className="bg-[#00A9DE] rounded-[12px] p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <Image src="/images/shop/telegram.svg" alt="Telegram" width={24} height={24} unoptimized />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-white mb-1">Join Our Telegram</h3>
                  <p className="text-sm text-white/70 mb-4">Get exclusive deals, news and community discussion</p>
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

        {/* Still Have Questions Card */}
        <div className="max-w-[1340px] mx-auto pb-12">
          <div className="bg-[#F7F7F7] rounded-[16px] p-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shrink-0">
                <Image src="/images/shop/faq-help-icon.png" alt="Help" width={32} height={32} unoptimized />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-[#181818] mb-1">Still Have Questions?</h3>
                <p className="text-sm text-[#7E7E7E]">Reach out to our manager right away &mdash; we&apos;re happy to help with any questions about SARMs.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-6">
              <a href="#" className="w-[48px] h-[48px] rounded-full bg-[#00A9DE] flex items-center justify-center hover:opacity-90 transition-opacity">
                <Image src="/images/shop/telegram.svg" alt="Telegram" width={22} height={22} unoptimized />
              </a>
              <a href="#" className="w-[48px] h-[48px] rounded-full bg-[#00D43F] flex items-center justify-center hover:opacity-90 transition-opacity">
                <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={22} height={22} unoptimized />
              </a>
              <button className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] px-6 transition-colors">
                Ask a Question
              </button>
            </div>
          </div>
        </div>

        {/* You might also like */}
        <div className="max-w-[1340px] mx-auto pb-12">
          <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group cursor-pointer"
              >
                <div className="h-[200px] rounded-[12px] overflow-hidden relative mb-4">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
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
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
