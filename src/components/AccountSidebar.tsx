"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/account",
    label: "My Account",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
        <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM3 21c0-4.97 4.03-9 9-9s9 4.03 9 9H3z" />
      </svg>
    ),
  },
  {
    href: "/account/orders",
    label: "History Orders",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1 14H5V8h14v10z" />
        <path d="M12 10v4M10 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/account/address",
    label: "Address",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
        <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
  },
  {
    href: "/account/details",
    label: "Account Details",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
        <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
        <circle cx="12" cy="10" r="2.5" fill="white" />
        <path d="M8 16.5c.5-2 2-3 4-3s3.5 1 4 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

const logoutIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
    <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4v-2H5V5h4V3z" />
    <path d="M16 17l5-5-5-5v3H9v4h7v3z" />
  </svg>
);

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[440px] shrink-0 bg-[#F7F7F7] rounded-[16px] p-4 flex flex-col gap-4 self-start">
      {/* User info */}
      <div className="flex items-center gap-4 px-2 pt-2">
        <div className="w-12 h-12 rounded-full bg-[#E7E7E7] shrink-0 flex items-center justify-center overflow-hidden">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#B6B6B6">
            <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM3 21c0-4.97 4.03-9 9-9s9 4.03 9 9H3z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-semibold text-[#181818] leading-6">Mus1993rus</span>
            <span className="text-[12px] text-[#7E7E7E] leading-4">#2414</span>
          </div>
          <span className="text-[12px] text-[#7E7E7E] leading-4">mus1993rus@gmail.com</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white rounded-[12px] p-2 flex flex-col">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 h-10 rounded-[8px] transition-colors ${
                active ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
              }`}
            >
              <span className="w-6 h-6 shrink-0 flex items-center justify-center">{item.icon}</span>
              <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">{item.label}</span>
              {active && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          );
        })}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 h-10 rounded-[8px] hover:bg-[#F7F7F7] transition-colors"
        >
          <span className="w-6 h-6 shrink-0 flex items-center justify-center">{logoutIcon}</span>
          <span className="flex-1 text-[14px] font-semibold text-[#181818] leading-5">Logout</span>
        </Link>
      </nav>

      {/* Telegram CTA */}
      <div className="bg-white rounded-[12px] p-6 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#26A5E4] flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-[16px] font-semibold text-[#181818] leading-6">Official Telegram Channel</p>
            <p className="text-[12px] text-[#7E7E7E] leading-5">Get instant updates on new articles and limited offers</p>
          </div>
        </div>
        <a
          href="https://t.me/+eFl6hboMcbxlNDI0"
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 flex items-center justify-center bg-white border border-[#E7E7E7] hover:border-[#181818] rounded-[8px] text-[14px] font-semibold text-[#181818] transition-colors">Join Channel</a>
      </div>
    </aside>
  );
}
