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
    name: "ASTERA LABS",
    origin: "India · Premium Injectables & Orals",
    description: "Premium peptide and health line. Innovative formulas for athletes",
    bgColor: "#F5ECE6",
    bgImage: "/images/shop/verify-popup/Astera.png",
    logo: "/images/shop/verify-popup/logo-astera.png",
    verifyPartner: "https://asteralabs.org/verify-seller/",
  },
  {
    name: "DEUS MEDICAL",
    origin: "India · Pharmaceutical Grade",
    description: "Largest line of injectable and oral preparations. Official representative in Europe",
    bgColor: "#E8EDF2",
    bgImage: "/images/shop/verify-popup/DM.png",
    logo: "/images/shop/verify-popup/logo-dm.png",
    verifyPartner: "https://deusmedical.com/verify/verifyseller/",
  },
  {
    name: "BIAXOL",
    origin: "Czech Republic · Lab Testing",
    description: "SARMS and fat burner specialist. All products with laboratory quality tests",
    bgColor: "#E5EEF5",
    bgImage: "/images/shop/verify-popup/Biaxol.png",
    logo: "/images/shop/verify-popup/logo-biaxol.png",
    verifyPartner: "https://biaxol.com/verify-seller/",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4  py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">About Us</span>
          </div>
        </div>

        {/* Hero Banner — rounded card, Figma style */}
        <div className="max-w-[1340px] mx-auto px-4 ">
          <div className="relative bg-[#181818] rounded-[16px] overflow-hidden">
            <Image
              src="/images/shop/wholesale-banner-bg.png"
              alt=""
              fill
              sizes="(max-width: 1340px) 100vw, 1340px"
              className="object-cover opacity-60 mix-blend-lighten pointer-events-none"
            />
            <div className="relative z-10 py-12 tablet:py-20 px-6 tablet:px-8 text-center flex flex-col items-center gap-3 tablet:gap-4">
              <p className="text-[12px] tablet:text-[14px] text-white/80 leading-5">Who we are</p>
              <h1 className="font-extrabold italic uppercase text-[24px] leading-[30px] tablet:text-[40px] tablet:leading-[48px]">
                <span className="text-white">Official Distributor</span>
                <br />
                <span className="text-[#FF6701]">Of Trusted Brands In Europe</span>
              </h1>
              <p className="text-[13px] tablet:text-[14px] text-white/70 max-w-[620px] leading-5 tablet:leading-6">
                Dinespower is an official worldwide distributor of Astera Labs and Deus Medical — pharmaceutical manufacturers based in India.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="max-w-[1340px] mx-auto px-4  mt-8 tablet:mt-10">
          <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:flex desktop:flex-nowrap gap-3 desktop:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`desktop:flex-1 border border-[#E7E7E7] rounded-[12px] p-4 tablet:p-6 text-center ${i === stats.length - 1 && stats.length % 2 === 1 ? "col-span-2 tablet:col-span-1" : ""}`}
              >
                <p className="text-[20px] tablet:text-[24px] font-extrabold text-[#181818] leading-[26px] tablet:leading-[30px]">
                  {stat.value}
                </p>
                <p className="text-[12px] tablet:text-[13px] text-[#7E7E7E] mt-2 leading-[18px] tablet:leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Section */}
        <div className="max-w-[1340px] mx-auto px-4  mt-10 tablet:mt-16">
          <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-8 desktop:gap-20 items-stretch">
            {/* Left - Manager photo — keep desktop side-by-side at tablet; taller minHeight so the model is not cropped at the head */}
            <div className="flex-1 rounded-[16px] relative overflow-hidden bg-[#F7F7F7] self-stretch min-h-[240px] tablet:min-h-[420px] desktop:min-h-[460px]">
              <Image src="/images/shop/expert-manager.png" alt="Expert Support" fill sizes="(max-width: 960px) 100vw, 660px" className="object-cover object-top" />
            </div>

            {/* Right - Content */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[13px] tablet:text-[14px] text-[#FF6701] font-semibold mb-2">
                Europe&apos;s trusted distributor of premium sports supplements
              </p>
              <h2 className="text-[22px] tablet:text-[28px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[36px] mb-3 tablet:mb-4">
                Expert Support & Verified Quality
              </h2>
              <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-5 tablet:leading-6 mb-4 tablet:mb-6">
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
        <div className="max-w-[1340px] mx-auto px-4  mt-10 tablet:mt-16 mb-10 tablet:mb-16">
          <div className="text-center mb-6 tablet:mb-10">
            <h2 className="text-[22px] tablet:text-[28px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[36px]">
              Official Brands We Distribute
            </h2>
            <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] mt-2">
              We Work Directly With Manufacturers, Not Resellers
            </p>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col">
                {/* Top: tinted area — scattered-product bg + centered brand logo per Figma */}
                <div
                  className="relative h-[200px] rounded-[16px] overflow-hidden"
                  style={{ background: brand.bgColor }}
                >
                  <Image
                    src={brand.bgImage}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="object-cover object-center pointer-events-none"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={240}
                      height={80}
                      className="object-contain max-w-[70%] max-h-[60%] drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Bottom: white text card */}
                <div className="bg-white px-6 pt-6 pb-0 flex flex-col gap-4 items-center text-center">
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-[20px] font-extrabold text-black leading-6 uppercase">{brand.name}</h3>
                    <p className="text-[12px] text-[#989898] leading-4">{brand.origin}</p>
                    <p className="text-[14px] text-[#292929] leading-5">{brand.description}</p>
                  </div>
                  <a
                    href={brand.verifyPartner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-black hover:bg-[#181818] text-white text-[14px] font-semibold rounded-[8px] h-11 px-16 transition-colors"
                  >
                    Verify Partner
                  </a>
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
