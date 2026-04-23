import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white flex items-center justify-center py-16 tablet:py-24">
        <div className="max-w-[640px] mx-auto w-full px-4 flex flex-col items-center text-center gap-6">
          {/* 4 [logo] 4 */}
          <div className="flex items-center gap-2 tablet:gap-4">
            <span className="text-[120px] tablet:text-[180px] font-extrabold italic text-[#181818] leading-none tracking-tight select-none">4</span>
            <div className="w-[90px] tablet:w-[140px] h-[120px] tablet:h-[180px] relative flex items-center justify-center">
              <Image
                src="/images/shop/logo.svg"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[120px] tablet:text-[180px] font-extrabold italic text-[#181818] leading-none tracking-tight select-none">4</span>
          </div>

          <h1 className="text-[22px] tablet:text-[28px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[36px]">Page not found</h1>

          <p className="text-[14px] tablet:text-[16px] text-[#7E7E7E] leading-5 tablet:leading-6 max-w-[500px]">
            The page at the address you entered no longer exists or has never existed.
            <br />
            If you know exactly what you&apos;re looking for, please use the search bar or the navigation menu.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 bg-[#FF6701] hover:bg-[#E65D00] text-white text-[14px] tablet:text-[16px] font-semibold rounded-[8px] transition-colors"
          >
            Go to the home page
          </Link>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
