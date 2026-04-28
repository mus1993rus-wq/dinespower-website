"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    q: "How do I send the payment?",
    a: "We provide all necessary payment instructions via email after you place your order. If you have any further questions or have not received an email with payment instructions after placing your order, please contact us.",
  },
  {
    q: "Bitcoin Payment",
    a: "All our products are manufactured in full compliance with global quality standards and are fully certified by WHO-GMP and comply with EU GMP and UK MHRA.",
    action: { label: "See Detail Instruction", href: "/bitcoin" },
  },
];

export default function PaymentPopup({ isOpen, onClose }: PaymentPopupProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end tablet:items-center justify-center tablet:p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-t-[16px] tablet:rounded-[16px] w-full tablet:max-w-[680px] max-h-[92vh] tablet:max-h-[90vh] overflow-y-auto z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-[#181818] hover:opacity-60 transition-opacity z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-5 tablet:p-8 desktop:p-10 flex flex-col gap-5 tablet:gap-6 desktop:gap-7">
          {/* Title */}
          <div className="text-center tablet:text-left">
            <h2 className="text-[22px] tablet:text-[26px] desktop:text-[28px] font-extrabold text-[#181818] leading-[28px] tablet:leading-[32px] desktop:leading-[34px] mb-2">Payment Methods</h2>
            <p className="text-[14px] tablet:text-[15px] desktop:text-[16px] text-[#7E7E7E] leading-5 tablet:leading-6">Everything you need to know before placing an order</p>
          </div>

          {/* Payment cards */}
          <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
            {/* Bank transfer + Bitcoin card */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col">
              {/* Bank transfer */}
              <div className="flex items-start gap-4 pb-3">
                <div className="w-16 h-16 rounded-[8px] shrink-0 flex items-center justify-center">
                  <Image src="/images/shop/delivery-bank.png" alt="Bank transfer" width={64} height={64} className="object-contain w-16 h-16" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#181818] leading-6">Bank transfer</h3>
                  <p className="text-[14px] text-[#7E7E7E] leading-5 mt-1">
                    Telegraphic Transfer (wire) to company bank account. Processing time: 1–3 business days
                  </p>
                </div>
              </div>
              <div className="h-px bg-[#E7E7E7]" />
              {/* Bitcoin */}
              <div className="flex items-start gap-4 pt-3">
                <div className="w-16 h-16 rounded-[8px] shrink-0 flex items-center justify-center">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#F7931A] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M17.06 11.57c.84-.57 1.34-1.48 1.2-2.83-.17-1.85-1.77-2.47-3.79-2.65l-.01-2.57h-1.57l-.01 2.5c-.41 0-.83.01-1.25.02l.01-2.52H10.1l.01 2.57c-.34 0-.67.01-1 .01v-.01H7v1.68s1.18-.02 1.16 0c.65 0 .86.38.92.71L9.07 11.6l.01 4.09c-.03.19-.14.5-.57.5.02.02-1.16 0-1.16 0l-.32 1.87h2c.37 0 .73.01 1.09.01l.01 2.6h1.57l-.01-2.57h1.25l.01 2.57h1.57v-2.59c2.64-.15 4.49-.81 4.72-3.28.19-1.99-.75-2.88-2.18-3.24zM12.38 8.13c1 0 4.15-.32 4.15 1.5 0 1.75-3.15 1.55-4.15 1.55V8.13zm0 8.8v-3.4c1.21 0 4.9-.34 4.9 1.7 0 1.97-3.69 1.7-4.9 1.7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[16px] font-semibold text-[#181818] leading-6">Bitcoin</h3>
                    <span className="bg-[#FF6701]/10 text-[#FF6701] text-[11px] tablet:text-[13px] font-semibold px-2 tablet:px-3 py-0.5 tablet:py-1 rounded-full whitespace-nowrap">Recommended</span>
                  </div>
                  <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-5">
                    The preferred and most reliable payment method. Fast processing, instant network confirmation
                  </p>
                </div>
              </div>
            </div>

            {/* How Payment Works */}
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-3">
              <p className="text-[16px] font-semibold text-[#181818] leading-6 text-center">How Payment Works</p>
              <div className="flex flex-col gap-2">
                {[
                  "Place your order via manager or the website",
                  "Payment instructions are sent by email after order placement",
                  "Orders are processed only after payment confirmation",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] text-[#181818] leading-5">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[14px] text-[#7E7E7E] text-center leading-5">No minimum order required</p>
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
                    <p className="text-[14px] text-[#7E7E7E] leading-5">{faq.a}</p>
                    {faq.action && (
                      <Link href={faq.action.href} onClick={onClose} className="inline-flex items-center justify-center h-11 px-6 w-fit bg-[#FF6701] hover:bg-[#E65D00] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
                        {faq.action.label}
                      </Link>
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
