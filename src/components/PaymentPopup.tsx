"use client";

import { useState } from "react";
import Image from "next/image";

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentPopup({ isOpen, onClose }: PaymentPopupProps) {
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
        <h2 className="text-[24px] font-extrabold text-center text-[#181818] mb-1">Payment Methods</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-6">
          Everything You Need To Know Before Placing An Order
        </p>

        {/* Payment cards */}
        <div className="border border-[#E7E7E7] rounded-[12px] overflow-hidden mb-6">
          {/* Bank Transfer */}
          <div className="p-4 flex items-start gap-3 border-b border-[#E7E7E7]">
            <div className="w-[40px] h-[40px] rounded-[10px] overflow-hidden shrink-0">
              <Image src="/images/shop/popup-icons/bank-transfer.png" alt="Bank" width={40} height={40} className="object-cover" unoptimized />
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] font-extrabold text-[#181818]">Bank transfer</h3>
              <p className="text-[13px] text-[#7E7E7E] mt-0.5">
                Telegraphic Transfer (wire) to company bank account.
              </p>
              <p className="text-[12px] text-[#7E7E7E] mt-0.5">
                Processing time: 1-3 business days
              </p>
            </div>
          </div>

          {/* Bitcoin */}
          <div className="p-4 flex items-start gap-3">
            <div className="w-[40px] h-[40px] rounded-[10px] overflow-hidden shrink-0">
              <Image src="/images/shop/popup-icons/bitcoin.png" alt="Bitcoin" width={40} height={40} className="object-cover" unoptimized />
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] font-extrabold text-[#181818]">Bitcoin</h3>
              <p className="text-[13px] text-[#7E7E7E] mt-0.5">
                The preferred and most reliable payment method.
              </p>
              <p className="text-[12px] text-[#7E7E7E] mt-0.5">
                Fast processing, instant network confirmation
              </p>
            </div>
            <span className="bg-[#FF6701] text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px] whitespace-nowrap shrink-0">
              We recommend
            </span>
          </div>
        </div>

        {/* How Payment Works */}
        <div className="mb-6">
          <h3 className="text-[16px] font-bold text-[#181818] text-center mb-4">How Payment Works</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-[24px] h-[24px] bg-[#F5F5F5] rounded-full flex items-center justify-center shrink-0">
                <span className="text-[12px] font-bold text-[#181818]">1</span>
              </div>
              <p className="text-[13px] text-[#4A4A4A]">Place your order via manager or the website</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-[24px] h-[24px] bg-[#F5F5F5] rounded-full flex items-center justify-center shrink-0">
                <span className="text-[12px] font-bold text-[#181818]">2</span>
              </div>
              <p className="text-[13px] text-[#4A4A4A]">Payment instructions are sent by email after order placement</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-[24px] h-[24px] bg-[#F5F5F5] rounded-full flex items-center justify-center shrink-0">
                <span className="text-[12px] font-bold text-[#181818]">3</span>
              </div>
              <p className="text-[13px] text-[#4A4A4A]">Orders are processed only after payment confirmation</p>
            </div>
          </div>
        </div>

        {/* No minimum order */}
        <p className="text-[13px] text-[#7E7E7E] text-center mb-6">No Minimum Order Required</p>

        {/* FAQ accordion */}
        <div className="border border-[#E7E7E7] rounded-[12px] overflow-hidden">
          {[
            {
              question: "How do I send the payment?",
              answer:
                "After placing your order, you will receive an email with detailed payment instructions including bank account details or a Bitcoin wallet address. Simply follow the instructions to complete your payment.",
            },
            {
              question: "Bitcoin Payment",
              answer:
                "Bitcoin payments are processed instantly upon network confirmation. You will receive a unique wallet address for each order. We recommend using a reputable Bitcoin wallet for the transaction.",
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
