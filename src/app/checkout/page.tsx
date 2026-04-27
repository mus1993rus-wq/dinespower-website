"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrdersContext";
import { useAuth } from "@/context/AuthContext";

const fallbackItems = [
  { brand: "Deus Medical", name: "3-Trenbomed 150 Injectable Steroid In Ampoules", price: 57, oldPrice: 65, qty: 2, image: "/images/shop/products/injectable-trenbomed-150.jpg" },
  { brand: "Biaxol", name: "Yohimbine Fat Burner Capsules", price: 24, qty: 1, image: "/images/shop/products/fat-burn-yohimbine.png" },
];

const suggestedProducts = [
  { brand: "Deus Medical", name: "Viamed 100 (Sildenafil) 100mg Oral Jelly", price: 17, image: "/images/shop/products/sex-support-viamed-100.webp" },
  { brand: "Biaxol", name: "ECA Fat Burner Capsules", price: 40, image: "/images/shop/products/fat-burn-eca-xtreme-new.png" },
  { brand: "Astera Labs", name: "BCAA Supplements For Muscle Recovery", price: 28, image: "/images/shop/products/amino-acids-bcaa.webp" },
];

const inputClass = "w-full h-[53px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { user, logout } = useAuth();
  const [helpOpen, setHelpOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "bitcoin">("bitcoin");
  const [promo, setPromo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [zip, setZip] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [suggestIdx, setSuggestIdx] = useState(0);

  // Use real cart items if available, otherwise fallback demo items
  const orderItems = items.length > 0 ? items : fallbackItems;
  const productsTotal = orderItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = productsTotal >= 200 ? 11.5 : 0;
  const total = productsTotal - discount;
  const formValid = firstName && lastName && email && country && street && zip;

  const handleConfirmAndPay = () => {
    if (!formValid) return;
    const order = createOrder({
      items: orderItems.map((i) => ({ ...i })),
      subtotal: productsTotal,
      shipping: -discount,
      total,
      paymentMethod,
      shippingAddress: {
        firstName,
        lastName,
        country,
        city,
        street,
        stateRegion,
        zip,
        phone,
        email,
      },
      notes: orderNotes || undefined,
    });
    if (items.length > 0) clearCart();
    router.push(`/checkout/confirmation?method=${paymentMethod}&order=${order.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#181818]">
      {/* Black header bar — content has rounded top corners that overlap it */}
      <div className="w-full bg-[#181818] h-[80px] tablet:h-[104px] shrink-0 px-4 tablet:px-0">
        <div className="max-w-[1340px] mx-auto h-[60px] tablet:h-[76px] flex items-center justify-between gap-3">
          <Link href="/cart" className="cursor-pointer flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] h-10 tablet:h-11 px-3 tablet:w-[140px] tablet:px-0 rounded-[8px] justify-center text-[#B6B6B6] text-[13px] tablet:text-[14px] font-semibold transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden tablet:inline">Back to cart</span>
          </Link>
          <Link href="/" className="flex items-center">
            <Image src="/images/shop/logo.svg" alt="Dines Power" width={106} height={44} className="object-contain w-[80px] tablet:w-[106px]" />
          </Link>
          <div className="relative">
            <button
              onClick={() => setHelpOpen((v) => !v)}
              className="cursor-pointer flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] h-10 tablet:h-11 px-3 tablet:w-[140px] tablet:px-0 rounded-[8px] justify-center text-[#B6B6B6] hover:text-white text-[13px] tablet:text-[14px] font-semibold transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden tablet:inline">Need Help?</span>
            </button>
            {helpOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setHelpOpen(false)} aria-hidden />
                <div className="absolute top-full right-0 mt-2 bg-white border border-[#E7E7E7] rounded-[12px] shadow-lg p-2 min-w-[220px] z-40">
                  <a
                    href="https://t.me/+eFl6hboMcbxlNDI0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHelpOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[14px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#00A9DE] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3.32 11.87 18.75 5.92c.72-.26 1.34.17 1.11 1.26L17.23 19.55c-.19.88-.71 1.09-1.44.68l-4-2.95-1.93 1.86c-.21.21-.39.39-.81.39l.29-4.07 7.41-6.7c.32-.28-.07-.44-.5-.16l-9.16 5.77-3.95-1.23c-.86-.27-.88-.86.18-1.27z" fill="white"/></svg>
                    </span>
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/dinespower"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHelpOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[14px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#00D43F] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1c-.1.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.4.8-1.4.1-.2 0-.3 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-1 1.1-1.2 2.4-1.2 2.6 0 .2.6 4 4.1 5.5 2.3 1 3.2.9 4.1.8.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.2-.2-.4-.2zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                    </span>
                    WhatsApp
                  </a>
                  <a
                    href="mailto:support@dinespower.com"
                    onClick={() => setHelpOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[14px] font-semibold text-[#181818] hover:bg-[#F7F7F7] transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 6h18v12H3z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 7l9 6 9-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    Mail
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* White content area — full-width with rounded top corners, overlaps black header by 28px */}
      <div className="flex-1 bg-white rounded-t-[16px] -mt-[28px] relative pt-8 pb-16">
        <div className="max-w-[1340px] mx-auto w-full px-4 ">
        <div className="flex flex-col desktop:flex-row gap-6 desktop:gap-8 wide:gap-20">
          {/* LEFT — form area */}
          <div className="w-full desktop:flex-1 wide:flex-none wide:w-[820px] desktop:shrink wide:shrink-0 flex flex-col gap-6 desktop:gap-8 min-w-0">
            {/* Returning customer card */}
            <div className="bg-[#F7F7F7] rounded-[16px] p-2">
              {user ? (
                /* Authenticated state — Figma 2482:37761 */
                <div className="flex items-center gap-3 tablet:gap-4 px-2 tablet:pr-4">
                  <div className="w-[44px] h-[44px] tablet:w-[60px] tablet:h-[60px] relative flex items-center justify-center shrink-0">
                    <div className="w-full h-full tablet:w-[55px] tablet:h-[55px] bg-white border border-[#E7E7E7] rounded-[8px] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" fill="#181818" />
                        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" fill="#181818" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[16px] font-semibold text-black leading-6 capitalize truncate">
                      {user.displayName || `${user.firstName ?? ""}${user.lastName ? "_" + user.lastName : ""}`.trim() || user.email?.split("@")[0]}
                    </p>
                  </div>
                  <button
                    onClick={() => logout()}
                    className="cursor-pointer shrink-0 bg-white border border-[#E7E7E7] hover:border-[#181818] text-[14px] font-semibold text-black h-11 px-6 rounded-[8px] transition-colors"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col tablet:flex-row tablet:items-center gap-3 tablet:gap-4 tablet:pr-4">
                  <div className="flex items-center gap-3 tablet:flex-1 min-w-0">
                    <div className="w-[44px] h-[44px] tablet:w-[60px] tablet:h-[60px] relative flex items-center justify-center shrink-0">
                      <div className="w-full h-full tablet:w-[55px] tablet:h-[55px] bg-white border border-[#E7E7E7] rounded-[8px] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" stroke="#181818" strokeWidth="1.5" />
                          <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <p className="text-[16px] font-semibold text-black leading-6 capitalize">Returning Customer?</p>
                      <p className="text-[14px] text-[#7E7E7E] leading-5">Sign In to Your Account</p>
                    </div>
                  </div>
                  <div className="flex gap-2 tablet:shrink-0">
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-auth-popup", { detail: { mode: "login" } }))}
                      className="cursor-pointer flex-1 tablet:flex-none bg-white border border-[#E7E7E7] hover:border-[#181818] text-[14px] font-semibold text-black h-11 px-6 rounded-[8px] transition-colors"
                    >
                      Sign In<span className="hidden tablet:inline"> to Your Account</span>
                    </button>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-auth-popup", { detail: { mode: "register" } }))}
                      className="cursor-pointer flex-1 tablet:flex-none bg-white border border-[#E7E7E7] hover:border-[#181818] text-[14px] font-semibold text-black h-11 px-6 rounded-[8px] transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Personal Info */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-black leading-[26px]">Personal Info</h2>
              <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-2">
                <input type="text" placeholder="First Name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`${inputClass} tablet:flex-1 min-w-0 shrink-0`} />
                <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`${inputClass} tablet:flex-1 min-w-0 shrink-0`} />
              </div>
              <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-2">
                <div className="tablet:flex-1 min-w-0 shrink-0 flex items-center bg-white border border-[#E0E0E0] rounded-[8px] h-[53px] pl-4 pr-2 gap-3">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[16px]">🇺🇸</span>
                    <span className="text-[14px] text-[#181818]">US (+1)</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className="flex-1 min-w-0 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none bg-transparent" />
                </div>
                <input type="email" placeholder="E-mail address*" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputClass} tablet:flex-1 min-w-0 shrink-0`} />
              </div>
            </div>

            {/* Delivery */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-black leading-[26px]">Delivery</h2>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`${inputClass} appearance-none cursor-pointer pr-10 ${country ? "text-[#181818]" : "text-[#8A8A8A]"}`}
                >
                  <option value="" disabled>Select Country / Region *</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Poland">Poland</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">USA</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-2">
                <input type="text" placeholder="Street Address *" value={street} onChange={(e) => setStreet(e.target.value)} className={`${inputClass} tablet:flex-[50] min-w-0`} />
                <div className="tablet:flex-[29] min-w-0 relative">
                  <select
                    value={stateRegion}
                    onChange={(e) => setStateRegion(e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer pr-10 ${stateRegion ? "text-[#181818]" : "text-[#8A8A8A]"}`}
                  >
                    <option value="" disabled>State / County (Optional)</option>
                    <option value="N/A">N/A</option>
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <input type="text" placeholder="Post Code / ZIP *" value={zip} onChange={(e) => setZip(e.target.value)} className={`${inputClass} tablet:flex-[21] min-w-0`} />
              </div>
            </div>

            {/* Billing */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[18px] font-semibold text-black leading-[26px]">Billing</h2>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setPaymentMethod("bank")}
                  className={`cursor-pointer flex items-center gap-3 tablet:gap-4 pl-3 pr-4 tablet:pl-4 tablet:pr-6 py-2 rounded-[12px] border transition-colors ${
                    paymentMethod === "bank" ? "border-[#FF6701] bg-white" : "border-[#E7E7E7] bg-white hover:border-[#B6B6B6]"
                  }`}
                >
                  <div className="w-12 h-12 tablet:w-16 tablet:h-16 rounded-[4px] flex items-center justify-center shrink-0">
                    <Image src="/images/shop/delivery-bank.png" alt="Bank transfer" width={64} height={64} className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1 text-left">
                    <p className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] leading-5 tablet:leading-6">Bank transfer</p>
                    <p className="text-[12px] text-[#4D4D4D] leading-4">Telegraphic Transfer (wire) to company bank account</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${paymentMethod === "bank" ? "border-[#FF6701]" : "border-[#CBCBCB]"}`}>
                    {paymentMethod === "bank" && <div className="w-3 h-3 rounded-full bg-[#FF6701]" />}
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod("bitcoin")}
                  className={`cursor-pointer flex items-center gap-3 tablet:gap-4 pl-3 pr-4 tablet:pl-4 tablet:pr-6 py-2 rounded-[12px] border transition-colors ${
                    paymentMethod === "bitcoin" ? "border-[#FF6701] bg-white" : "border-[#E7E7E7] bg-white hover:border-[#B6B6B6]"
                  }`}
                >
                  <div className="w-12 h-12 tablet:w-16 tablet:h-16 rounded-[4px] flex items-center justify-center shrink-0">
                    <Image src="/images/shop/delivery-bitcoin.png" alt="Bitcoin" width={64} height={64} className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] leading-5 tablet:leading-6">Bitcoin</p>
                      <span className="bg-[#FF6701]/10 text-[#FF6701] text-[11px] tablet:text-[14px] font-semibold px-2 tablet:px-4 py-0.5 tablet:py-1 rounded-full">Recommended</span>
                    </div>
                    <p className="text-[12px] text-[#4D4D4D] leading-4">The preferred and most reliable payment method</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${paymentMethod === "bitcoin" ? "border-[#FF6701]" : "border-[#CBCBCB]"}`}>
                    {paymentMethod === "bitcoin" && <div className="w-3 h-3 rounded-full bg-[#FF6701]" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-black leading-[26px]">Additional Information</h2>
              <textarea
                placeholder="Order notes  (optional)"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full bg-white border border-[#E7E7E7] rounded-[8px] px-4 py-3 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors resize-none h-[108px]"
              />
            </div>
          </div>

          {/* RIGHT — sidebar */}
          <div className="w-full desktop:w-[360px] wide:w-[440px] shrink-0">
            <div className="sticky top-4 flex flex-col gap-4">
              {/* You might also like — Figma 1442:11703 */}
              <div className="flex flex-col gap-3 px-4 py-2 rounded-[12px]">
                <div className="flex items-center gap-2">
                  <p className="flex-1 text-[18px] font-semibold text-black leading-normal">You might also like</p>
                  <button
                    onClick={() => setSuggestIdx((p) => (p - 1 + suggestedProducts.length) % suggestedProducts.length)}
                    className="cursor-pointer w-10 h-10 rounded-[8px] bg-[#F7F7F7] border border-[#E7E7E7] hover:bg-white flex items-center justify-center transition-colors"
                    aria-label="Previous"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button
                    onClick={() => setSuggestIdx((p) => (p + 1) % suggestedProducts.length)}
                    className="cursor-pointer w-10 h-10 rounded-[8px] bg-[#F7F7F7] border border-[#E7E7E7] hover:bg-white flex items-center justify-center transition-colors"
                    aria-label="Next"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
                {(() => {
                  const p = suggestedProducts[suggestIdx];
                  return (
                    <div className="flex items-center gap-4 bg-white">
                      <div className="w-[120px] h-[120px] rounded-[8px] shrink-0 p-2 flex items-center justify-center bg-white border border-[#E7E7E7]">
                        <Image src={p.image} alt={p.name} width={104} height={104} className="object-contain" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5 justify-center">
                        <p className="text-[12px] text-[#7E7E7E] leading-4">{p.brand}</p>
                        <p className="text-[16px] font-semibold text-[#181818] leading-6 line-clamp-2 capitalize">{p.name}</p>
                        <div className="flex items-center gap-2 w-full">
                          <div className="flex-1 bg-[#F7F7F7] rounded-[8px] h-9 flex items-center justify-center">
                            <span className="text-[14px] font-semibold text-[#181818] leading-5">{p.price}€</span>
                          </div>
                          <button className="cursor-pointer flex-1 h-9 bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] flex items-center justify-center transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3 6H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Order Summary wrapper */}
              <div className="bg-[#F7F7F7] rounded-[16px] p-4 flex flex-col gap-4">
                {/* Order Summary items */}
                <div className="bg-white rounded-[12px] p-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-semibold text-[#181818] leading-6 capitalize">Order Summary</p>
                    <Link href="/cart" className="cursor-pointer flex items-center gap-2 bg-white border border-[#CBCBCB] hover:border-[#181818] px-4 py-2 rounded-[8px] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[14px] font-semibold text-black leading-5">Edit</span>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    {orderItems.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-start gap-4 py-2">
                          <div className="w-14 h-14 bg-white rounded-[8px] shrink-0 p-1 flex items-center justify-center">
                            {item.image && <Image src={item.image} alt={item.name} width={48} height={48} className="object-contain" />}
                          </div>
                          <div className="flex-1 flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                              <p className="text-[12px] text-[#7E7E7E] leading-4">{item.brand}</p>
                              <p className="text-[12px] font-bold text-[#181818] leading-4">{item.name}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-baseline gap-2">
                                {item.oldPrice ? (
                                  <>
                                    <span className="text-[12px] font-semibold text-[#FB2F2F] leading-4">{item.price}€</span>
                                    <span className="text-[12px] text-[#7E7E7E] line-through leading-4">{item.oldPrice} €</span>
                                  </>
                                ) : (
                                  <span className="text-[12px] text-[#181818] leading-4">{item.price}€</span>
                                )}
                              </div>
                              <span className="text-[12px] text-[#7E7E7E] leading-4">Quantity: {item.qty}</span>
                            </div>
                          </div>
                        </div>
                        {i < orderItems.length - 1 && <div className="h-px bg-[#E7E7E7]" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo code */}
                <div className="bg-white border border-[#EDEDED] rounded-[12px] p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Image src="/images/shop/icon-promo.svg" alt="" width={24} height={24} className="shrink-0" />
                    <p className="flex-1 text-[16px] font-semibold text-[#181818] leading-6 capitalize">Do you have a Promo Code?</p>
                  </div>
                  <div className="flex gap-1">
                    <input
                      type="text"
                      placeholder="Promocode"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      className="flex-1 h-12 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[8px] pl-4 pr-2 text-[14px] text-[#181818] placeholder:text-[#7E7E7E] outline-none focus:border-[#181818] transition-colors"
                    />
                    <button className="cursor-pointer bg-black hover:bg-[#292929] text-[#F7F7F7] text-[14px] px-6 h-12 rounded-[8px] transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Total details */}
                <div className="bg-white border border-[#EDEDED] rounded-[12px] p-4 flex flex-col gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 py-[3px]">
                      <span className="flex-1 text-[14px] text-[#7E7E7E] leading-5">Products</span>
                      <span className="text-[14px] text-[#181818] leading-5">{productsTotal.toFixed(2)} €</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex items-center gap-3 py-[3px]">
                        <span className="text-[14px] text-[#7E7E7E] leading-5">Order over 200€</span>
                        <span className="flex-1 text-[14px] text-[#FB2F2F] leading-5 text-right">-{discount.toFixed(2)} €</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[18px] font-semibold text-black leading-[26px]">Total</span>
                    <span className="text-[18px] font-semibold text-black leading-[26px]">{total.toFixed(2)} €</span>
                  </div>
                  <button
                    disabled={!formValid}
                    onClick={handleConfirmAndPay}
                    className={`h-12 px-8 rounded-[8px] text-[16px] font-semibold text-center capitalize transition-colors ${
                      formValid ? "cursor-pointer bg-[#FF6701] hover:bg-[#E65D00] text-white" : "bg-[#E7E7E7] text-[#7E7E7E] cursor-not-allowed"
                    }`}
                  >
                    Confirm And Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Minimal footer */}
      <div className="bg-[#181818] shrink-0 py-5 tablet:py-0 tablet:h-[68px]">
        <div className="max-w-[1340px] mx-auto h-full flex flex-col tablet:flex-row items-center tablet:justify-between gap-3 tablet:gap-0 px-4 desktop:px-12 wide:px-[185px]">
          <p className="text-[12px] tablet:text-[14px] text-[#7E7E7E] text-center tablet:text-left">© 2026 DINESPOWER.TO is the best place to buy steroids online.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-[12px] tablet:text-[14px] text-[#7E7E7E] hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-[12px] tablet:text-[14px] text-[#7E7E7E] hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
