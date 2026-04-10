"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogCategories = ["Bodybuilding", "SARMs", "Cutting", "PCT", "Peptides", "Fat Burn", "Injectable"];

const blogArticles = [
  {
    id: 1,
    title: "How to Prepare Your Body Before a Sports Pharmacology Cycle",
    description: "Proper preparation minimizes risks when using anabolic compounds, helps avoid side effects, and ensures steady progress on cycle.",
    date: "9 Apr 2025",
    readTime: "7 min read",
    views: "3.2k views",
    tags: ["Bodybuilding", "PCT"],
    featured: true,
  },
  {
    id: 2,
    title: "IGF-1 and Muscle Growth: How Growth Hormone Triggers Anabolism",
    description: "IGF-1 is a polypeptide hormone with pronounced anabolic effects that increases protein synthesis and drives real lean mass gains.",
    date: "6 Apr 2025",
    readTime: "6 min read",
    views: "2.8k views",
    tags: ["Peptides", "Bodybuilding"],
  },
  {
    id: 3,
    title: "Testosterone Recovery After Sports Pharmacology: How to Restore Hormonal Balance",
    description: "A step-by-step protocol to restore natural testosterone production after a cycle and keep the gains you earned.",
    date: "3 Apr 2025",
    readTime: "8 min read",
    views: "4.1k views",
    tags: ["PCT", "Bodybuilding"],
  },
  {
    id: 4,
    title: "Pharmacology in Professional Bodybuilding: A Scientific Breakdown of Commonly Used Compounds",
    description: "A scientific overview of the compounds used by pros to push past standard training and nutrition into extreme performance.",
    date: "30 Mar 2025",
    readTime: "11 min read",
    views: "5.6k views",
    tags: ["Bodybuilding", "Injectable"],
  },
  {
    id: 5,
    title: "Getting Ready for Summer: How to Build a Cutting Phase Properly and Preserve Muscle Mass",
    description: "A balanced nutrient split and the right supplement choices keep muscle intact while body fat drops before summer.",
    date: "27 Mar 2025",
    readTime: "8 min read",
    views: "2.4k views",
    tags: ["Cutting", "Fat Burn"],
  },
  {
    id: 6,
    title: "Best SARMs for Body Recomposition: Muscle Gain and Fat Loss",
    description: "Recomposition lets athletes shed fat and add lean mass at the same time — these SARMs are the most effective tools for the job.",
    date: "23 Mar 2025",
    readTime: "7 min read",
    views: "6.1k views",
    tags: ["SARMs", "Cutting", "Bodybuilding"],
  },
  {
    id: 7,
    title: "Peptides vs SARMs for Cutting: Which Is More Effective for Preserving Muscle Mass",
    description: "A head-to-head look at peptides and SARMs when the goal is maximum fat loss without sacrificing hard-earned muscle.",
    date: "20 Mar 2025",
    readTime: "6 min read",
    views: "3.5k views",
    tags: ["Peptides", "SARMs", "Cutting"],
  },
  {
    id: 8,
    title: "ECA and Clenbuterol: Laboratory Analysis of Thermogenesis, Effectiveness and Risks",
    description: "Lab analysis of ECA and Clenbuterol — how they drive thermogenesis, what they actually deliver, and the real-world risks.",
    date: "16 Mar 2025",
    readTime: "9 min read",
    views: "2.9k views",
    tags: ["Fat Burn", "Cutting"],
  },
  {
    id: 9,
    title: "GW501516 vs SR9009: Comparison of Metabolic Activators by Effectiveness and Safety",
    description: "Metabolic activators compared head-to-head: endurance, fat oxidation, and the safety profile that actually matters.",
    date: "12 Mar 2025",
    readTime: "7 min read",
    views: "3.1k views",
    tags: ["SARMs", "Fat Burn"],
  },
  {
    id: 10,
    title: "How to Choose the Right Compound for Your Goal: Bulking, Cutting, or Recovery",
    description: "A practical framework for matching compounds to your actual goal instead of chasing trends and broscience.",
    date: "9 Mar 2025",
    readTime: "8 min read",
    views: "4.0k views",
    tags: ["Bodybuilding", "SARMs"],
  },
  {
    id: 11,
    title: "TOP-5 Most Studied Compounds in Bodybuilding: What Science Actually Confirms",
    description: "Five of the most thoroughly researched compounds in bodybuilding and what the peer-reviewed data really says.",
    date: "6 Mar 2025",
    readTime: "10 min read",
    views: "5.2k views",
    tags: ["Bodybuilding", "SARMs"],
  },
  {
    id: 12,
    title: "What Does a \"Safe Product\" Mean in Sports Pharmacology: Selection Criteria",
    description: "How to vet a sports supplement for real safety — the criteria that separate quality brands from everything else.",
    date: "2 Mar 2025",
    readTime: "6 min read",
    views: "2.3k views",
    tags: ["Bodybuilding"],
  },
  {
    id: 13,
    title: "SARMs for Bulking: Which Molecules Actually Work According to Research",
    description: "Which selective androgen receptor modulators have clinical backing for real bulking, and which are overhyped.",
    date: "25 Feb 2025",
    readTime: "8 min read",
    views: "4.4k views",
    tags: ["SARMs", "Bodybuilding"],
  },
  {
    id: 14,
    title: "Clomiphene vs Enclomiphene: Laboratory Analysis of SERMs for PCT",
    description: "Lab-level comparison of Clomiphene and Enclomiphene as PCT tools to restore natural hormone production after a cycle.",
    date: "23 Feb 2025",
    readTime: "7 min read",
    views: "3.6k views",
    tags: ["PCT"],
  },
  {
    id: 15,
    title: "CJC-1295 vs Ipamorelin: Detailed Comparison of Growth Hormone Secretagogues",
    description: "CJC-1295 and Ipamorelin side-by-side — mechanisms, stacking protocols, and which delivers better results.",
    date: "19 Feb 2025",
    readTime: "9 min read",
    views: "4.7k views",
    tags: ["Peptides"],
  },
  {
    id: 16,
    title: "RAD-140 vs LGD-4033: Laboratory Comparison of Anabolic Activity and Safety Profile",
    description: "Two of the strongest SARMs compared head-to-head: anabolic strength, side effects, and safety markers from the lab.",
    date: "10 Feb 2025",
    readTime: "8 min read",
    views: "5.8k views",
    tags: ["SARMs", "Bodybuilding"],
  },
  {
    id: 17,
    title: "Laboratory Analysis of SERMs: Why Clomiphene, Enclomiphene, and Tamoxifen Remain the Gold Standard of PCT",
    description: "Why SERMs are still the gold standard for restoring hormonal balance after an anabolic cycle — the research explained.",
    date: "2 Feb 2025",
    readTime: "10 min read",
    views: "3.9k views",
    tags: ["PCT"],
  },
  {
    id: 18,
    title: "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism, Androgen Receptors and Safety Markers",
    description: "A full lab breakdown of Testolone — receptor binding, anabolic effect, and what the safety markers actually show.",
    date: "26 Jan 2025",
    readTime: "9 min read",
    views: "6.1k views",
    tags: ["SARMs", "Bodybuilding"],
  },
  {
    id: 19,
    title: "How Growth Hormone Secretagogues Work: CJC-1295, Ipamorelin, GHRP-2 and GHRP-6",
    description: "Growth hormone secretagogues explained — the peptides that stimulate natural GH release instead of replacing it.",
    date: "19 Jan 2025",
    readTime: "8 min read",
    views: "4.3k views",
    tags: ["Peptides"],
  },
  {
    id: 20,
    title: "Peptides for Regeneration: Laboratory Comparison of BPC-157 and TB-500",
    description: "BPC-157 vs TB-500 — a lab-level look at how these regeneration peptides compare for healing and recovery.",
    date: "12 Jan 2025",
    readTime: "7 min read",
    views: "3.8k views",
    tags: ["Peptides"],
  },
];

