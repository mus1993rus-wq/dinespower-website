import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white flex items-center justify-center py-12 tablet:py-20 desktop:py-24">
        <div className="max-w-[640px] mx-auto w-full px-4 flex flex-col items-center text-center gap-5 tablet:gap-6">
          {/* 404 illustration */}
          <div className="w-full max-w-[280px] tablet:max-w-[380px] desktop:max-w-[460px] aspect-[460/220] relative">
            <Image
              src="/images/404.svg"
              alt="404"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-[22px] tablet:text-[26px] desktop:text-[28px] font-extrabold text-[#181818] leading-[28px] tablet:leading-[32px] desktop:leading-[36px]">Page not found</h1>

          <p className="text-[13px] tablet:text-[14px] desktop:text-[16px] text-[#7E7E7E] leading-5 tablet:leading-6 max-w-[500px]">
            The page at the address you entered no longer exists or has never existed.
            <br className="hidden tablet:inline" />
            {" "}If you know exactly what you&apos;re looking for, please use the search bar or the navigation menu.
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
