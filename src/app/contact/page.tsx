"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [contactMethod, setContactMethod] = useState<"telegram" | "whatsapp" | "mail">("telegram");
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4 px-4 lg:px-0">
          <div className="flex items-center gap-2 text-[12px] md:text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Contact</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16 px-4 lg:px-0">
          <h1 className="text-[24px] md:text-[36px] font-extrabold text-[#181818] leading-[30px] md:leading-[44px] mb-4 md:mb-6">Contact Us</h1>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[80px]">
            {/* LEFT sidebar - Contact Info (Figma style) */}
            <div className="w-full lg:w-[440px] lg:shrink-0">
              <div className="bg-[#F7F7F7] rounded-[16px] p-4 flex flex-col gap-4">
                {/* Card 1: For Instant Support */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-3">
                  <p className="text-[12px] text-[#7E7E7E] leading-4">For Instant Support</p>
                  <div className="flex flex-col gap-4">
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#00D43F] flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M15.25 13.28c-.19-.13-.38-.19-.56.06l-.75 1c-.19.13-.31.19-.56.06-.94-.5-2.25-1.06-3.38-2.94-.06-.25.06-.38.19-.5l.56-.88c.13-.12.06-.25 0-.37l-.75-1.82c-.19-.5-.38-.43-.56-.43h-.5c-.13 0-.38.06-.63.31-1.37 1.38-.81 3.31.19 4.56.19.25 1.44 2.5 4.12 3.69 2 .88 2.44.75 3 .63.69-.07 1.38-.63 1.69-1.2.06-.18.38-1 .12-1.1z" fill="white"/>
                          <path d="M12.5 20.22c-2.56 0-4.5-1.38-4.5-1.38l-3.06.81.75-3c0 0-1.25-1.94-1.25-4.37 0-4.5 3.69-8.25 8.25-8.25 4.25 0 7.88 3.31 7.88 7.94 0 4.5-3.63 8.19-8.06 8.25zm-9.94 1.81 5.19-1.44c1.5.77 3.17 1.14 4.86 1.08 1.69-.07 3.33-.56 4.77-1.44 1.44-.88 2.64-2.11 3.47-3.58.83-1.47 1.27-3.13 1.28-4.81 0-5.38-4.25-9.69-9.63-9.69-1.72.01-3.42.46-4.91 1.32-1.5.86-2.74 2.1-3.61 3.59-.86 1.49-1.32 3.18-1.33 4.91 0 1.72.44 3.42 1.29 4.92z" fill="white"/>
                        </svg>
                      </div>
                      <p className="text-[14px] font-semibold text-[#181818] leading-5">WhatsApp</p>
                    </a>
                    <a href="https://t.me/+eFl6hboMcbxlNDI0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M3.32 11.87 18.75 5.92c.72-.26 1.34.17 1.11 1.26L17.23 19.55c-.19.88-.71 1.09-1.44.68l-4-2.95-1.93 1.86c-.21.21-.39.39-.81.39l.29-4.07 7.41-6.7c.32-.28-.07-.44-.5-.16l-9.16 5.77-3.95-1.23c-.86-.27-.88-.86.18-1.27z" fill="white"/>
                        </svg>
                      </div>
                      <p className="text-[14px] font-semibold text-[#181818] leading-5">Telegram</p>
                    </a>
                  </div>
                </div>

                {/* Card 2: Follow us */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-3">
                  <p className="text-[12px] text-[#7E7E7E] leading-4">Follow us</p>
                  <a href="https://instagram.com/dinespower_shop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(138deg, #FAE100 19%, #FCB720 9%, #FF7950 36%, #FF1C74 73%, #6C1CD1 165%)" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.47.72-2.14 1.39C1.33 2.69.92 3.36.61 4.16c-.3.76-.5 1.64-.56 2.91C0 8.35-.01 8.76-.01 12s.01 3.65.07 4.93c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.14.67.67 1.34 1.08 2.14 1.39.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.65-.01 4.93-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.47-.72 2.14-1.39.67-.67 1.08-1.34 1.39-2.14.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.93s-.01-3.65-.07-4.93c-.06-1.27-.26-2.15-.56-2.91-.31-.8-.72-1.47-1.39-2.14C21.31 1.33 20.64.92 19.84.61c-.76-.3-1.64-.5-2.91-.56C15.65.01 15.24 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-semibold text-[#181818] leading-5">Instagram</p>
                      <p className="text-[12px] text-[#7E7E7E] leading-4">@dinespower_shop</p>
                    </div>
                  </a>
                  <a href="https://t.me/+eFl6hboMcbxlNDI0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M3.32 11.87 18.75 5.92c.72-.26 1.34.17 1.11 1.26L17.23 19.55c-.19.88-.71 1.09-1.44.68l-4-2.95-1.93 1.86c-.21.21-.39.39-.81.39l.29-4.07 7.41-6.7c.32-.28-.07-.44-.5-.16l-9.16 5.77-3.95-1.23c-.86-.27-.88-.86.18-1.27z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-semibold text-[#181818] leading-5">Telegram Channel</p>
                      <p className="text-[12px] text-[#7E7E7E] leading-4">@dines_power</p>
                    </div>
                  </a>
                </div>

                {/* Card 3: For All Questions */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-3">
                  <p className="text-[12px] text-[#7E7E7E] leading-4">For All Questions</p>
                  <a href="mailto:info@dinespower.info" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5">info@dinespower.info</p>
                  </a>
                </div>

                {/* Card 4: Wholesale orders */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-4 flex flex-col gap-3">
                  <p className="text-[12px] text-[#7E7E7E] leading-4">Wholesale orders</p>
                  <a href="mailto:sales@dinespower.info" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5">sales@dinespower.info</p>
                  </a>
                  <a href="mailto:support@dinespower.info" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5">support@dinespower.info</p>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT - Contact Form */}
            <div className="flex-1 min-w-0">
              <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-5 md:p-8">
                <h2 className="text-[20px] md:text-[24px] font-extrabold text-[#181818] leading-[26px] md:leading-[30px] mb-2 text-center">Send us a message</h2>
                <p className="text-[14px] text-[#7E7E7E] mb-8 text-center">Fill out the form &mdash; your request will be handled with priority</p>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  {/* Name + Phone side by side — no labels */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

                  {/* Comment (Optional) */}
                  <textarea
                    placeholder="Comment (Optional)"
                    rows={5}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-white border border-[#E7E7E7] rounded-[8px] px-4 py-3 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors resize-none"
                  />

                  {/* How can we contact you? — segmented 3 tiles, active = white w/ border */}
                  <div className="flex flex-col gap-3">
                    <p className="text-[14px] text-[#7E7E7E] leading-5 text-center">How can we contact you?</p>
                    <div className="bg-[#F7F7F7] rounded-[12px] p-1 grid grid-cols-1 md:grid-cols-3 gap-1">
                      {([
                        { key: "telegram" as const, label: "Telegram", bg: "#00A9DE", icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>
                        ) },
                        { key: "whatsapp" as const, label: "Whatsapp", bg: "#25D366", icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        ) },
                        { key: "mail" as const, label: "Mail", bg: "#181818", icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        ) },
                      ]).map((opt) => {
                        const active = contactMethod === opt.key;
                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => setContactMethod(opt.key)}
                            className={`cursor-pointer flex items-center justify-center gap-3 h-[52px] rounded-[10px] text-[14px] font-semibold text-[#181818] border transition-[background-color,border-color,box-shadow] duration-200 ${
                              active ? "bg-white border-[#E7E7E7] shadow-sm" : "bg-transparent border-transparent"
                            }`}
                          >
                            <span
                              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
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
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div
                      onClick={() => setAgreed(!agreed)}
                      className={`w-5 h-5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                        agreed ? "bg-[#FF6701] border-[#FF6701]" : "border-[#CBCBCB] bg-white"
                      }`}
                    >
                      {agreed && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-[#7E7E7E] leading-[20px]">
                      I Agree To The{" "}
                      <Link href="/privacy" className="text-[#FF6701] hover:underline">Privacy Policy</Link>
                      {" "}And Receive Offers
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-[#181818] hover:bg-black text-white text-sm font-semibold rounded-lg h-[52px] transition-colors w-full mt-2"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
