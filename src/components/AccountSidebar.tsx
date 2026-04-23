"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/account", label: "My Account", icon: "/images/account/my-account.svg" },
  { href: "/account/orders", label: "History Orders", icon: "/images/account/box-time.svg" },
  { href: "/account/address", label: "Address", icon: "/images/account/location.svg" },
  { href: "/account/details", label: "Account Details", icon: "/images/account/user-octagon.svg" },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-[440px] shrink-0 flex flex-col gap-4 self-start">
      {/* User info */}
      <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4 py-1">
          <div className="w-12 h-12 rounded-full bg-[#E3E3E3] shrink-0" />
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-[16px] font-semibold text-black leading-6 capitalize">mus1993rus</span>
              <span className="text-[12px] text-[#7E7E7E] leading-4">#2414</span>
            </div>
            <span className="text-[12px] text-[#7E7E7E] leading-4">mus1993rus@gmail.com</span>
          </div>
        </div>

        {/* Nav */}
        <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-[8px] transition-colors ${
                  active ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                }`}
              >
                <Image src={item.icon} alt="" width={24} height={24} className="shrink-0" />
                <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">{item.label}</span>
                {active && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="-rotate-90">
                    <path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            );
          })}
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 rounded-[8px] hover:bg-[#F7F7F7] transition-colors"
          >
            <Image src="/images/account/logout.svg" alt="" width={24} height={24} className="shrink-0" />
            <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">Logout</span>
          </Link>
        </div>

        {/* Telegram CTA */}
        <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-6 flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
              <Image src="/images/account/telegram.svg" alt="" width={24} height={24} />
            </div>
            <div className="flex-1 flex flex-col gap-[7px]">
              <p className="text-[16px] font-semibold text-black leading-6 capitalize">Official Telegram channel</p>
              <p className="text-[14px] text-[#1E1E1E] leading-5">Get instant updates on new articles and limited offers</p>
            </div>
          </div>
          <a
            href="https://t.me/+eFl6hboMcbxlNDI0"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 flex items-center justify-center bg-white border border-[#CBCBCB] hover:border-[#181818] rounded-[8px] text-[14px] font-semibold text-black transition-colors"
          >
            Join Channel
          </a>
        </div>
      </div>
    </aside>
  );
}
