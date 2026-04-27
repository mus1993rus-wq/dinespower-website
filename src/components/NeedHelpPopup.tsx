"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface NeedHelpPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NeedHelpPopup({ isOpen, onClose }: NeedHelpPopupProps) {
  const [contactMethod, setContactMethod] = useState<"telegram" | "whatsapp" | "mail">("telegram");
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const resetAndClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setComment("");
    setAgreed(false);
    onClose();
  };

  const options = [
    {
      key: "telegram" as const,
      label: "Telegram",
      bg: "#00A9DE",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      ),
    },
    {
      key: "whatsapp" as const,
      label: "Whatsapp",
      bg: "#25D366",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      key: "mail" as const,
      label: "Mail",
      bg: "#181818",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch tablet:items-center justify-center tablet:p-4">
      <div className="absolute inset-0 bg-black/50 hidden tablet:block" onClick={resetAndClose} />
      <div className="relative bg-white tablet:rounded-[16px] p-4 tablet:p-10 max-w-none tablet:max-w-[680px] w-full z-10 max-h-screen tablet:max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="cursor-pointer absolute top-5 right-5 text-[#7E7E7E] hover:text-[#181818] transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          /* Success state — Figma 2483:37777 */
          <div className="flex flex-col items-center text-center gap-6 py-8 tablet:py-10">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#E8F8EE]" />
              <div className="absolute inset-2 rounded-full bg-[#00B638] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-[480px]">
              <h2 className="text-[22px] tablet:text-[24px] font-extrabold text-[#181818] leading-[30px]">
                The message was sent successfully
              </h2>
              <p className="text-[14px] text-[#7E7E7E] leading-5">
                Thank you. Our managers will process your message as soon as possible.
              </p>
            </div>
            <button
              onClick={resetAndClose}
              className="cursor-pointer h-[52px] px-10 bg-[#181818] hover:bg-black text-white text-[16px] font-semibold rounded-[12px] transition-colors"
            >
              Got It
            </button>
          </div>
        ) : (
        <>
        {/* Title + subtitle */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-[28px] font-extrabold text-center text-[#181818] leading-[34px]">Need Help?</h2>
          <p className="text-[14px] text-[#7E7E7E] text-center leading-6">
            Reach out to our manager right away — we&apos;re happy to help with any questions.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {/* Name + Phone */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[52px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors"
            />
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={setPhone}
              placeholder="Phone"
              className="dp-phone"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[52px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors"
          />

          {/* Comment */}
          <textarea
            placeholder="Comment (Optional)"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-white border border-[#E7E7E7] rounded-[8px] px-4 py-3 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors resize-none"
          />

          {/* Contact method */}
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[14px] text-[#7E7E7E] leading-5 text-center">How can we contact you?</p>
            <div className="bg-[#F7F7F7] rounded-[12px] p-1 grid grid-cols-3 gap-1">
              {options.map((opt) => {
                const active = contactMethod === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setContactMethod(opt.key)}
                    className={`cursor-pointer flex flex-col tablet:flex-row items-center justify-center gap-1 tablet:gap-3 min-h-[72px] tablet:min-h-[56px] px-1 py-2 rounded-[10px] text-[12px] tablet:text-[16px] font-semibold text-[#181818] transition-colors ${
                      active ? "bg-white border border-[#E7E7E7] shadow-sm" : "bg-transparent"
                    }`}
                  >
                    <span
                      className="w-8 h-8 tablet:w-10 tablet:h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: opt.bg }}
                    >
                      {opt.icon}
                    </span>
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Privacy checkbox */}
          <label className="flex items-start gap-3 cursor-pointer mt-2">
            <div
              onClick={() => setAgreed(!agreed)}
              className={`w-5 h-5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                agreed ? "bg-[#181818] border-[#181818]" : "border-[#CBCBCB] bg-white"
              }`}
            >
              {agreed && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-[14px] text-[#7E7E7E] leading-6">
              I Agree To The{" "}
              <Link href="/privacy" className="text-[#FF6701] hover:underline">Privacy Policy</Link>
              {" "}And Receive Offers
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[52px] bg-[#181818] hover:bg-black text-white text-[16px] font-semibold rounded-[12px] transition-colors mt-2"
          >
            Send Request
          </button>
        </form>
        </>
        )}
      </div>
    </div>
  );
}
