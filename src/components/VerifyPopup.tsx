"use client";
import { useState } from "react";
import Image from "next/image";

interface VerifyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VerifyPopup({ isOpen, onClose }: VerifyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Modal */}
      <div className="relative bg-white rounded-[16px] p-8 max-w-[800px] w-full mx-4 z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#7E7E7E] hover:text-[#181818]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h2 className="text-[24px] font-extrabold text-center mb-2">Verify Authenticity</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-8">
          We work directly with manufacturers, not resellers
        </p>

        <div className="flex gap-4">
          {/* 3 brand cards */}
          {[
            {
              name: "DEUS MEDICAL",
              sub: "India \u00B7 Pharmaceutical Grade",
              desc: "Largest line of injectable and oral preparations. Official representative in Europe",
              color: "bg-[#F7F7F7]",
            },
            {
              name: "BIAXOL",
              sub: "Czech Republic \u00B7 Lab Testing",
              desc: "SARMS and fat burner specialist. All products with laboratory quality tests",
              color: "bg-[#EBF5FF]",
            },
            {
              name: "ASTERA LABS",
              sub: "India \u00B7 Premium Injectables & Orals",
              desc: "Premium peptide and health line. Innovative formulas for athletes",
              color: "bg-[#FFF5EB]",
            },
          ].map((brand) => (
            <div key={brand.name} className="flex-1 border border-[#E7E7E7] rounded-[12px] overflow-hidden">
              <div className={`${brand.color} h-[120px] flex items-center justify-center`}>
                <span className="text-[18px] font-extrabold">{brand.name}</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[16px] font-extrabold">{brand.name}</h3>
                <p className="text-[12px] text-[#7E7E7E] mt-1">{brand.sub}</p>
                <p className="text-[13px] text-[#7E7E7E] mt-2">{brand.desc}</p>
                <button className="w-full bg-[#181818] text-white text-[14px] font-semibold rounded-[8px] h-[40px] mt-3">
                  Verify Partner
                </button>
                <button className="w-full bg-[#181818] text-white text-[14px] font-semibold rounded-[8px] h-[40px] mt-2">
                  Verify Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
