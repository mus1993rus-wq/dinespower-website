"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── Sample data ── */

const orderItems = [
  { brand: "Biaxol", name: "Eca Xtreme (Extreme Fat Burner) In Capsules", price: 44, oldPrice: 55, qty: 1, image: "/images/shop/product-1.webp" },
  { brand: "Astera Labs", name: "Dietary Supplements For Fat Burning And Energy Supply", price: 88, qty: 2, image: "/images/shop/product-2.webp" },
];

const suggestedProducts = [
  { brand: "Deus Medical", name: "Winimed 50 Injectable Steroid In Ampoules", price: 17, image: "/images/shop/injectable-1.jpg" },
  { brand: "Deus Medical", name: "Winimed 50 Injectable Steroid In Ampoules", price: 17, image: "/images/shop/injectable-2.jpg" },
  { brand: "Deus Medical", name: "Viamed 100 (Seldenafilcitrat 100mg Oral Jelly)", price: 17, image: "/images/shop/product-3.jpg" },
];

const inputClass = "w-full border border-[#E7E7E7] rounded-[8px] h-[48px] px-4 text-[14px] text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors bg-white";
const selectClass = "w-full border border-[#E7E7E7] rounded-[8px] h-[48px] px-4 text-[14px] text-[#181818] outline-none focus:border-[#FF6701] transition-colors bg-white appearance-none cursor-pointer";
const labelClass = "text-[13px] text-[#7E7E7E] mb-1.5 block";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("bitcoin");
  const [promo, setPromo] = useState("");
  const [suggestIndex, setSuggestIndex] = useState(0);

  const productsTotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = productsTotal >= 200 ? 11.5 : 0;
  const total = productsTotal - discount;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ── TOP BAR ── */}
      <div className="w-full bg-[#181818] h-[48px] shrink-0">
        <div className="max-w-[1340px] mx-auto h-full flex items-center justify-between px-4">
          <Link href="/cart" className="flex items-center gap-2 text-white text-[13px] hover:text-[#FF6701] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to cart
          </Link>
          <Link href="/" className="text-white text-[16px] font-extrabold tracking-wider uppercase">
            DINES POWER
          </Link>
          <Link href="#" className="text-white text-[13px] hover:text-[#FF6701] transition-colors">
            Need Help?
          </Link>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1">
        <div className="max-w-[1340px] mx-auto px-4 py-8 flex gap-8">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 max-w-[620px] flex flex-col gap-8">

            {/* Returning Customer bar */}
            <div className="flex items-center justify-between bg-[#F7F7F7] rounded-[12px] px-5 py-4">
              <span className="text-[14px] text-[#181818]">Returning Customer?</span>
              <div className="flex gap-3">
                <button className="h-[36px] px-5 bg-[#181818] hover:bg-[#292929] text-white text-[13px] font-semibold rounded-[8px] transition-colors">
                  Sign In to Your Account
                </button>
                <button className="h-[36px] px-5 border border-[#E7E7E7] hover:border-[#181818] text-[#181818] text-[13px] font-semibold rounded-[8px] transition-colors bg-white">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Personal Info */}
            <section>
              <h2 className="text-[18px] font-extrabold text-[#181818] mb-5">Personal Info</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" placeholder="John" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" placeholder="Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone number</label>
                  <div className="flex gap-2">
                    <div className="w-[80px] shrink-0 border border-[#E7E7E7] rounded-[8px] h-[48px] flex items-center justify-center gap-1 bg-white cursor-pointer">
                      <span className="text-[14px]">+49</span>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <input type="tel" placeholder="000 000 0000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" placeholder="your@email.com" className={inputClass} />
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section>
              <h2 className="text-[18px] font-extrabold text-[#181818] mb-5">Delivery</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Country / Region</label>
                  <select className={selectClass}>
                    <option>Select Country</option>
                    <option>Germany</option>
                    <option>United Kingdom</option>
                    <option>France</option>
                    <option>Netherlands</option>
                    <option>Poland</option>
                    <option>Spain</option>
                    <option>Italy</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Town / City</label>
                  <select className={selectClass}>
                    <option>Select City</option>
                    <option>Berlin</option>
                    <option>Munich</option>
                    <option>Hamburg</option>
                    <option>Frankfurt</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Street Address</label>
                  <input type="text" placeholder="123 Main Street, Apt 4B" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State / County</label>
                  <select className={selectClass}>
                    <option>Select State</option>
                    <option>Bavaria</option>
                    <option>Hesse</option>
                    <option>Saxony</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Post Code / ZIP</label>
                  <input type="text" placeholder="10001" className={inputClass} />
                </div>
              </div>
            </section>

            {/* Billing / Payment */}
            <section>
              <h2 className="text-[18px] font-extrabold text-[#181818] mb-5">Billing</h2>
              <div className="flex flex-col gap-3">
                {/* Bank transfer */}
                <label
                  className={`flex items-start gap-4 p-4 border rounded-[12px] cursor-pointer transition-colors ${paymentMethod === "bank" ? "border-[#181818] bg-[#FAFAFA]" : "border-[#E7E7E7] hover:border-[#B6B6B6]"}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentMethod === "bank" ? "border-[#181818]" : "border-[#E7E7E7]"}`}>
                    {paymentMethod === "bank" && <div className="w-2.5 h-2.5 rounded-full bg-[#181818]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 21H21" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 6L12 3L19 6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 10V21" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 10V21" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 14V17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 14V17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 14V17" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[14px] font-semibold text-[#181818]">Bank transfer</span>
                    </div>
                    <p className="text-[12px] text-[#7E7E7E] mt-1">Direct bank payment via SEPA or SWIFT. You will receive payment instructions after placing the order.</p>
                  </div>
                  <input type="radio" name="payment" value="bank" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} className="hidden" />
                </label>

                {/* Bitcoin */}
                <label
                  className={`flex items-start gap-4 p-4 border rounded-[12px] cursor-pointer transition-colors ${paymentMethod === "bitcoin" ? "border-[#181818] bg-[#FAFAFA]" : "border-[#E7E7E7] hover:border-[#B6B6B6]"}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentMethod === "bitcoin" ? "border-[#181818]" : "border-[#E7E7E7]"}`}>
                    {paymentMethod === "bitcoin" && <div className="w-2.5 h-2.5 rounded-full bg-[#181818]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#F7931A" strokeWidth="1.5" />
                        <path d="M9.5 8H13.5C14.88 8 16 9.12 16 10.5C16 11.88 14.88 13 13.5 13H9.5V8Z" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 13H14C15.38 13 16.5 14.12 16.5 15.5C16.5 16.88 15.38 18 14 18H9.5V13Z" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 6V8" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 18V20" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[14px] font-semibold text-[#181818]">Bitcoin</span>
                      <span className="bg-[#FF6701] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Recommended</span>
                    </div>
                    <p className="text-[12px] text-[#7E7E7E] mt-1">Pay with Bitcoin for faster processing and additional privacy. Instant confirmation.</p>
                  </div>
                  <input type="radio" name="payment" value="bitcoin" checked={paymentMethod === "bitcoin"} onChange={() => setPaymentMethod("bitcoin")} className="hidden" />
                </label>
              </div>
            </section>

            {/* Additional Information */}
            <section>
              <h2 className="text-[18px] font-extrabold text-[#181818] mb-5">Additional Information</h2>
              <div>
                <label className={labelClass}>Order notes (optional)</label>
                <textarea
                  placeholder="Notes about your order, e.g. special delivery instructions..."
                  rows={4}
                  className="w-full border border-[#E7E7E7] rounded-[8px] p-4 text-[14px] text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors bg-white resize-none"
                />
              </div>
            </section>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="w-[420px] shrink-0">
            <div className="sticky top-4 flex flex-col gap-6">

              {/* You might also like carousel */}
              <div>
                <h3 className="text-[16px] font-extrabold text-[#181818] mb-3">You might also like</h3>
                <div className="border border-[#E7E7E7] rounded-[12px] overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-[180px] bg-[#F7F7F7] relative overflow-hidden">
                      <Image
                        src={suggestedProducts[suggestIndex].image}
                        alt={suggestedProducts[suggestIndex].name}
                        fill
                        className="object-cover"
                       
                      />
                    </div>
                    {/* Nav arrows */}
                    <button
                      onClick={() => setSuggestIndex((suggestIndex - 1 + suggestedProducts.length) % suggestedProducts.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-[28px] h-[28px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button
                      onClick={() => setSuggestIndex((suggestIndex + 1) % suggestedProducts.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-[28px] h-[28px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] text-[#7E7E7E]">{suggestedProducts[suggestIndex].brand}</p>
                    <p className="text-[13px] font-semibold text-[#181818] leading-[16px] line-clamp-2 mt-0.5">{suggestedProducts[suggestIndex].name}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[15px] font-extrabold text-[#181818]">{suggestedProducts[suggestIndex].price}&euro;</p>
                      <button className="h-[32px] px-4 bg-[#FF6701] hover:bg-[#E65D00] text-white text-[12px] font-semibold rounded-[6px] transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-[#F7F7F7] rounded-[12px] p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[16px] font-extrabold text-[#181818]">Order Summary</h3>
                  <Link href="/cart" className="flex items-center gap-1 text-[13px] text-[#7E7E7E] hover:text-[#FF6701] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Edit
                  </Link>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-3 mb-4">
                  {orderItems.map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="w-[52px] h-[52px] bg-white rounded-[8px] border border-[#E7E7E7] shrink-0 overflow-hidden">
                        <Image src={item.image} alt={item.name} width={52} height={52} className="object-cover w-full h-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-[#7E7E7E]">{item.brand}</p>
                        <p className="text-[13px] font-semibold text-[#181818] truncate leading-[16px]">{item.name}</p>
                        <p className="text-[11px] text-[#7E7E7E]">Qty: {item.qty}</p>
                      </div>
                      <span className="text-[14px] font-semibold text-[#181818] shrink-0">{item.price * item.qty}&euro;</span>
                    </div>
                  ))}
                </div>

                {/* Promo code */}
                <div className="border-t border-[#E7E7E7] pt-4 mb-4">
                  <p className="text-[13px] font-semibold text-[#181818] mb-2">Do You Have A Promo Code?</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      className="flex-1 h-[40px] bg-white border border-[#E7E7E7] rounded-[8px] px-3 text-[13px] text-[#181818] placeholder:text-[#B6B6B6] outline-none focus:border-[#FF6701] transition-colors"
                    />
                    <button className="bg-[#181818] hover:bg-[#292929] text-white text-[12px] font-semibold px-4 rounded-[8px] h-[40px] transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Totals */}
                <div className="border-t border-[#E7E7E7] pt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#7E7E7E]">Products total</span>
                    <span className="font-semibold text-[#181818]">{productsTotal.toFixed(2)}&euro;</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[14px]">
                      <span className="text-[#7E7E7E]">Order over 200&euro;</span>
                      <span className="font-semibold text-[#00B638]">-{discount.toFixed(2)}&euro;</span>
                    </div>
                  )}
                  <div className="border-t border-[#E7E7E7] pt-3 mt-1 flex justify-between">
                    <span className="text-[16px] font-extrabold text-[#181818]">Total</span>
                    <span className="text-[20px] font-extrabold text-[#181818]">{total.toFixed(2)}&euro;</span>
                  </div>
                </div>

                {/* Confirm button */}
                <button className="w-full bg-[#181818] hover:bg-[#292929] text-white text-[14px] font-semibold rounded-[8px] h-[48px] flex items-center justify-center mt-5 transition-colors">
                  Confirm And Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM FOOTER BAR ── */}
      <div className="w-full border-t border-[#E7E7E7] mt-auto">
        <div className="max-w-[1340px] mx-auto px-4 h-[56px] flex items-center justify-between">
          <p className="text-[12px] text-[#7E7E7E]">&copy; 2026 Dines Power. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-[12px] text-[#7E7E7E] hover:text-[#181818] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-[12px] text-[#7E7E7E] hover:text-[#181818] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
