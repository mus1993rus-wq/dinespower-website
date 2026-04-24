"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { href: "/account", label: "My Account", icon: "/images/account/my-account.svg" },
  { href: "/account/orders", label: "History Orders", icon: "/images/account/box-time.svg" },
  { href: "/account/address", label: "Address", icon: "/images/account/location.svg" },
  { href: "/account/details", label: "Account Details", icon: "/images/account/user-octagon.svg" },
];

export default function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const activeItem = navItems.find((i) => i.href === pathname) ?? navItems[0];

  return (
    <>
      {/* ============== MOBILE: compact dropdown ============== */}
      <div className="desktop:hidden w-full">
        <div className="bg-[#F7F7F7] rounded-[12px] p-1">
          <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="cursor-pointer flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F7F7F7] transition-colors w-full"
              aria-expanded={mobileOpen}
            >
              <Image src={activeItem.icon} alt="" width={18} height={18} className="shrink-0" />
              <span className="flex-1 text-left text-[14px] font-semibold text-[#181818] leading-5">{activeItem.label}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform ${mobileOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileOpen && (
              <div className="flex flex-col border-t border-[#E7E7E7] mt-2 pt-2">
                {navItems.map((item) => {
                  if (item.href === activeItem.href) return null;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F7F7F7] transition-colors"
                    >
                      <Image src={item.icon} alt="" width={24} height={24} className="shrink-0" />
                      <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">{item.label}</span>
                    </Link>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F7F7F7] transition-colors text-left w-full"
                >
                  <Image src="/images/account/logout.svg" alt="" width={24} height={24} className="shrink-0" />
                  <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============== DESKTOP: full sidebar ============== */}
      <aside className="hidden desktop:flex desktop:w-[320px] wide:w-[440px] shrink-0 flex-col gap-4 self-start">
        {/* User info */}
        <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4 py-1">
            <div className="w-12 h-12 rounded-full bg-[#E7E7E7] shrink-0 flex items-center justify-center overflow-hidden">
              <Image src="/images/account/user-avatar.svg" alt="" width={24} height={24} className="opacity-70" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="text-[16px] font-semibold text-black leading-6 capitalize">
                  {user?.displayName || user?.firstName || user?.email?.split("@")[0] || "Guest"}
                </span>
                {user && <span className="text-[12px] text-[#7E7E7E] leading-4">#{user.id.slice(-4)}</span>}
              </div>
              <span className="text-[12px] text-[#7E7E7E] leading-4 truncate">{user?.email || "not signed in"}</span>
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
            <button
              onClick={handleLogout}
              className="cursor-pointer flex items-center gap-3 px-4 py-2 rounded-[8px] hover:bg-[#F7F7F7] transition-colors text-left w-full"
            >
              <Image src="/images/account/logout.svg" alt="" width={24} height={24} className="shrink-0" />
              <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">Logout</span>
            </button>
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
    </>
  );
}
