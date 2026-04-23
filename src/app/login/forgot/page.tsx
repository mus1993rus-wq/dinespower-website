"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inputClass =
  "w-full h-[53px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4  py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/login" className="hover:text-[#181818] transition-colors">My Account</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Lost your password?</span>
          </div>
        </div>

        <div className="max-w-[500px] mx-auto px-4  pb-12 tablet:pb-16">
          <h1 className="text-[24px] tablet:text-[30px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[36px] mb-4 tablet:mb-6">My Account</h1>

          <div className="bg-[#F7F7F7] rounded-[16px] p-2">
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-6 tablet:p-8 flex flex-col gap-6">
              {!sent ? (
                <>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[22px] font-extrabold text-[#181818] leading-[29px]">Lost your password?</h2>
                    <p className="text-[14px] text-[#7E7E7E] leading-5">
                      Please enter your username or email address. You will receive a link to create a new password via email.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">
                      Username or email address <span className="text-[#FF6701]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Write username or email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      required
                    />

                    <div className="flex flex-col gap-2 mt-5">
                      <button
                        type="submit"
                        className="cursor-pointer h-[55px] bg-[#181818] hover:bg-black text-white text-[16px] font-semibold rounded-[8px] transition-colors"
                      >
                        Reset Password
                      </button>
                      <Link
                        href="/login"
                        className="cursor-pointer h-11 flex items-center justify-center text-[14px] font-semibold text-[#181818] hover:text-[#FF6701] transition-colors"
                      >
                        Back to Log In
                      </Link>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#FFF4E6] flex items-center justify-center">
                    {/* Mail icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#FF6701" strokeWidth="1.8" />
                      <path d="M3 7l9 6 9-6" stroke="#FF6701" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[22px] font-extrabold text-[#181818] leading-[29px]">Password reset sent</h2>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5">{email || "your@email.com"}</p>
                    <p className="text-[14px] text-[#7E7E7E] leading-5">
                      We&apos;ve sent a password reset link to your email address. Please check your inbox and follow the instructions.
                    </p>
                  </div>
                  <Link
                    href="/login"
                    className="cursor-pointer w-full h-11 bg-white border border-[#CBCBCB] hover:border-[#181818] rounded-[8px] flex items-center justify-center text-[14px] font-semibold text-[#181818] transition-colors mt-2"
                  >
                    Back to Log In
                  </Link>
                </div>
              )}
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
