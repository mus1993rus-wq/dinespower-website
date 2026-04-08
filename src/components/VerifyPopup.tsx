"use client";

import Image from "next/image";

interface VerifyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const brands = [
  {
    name: "DEUS MEDICAL",
    origin: "India \u00B7 Pharmaceutical Grade",
    desc: "Largest line of injectable and oral preparations. Official representative in Europe",
    bgImage: "/images/shop/verify-popup/DM.png",
    logo: "/images/shop/verify-popup/logo-dm.png",
  },
  {
    name: "BIAXOL",
    origin: "Czech Republic \u00B7 Lab Testing",
    desc: "SARMS and fat burner specialist. All products with laboratory quality tests",
    bgImage: "/images/shop/verify-popup/Biaxol.png",
    logo: "/images/shop/verify-popup/logo-biaxol.png",
  },
  {
    name: "ASTERA LABS",
    origin: "India \u00B7 Premium Injectables & Orals",
    desc: "Premium peptide and health line. Innovative formulas for athletes",
    bgImage: "/images/shop/verify-popup/Astera.png",
    logo: "/images/shop/verify-popup/logo-astera.png",
  },
];

export default function VerifyPopup({ isOpen, onClose }: VerifyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Modal */}
      <div className="relative bg-white rounded-[24px] p-8 max-w-[900px] w-full mx-4 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#7E7E7E] hover:text-[#181818] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-[36px] font-extrabold text-center text-[#181818] mb-2">Verify Authenticity</h2>
        <p className="text-[16px] text-[#7E7E7E] text-center mb-8">
          We work directly with manufacturers, not resellers
        </p>

        {/* Brand cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="border border-[#E7E7E7] rounded-[16px] overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={brand.bgImage}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
                {/* Logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={48}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Content area */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[20px] font-extrabold text-[#181818] text-center">{brand.name}</h3>
                <p className="text-[12px] text-[#7E7E7E] text-center mt-1">{brand.origin}</p>
                <p className="text-[13px] text-[#7E7E7E] text-center mt-2 flex-1">{brand.desc}</p>
                <div className="flex flex-col gap-2 mt-4">
                  <button className="w-full h-[44px] bg-[#181818] hover:bg-[#2a2a2a] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
                    Verify Partner
                  </button>
                  <button className="w-full h-[44px] bg-[#181818] hover:bg-[#2a2a2a] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
                    Verify Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
