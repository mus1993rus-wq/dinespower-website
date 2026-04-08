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
  { id: 1, brand: "Biaxol", name: "Eca Xtreme (Extreme Fat Burner) In Capsules", price: 44, oldPrice: 55, qty: 1, image: "/images/shop/product-1.webp" },
  { id: 2, brand: "Astera Labs", name: "Dietary Supplements For Fat Burning And Energy Supply", price: 88, qty: 2, image: "/images/shop/product-2.webp" },
];

const suggestedProducts: SuggestedProduct[] = [
  { brand: "Deus Medical", name: "Winimed 50 Injectable Steroid In Ampoules", price: 17, image: "/images/shop/injectable-1.jpg" },
  { brand: "Deus Medical", name: "Winimed 50 Injectable Steroid In Ampoules", price: 17, image: "/images/shop/injectable-2.jpg" },
  { brand: "Deus Medical", name: "Viamed 100 (Seldenafilcitrat 100mg Oral Jelly - Viagra)", price: 17, image: "/images/shop/product-3.jpg" },
  { brand: "Deus Medical", name: "Dietary Supplements For Fat Burning And Energy Supply", price: 17, image: "/images/shop/product-4.jpg" },
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
        <div className="max-w-[1340px] mx-auto pt-8 pb-16">
          {/* Title */}
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-tight mb-4">
            My Cart ({totalItems} Items)
          </h1>

          {/* Discount progress bar */}
          {amountToDiscount > 0 && (
            <div className="mb-8">
              <p className="text-[14px] text-[#7E7E7E] mb-2">
                You&apos;re just <span className="inline-flex items-center bg-[#181818] text-white text-[13px] font-semibold px-2 py-0.5 rounded mx-1">{amountToDiscount}€</span> away from getting a 5% discount
              </p>
              <div className="w-full h-[6px] bg-[#E7E7E7] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF6701] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
          {amountToDiscount <= 0 && (
            <div className="mb-8">
              <p className="text-[14px] text-[#00B638] font-semibold mb-2">
                You&apos;ve unlocked a 5% discount!
              </p>
              <div className="w-full h-[6px] bg-[#E7E7E7] rounded-full overflow-hidden">
                <div className="h-full bg-[#00B638] rounded-full w-full" />
              </div>
            </div>
          )}

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">
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
            <div className="flex gap-8">
              {/* LEFT - Cart items + suggestions */}
              <div className="flex-1 min-w-0">
                {/* Cart items list */}
                <div className="flex flex-col">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-5 border-b border-[#E7E7E7]">
                      {/* Trash icon */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-[#B6B6B6] hover:text-[#FF3B30] transition-colors shrink-0"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6H5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Product image */}
                      <div className="w-[80px] h-[80px] bg-[#F7F7F7] rounded-lg shrink-0 overflow-hidden">
                        <Image src={item.image} alt={item.name} width={80} height={80} className="object-cover w-full h-full" unoptimized />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] text-[#7E7E7E]">{item.brand}</p>
                        <p className="text-[14px] font-semibold text-[#181818] leading-[18px] line-clamp-2 mt-0.5">{item.name}</p>
                        {/* Qty controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-[#E7E7E7] rounded-[8px] h-[32px]">
                            <button onClick={() => updateQty(item.id, -1)} className="w-8 h-full flex items-center justify-center text-[#B6B6B6] hover:text-[#181818] transition-colors">
                              <svg width="12" height="2" viewBox="0 0 12 2"><path d="M1 1H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            </button>
                            <span className="w-7 text-center text-[13px] font-semibold">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="w-8 h-full flex items-center justify-center text-[#B6B6B6] hover:text-[#181818] transition-colors">
                              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        <p className="text-[16px] font-extrabold text-[#181818]">{item.price * item.qty}&euro;</p>
                        {item.oldPrice && (
                          <p className="text-[13px] text-[#B6B6B6] line-through">{item.oldPrice * item.qty}&euro;</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* You might also like */}
                <div className="mt-10">
                  <h2 className="text-[20px] font-extrabold text-[#181818] mb-5">You might also like</h2>
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {suggestedProducts.map((p, i) => (
                      <div key={i} className="w-[220px] shrink-0 border border-[#E7E7E7] rounded-[12px] overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="w-full h-[160px] bg-[#F7F7F7] relative overflow-hidden">
                          <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                        </div>
                        <div className="p-3">
                          <p className="text-[11px] text-[#7E7E7E]">{p.brand}</p>
                          <p className="text-[13px] font-semibold text-[#181818] leading-[16px] line-clamp-2 mt-0.5 min-h-[32px]">{p.name}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-[15px] font-extrabold text-[#181818]">{p.price}&euro;</p>
                            <button className="w-[32px] h-[32px] bg-[#F7F7F7] hover:bg-[#FF6701] rounded-[6px] flex items-center justify-center transition-colors group/btn">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#181818] group-hover/btn:text-white transition-colors">
                                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT sidebar */}
              <div className="w-[340px] shrink-0">
                <div className="sticky top-4 flex flex-col gap-5">
                  {/* Promo code */}
                  <div className="bg-[#F7F7F7] rounded-[12px] p-5">
                    <h3 className="text-[14px] font-semibold text-[#181818] mb-3">Do You Have A Promo Code?</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        value={promo}
                        onChange={(e) => setPromo(e.target.value)}
                        className="flex-1 h-[44px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[13px] text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors"
                      />
                      <button className="bg-[#181818] hover:bg-[#292929] text-white text-[13px] font-semibold px-5 rounded-[8px] h-[44px] transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-[#F7F7F7] rounded-[12px] p-5">
                    <div className="flex justify-between text-[14px] mb-3">
                      <span className="text-[#7E7E7E]">Products total</span>
                      <span className="font-semibold text-[#181818]">{productsTotal}&euro;</span>
                    </div>
                    <div className="border-t border-[#E7E7E7] pt-3 flex justify-between">
                      <span className="text-[16px] font-extrabold text-[#181818]">Total</span>
                      <span className="text-[20px] font-extrabold text-[#181818]">{productsTotal}&euro;</span>
                    </div>
                  </div>

                  {/* Checkout button */}
                  <Link
                    href="/checkout"
                    className="w-full bg-[#FF6701] hover:bg-[#E65D00] text-white text-[14px] font-semibold rounded-[8px] h-[48px] flex items-center justify-center transition-colors"
                  >
                    Proceed To Checkout
                  </Link>

                  {/* Trust badges */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[36px] h-[36px] bg-[#F7F7F7] rounded-full flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#00B638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 12L11 14L15 10" stroke="#00B638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#181818]">100% Secure Payment</p>
                        <p className="text-[11px] text-[#7E7E7E]">Your data is protected</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[36px] h-[36px] bg-[#F7F7F7] rounded-full flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 5L19 12L12 19" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#181818]">Fast &amp; Discreet Delivery</p>
                        <p className="text-[11px] text-[#7E7E7E]">Shipped in plain packaging</p>
                      </div>
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
