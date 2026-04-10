"use client";

import { useState } from "react";

interface NeedHelpPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NeedHelpPopup({ isOpen, onClose }: NeedHelpPopupProps) {
  const [activeTab, setActiveTab] = useState<"telegram" | "whatsapp" | "mail">("telegram");
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

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
        <h2 className="text-[24px] font-extrabold text-center text-[#181818] mb-1">Need Help?</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-6">
          Reach Out To Our Manager Right Away — We&apos;re Happy To Help With Any Questions.
        </p>

        {/* Contact method label */}
        <p className="text-[14px] font-semibold text-[#181818] mb-3">How can we contact you?</p>

        {/* Tabs */}
        <div className="flex bg-[#F5F5F5] rounded-[10px] p-1 mb-6">
          <button
            onClick={() => setActiveTab("telegram")}
            className={`flex-1 flex items-center justify-center gap-2 h-[40px] rounded-[8px] text-[13px] font-semibold transition-colors ${
              activeTab === "telegram"
                ? "bg-white text-[#181818] shadow-sm"
                : "text-[#7E7E7E]"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={activeTab === "telegram" ? "#0088CC" : "#7E7E7E"}>
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Telegram
          </button>
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`flex-1 flex items-center justify-center gap-2 h-[40px] rounded-[8px] text-[13px] font-semibold transition-colors ${
              activeTab === "whatsapp"
                ? "bg-white text-[#181818] shadow-sm"
                : "text-[#7E7E7E]"
            }`}
          >
            Whatsapp
          </button>
          <button
            onClick={() => setActiveTab("mail")}
            className={`flex-1 flex items-center justify-center gap-2 h-[40px] rounded-[8px] text-[13px] font-semibold transition-colors ${
              activeTab === "mail"
                ? "bg-white text-[#181818] shadow-sm"
                : "text-[#7E7E7E]"
            }`}
          >
            Mail
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full h-[48px] border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#ACACAC] outline-none focus:border-[#181818] transition-colors"
            />
          </div>

          {/* Phone with country code */}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 h-[48px] border border-[#E7E7E7] rounded-[8px] px-3 shrink-0">
              <span className="text-[16px]">🇺🇸</span>
              <span className="text-[14px] text-[#181818]">+1</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-1 h-[48px] border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#ACACAC] outline-none focus:border-[#181818] transition-colors"
            />
          </div>

          {/* Comment */}
          <div>
            <textarea
              placeholder="Comment (optional)"
              rows={3}
              className="w-full border border-[#E7E7E7] rounded-[8px] px-4 py-3 text-[14px] text-[#181818] placeholder:text-[#ACACAC] outline-none focus:border-[#181818] transition-colors resize-none"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <div
              onClick={() => setAgreed(!agreed)}
              className={`w-[18px] h-[18px] rounded-[4px] border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                agreed ? "bg-[#181818] border-[#181818]" : "border-[#D0D0D0]"
              }`}
            >
              {agreed && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-[12px] text-[#7E7E7E] leading-[1.4]">
              I Agree To The Privacy Policy And Receive Offers
            </span>
          </label>

          {/* Submit button */}
          <button className="w-full h-[48px] bg-[#181818] hover:bg-[#2a2a2a] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
