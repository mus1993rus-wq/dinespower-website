"use client";

import { useState } from "react";

interface ShippingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShippingPopup({ isOpen, onClose }: ShippingPopupProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-[16px] p-8 max-w-[500px] w-full mx-4 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7E7E7E] hover:text-[#181818] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-[24px] font-extrabold text-center text-[#181818] mb-1">Shipping Methods</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-6">
          All You Need To Know About Shipping Before You Order
        </p>

        {/* Shipping table */}
        <div className="border border-[#E7E7E7] rounded-[12px] overflow-hidden mb-5">
          {/* Europe */}
          <div className="flex items-center justify-between p-4 border-b border-[#E7E7E7]">
            <div className="flex items-center gap-3">
              <div className="w-[32px] h-[22px] rounded-[4px] bg-[#003399] relative overflow-hidden shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] text-[#FFD700]">EU</span>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-[#181818]">Europe</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[13px] text-[#7E7E7E]">5-14 Days</span>
              <span className="text-[14px] font-semibold text-[#181818]">From 29 &euro;</span>
            </div>
          </div>

          {/* USA */}
          <div className="flex items-center justify-between p-4 border-b border-[#E7E7E7]">
            <div className="flex items-center gap-3">
              <div className="w-[32px] h-[22px] rounded-[4px] overflow-hidden shrink-0 flex flex-col">
                <div className="h-1/3 bg-[#B22234]" />
                <div className="h-1/3 bg-white" />
                <div className="h-1/3 bg-[#3C3B6E]" />
              </div>
              <span className="text-[14px] font-semibold text-[#181818]">USA</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[13px] text-[#7E7E7E]">7-21 Days</span>
              <span className="text-[14px] font-semibold text-[#181818]">From 29 &euro;</span>
            </div>
          </div>

          {/* World & Islands */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-[32px] h-[22px] rounded-[4px] bg-[#4CAF50] overflow-hidden shrink-0 flex items-center justify-center">
                <span className="text-white text-[10px]">🌍</span>
              </div>
              <span className="text-[14px] font-semibold text-[#181818]">World & Islands</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[13px] text-[#7E7E7E]">7-21 Days</span>
              <span className="text-[14px] font-semibold text-[#181818]">From 29 &euro;</span>
            </div>
          </div>
        </div>

        {/* Shipping logos */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          {["EMS", "DHL", "GLS", "dpd", "TNT", "FedEx", "UPS"].map((logo) => (
            <span
              key={logo}
              className="text-[11px] font-bold text-[#7E7E7E] bg-[#F5F5F5] rounded-[6px] px-3 py-1.5 uppercase tracking-wide"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Orange notice */}
        <p className="text-[13px] text-[#FF6701] font-semibold text-center mb-6">
          Orders Shipped Within 1-3 Business Days After Payment
        </p>

        {/* FAQ accordion */}
        <div className="border border-[#E7E7E7] rounded-[12px] overflow-hidden">
          {[
            {
              question: "Do you ship to P.O. boxes?",
              answer:
                "We generally do not ship to P.O. boxes as our carriers require a physical address for delivery. Please provide a street address for your order to ensure smooth delivery.",
            },
            {
              question: "Privacy & delivery guarantees",
              answer:
                "All packages are shipped in discreet, unmarked packaging. We guarantee delivery to the address provided. In case of any issues, our support team will assist you immediately.",
            },
            {
              question: "Reship Policy",
              answer:
                "If your package is lost, seized, or damaged during transit, we offer a free reship or full refund. Please contact our support team with your order number for assistance.",
            },
          ].map((faq, index) => (
            <div key={index} className={index > 0 ? "border-t border-[#E7E7E7]" : ""}>
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-[14px] font-semibold text-[#181818]">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`shrink-0 transition-transform ${openFaq === index ? "rotate-45" : ""}`}
                >
                  <path d="M10 4V16M4 10H16" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4">
                  <p className="text-[13px] text-[#7E7E7E] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
