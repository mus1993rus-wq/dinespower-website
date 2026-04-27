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
    bgColor: "#F5ECE6",
    image: "/images/shop/verify-popup/Astera.png",
    verifyPartner: "https://asteralabs.org/verify-seller/",
    verifyProduct: "https://asteracheck.com",
  },
  {
    name: "DEUS MEDICAL",
    origin: "India · Pharmaceutical Grade",
    desc: "Largest line of injectable and oral preparations. Official representative in Europe",
    bgColor: "#E8EDF2",
    image: "/images/shop/verify-popup/DM.png",
    verifyPartner: "https://deusmedical.com/verify/verifyseller/",
    verifyProduct: "https://deusmedical.com/verify/verify-product/",
  },
  {
    name: "BIAXOL",
    origin: "Czech Republic · Lab Testing",
    desc: "SARMS and fat burner specialist. All products with laboratory quality tests",
    bgColor: "#E5EEF5",
    image: "/images/shop/verify-popup/Biaxol.png",
    verifyPartner: "https://biaxol.com/verify-seller/",
    verifyProduct: "https://biaxol.com/check/",
  },
];

export default function VerifyPopup({ isOpen, onClose }: VerifyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center tablet:p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white tablet:rounded-[24px] px-4 tablet:px-10 pt-10 pb-8 max-w-none tablet:max-w-[920px] w-full max-h-screen tablet:max-h-[92vh] overflow-y-auto z-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 text-[#7E7E7E] hover:text-[#181818] transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className="text-[24px] tablet:text-[28px] font-extrabold text-center text-[#181818] leading-[30px] tablet:leading-[34px] mb-2">Verify Authenticity</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-8">
          We work directly with manufacturers, not resellers
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col">
              {/* Top: tinted area with brand logo */}
              <div
                className="relative h-[200px] rounded-[16px] flex items-center justify-center overflow-hidden"
                style={{ background: brand.bgColor }}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 280px"
                  className="object-contain object-center p-6"
                />
              </div>

              {/* Bottom: white text card + 2 buttons */}
              <div className="bg-white px-4 tablet:px-6 pt-6 pb-0 flex flex-col gap-4 items-center text-center">
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-[20px] font-extrabold text-black leading-6 uppercase">{brand.name}</h3>
                  <p className="text-[12px] text-[#989898] leading-4">{brand.origin}</p>
                  <p className="text-[14px] text-[#292929] leading-5">{brand.desc}</p>
                </div>
                {/* Mobile: side-by-side; tablet+: stacked full-width */}
                <div className="flex tablet:flex-col gap-2 w-full">
                  <a
                    href={brand.verifyPartner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-black hover:bg-[#181818] text-white text-[14px] font-semibold rounded-[8px] h-11 transition-colors"
                  >
                    Verify Partner
                  </a>
                  <a
                    href={brand.verifyProduct}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-black hover:bg-[#181818] text-white text-[14px] font-semibold rounded-[8px] h-11 transition-colors"
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
