"use client";

import { useState } from "react";
import Image from "next/image";

interface ShippingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const regions = [
  { flag: "🇪🇺", name: "Europe", time: "5–14 days", price: "From 29 €" },
  { flag: "🇺🇸", name: "USA", time: "7–21 days", price: "From 29 €" },
  { flag: "🌍", name: "World & Islands", time: "7–21 days", price: "From 29 €" },
];

const carriers = [
  { src: "/images/shop/delivery-logos/dhl.png", alt: "DHL" },
  { src: "/images/shop/delivery-logos/fedex.png", alt: "FedEx" },
  { src: "/images/shop/delivery-logos/gls.png", alt: "GLS" },
  { src: "/images/shop/delivery-logos/dpd.png", alt: "DPD" },
  { src: "/images/shop/delivery-logos/tnt.png", alt: "TNT" },
  { src: "/images/shop/delivery-logos/ems.png", alt: "EMS" },
  { src: "/images/shop/delivery-logos/ups.png", alt: "UPS" },
];

const faqs: Array<{ q: string; a?: string; bullets?: string[]; info?: string }> = [
  {
    q: "Do you ship to P.O. boxes?",
    a: "Yes, we ship to PO boxes. Just make sure you've entered the delivery address in the correct format.",
  },
  {
    q: "Privacy & delivery guarantees",
    bullets: [
      "Discreet (stealth) packaging for safe delivery",
      "Orders carefully packed and manually checked before shipping",
      "Trusted transport companies used for delivery",
      "Orders are non-returnable",
    ],
  },
  {
    q: "Reship Policy",
    bullets: [
      "Free reship (once) if parcel is seized (EU)",
      "Free reship if not delivered within 45 days (after review)",
    ],
    info: "Reshipping is not available for certain countries (Canada, Australia, UAE, etc.).",
  },
];

export default function ShippingPopup({ isOpen, onClose }: ShippingPopupProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end tablet:items-center justify-center tablet:p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-t-[16px] tablet:rounded-[16px] w-full tablet:max-w-[680px] max-h-[92vh] tablet:max-h-[90vh] overflow-y-auto z-10">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-[#181818] hover:opacity-60 transition-opacity z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-5 tablet:p-8 desktop:p-10 flex flex-col gap-5 tablet:gap-6 desktop:gap-7">
          <div className="text-center tablet:text-left">
            <h2 className="text-[22px] tablet:text-[26px] desktop:text-[28px] font-extrabold text-[#181818] leading-[28px] tablet:leading-[32px] desktop:leading-[34px] mb-2">Shipping Methods</h2>
            <p className="text-[14px] tablet:text-[15px] desktop:text-[16px] text-[#7E7E7E] leading-5 tablet:leading-6">All you need to know about shipping before you order</p>
          </div>

          <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
            {/* Regions table */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col">
              {regions.map((r, i) => (
                <div key={r.name}>
                  <div className="flex items-center gap-3 py-2">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-[20px] shrink-0">{r.flag}</span>
                      <span className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] leading-5 tablet:leading-6 truncate">{r.name}</span>
                    </div>
                    <span className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-5 w-[82px] tablet:w-[100px] text-right shrink-0">{r.time}</span>
                    <span className="text-[13px] tablet:text-[14px] font-semibold text-[#FF6701] leading-5 w-[78px] tablet:w-[110px] text-right shrink-0">{r.price}</span>
                  </div>
                  {i < regions.length - 1 && <div className="h-px bg-[#E7E7E7]" />}
                </div>
              ))}
            </div>

            {/* Carrier logos */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex items-center justify-between gap-2 flex-wrap">
              {carriers.map((c) => (
                <div key={c.alt} className="h-[42px] w-[70px] flex items-center justify-center">
                  <Image src={c.src} alt={c.alt} width={70} height={42} className="object-contain h-full w-auto" />
                </div>
              ))}
            </div>

            <p className="text-[14px] text-[#7E7E7E] text-center leading-5">Orders shipped within 1–3 business days after payment</p>
          </div>

          {/* FAQs */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-[#E7E7E7] last:border-b">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="cursor-pointer w-full flex items-center justify-between py-4 gap-4"
                >
                  <div className="flex items-center gap-3">
                    <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} className="shrink-0" />
                    <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{faq.q}</span>
                  </div>
                  <div className={`w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? "bg-[#E7E7E7]" : "bg-[#F7F7F7]"}`}>
                    <span className="text-[20px] leading-none text-[#181818]">{openFaq === i ? "−" : "+"}</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="pb-4 pl-[36px] flex flex-col gap-3">
                    {faq.a && <p className="text-[14px] text-[#7E7E7E] leading-5">{faq.a}</p>}
                    {faq.bullets && (
                      <div className="flex flex-col gap-2">
                        {faq.bullets.map((b, bi) => (
                          <div key={bi} className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                              <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[14px] text-[#181818] leading-5">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {faq.info && (
                      <div className="flex items-start gap-3 bg-[#FFF5EE] border border-[#FF6701]/20 rounded-[8px] p-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6701" className="shrink-0">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        <p className="text-[14px] text-[#181818] leading-5">{faq.info}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
