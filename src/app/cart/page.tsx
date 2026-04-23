"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  qty: number;
  image: string;
}

interface SuggestedProduct {
  brand: string;
  name: string;
  price: number;
  image: string;
}

const initialItems: CartItem[] = [
  { id: 1, brand: "Deus Medical", name: "3-Trenbomed 150 Injectable Steroid In Ampoules", price: 57, oldPrice: 65, qty: 1, image: "/images/shop/products/injectable-trenbomed-150.jpg" },
  { id: 2, brand: "Biaxol", name: "Yohimbine Fat Burner Capsules", price: 24, oldPrice: 30, qty: 2, image: "/images/shop/products/fat-burn-yohimbine.png" },
];

const suggestedProducts: SuggestedProduct[] = [
  { brand: "Deus Medical", name: "Viamed 100 (Sildenafil) 100mg Oral Jelly", price: 17, image: "/images/shop/products/sex-support-viamed-100.webp" },
  { brand: "Biaxol", name: "ECA Fat Burner Capsules", price: 40, image: "/images/shop/products/fat-burn-eca-xtreme-new.png" },
  { brand: "Deus Medical", name: "Dianamed 10 Oral Steroid In Tablets", price: 13, image: "/images/shop/products/oral-dianamed-10.jpg" },
  { brand: "Astera Labs", name: "BCAA Supplements For Muscle Recovery", price: 28, image: "/images/shop/products/amino-acids-bcaa.webp" },
  { brand: "Deus Medical", name: "BPC-157 Peptide In Vials", price: 39, image: "/images/shop/products/peptides-hgh-bpc-157.jpg" },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [promo, setPromo] = useState("");

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const productsTotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountThreshold = 200;
  const amountToDiscount = Math.max(0, discountThreshold - productsTotal);
  const progressPercent = Math.min(100, (productsTotal / discountThreshold) * 100);

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        <div className="max-w-[1340px] mx-auto pt-4 md:pt-8 pb-16 px-4 lg:px-0">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <h1 className="text-[28px] font-extrabold text-[#181818] leading-[34px] mb-6">My Cart</h1>
              <div className="mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto text-[#B6B6B6]">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#181818] mb-2">Your cart is empty</h2>
              <p className="text-sm text-[#7E7E7E] mb-6">Looks like you haven&apos;t added any products yet.</p>
              <Link href="/" className="inline-flex items-center gap-2 bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
              {/* LEFT - 820px */}
              <div className="w-full lg:w-[820px] shrink-0 flex flex-col gap-4 min-w-0">
                {/* Title */}
                <div className="flex items-baseline gap-2">
                  <h1 className="text-[18px] font-semibold text-black leading-[26px]">My Cart</h1>
                  <span className="text-[16px] text-[#7E7E7E] leading-6 capitalize">({totalItems} items)</span>
                </div>

                {/* Progress bar */}
                {amountToDiscount > 0 ? (
                  <div className="rounded-[12px] py-3 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] text-[#181818] leading-5">You&apos;re just</span>
                      <span className="bg-[#1E1E1E] text-[#F7F7F7] text-[14px] font-semibold leading-5 px-2 py-1 rounded-[8px]">{amountToDiscount}€</span>
                      <span className="text-[14px] text-[#181818] leading-5">away from getting a <span className="font-semibold">5% discount</span></span>
                    </div>
                    <div className="w-full h-2 bg-[#E9E9E9] rounded-full overflow-hidden">
                      <div className="h-full bg-black rounded-[4px] transition-all" style={{ width: `${progressPercent}%` }} />
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#E8F8EE] rounded-[12px] px-6 py-4 flex items-center justify-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00B638] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-semibold text-[#181818] leading-6">You have received a 5% discount</p>
                  </div>
                )}

                {/* Cart items */}
                <div className="flex flex-col py-2">
                  {items.map((item, i) => (
                    <div key={item.id}>
                      <div className="flex items-center gap-4 py-2">
                        {/* Trash icon — Figma vuesax/bold/trash */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="cursor-pointer w-6 h-6 flex items-center justify-center text-[#7E7E7E] hover:text-[#FB2F2F] transition-colors shrink-0"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07c-.11 1.58-.2 2.79-3 2.79H8.8c-2.8 0-2.89-1.21-3-2.79L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </button>
                        {/* Image */}
                        <Link href="/product" className="w-[120px] h-[120px] bg-white border border-[#E7E7E7] rounded-[8px] shrink-0 overflow-hidden p-2 hover:border-[#181818] transition-colors">
                          <Image src={item.image} alt={item.name} width={100} height={100} className="object-contain w-full h-full" />
                        </Link>
                        {/* Info */}
                        <div className="flex-1 flex flex-col gap-4 justify-center">
                          <Link href="/product" className="hover:[&_p:last-child]:text-[#FF6701] transition-colors">
                            <p className="text-[12px] text-[#7E7E7E] leading-4">{item.brand}</p>
                            <p className="text-[16px] font-semibold text-[#181818] leading-6 capitalize mt-1 transition-colors">{item.name}</p>
                          </Link>
                          <div className="flex items-center justify-between">
                            {/* Qty */}
                            <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-9 w-[111px] px-2 justify-between">
                              <button onClick={() => updateQty(item.id, -1)} className="cursor-pointer w-5 h-5 flex items-center justify-center text-[#181818]">
                                <svg width="16" height="2" viewBox="0 0 16 2"><path d="M1 1H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                              </button>
                              <span className="text-[14px] font-semibold text-[#181818]">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, 1)} className="cursor-pointer w-5 h-5 flex items-center justify-center text-[#181818]">
                                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                              </button>
                            </div>
                            {/* Price */}
                            <div className="flex items-baseline gap-2">
                              {item.oldPrice ? (
                                <>
                                  <span className="text-[18px] font-semibold text-[#FB2F2F] leading-[26px]">{item.price * item.qty} €</span>
                                  <span className="text-[12px] text-[#7E7E7E] line-through leading-4">{item.oldPrice * item.qty} €</span>
                                </>
                              ) : (
                                <span className="text-[18px] font-semibold text-black leading-[26px]">{item.price * item.qty} €</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {i < items.length - 1 && <div className="h-px bg-[#E7E7E7]" />}
                    </div>
                  ))}
                </div>

                {/* You might also like */}
                <div className="flex flex-col py-2 gap-[10px]">
                  <div className="flex items-center">
                    <p className="text-[18px] font-semibold text-black leading-[26px] flex-1">You might also like</p>
                  </div>
                  {suggestedProducts.map((p, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-4">
                        <Link href="/product" className="w-[120px] h-[120px] bg-white border border-[#E7E7E7] rounded-[8px] shrink-0 overflow-hidden p-2 hover:border-[#181818] transition-colors">
                          <Image src={p.image} alt={p.name} width={100} height={100} className="object-contain w-full h-full" />
                        </Link>
                        <Link href="/product" className="flex-1 flex flex-col gap-1.5 justify-center group">
                          <p className="text-[12px] text-[#7E7E7E] leading-4">{p.brand}</p>
                          <p className="text-[16px] font-semibold text-[#181818] leading-6 capitalize group-hover:text-[#FF6701] transition-colors">{p.name}</p>
                        </Link>
                        <div className="flex items-center justify-center h-9 w-[140px] bg-[#F7F7F7] rounded-[8px]">
                          <span className="text-[14px] font-semibold text-[#181818]">{p.price}€</span>
                        </div>
                        <button className="cursor-pointer group relative h-9 w-[140px] bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] flex items-center justify-center transition-colors overflow-hidden">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-all duration-300 ease-out group-hover:translate-y-[150%] group-hover:opacity-0">
                            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="absolute text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-300 ease-out -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">Add to cart</span>
                        </button>
                      </div>
                      {i < suggestedProducts.length - 1 && <div className="h-px bg-[#E7E7E7] mt-[10px]" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT - 440px sticky sidebar */}
              <div className="w-full lg:w-[440px] shrink-0">
                <div className="lg:sticky lg:top-4 flex flex-col gap-4">
                  {/* Promo + Total card wrapper */}
                  <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
                    {/* Promo code */}
                    <div className="bg-white border border-[#EDEDED] rounded-[12px] p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <Image src="/images/shop/icon-promo.svg" alt="" width={24} height={24} className="shrink-0" />
                        <p className="flex-1 text-[16px] font-semibold text-[#181818] leading-6 capitalize">Do you have a Promo Code?</p>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Promocode"
                          value={promo}
                          onChange={(e) => setPromo(e.target.value)}
                          className="flex-1 h-12 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[8px] pl-4 pr-2 text-[14px] text-[#181818] placeholder:text-[#7E7E7E] outline-none focus:border-[#181818] transition-colors"
                        />
                        <button className="cursor-pointer bg-black hover:bg-[#292929] text-[#F7F7F7] text-[14px] font-normal px-6 h-12 rounded-[8px] transition-colors">
                          Apply
                        </button>
                      </div>
                    </div>

                    {/* Total card */}
                    <div className="bg-white border border-[#EDEDED] rounded-[12px] overflow-hidden">
                      <div className="h-px bg-[#E7E7E7]" />
                      <div className="flex flex-col gap-3 p-4">
                        <div className="flex items-center gap-3 py-[3px]">
                          <span className="flex-1 text-[14px] text-[#7E7E7E] leading-5">Products</span>
                          <span className="text-[14px] text-[#181818] leading-5">{productsTotal.toFixed(2)} €</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[18px] font-semibold text-black leading-[26px]">Total</span>
                          <span className="text-[18px] font-semibold text-black leading-[26px]">{productsTotal.toFixed(2)} €</span>
                        </div>
                        <Link
                          href="/checkout"
                          className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-[16px] font-semibold text-center rounded-[8px] h-12 flex items-center justify-center capitalize transition-colors"
                        >
                          Proceed to Checkout
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 100% Secure Payment */}
                  <div className="bg-[#F7F7F7] rounded-[12px] px-6 py-5 flex items-center gap-6">
                    <div className="w-14 h-14 relative shrink-0">
                      <Image src="/images/shop/bitcoin/badge-secure.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <p className="text-[16px] font-semibold text-[#181818] leading-6">100% Secure Payment</p>
                      <p className="text-[12px] text-[#4D4D4D] leading-4">Encrypted checkout. Your data is fully protected.</p>
                    </div>
                  </div>

                  {/* Fast & Discreet Delivery */}
                  <div className="bg-[#F7F7F7] rounded-[12px] px-6 py-5 flex items-center gap-6">
                    <div className="w-14 h-14 relative shrink-0">
                      <Image src="/images/shop/bitcoin/badge-delivery.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <p className="text-[16px] font-semibold text-[#181818] leading-6">Fast &amp; Discreet Delivery</p>
                      <p className="text-[12px] text-[#4D4D4D] leading-4">Shipping from EU &amp; USA warehouses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
