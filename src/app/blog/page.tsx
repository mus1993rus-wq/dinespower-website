"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogCategories = ["Bodybuilding", "SARMs", "Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

const blogArticles = [
  {
    id: 1,
    title: "Best SARMs for Body Recomposition: Muscle Gain and Fat Loss",
    description: "A comprehensive guide to selecting and using SARMs for simultaneous muscle building and fat reduction. Learn about the most effective compounds and protocols.",
    date: "12 Nov 2025",
    readTime: "7 min read",
    views: "3.2k views",
    tags: ["Bodybuilding", "SARMs", "Cutting"],
    featured: true,
  },
  {
    id: 2,
    title: "Peptides vs SARMs for Cutting: Which Is More Effective for Preserving Muscle Mass",
    description: "An in-depth comparison of peptides and SARMs during cutting phases, examining their mechanisms, efficacy, and side effect profiles.",
    date: "10 Nov 2025",
    readTime: "5 min read",
    views: "2.8k views",
  },
  {
    id: 3,
    title: "RAD-140 (Testolone): Laboratory Analysis of Its Impact on Anabolism, Androgen Receptors and Safety Markers",
    description: "Detailed lab analysis and scientific review of RAD-140's anabolic properties, receptor binding affinity, and comprehensive safety data.",
    date: "8 Nov 2025",
    readTime: "9 min read",
    views: "4.1k views",
  },
  {
    id: 4,
    title: "Complete Guide to Post Cycle Therapy: When and How to Start PCT",
    description: "Everything you need to know about PCT protocols, timing, and compound selection for optimal hormonal recovery.",
    date: "5 Nov 2025",
    readTime: "11 min read",
    views: "5.6k views",
  },
  {
    id: 5,
    title: "Optimizing Your Cutting Stack: A Science-Based Approach",
    description: "Evidence-based strategies for building an effective cutting stack that maximizes fat loss while preserving lean muscle tissue.",
    date: "2 Nov 2025",
    readTime: "8 min read",
    views: "2.4k views",
  },
  {
    id: 6,
    title: "Understanding Injectable vs Oral Anabolics: Bioavailability and Safety",
    description: "A comparison of injectable and oral anabolic compounds covering bioavailability, liver toxicity, and overall safety considerations.",
    date: "29 Oct 2025",
    readTime: "12 min read",
    views: "6.1k views",
  },
];

