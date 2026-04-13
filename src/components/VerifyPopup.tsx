"use client";

import Image from "next/image";

interface VerifyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const brands = [
  {
    name: "ASTERA LABS",
    origin: "India · Premium Injectables & Orals",
    desc: "Premium peptide and health line. Innovative formulas for athletes",
    bgImage: "/images/shop/verify-popup/Astera.png",
    verifyPartner: "https://asteralabs.org/verify-seller/",
    verifyProduct: "https://asteracheck.com",
  },
  {
    name: "DEUS MEDICAL",
    origin: "India · Pharmaceutical Grade",
    desc: "Largest line of injectable and oral preparations. Official representative in Europe",
    bgImage: "/images/shop/verify-popup/DM.png",
    verifyPartner: "https://deusmedical.com/verify/verifyseller/",
    verifyProduct: "https://deusmedical.com/verify/verify-product/",
  },
  {
    name: "BIAXOL",
    origin: "Czech Republic · Lab Testing",
    desc: "SARMS and fat burner specialist. All products with laboratory quality tests",
    bgImage: "/images/shop/verify-popup/Biaxol.png",
    verifyPartner: "https://biaxol.com/verify-seller/",
    verifyProduct: "https://biaxol.com/check/",
  },
];

export default function VerifyPopup({ isOpen, onClose }: VerifyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-[24px] px-10 pt-10 pb-8 max-w-[860px] w-full z-10 max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 text-[#7E7E7E] hover:text-[#181818] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="text-[28px] font-extrabold text-center text-[#181818] leading-[34px] mb-2">Verify Authenticity</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-8">
          We work directly with manufacturers, not resellers
        </p>

        <div className="grid grid-cols-3 gap-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-[16px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Banner image */}
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={brand.bgImage}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content card — white with rounded top overlapping banner */}
              <div className="bg-white rounded-t-[16px] -mt-4 relative z-10 px-5 pt-5 pb-5 flex flex-col flex-1">
                <h3 className="text-[18px] font-extrabold text-[#181818] text-center tracking-wide">{brand.name}</h3>
                <p className="text-[11px] text-[#7E7E7E] text-center mt-1 tracking-wide">{brand.origin}</p>
                <p className="text-[12px] text-[#7E7E7E] text-center mt-3 leading-[18px] flex-1">{brand.desc}</p>
                <div className="flex flex-col gap-2 mt-5">
                  <a
                    href={brand.verifyPartner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-[44px] bg-[#181818] hover:bg-black text-white text-[14px] font-semibold rounded-[10px] transition-colors flex items-center justify-center"
                  >
                    Verify Partner
                  </a>
                  <a
                    href={brand.verifyProduct}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-[44px] bg-[#181818] hover:bg-black text-white text-[14px] font-semibold rounded-[10px] transition-colors flex items-center justify-center"
                  >
                    Verify Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
