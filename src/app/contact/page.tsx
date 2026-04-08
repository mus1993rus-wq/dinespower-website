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
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">Contact Us</h1>

          <div className="flex gap-8">
            {/* LEFT sidebar - Contact Info */}
            <div className="w-[360px] shrink-0 flex flex-col gap-6">
              {/* Instant Support */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#7E7E7E] uppercase tracking-wider mb-3">For Instant Support</h3>
                <div className="flex flex-col gap-3">
                  <a href="#" className="flex items-center gap-3 bg-[#F7F7F7] hover:bg-[#EDEDED] rounded-[12px] p-4 transition-colors">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#00D43F] flex items-center justify-center shrink-0">
                      <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={22} height={22} unoptimized />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">WhatsApp</p>
                      <p className="text-xs text-[#7E7E7E]">Chat with us instantly</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 bg-[#F7F7F7] hover:bg-[#EDEDED] rounded-[12px] p-4 transition-colors">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                      <Image src="/images/shop/telegram.svg" alt="Telegram" width={22} height={22} unoptimized />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">Telegram</p>
                      <p className="text-xs text-[#7E7E7E]">@dinespower</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#7E7E7E] uppercase tracking-wider mb-3">Follow us</h3>
                <div className="flex flex-col gap-3">
                  <a href="#" className="flex items-center gap-3 bg-[#F7F7F7] hover:bg-[#EDEDED] rounded-[12px] p-4 transition-colors">
                    <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(138deg, #FAE100, #FCB720, #FF7950, #FF1C74, #6C1CD1)" }}>
                      <Image src="/images/shop/instagram.svg" alt="Instagram" width={22} height={22} unoptimized />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">Instagram</p>
                      <p className="text-xs text-[#7E7E7E]">@dinespower.shop</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 bg-[#F7F7F7] hover:bg-[#EDEDED] rounded-[12px] p-4 transition-colors">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                      <Image src="/images/shop/telegram.svg" alt="Telegram" width={22} height={22} unoptimized />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">Dinespower</p>
                      <p className="text-xs text-[#7E7E7E]">For Instant Support</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* For All Questions */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#7E7E7E] uppercase tracking-wider mb-3">For All Questions</h3>
                <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#181818] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#181818]">info@dinespower.info</p>
                  </div>
                </div>
              </div>

              {/* Wholesale Orders */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#7E7E7E] uppercase tracking-wider mb-3">Wholesale orders</h3>
                <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#181818] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">sales@dinespower.info</p>
                      <p className="text-xs text-[#7E7E7E]">Sales inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#181818] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">support@dinespower.info</p>
                      <p className="text-xs text-[#7E7E7E]">Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Managers */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#7E7E7E] uppercase tracking-wider mb-3">Sales Managers</h3>
                <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#181818] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181818]">oliver@dinespower.info</p>
                      <p className="text-xs text-[#7E7E7E]">Oliver - Sales Manager</p>
                    </div>
                  </div>
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
                          <Image src="/images/shop/uk-flag.svg" alt="Flag" width={20} height={14} unoptimized />
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