const popularPosts = [
  { id: 18, title: "RAD-140 (Testolone): Laboratory Analysis of Its Impact", date: "26 Jan 2025", views: "6.1k" },
  { id: 4, title: "Pharmacology in Professional Bodybuilding: Scientific Breakdown", date: "30 Mar 2025", views: "5.6k" },
  { id: 16, title: "RAD-140 vs LGD-4033: Anabolic Activity and Safety Profile", date: "10 Feb 2025", views: "5.8k" },
  { id: 11, title: "TOP-5 Most Studied Compounds in Bodybuilding", date: "6 Mar 2025", views: "5.2k" },
  { id: 15, title: "CJC-1295 vs Ipamorelin: Growth Hormone Secretagogues Compared", date: "19 Feb 2025", views: "4.7k" },
];

function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const filteredPosts = categoryParam
    ? blogArticles.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === categoryParam.toLowerCase())
      )
    : blogArticles;

  // First 4 most recent articles become featured slides
  const featuredSlides = !categoryParam ? blogArticles.slice(0, 4) : [];
  const featuredIds = new Set(featuredSlides.map((p) => p.id));
  const listPosts = featuredSlides.length > 0
    ? filteredPosts.filter((p) => !featuredIds.has(p.id))
    : filteredPosts;
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
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            {categoryParam ? (
              <>
                <Link href="/blog" className="hover:text-[#181818] transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-[#181818] font-semibold capitalize">{categoryParam}</span>
              </>
            ) : (
              <span className="text-[#181818] font-semibold">Blog</span>
            )}
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">
            {categoryParam ? `Category: ${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}` : "Blog Dines Power"}
          </h1>

          <div className="flex gap-[80px]">
            {/* LEFT main column */}
            <div className="flex-1 min-w-0">
              {/* Featured slider — 820x482 */}
              {currentSlide && (
                <div className="relative h-[482px] rounded-[16px] overflow-hidden mb-0 group">
                  {featuredSlides.map((slide, i) => (
                    <Image
                      key={slide.id}
                      src={`/images/shop/blog-${((slide.id - 1) % 5) + 1}.png`}
                      alt={slide.title}
                      fill
                      className={`object-cover transition-opacity duration-700 ${i === slideIndex ? "opacity-100" : "opacity-0"}`}
                     
                      priority={i === 0}
                    />
                  ))}
                  {/* Full-card click target (under chips) */}
                  <Link href={`/blog/${currentSlide.id}`} aria-label={currentSlide.title} className="absolute inset-0 z-0" />
                  {/* Date badge — 72x72 top-left */}
                  <div className="absolute top-2 left-2 z-20 bg-white rounded-[8px] w-[72px] h-[72px] flex flex-col items-center justify-center px-3 py-2 pointer-events-none">
                    <span className="text-[24px] font-extrabold text-black leading-none">{currentSlide.date.split(" ")[0]}</span>
                    <span className="text-[12px] font-semibold text-black leading-4 mt-0.5">{currentSlide.date.split(" ")[1]}</span>
                  </div>
                  {/* Bottom gradient overlay with content */}
                  <div className="absolute bottom-0 left-0 right-0 pt-[100px] pb-8 px-8 z-10 bg-gradient-to-b from-transparent to-[#232323] pointer-events-none">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2 pointer-events-auto">
                        {currentSlide.tags?.map((tag) => (
                          <Link
                            key={tag}
                            href={`/blog?category=${tag.toLowerCase()}`}
                            className="backdrop-blur-[50px] bg-white/10 border border-white/20 rounded-[8px] px-3 py-1.5 text-[14px] text-white leading-5 hover:bg-white/20 hover:border-white/40 transition-colors"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                      <Link href={`/blog/${currentSlide.id}`} className="pointer-events-auto relative z-10">
                        <h2 className="text-[28px] font-extrabold text-white leading-[34px]">{currentSlide.title}</h2>
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
              )}

              {/* Article list */}
              {currentSlide && <div className="h-px bg-[#E7E7E7] my-8" />}
              <div className="flex flex-col">
                {listPosts.map((post, index) => (
                  <div key={post.id}>
                    {index > 0 && <div className="h-px bg-[#E7E7E7] my-8" />}
                    <Link href={`/blog/${post.id}`} className="flex gap-6 items-start cursor-pointer group">
                      {/* Thumbnail 300x188 with date badge */}
                      <div className="relative w-[300px] h-[188px] rounded-[8px] shrink-0 overflow-hidden bg-[#F7F7F7]">
                        <Image src={`/images/shop/blog-${((post.id - 1) % 5) + 1}.png`} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-2 left-2 bg-white rounded-[8px] w-12 h-12 flex flex-col items-center justify-center px-3 py-2">
                          <span className="text-[20px] font-extrabold text-black leading-6">{post.date.split(" ")[0]}</span>
                          <span className="text-[12px] font-semibold text-black leading-4">{post.date.split(" ")[1]}</span>
                        </div>
                      </div>
                      {/* Content — justify-center, gap 16 */}
                      <div className="flex-1 flex flex-col justify-center gap-4 self-stretch min-w-0">
                        <div className="flex flex-col gap-3">
                          <h3 className="text-[20px] font-extrabold text-black leading-[24px] line-clamp-2 group-hover:text-[#FF6701] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-[14px] text-[#7E7E7E] leading-[20px] line-clamp-2">{post.description}</p>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="flex gap-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#7E7E7E" strokeWidth="1.5"/><path d="M12 7v5l3 2" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            <span className="text-[14px] text-[#7E7E7E] leading-5">{post.readTime}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="#7E7E7E" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#7E7E7E" strokeWidth="1.5"/></svg>
                            <span className="text-[14px] text-[#7E7E7E] leading-5">{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Telegram inline card after 5th article */}
                    {index === 4 && (
                      <>
                        <div className="h-px bg-[#E7E7E7] my-8" />
                        <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                          <div className="bg-white border border-[#E7E7E7] rounded-[8px] px-6 py-4 flex items-center justify-center gap-4">
                            <div className="flex-1 flex items-center gap-4 min-w-0">
                              <div className="w-12 h-12 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M3.32168 11.8714L18.7484 5.92338C19.4644 5.66472 20.0897 6.09805 19.8577 7.18072L19.859 7.17938L17.2323 19.5541C17.0377 20.4314 16.5164 20.6447 15.787 20.2314L11.787 17.2834L9.85768 19.1421C9.64435 19.3554 9.46435 19.5354 9.05102 19.5354L9.33502 15.4647L16.7483 8.76738C17.071 8.48338 16.6763 8.32338 16.251 8.60605L7.08968 14.374L3.14035 13.1421C2.28302 12.8701 2.26435 12.2847 3.32168 11.8714Z" fill="white"/>
                                </svg>
                              </div>
                              <div className="flex-1 flex flex-col gap-1 min-w-0">
                                <p className="text-[20px] font-extrabold text-black leading-[24px]">Official Telegram Channel</p>
                                <p className="text-[16px] text-[#292929] leading-6">Get instant updates on new articles and limited offers</p>
                              </div>
                            </div>
                            <a
                              href="https://t.me/dinespower"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer flex items-center justify-center h-11 px-5 bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black shrink-0 hover:bg-[#E7E7E7] hover:border-transparent transition-colors"
                            >
                              Join Channel
                            </a>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Newsletter dark banner after 10th article */}
                    {index === 9 && (
                      <>
                        <div className="h-px bg-[#E7E7E7] my-8" />
                        <div className="relative bg-[#181818] rounded-[16px] h-[140px] px-8 py-6 flex items-center gap-8 overflow-hidden">
                          <Image src="/icons/newsletter-bg.jpg" alt="" fill className="object-cover opacity-50 mix-blend-lighten pointer-events-none" />
                          <div className="flex-1 flex items-center gap-4 min-w-0 relative z-10">
                            <div className="w-12 h-12 shrink-0 relative">
                              <Image src="/icons/bell-notification.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1 min-w-0">
                              <p className="text-[20px] font-extrabold text-white leading-[24px]">New articles by email</p>
                              <p className="text-[16px] text-white leading-6">New posts, product picks, and deals</p>
                            </div>
                          </div>
                          <div className="flex-1 flex gap-2 items-start relative z-10">
                            <input
                              type="email"
                              placeholder="Email address.."
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="flex-1 h-12 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#7E7E7E] outline-none focus:border-[#FF6701] transition-colors"
                            />
                            <button className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-[14px] font-semibold rounded-[8px] h-12 px-4 transition-colors shrink-0">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {listPosts.length > 0 && <div className="h-px bg-[#E7E7E7] my-8" />}
              </div>

              {/* No results message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-[#7E7E7E] text-lg mb-4">No articles found in this category.</p>
                  <Link href="/blog" className="text-[#FF6701] font-semibold hover:underline">View all articles</Link>
                </div>
              )}

              {/* Pagination */}
              {!categoryParam && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button className="w-10 h-10 rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  {[1, 2, 3, 4].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${currentPage === page ? "bg-[#FF6701] text-white" : "border border-[#E7E7E7] text-[#181818] hover:border-[#FF6701]"}`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="w-10 h-10 flex items-center justify-center text-sm text-[#7E7E7E]">...</span>
                  <button
                    onClick={() => setCurrentPage(12)}
                    className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${currentPage === 12 ? "bg-[#FF6701] text-white" : "border border-[#E7E7E7] text-[#181818] hover:border-[#FF6701]"}`}
                  >
                    12
                  </button>
                  <button className="w-10 h-10 rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT sidebar */}
            <div className="w-[440px] shrink-0">
              <div className="flex flex-col gap-8">
                {/* Categories + Popular Post wrapped card */}
                <div className="bg-[#F7F7F7] rounded-[16px] p-4 flex flex-col gap-4">
                  {/* Blog Categories */}
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-4">
                    <p className="text-[20px] font-extrabold text-black leading-6">Blog Categories</p>
                    <div className="flex flex-wrap gap-2">
                      {blogCategories.map((cat) => {
                        const active = categoryParam?.toLowerCase() === cat.toLowerCase();
                        return (
                          <Link
                            key={cat}
                            href={`/blog?category=${cat.toLowerCase()}`}
                            className={`flex items-center gap-1 px-3 py-2 rounded-[8px] border text-[14px] font-semibold leading-5 transition-colors ${
                              active
                                ? "bg-[#FF6701] border-[#FF6701] text-white"
                                : "bg-white border-[#D8D8D8] text-[#181818] hover:bg-[#E7E7E7] hover:border-transparent"
                            }`}
                          >
                            {cat}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Popular Posts */}
                  <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-4">
                    <p className="text-[20px] font-extrabold text-black leading-6">Popular Post</p>
                    {popularPosts.map((post, i) => (
                      <div key={post.id} className="flex flex-col gap-4">
                        <div className="h-px bg-[#E7E7E7]" />
                        <Link href={`/blog/${post.id}`} className="flex gap-4 items-start cursor-pointer group">
                          <div className="w-[100px] h-[72px] bg-[#F7F7F7] rounded-[8px] shrink-0 relative overflow-hidden">
                            <Image src={`/images/shop/blog-${(i % 5) + 1}.png`} alt={post.title} fill className="object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col gap-2 min-w-0">
                            <p className="text-[14px] text-[#7E7E7E] leading-5">{post.date}</p>
                            <p className="text-[14px] font-semibold text-black leading-[18px] line-clamp-3 group-hover:text-[#FF6701] transition-colors">
                              {post.title}
                            </p>
                            <div className="flex gap-4 items-start">
                              <div className="flex gap-2 items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#7E7E7E" strokeWidth="1.5"/><path d="M12 7v5l3 2" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                <span className="text-[13px] text-[#7E7E7E] leading-5">5 min read</span>
                              </div>
                              <div className="flex gap-2 items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="#7E7E7E" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#7E7E7E" strokeWidth="1.5"/></svg>
                                <span className="text-[13px] text-[#7E7E7E] leading-5">{post.views} views</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sex Boost Banner */}
                <Link href="/catalog?category=sex-support" className="block rounded-[12px] overflow-hidden">
                  <Image src="/images/shop/side-sexboost.png" alt="Sex Boost" width={440} height={0} className="w-full h-auto rounded-[12px]" />
                </Link>

                {/* CBD Banner */}
                <Link href="/catalog?category=health" className="block rounded-[12px] overflow-hidden">
                  <Image src="/images/shop/side-cbd.png" alt="CBD" width={440} height={0} className="w-full h-auto rounded-[12px]" />
                </Link>

                {/* Product Card — horizontal Figma layout (1680:34022) */}
                <Link href="/catalog" className="relative block bg-[#181818] rounded-[16px] p-6 overflow-hidden group">
                  <Image src="/icons/newsletter-bg.jpg" alt="" fill className="object-cover opacity-50 mix-blend-lighten pointer-events-none" />
                  {/* Sale badge — absolute top-left */}
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
                      href="https://t.me/dinespower"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center justify-center w-full h-11 bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black hover:bg-[#E7E7E7] hover:border-transparent transition-colors"
                    >
                      Join Channel
                    </a>
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

export default function BlogPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main className="min-h-screen relative z-10 bg-white">
          <div className="max-w-[1340px] mx-auto py-16 text-center">
            <p className="text-[#7E7E7E]">Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    }>
      <BlogContent />
    </Suspense>
  );
}
