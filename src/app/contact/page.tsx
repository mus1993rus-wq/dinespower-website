"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [contactMethod, setContactMethod] = useState<"telegram" | "whatsapp" | "mail">("telegram");
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Contact</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-6">Contact Us</h1>

          <div className="flex gap-[80px]">
            {/* LEFT sidebar - Contact Info (Figma style) */}
            <div className="w-[440px] shrink-0">
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
                    <a href="https://t.me/dinespower" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
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
                      <p className="text-[12px] text-[#7E7E7E] leading-4">dinespower_shop</p>
                    </div>
                  </a>
                  <a href="https://t.me/dinespower" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M3.32 11.87 18.75 5.92c.72-.26 1.34.17 1.11 1.26L17.23 19.55c-.19.88-.71 1.09-1.44.68l-4-2.95-1.93 1.86c-.21.21-.39.39-.81.39l.29-4.07 7.41-6.7c.32-.28-.07-.44-.5-.16l-9.16 5.77-3.95-1.23c-.86-.27-.88-.86.18-1.27z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-semibold text-[#181818] leading-5">Dinespower</p>
                      <p className="text-[12px] text-[#7E7E7E] leading-4">For Instant Support</p>
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
            <div className="flex-1">
              <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-8">
                <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-2 text-center">Send us a message</h2>
                <p className="text-[14px] text-[#7E7E7E] mb-8 text-center">Fill out the form &mdash; your request will be handled with priority</p>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  {/* Name + Phone side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-[#7E7E7E] mb-1.5 block">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-[48px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#7E7E7E] mb-1.5 block">Phone</label>
                      <div className="flex">
                        <div className="h-[48px] bg-[#F7F7F7] border border-[#E7E7E7] border-r-0 rounded-l-lg px-4 flex items-center gap-2 shrink-0">
                          <Image src="/images/shop/uk-flag.svg" alt="Flag" width={20} height={14} />
                          <span className="text-sm text-[#181818] font-medium">+1</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <input
                          type="tel"
                          placeholder="(000) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 h-[48px] bg-[#F7F7F7] border border-[#E7E7E7] rounded-r-lg px-4 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-[#7E7E7E] mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[48px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors"
                    />
                  </div>

                  {/* Comment (Optional) */}
                  <div>
                    <label className="text-sm text-[#7E7E7E] mb-1.5 block">Comment (Optional)</label>
                    <textarea
                      placeholder="Write your message here..."
                      rows={5}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full bg-white border border-[#E7E7E7] rounded-[8px] px-4 py-3 text-sm text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors resize-none"
                    />
                  </div>

                  {/* How can we contact you? + tabs */}
                  <div>
                    <label className="text-sm text-[#7E7E7E] mb-2 block">How can we contact you?</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setContactMethod("telegram")}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                          contactMethod === "telegram"
                            ? "bg-[#FF6701] text-white"
                            : "bg-[#F7F7F7] text-[#181818] hover:bg-[#EDEDED]"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Telegram
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod("whatsapp")}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                          contactMethod === "whatsapp"
                            ? "bg-[#FF6701] text-white"
                            : "bg-[#F7F7F7] text-[#181818] hover:bg-[#EDEDED]"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Whatsapp
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod("mail")}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                          contactMethod === "mail"
                            ? "bg-[#FF6701] text-white"
                            : "bg-[#F7F7F7] text-[#181818] hover:bg-[#EDEDED]"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Mail
                      </button>
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
                    className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[52px] transition-colors w-full mt-2"
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
