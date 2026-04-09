"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "5+", label: "Years of experience in the European sports nutrition and pharmacology market" },
  { value: "50k+", label: "Orders successfully delivered across Europe and beyond" },
  { value: "EU/USA+", label: "We ship to most European countries and selected international destinations" },
  { value: "100+", label: "Products in our catalog from verified pharmaceutical manufacturers" },
  { value: "3+", label: "Brands we officially represent as an authorized distributor" },
];

const checkItems = [
  "Sourced Only From Official Manufacturers",
  "Each Product Includes A Unique Verification Code",
  "Batch Checks And Lab Validation",
  "No Third-Party Resellers Or Intermediaries",
];

const brands = [
  {
    name: "DEUS MEDICAL",
    origin: "India",
    badge: "Pharmaceutical Grade",
    description: "Largest line of injectable and oral preparations. Official representative in Europe.",
    gradient: "from-[#FF6701] to-[#FF8C3A]",
    image: "/images/shop/product-1.webp",
  },
  {
    name: "BIAXOL",
    origin: "Czech Republic",
    badge: "Lab Testing",
    description: "SARMS and fat burner specialist. All products with laboratory quality tests.",
    gradient: "from-[#00A9DE] to-[#5BC4F0]",
    image: "/images/shop/product-2.webp",
  },
  {
    name: "ASTERA LABS",
    origin: "India",
    badge: "Premium Injectables & Orals",
    description: "Premium peptide and health line. Innovative formulas for athletes.",
    gradient: "from-[#FF8A6C] to-[#FFB199]",
    image: "/images/shop/product-3.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">About Us</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="w-full bg-[#181818] relative overflow-hidden">
          <Image
            src="/images/shop/banner-texture.png"
            alt=""
            fill
            className="object-cover opacity-20"
            unoptimized
          />
          <div className="max-w-[1340px] mx-auto py-16 relative z-10 text-center">
            <p className="text-[14px] text-[#FF6701] font-semibold uppercase tracking-wider mb-3">
              Who we are
            </p>
            <h1 className="text-[36px] font-extrabold italic text-white uppercase leading-[44px] max-w-[700px] mx-auto">
              Official Distributor Of Trusted Brands In Europe
            </h1>
            <p className="text-[14px] text-[#B6B6B6] mt-4 max-w-[560px] mx-auto leading-6">
              We are an authorized representative of leading pharmaceutical and supplement brands, delivering verified products directly to athletes across Europe.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="max-w-[1340px] mx-auto mt-10">
          <div className="flex gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex-1 border border-[#E7E7E7] rounded-[12px] p-6 text-center"
              >
                <p className="text-[24px] font-extrabold text-[#181818] leading-[30px]">
                  {stat.value}
                </p>
                <p className="text-[13px] text-[#7E7E7E] mt-2 leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Section */}
        <div className="max-w-[1340px] mx-auto mt-16">
          <div className="flex gap-10 items-center">
            {/* Left - Expert photo placeholder */}
            <div className="w-[520px] h-[460px] shrink-0 rounded-[16px] relative overflow-hidden">
              <Image src="/images/shop/expert-photo.png" alt="Expert Support" fill className="object-cover" unoptimized />
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <p className="text-[14px] text-[#FF6701] font-semibold uppercase tracking-wider mb-2">
                Europe&apos;s trusted distributor of pharmaceutical-grade products
              </p>
              <h2 className="text-[28px] font-extrabold text-[#181818] leading-[36px] mb-4">
                Expert Support & Verified Quality
              </h2>
              <p className="text-[14px] text-[#7E7E7E] leading-6 mb-6">
                Our team works directly with manufacturers to ensure every product meets strict quality standards. We provide full transparency through lab testing, batch verification, and official authentication codes. When you buy from DinesPower, you buy with confidence.
              </p>

              <div className="flex flex-col gap-3">
                {checkItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00B638] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[#181818]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Official Brands Section */}
        <div className="max-w-[1340px] mx-auto mt-16 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-extrabold text-[#181818] leading-[36px]">
              Official Brands We Distribute
            </h2>
            <p className="text-[14px] text-[#7E7E7E] mt-2">
              We Work Directly With Manufacturers, Not Resellers
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="border border-[#E7E7E7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Top gradient area with brand product image */}
                <div className={`h-[200px] bg-gradient-to-br ${brand.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={160}
                    height={160}
                    className="object-contain relative z-10 drop-shadow-lg"
                    unoptimized
                  />
                  <span className="absolute bottom-3 left-4 text-[14px] font-bold text-white/70 tracking-wide">
                    {brand.name}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[18px] font-extrabold text-[#181818] mb-1">{brand.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[13px] text-[#7E7E7E]">{brand.origin}</span>
                    <span className="text-[#E7E7E7]">·</span>
                    <span className="text-[13px] text-[#7E7E7E]">{brand.badge}</span>
                  </div>
                  <p className="text-[14px] text-[#7E7E7E] leading-6 mb-5">
                    {brand.description}
                  </p>
                  <button className="w-full h-[44px] bg-[#181818] hover:bg-[#333333] text-white text-[14px] font-semibold rounded-lg transition-colors">
                    Verify Partner
                  </button>
                </div>
              </div>
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