const popularPosts = [
  { title: "How to Safely Run Your First Cycle: Beginner Guide", date: "22 Oct 2025", views: "8.2k" },
  { title: "MK-677 (Ibutamoren): Benefits, Dosage, and Studies", date: "25 Oct 2025", views: "3.9k" },
  { title: "Nolvadex vs Clomid for PCT: Head-to-Head", date: "18 Oct 2025", views: "4.5k" },
  { title: "Best Fat Burners for Competition Prep", date: "15 Oct 2025", views: "3.1k" },
  { title: "BPC-157 Peptide: Recovery and Healing Guide", date: "12 Oct 2025", views: "2.7k" },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");

  const featured = blogArticles.find((p) => p.featured);

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Blog</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">Blog Dines Power</h1>

          <div className="flex gap-8">
            {/* LEFT main column */}
            <div className="flex-1 min-w-0">
              {/* Featured article */}
              {featured && (
                <Link href="/blog" className="relative h-[420px] rounded-[16px] overflow-hidden mb-8 cursor-pointer group block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <div className="absolute top-6 left-6 z-20 bg-white rounded-lg px-3 py-2 text-center">
                    <span className="text-2xl font-bold text-[#181818] leading-6 block">12</span>
                    <span className="text-xs text-[#7E7E7E]">Nov</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex gap-2 mb-3">
                      {featured.tags?.map((tag) => (
                        <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-[24px] font-extrabold text-white leading-[32px] max-w-[600px]">{featured.title}</h2>
                    <div className="flex gap-4 mt-3 text-sm text-white/60">
                      <span>{featured.readTime}</span>
                      <span>{featured.views}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Article list */}
              <div className="flex flex-col">
                {blogArticles.filter((a) => !a.featured).map((post) => (
                  <Link key={post.id} href="/blog" className="flex gap-5 py-6 border-b border-[#E7E7E7] cursor-pointer group">
                    {/* Date badge */}
                    <div className="text-xs text-[#7E7E7E] w-[80px] shrink-0 pt-1">{post.date}</div>
                    {/* Thumbnail */}
                    <div className="w-[100px] h-[80px] bg-[#F7F7F7] rounded-lg shrink-0 overflow-hidden" />
                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-2">
                      <h3 className="text-[16px] font-extrabold text-[#181818] leading-[22px] line-clamp-2 group-hover:text-[#FF6701] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#7E7E7E] leading-[20px] line-clamp-2">{post.description}</p>
                      <div className="flex items-center gap-4 text-xs text-[#7E7E7E] mt-auto">
                        <span>{post.readTime}</span>
                        <span>{post.views}</span>
                        {/* Share icons */}
                        <div className="flex gap-2 ml-auto">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-40 hover:opacity-70 cursor-pointer">
                            <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.08261 9.17906C7.54305 8.45793 6.6694 8 5.68182 8C4.20541 8 3 9.20541 3 10.6818C3 12.1582 4.20541 13.3636 5.68182 13.3636C6.6694 13.3636 7.54305 12.9057 8.08261 12.1846L15.0227 15.993C15.0077 16.1144 15 16.2381 15 16.3636C15 18.0205 16.3431 19.3636 18 19.3636C19.6569 19.3636 21 18.0205 21 16.3636C21 14.7068 19.6569 13.3636 18 13.3636C17.0124 13.3636 16.1388 13.8216 15.5992 14.5427L8.65909 10.7342C8.67413 10.6128 8.68182 10.4891 8.68182 10.3636C8.68182 10.2381 8.67413 10.1144 8.65909 9.99301L15.5992 6.18456C16.1388 6.90569 17.0124 7.36364 18 7.36364" stroke="#181818" strokeWidth="1.5"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter */}
              <div className="bg-[#F7F7F7] rounded-[16px] p-6 mt-8 flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-[16px] font-extrabold text-[#181818] mb-1">New articles by email</h3>
                  <p className="text-sm text-[#7E7E7E]">Get the latest articles and news delivered to your inbox</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[44px] w-[240px] bg-white border border-[#E7E7E7] rounded-lg px-4 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors"
                  />
                  <button className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] px-6 transition-colors shrink-0">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-10">
                <button className="w-10 h-10 rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${currentPage === page ? "bg-[#FF6701] text-white" : "border border-[#E7E7E7] text-[#181818] hover:border-[#FF6701]"}`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-10 h-10 rounded-lg border border-[#E7E7E7] flex items-center justify-center hover:border-[#FF6701] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>

            {/* RIGHT sidebar */}
            <div className="w-[340px] shrink-0">
              <div className="sticky top-4 flex flex-col gap-8">
                {/* Blog Categories */}
                <div>
                  <h3 className="text-[16px] font-extrabold text-[#181818] mb-4">Blog Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogCategories.map((cat) => (
                      <button
                        key={cat}
                        className="px-4 py-2 rounded-lg bg-[#F7F7F7] text-sm font-medium text-[#181818] hover:bg-[#EDEDED] transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Posts */}
                <div>
                  <h3 className="text-[16px] font-extrabold text-[#181818] mb-4">Popular Post</h3>
                  <div className="flex flex-col">
                    {popularPosts.map((post, i) => (
                      <Link key={i} href="/blog" className="flex gap-4 py-3 border-b border-[#E7E7E7] last:border-b-0 cursor-pointer group">
                        <div className="w-[80px] h-[60px] bg-[#F7F7F7] rounded-lg shrink-0" />
                        <div className="flex-1 flex flex-col gap-1">
                          <p className="text-sm font-semibold text-[#181818] leading-[18px] line-clamp-2 group-hover:text-[#FF6701] transition-colors">
                            {post.title}
                          </p>
                          <div className="flex gap-3 text-xs text-[#7E7E7E] mt-auto">
                            <span>{post.date}</span>
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      </Link>
                    ))}
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
