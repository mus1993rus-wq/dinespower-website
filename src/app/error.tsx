"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white flex items-center justify-center py-12 tablet:py-20 desktop:py-24">
        <div className="max-w-[640px] mx-auto w-full px-4 flex flex-col items-center text-center gap-5 tablet:gap-6">
          {/* Reuse 404 illustration as generic error visual */}
          <div className="w-full max-w-[280px] tablet:max-w-[380px] desktop:max-w-[460px] aspect-[460/220] relative">
            <Image
              src="/images/404.svg"
              alt=""
              fill
              className="object-contain opacity-80"
              priority
            />
          </div>

          <h1 className="text-[22px] tablet:text-[26px] desktop:text-[28px] font-extrabold text-[#181818] leading-[28px] tablet:leading-[32px] desktop:leading-[36px]">
            Something went wrong
          </h1>

          <p className="text-[13px] tablet:text-[14px] desktop:text-[16px] text-[#7E7E7E] leading-5 tablet:leading-6 max-w-[500px]">
            We&apos;re sorry, an unexpected error occurred. You can try again or return to the home page.
          </p>

          {process.env.NODE_ENV === "development" && error?.message && (
            <pre className="w-full max-w-[600px] bg-[#FFF4E6] border border-[#FFD6A8] text-[12px] text-[#7E2F00] rounded-[8px] px-4 py-3 text-left whitespace-pre-wrap overflow-x-auto">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          )}

          <div className="flex flex-col tablet:flex-row gap-3">
            <button
              onClick={reset}
              className="cursor-pointer inline-flex items-center justify-center h-12 px-8 bg-[#FF6701] hover:bg-[#E65D00] text-white text-[14px] tablet:text-[16px] font-semibold rounded-[8px] transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 bg-white border border-[#CBCBCB] hover:border-[#181818] text-[#181818] text-[14px] tablet:text-[16px] font-semibold rounded-[8px] transition-colors"
            >
              Go to the home page
            </Link>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
