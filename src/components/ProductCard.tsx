"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  brand: string;
  name: string;
  dosage: string;
  price: number;
  oldPrice?: number;
  image?: string;
  badges?: string[];
}

export default function ProductCard({ brand, name, dosage, price, oldPrice, image, badges = [] }: ProductCardProps) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden flex flex-col w-[252px] shrink-0 hover:shadow-lg transition-shadow">
      {/* Image - WHITE background, clickable */}
      <Link href="/product" className="relative h-[252px] bg-white flex items-center justify-center p-6 block">
        {/* Tag ribbons — Figma 1249:6845: flush to left edge, right corners rounded */}
        <div className="absolute top-4 left-0 z-10 flex flex-col gap-[2px] items-start">
          {badges.includes("sale") && (
            <span className="bg-[#FB2F2F] text-white text-[12px] font-semibold leading-4 px-3 py-1 rounded-tr-[6px] rounded-br-[6px]">Sale -14%</span>
          )}
          {badges.includes("top") && (
            <span className="bg-[#FFB52B] text-white text-[12px] font-semibold leading-4 px-3 py-1 rounded-tr-[6px] rounded-br-[6px]">Top</span>
          )}
          {badges.includes("new") && (
            <span className="bg-[#53BE90] text-white text-[12px] font-semibold leading-4 px-3 py-1 rounded-tr-[6px] rounded-br-[6px]">New</span>
          )}
        </div>
        {image ? (
          <Image src={image} alt={name} width={180} height={180} className="object-contain" />
        ) : (
          <div className="w-[180px] h-[180px] bg-[#F7F7F7] rounded-lg" />
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <Link href="/product" className="text-xs text-[#7E7E7E] leading-[18px] hover:text-[#FF6701] transition-colors">{brand}</Link>
        <Link href="/product" className="text-sm font-medium text-[#181818] leading-[18px] line-clamp-2 min-h-[36px] hover:text-[#FF6701] transition-colors">{name}</Link>
        <p className="text-xs text-[#B6B6B6] leading-[18px]">{dosage}</p>

        {/* Price badge */}
        <div className={`flex items-center justify-center gap-2 mt-2 py-2 rounded-[8px] ${oldPrice ? 'bg-[#FFE8E8]' : 'bg-[#F7F7F7]'}`}>
          <span className={`text-[18px] font-extrabold leading-[24px] ${oldPrice ? 'text-[#FF3B30]' : 'text-[#181818]'}`}>{price} €</span>
          {oldPrice && (
            <span className="text-[14px] text-[#B6B6B6] line-through leading-5">{oldPrice} €</span>
          )}
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-[40px]">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-9 h-full flex items-center justify-center text-[#B6B6B6] hover:text-[#181818] transition-colors">
              <svg width="14" height="2" viewBox="0 0 14 2"><path d="M1 1H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <span className="w-6 text-center text-sm font-semibold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="w-9 h-full flex items-center justify-center text-[#B6B6B6] hover:text-[#181818] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
          <button
            onClick={() => {
              addItem({ brand, name, price, oldPrice, image }, qty);
            }}
            className="group cursor-pointer flex-1 relative bg-[#FF6701] hover:bg-[#E65D00] transition-colors rounded-[10px] h-[40px] flex items-center justify-center overflow-hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-all duration-300 ease-out group-hover:translate-y-[150%] group-hover:opacity-0">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute text-[13px] font-semibold text-white whitespace-nowrap transition-all duration-300 ease-out translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Add to cart
            </span>
          </button>
        </div>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-help-popup'))}
          className="text-[13px] text-[#7E7E7E] hover:text-[#FF6701] transition-colors mt-2 text-center leading-5 cursor-pointer"
        >
          Ask a Question
        </button>
      </div>
    </div>
  );
}
