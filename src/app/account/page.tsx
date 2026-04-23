"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { SkeletonAccountDashboard } from "@/components/Skeleton";

const cards = [
  {
    title: "My History Orders",
    desc: "View all orders.",
    href: "/account/orders",
    icon: "/images/account/card-icon.png",
  },
  {
    title: "My Address",
    desc: "View and edit your addresses.",
    href: "/account/address",
    icon: "/images/account/card-icon.png",
  },
  {
    title: "Account Details",
    desc: "View and edit your Details.",
    href: "/account/details",
    icon: "/images/account/card-icon.png",
  },
];

export default function AccountDashboardPage() {
  const router = useRouter();
  const { user, hydrated, logout } = useAuth();

  useEffect(() => {
    if (hydrated && !user) router.replace("/login");
  }, [hydrated, user, router]);

  if (!hydrated || !user) {
    return <SkeletonAccountDashboard />;
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-6 pt-2">
      {/* Greeting */}
      <div className="flex flex-col gap-2">
        <p className="text-[18px] text-[#181818] leading-[26px]">
          Hello <span className="font-semibold">{user.displayName || user.firstName}</span>{" "}
          <span className="text-[#7E7E7E]">(not {user.displayName || user.firstName}? </span>
          <button onClick={handleLogout} className="cursor-pointer text-[#FF6701] underline bg-transparent border-0 p-0 font-[inherit]">Log out</button>
          <span className="text-[#7E7E7E]">)</span>
        </p>
        <p className="text-[14px] text-[#7E7E7E] leading-5">
          From your account dashboard you can view your{" "}
          <Link href="/account/orders" className="text-[#181818] underline">recent orders</Link>, manage your{" "}
          <Link href="/account/address" className="text-[#181818] underline">shipping and billing addresses</Link>, and edit your{" "}
          <Link href="/account/details" className="text-[#181818] underline">password</Link> and{" "}
          <Link href="/account/details" className="text-[#181818] underline">account details</Link>.
        </p>
      </div>

      {/* 3 cards */}
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="bg-white border border-[#E7E7E7] rounded-[12px] p-6 flex flex-col items-center gap-3 hover:border-[#181818] transition-colors text-center"
          >
            <div className="w-14 h-14 relative">
              <Image src={c.icon} alt="" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-semibold text-[#181818] leading-6">{c.title}</p>
              <p className="text-[12px] text-[#7E7E7E] leading-4">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured product banner */}
      <div className="bg-[#181818] rounded-[16px] p-5 tablet:p-6 flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-6 relative overflow-hidden">
        <div className="w-[100px] h-[100px] rounded-[8px] bg-white p-2 flex items-center justify-center shrink-0 relative">
          <Image
            src="/images/shop/products/fat-burn-yohimbine.png"
            alt="Yohimbine Fat Burner"
            width={84}
            height={84}
            className="object-contain"
          />
          <span className="absolute -top-1 -left-1 bg-[#FB2F2F] text-white text-[10px] font-semibold px-2 py-[2px] rounded-[6px]">
            Sale -14%
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-[12px] text-[#B6B6B6] leading-4">Biaxol</p>
          <p className="text-[18px] font-semibold text-white leading-[26px]">Yohimbine Fat Burner Capsules</p>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FF6701">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span className="text-[12px] text-[#B6B6B6]">(325 Reviews)</span>
          </div>
        </div>
        <div className="flex items-center justify-between tablet:justify-start gap-4 shrink-0 flex-wrap">
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] font-extrabold text-[#FB2F2F] leading-[28px]">30 €</span>
            <span className="text-[14px] text-[#7E7E7E] line-through">24 €</span>
          </div>
          <Link
            href="/product"
            className="h-11 px-6 bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] flex items-center justify-center text-[14px] font-semibold text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
