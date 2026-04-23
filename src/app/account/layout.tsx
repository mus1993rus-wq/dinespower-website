import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        <div className="max-w-[1340px] mx-auto pt-4 pb-16 px-4 lg:px-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] md:text-[14px] text-[#7E7E7E] mb-4">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818]">My Account</span>
          </div>
          {/* Title */}
          <h1 className="text-[24px] md:text-[32px] font-extrabold text-[#181818] leading-[30px] md:leading-[44px] mb-6 md:mb-8">My Account</h1>
          {/* Layout: sidebar + content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[80px]">
            <AccountSidebar />
            <section className="flex-1 min-w-0">{children}</section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
