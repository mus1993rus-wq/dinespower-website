"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "5+ years", label: "Proven experience delivering quality products to customers" },
  { value: "50k+", label: "Thousands of customers trust us for quality and fast delivery" },
  { value: "EU/USA+", label: "We deliver to Europe, USA, worldwide and islands" },
  { value: "100+ products", label: "Wide range of injectables, orals, SARMs and peptides" },
  { value: "3+ brands", label: "Direct partnerships with trusted pharmaceutical manufacturers" },
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
    image: "/images/shop/winimed-50.png",
  },
  {
    name: "BIAXOL",
    origin: "Czech Republic",
    badge: "Lab Testing",
    description: "SARMS and fat burner specialist. All products with laboratory quality tests.",
    gradient: "from-[#00A9DE] to-[#5BC4F0]",
    image: "/images/shop/eca-xtreme.png",
  },
  {
    name: "ASTERA LABS",
    origin: "India",
    badge: "Premium Injectables & Orals",
    description: "Premium peptide and health line. Innovative formulas for athletes.",
    gradient: "from-[#FF8A6C] to-[#FFB199]",
    image: "/images/shop/andarine-s4.png",
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

        {/* Hero Banner — rounded card, Figma style */}
        <div className="max-w-[1340px] mx-auto">
          <div className="relative bg-[#181818] rounded-[16px] overflow-hidden">
            <Image
              src="/images/shop/wholesale-banner-bg.png"
              alt=""
              fill
              className="object-cover opacity-60 mix-blend-lighten pointer-events-none"
            />
            <div className="relative z-10 py-20 px-8 text-center flex flex-col items-center gap-4">
              <p className="text-[14px] text-white/80 leading-5">Who we are</p>
              <h1 className="font-extrabold italic uppercase leading-[52px] text-[42px]">
                <span className="text-white">Official Distributor</span>
                <br />
                <span className="text-[#FF6701]">Of Trusted Brands In Europe</span>
              </h1>
              <p className="text-[14px] text-white/70 max-w-[620px] leading-6">
                Dinespower is an official worldwide distributor of Astera Labs and Deus Medical — pharmaceutical manufacturers based in India.
              </p>
            </div>
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
          <div className="flex gap-20 items-stretch">
            {/* Left - Manager photo — equal column, 80px gap */}
            <div className="flex-1 rounded-[16px] relative overflow-hidden bg-[#F7F7F7] self-stretch min-h-[460px]">
              <Image src="/images/shop/expert-manager.png" alt="Expert Support" fill className="object-cover object-top" />
            </div>

            {/* Right - Content */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[14px] text-[#FF6701] font-semibold mb-2">
                Europe&apos;s trusted distributor of premium sports supplements
              </p>
              <h2 className="text-[28px] font-extrabold text-[#181818] leading-[36px] mb-4">
                Expert Support & Verified Quality
              </h2>
              <p className="text-[14px] text-[#7E7E7E] leading-6 mb-6">
                We help you choose the right product, delivery, and payment method before you order. Every item is sourced directly from official manufacturers and verified before it reaches you.
              </p>

              <div className="flex flex-col gap-3">
                {checkItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <path d="M20 6L9 17L4 12" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
