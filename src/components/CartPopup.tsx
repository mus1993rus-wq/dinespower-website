"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedProducts = [
  { brand: "Deus Medical", name: "Winimed 50 Injectible Steroid In Ampoules", price: 17, oldPrice: 20, image: "/images/shop/winimed-50.png" },
  { brand: "Biaxol", name: "Eca Xtreme (Extreme Fat Burner) In Capsules", price: 44, oldPrice: 55, image: "/images/shop/eca-xtreme.png" },
  { brand: "Deus Medical", name: "Trenbolone Hex 76.5mg injectible", price: 62, image: "/images/shop/product-1.webp" },
  { brand: "Astera Labs", name: "Andarine S4 injectible ampoules", price: 44, image: "/images/shop/product-2.webp" },
  { brand: "Deus Medical", name: "Equimed 250 injectible steroid", price: 48, oldPrice: 58, image: "/images/shop/product-5.webp" },
];

const countries = ["France", "Germany", "Italy", "Spain", "Netherlands", "Poland", "United Kingdom", "USA"];
const shippingRates: Record<string, number> = { France: 22, Germany: 22, Italy: 25, Spain: 25, Netherlands: 22, Poland: 20, "United Kingdom": 28, USA: 35 };

export default function CartPopup({ isOpen, onClose }: CartPopupProps) {
  const { items, removeItem, updateQty, totalItems, totalPrice, addItem } = useCart();
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [country, setCountry] = useState<string | null>(null);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [suggestIndex, setSuggestIndex] = useState(0);

  if (!isOpen) return null;

  const discountThreshold = 200;
  const qualifiesForDiscount = totalPrice >= discountThreshold;
  const amountToDiscount = Math.max(0, discountThreshold - totalPrice);
  const progressPercent = Math.min(100, (totalPrice / discountThreshold) * 100);

  const promoDiscount = appliedPromo === "Dines2026" ? totalPrice * 0.05 : 0;
  const discount5 = qualifiesForDiscount ? totalPrice * 0.05 : 0;
  const shippingCost = country ? shippingRates[country] || 0 : 0;
  // Shipping shown as info only in "Calculate shipping rate" — not added to cart total
  const finalTotal = totalPrice - promoDiscount - discount5;

  const handleApplyPromo = () => {
    if (promoCode.trim().toLowerCase() === "dines2026") {
      setAppliedPromo("Dines2026");
    }
  };
  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
  };

  const handleAddSuggested = (p: typeof suggestedProducts[0]) => {
    addItem({ brand: p.brand, name: p.name, price: p.price, oldPrice: p.oldPrice, image: p.image }, 1);
  };

  const currentSuggest = suggestedProducts[suggestIndex];

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[484px] bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="shrink-0 border-b border-[#E7E7E7]">
          <div className="flex items-center justify-between px-8 pt-8 pb-4">
            <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px]">Cart ({totalItems})</h2>
            <button onClick={onClose} className="cursor-pointer w-6 h-6 flex items-center justify-center text-[#181818] hover:opacity-60 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          {totalPrice > 0 && (
            <div className="px-8 pb-4">
              {qualifiesForDiscount ? (
                <div className="bg-[#E8F8EE] rounded-[12px] px-6 py-4 flex items-center justify-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00B638] flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[16px] font-semibold text-[#181818] leading-6">You have received a 5% discount</p>
                </div>
              ) : (
                <>
                  <p className="text-[14px] text-[#7E7E7E] leading-5 text-center">
                    You&apos;re just{" "}
                    <span className="inline-block font-semibold text-white bg-[#181818] px-2 py-0.5 rounded-[4px] text-[14px]">
                      {amountToDiscount}€
                    </span>{" "}
                    away from getting a <span className="font-semibold text-[#181818]">5% discount</span>
                  </p>
                  <div className="w-full h-2 bg-[#F0F0F0] rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-[#181818] rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Cart items + suggestions (scrollable) */}
        <div className="flex-1 overflow-auto">
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-[#7E7E7E] px-8">
              <p className="text-lg font-semibold mb-2">Your cart is empty</p>
              <p className="text-sm text-center">Add products to get started</p>
            </div>
          )}

          {items.length > 0 && (
            <div className="px-6 pt-4">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 mb-4 border-b border-[#E7E7E7] last:border-b-0">
                  <div className="w-[120px] h-[120px] rounded-[8px] shrink-0 flex items-center justify-center overflow-hidden p-2">
                    {item.image && (
                      <Image src={item.image} alt={item.name} width={100} height={100} className="object-contain" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-[12px] text-[#7E7E7E] leading-4">{item.brand}</p>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5 line-clamp-2 mt-1">{item.name}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[16px] font-extrabold text-[#FB2F2F] leading-5">{item.price}€</span>
                      {item.oldPrice && (
                        <span className="text-[14px] text-[#7E7E7E] line-through leading-4">{item.oldPrice} €</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-[#C3C3C3] rounded-[8px] h-9 w-[111px] px-2 justify-between">
                        <button onClick={() => updateQty(index, item.qty - 1)} className="cursor-pointer w-5 h-5 flex items-center justify-center text-[#181818]">
                          <svg width="16" height="2" viewBox="0 0 16 2"><path d="M1 1H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        </button>
                        <span className="text-[14px] font-semibold text-[#181818]">{item.qty}</span>
                        <button onClick={() => updateQty(index, item.qty + 1)} className="cursor-pointer w-5 h-5 flex items-center justify-center text-[#181818]">
                          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="cursor-pointer flex items-center gap-1.5 text-[14px] text-[#7E7E7E] hover:text-[#FB2F2F] transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <>
              {/* You might also like */}
              <div className="px-6 py-4 border-t border-[#E7E7E7]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[18px] font-extrabold text-[#181818] leading-[22px]">You might also like</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSuggestIndex((i) => (i - 1 + suggestedProducts.length) % suggestedProducts.length)}
                      className="cursor-pointer w-10 h-10 rounded-[8px] bg-[#F7F7F7] hover:bg-[#E7E7E7] flex items-center justify-center transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button
                      onClick={() => setSuggestIndex((i) => (i + 1) % suggestedProducts.length)}
                      className="cursor-pointer w-10 h-10 rounded-[8px] bg-[#F7F7F7] hover:bg-[#E7E7E7] flex items-center justify-center transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-[120px] h-[120px] rounded-[8px] shrink-0 flex items-center justify-center overflow-hidden p-2">
                    <Image src={currentSuggest.image} alt={currentSuggest.name} width={100} height={100} className="object-contain" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-[12px] text-[#7E7E7E] leading-4">{currentSuggest.brand}</p>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5 line-clamp-2 mt-1">{currentSuggest.name}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex-1 h-9 bg-[#F7F7F7] rounded-[8px] flex items-center justify-center gap-2">
                        <span className="text-[14px] font-semibold text-[#181818]">{currentSuggest.price}€</span>
                        {currentSuggest.oldPrice && (
                          <span className="text-[12px] text-[#7E7E7E] line-through">{currentSuggest.oldPrice} €</span>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddSuggested(currentSuggest)}
                        className="group cursor-pointer relative flex-1 h-9 bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] flex items-center justify-center transition-colors overflow-hidden"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-all duration-300 ease-out group-hover:translate-y-[150%] group-hover:opacity-0">
                          <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3 6H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="absolute text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-300 ease-out -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                          Add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo code - expandable */}
              <div className="px-6 border-t border-[#E7E7E7]">
                <button onClick={() => setPromoOpen(!promoOpen)} className="cursor-pointer w-full flex items-center justify-between py-4 text-[16px] font-semibold text-[#181818]">
                  <div className="flex items-center gap-3">
                    {/* Figma promo seal icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#181818">
                      <path d="M20.89 10.31l-1.05-1.22c-.2-.23-.36-.66-.36-.97V6.8c0-.82-.67-1.49-1.49-1.49h-1.32c-.3 0-.74-.16-.97-.36l-1.22-1.05c-.53-.45-1.4-.45-1.94 0l-1.21 1.06c-.23.19-.67.35-.97.35H8.01c-.82 0-1.49.67-1.49 1.49v1.33c0 .3-.16.73-.35.96l-1.04 1.23c-.44.53-.44 1.39 0 1.92l1.04 1.23c.19.23.35.66.35.96v1.33c0 .82.67 1.49 1.49 1.49h1.34c.3 0 .74.16.97.36l1.22 1.05c.53.45 1.4.45 1.94 0l1.22-1.05c.23-.2.66-.36.97-.36h1.32c.82 0 1.49-.67 1.49-1.49v-1.32c0-.3.16-.74.36-.97l1.05-1.22c.44-.54.44-1.42-.01-1.96z" />
                      <path d="M9.17 15.58a.95.95 0 01-.67-.28.97.97 0 010-1.34l5.66-5.66c.37-.37.97-.37 1.34 0 .37.37.37.97 0 1.34l-5.66 5.66a.96.96 0 01-.67.28z" fill="white" />
                      <circle cx="9.5" cy="9.5" r="1.25" fill="white" />
                      <circle cx="14.5" cy="14.5" r="1.25" fill="white" />
                    </svg>
                    Do you have a Promo Code?
                  </div>
                  <span className="text-[20px] leading-none">{promoOpen ? "−" : "+"}</span>
                </button>
                {promoOpen && (
                  <div className="pb-4">
                    {!appliedPromo ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Promocode"
                          className="flex-1 border border-[#E7E7E7] rounded-[8px] h-10 px-3 text-[14px] outline-none focus:border-[#181818]"
                        />
                        <button
                          onClick={handleApplyPromo}
                          className="cursor-pointer bg-[#181818] hover:bg-[#333] text-white text-[14px] font-semibold px-5 h-10 rounded-[8px] transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" fill="#00B638" />
                          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] text-[#00B638] font-semibold">Promo code applied</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Shipping rate - expandable */}
              <div className="px-6 border-t border-[#E7E7E7]">
                <button onClick={() => setShippingOpen(!shippingOpen)} className="cursor-pointer w-full flex items-center justify-between py-4 text-[16px] font-semibold text-[#181818]">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M16 3h5v5M8 21H3v-5M21 3l-7 7M3 21l7-7" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Calculate shipping rate
                  </div>
                  <span className="text-[20px] leading-none">{shippingOpen ? "−" : "+"}</span>
                </button>
                {shippingOpen && (
                  <div className="pb-4">
                    <div className="relative">
                      <button
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        className="cursor-pointer w-full flex items-center justify-between border border-[#E7E7E7] rounded-[8px] h-10 px-3 text-[14px] text-[#181818]"
                      >
                        <span className={country ? "text-[#181818]" : "text-[#7E7E7E]"}>{country || "Select country"}</span>
                        <div className="flex items-center gap-2">
                          {country && (
                            <button
                              onClick={(e) => { e.stopPropagation(); setCountry(null); }}
                              className="cursor-pointer text-[#7E7E7E] hover:text-[#181818]"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                            </button>
                          )}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                      </button>
                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E7E7E7] rounded-[8px] shadow-lg z-10 max-h-[200px] overflow-auto">
                          {countries.map((c) => (
                            <button
                              key={c}
                              onClick={() => { setCountry(c); setCountryDropdownOpen(false); }}
                              className="cursor-pointer w-full text-left px-3 py-2 text-[14px] text-[#181818] hover:bg-[#F7F7F7]"
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {country && (
                      <div className="flex items-center justify-between mt-3 text-[14px]">
                        <span className="text-[#7E7E7E]">Shipping</span>
                        <span className="text-[#181818] font-semibold">From {shippingCost.toFixed(2)} €</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="shrink-0 border-t border-[#E7E7E7] px-6 py-4">
            <div className="flex flex-col gap-1 mb-3">
              <div className="flex justify-between text-[14px]">
                <span className="text-[#7E7E7E]">Products</span>
                <span className="text-[#181818]">{totalPrice.toFixed(2)} €</span>
              </div>
              {qualifiesForDiscount && (
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#7E7E7E]">Order over 200€</span>
                  <span className="text-[#FB2F2F]">-{discount5.toFixed(2)} €</span>
                </div>
              )}
              {appliedPromo && (
                <div className="flex justify-between text-[14px]">
                  <span className="text-[#7E7E7E]">Promocode</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="bg-[#FFE3E3] text-[#FB2F2F] text-[12px] font-semibold px-2 py-0.5 rounded-[4px] flex items-center gap-1">
                      {appliedPromo}
                      <button onClick={handleRemovePromo} className="cursor-pointer">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      </button>
                    </span>
                    <span className="text-[#FB2F2F] ml-1">-{promoDiscount.toFixed(2)} €</span>
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-between text-[20px] font-extrabold text-[#181818] mb-4">
              <span>Total</span>
              <span>{finalTotal.toFixed(2)} €</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full bg-[#FF6701] hover:bg-[#E65D00] text-white text-[16px] font-semibold h-12 rounded-[8px] flex items-center justify-center transition-colors mb-2"
            >
              Check Out
            </Link>
            <Link
              href="/cart"
              onClick={onClose}
              className="w-full text-[14px] font-semibold text-[#181818] h-12 flex items-center justify-center hover:text-[#FF6701] transition-colors"
            >
              Open Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
