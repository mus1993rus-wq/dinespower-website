"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const orderItems = [
  { brand: "Astera Labs", name: "Dietary supplements for fat burning and energy supply", price: 44, qty: 2, image: "/images/shop/products/fat-burn-eca-xtreme-new.png" },
  { brand: "Astera Labs", name: "Dietary supplements for fat burning and energy supply", price: 44, qty: 2, image: "/images/shop/products/fat-burn-eca-xtreme-new.png" },
];

const bankDetails = [
  { label: "Beneficiary", value: "Dressmar LTD" },
  { label: "IBAN", value: "MT27CFTE28004000000000054I6247" },
  { label: "BIC", value: "CFTEMTM1" },
  { label: "Bank Name", value: "OpenPayd Financial Services Malta Limited" },
  { label: "Bank Address", value: "122-123 Pangea, Level 5, Triq San Gorg, St Julians" },
  { label: "Country", value: "Malta" },
];

const billingAddress = {
  name: "Rustam Test Order",
  line1: "Test",
  line2: "61-863 Test",
  country: "Poland",
  phone: "+380993522572",
  email: "mus1993rus@gmail.com",
};

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 transition-transform">
    <path d="M5 12h14" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />
    {!open && <path d="M12 5v14" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" />}
  </svg>
);

function CopyField({ label, value, showCopy = true }: { label: string; value: string; showCopy?: boolean }) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex items-start justify-between gap-3 py-2">
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <p className="text-[12px] text-[#7E7E7E] leading-4">{label}</p>
        <p className="text-[14px] font-semibold text-[#181818] leading-5 break-all">{value}</p>
      </div>
      {showCopy && (
        <button onClick={onCopy} className="cursor-pointer shrink-0 opacity-80 hover:opacity-100 transition-opacity" aria-label={`Copy ${label}`}>
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <CopyIcon />
          )}
        </button>
      )}
    </div>
  );
}

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const initialMethod = searchParams.get("method") === "bitcoin" ? "bitcoin" : "bank";
  const [method, setMethod] = useState<"bank" | "bitcoin">(initialMethod);
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [billingOpen, setBillingOpen] = useState(true);
  const [faq1Open, setFaq1Open] = useState(false);
  const [faq2Open, setFaq2Open] = useState(false);
  const [refCopied, setRefCopied] = useState(false);

  const paymentRef = "0-20305";
  const amount = 152;
  const btcAmount = "0.00084171";
  const btcAddress = "3456pGjwv9cijehLts6KRhPaXmrAfRshNj";
  const btcRate = 65343.17;

  const copyRef = () => {
    navigator.clipboard?.writeText(paymentRef);
    setRefCopied(true);
    setTimeout(() => setRefCopied(false), 1500);
  };

  const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = -11.5;
  const paymentMethodFee = -12.1;
  const total = 152;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Black header bar, flat, full-width per Figma */}
      <div className="w-full bg-[#181818] h-[88px] tablet:h-[104px] shrink-0 px-4 tablet:px-0">
        <div className="max-w-[1340px] mx-auto h-[56px] tablet:h-[76px] flex items-center justify-between gap-3 pt-4 tablet:pt-0">
          <Link href="/cart" className="cursor-pointer flex items-center justify-center gap-2 w-11 h-11 tablet:w-[140px] tablet:h-11 tablet:px-0 bg-[#292929] tablet:bg-white/[0.04] hover:bg-[#3a3a3a] tablet:hover:bg-white/[0.08] rounded-[8px] text-[#B6B6B6] text-[13px] tablet:text-[14px] font-semibold transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="tablet:w-4 tablet:h-4">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden tablet:inline">Back to cart</span>
          </Link>
          <Link href="/" className="flex items-center">
            <Image src="/images/shop/logo.svg" alt="Dines Power" width={106} height={44} className="object-contain w-[106px]" />
          </Link>
          <Link href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-help-popup")); }} className="cursor-pointer flex items-center justify-center gap-2 w-11 h-11 tablet:w-[140px] tablet:h-11 tablet:px-0 bg-[#292929] tablet:bg-white/[0.04] hover:bg-[#3a3a3a] tablet:hover:bg-white/[0.08] rounded-[8px] text-[#B6B6B6] text-[13px] tablet:text-[14px] font-semibold transition-colors">
            <Image src="/images/shop/need-help-icon.svg" alt="" width={24} height={24} className="tablet:w-[18px] tablet:h-[18px] brightness-0 invert opacity-70" />
            <span className="hidden tablet:inline">Need Help?</span>
          </Link>
        </div>
      </div>

      {/* White content area — flat, full-width per Figma */}
      <div className="flex-1 bg-white relative pt-6 pb-12 tablet:pt-12 tablet:pb-20">
        <div className="max-w-[640px] mx-auto w-full px-4 tablet:px-0 flex flex-col gap-4 tablet:gap-6 relative z-10">
        <div className="flex flex-col gap-4 bg-[#F7F7F7] rounded-[16px] p-4">

          {/* Order confirmed card */}
          <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-6 tablet:p-8 flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-[#E8F8EE] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#00B638] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h1 className="text-[22px] tablet:text-[24px] font-extrabold text-[#181818] leading-[30px]">Order #20305 is confirmed</h1>
            <p className="text-[14px] text-[#4D4D4D] leading-5">
              Thanks, Rustam. We&apos;ve sent the payment details to{" "}
              <span className="font-semibold text-[#181818]">mus1993rus@gmail.com</span>
            </p>
            <p className="text-[12px] text-[#7E7E7E] leading-4">Don&apos;t see it? Check your spam folder</p>
          </div>

          {/* Order Status */}
          <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-4 tablet:p-6 flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[#181818] leading-6">Order Status</p>
            <span className="flex items-center gap-1.5 bg-[#FFF4E6] text-[#FF6701] text-[13px] font-semibold px-3 py-1.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#FF6701" strokeWidth="1.5" />
                <path d="M12 7v5l3 2" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Processing
            </span>
          </div>

          {/* Payment block */}
          <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-4 tablet:p-6 flex flex-col gap-4">
            {method === "bank" ? (
              <>
                <p className="text-[16px] font-semibold text-[#181818] leading-6">Bank transfer</p>

                {/* Amount to transfer — black card with textured overlay */}
                <div className="relative bg-black rounded-[12px] p-6 text-center overflow-hidden">
                  <Image
                    src="/images/shop/wholesale-banner-bg.png"
                    alt=""
                    fill
                    sizes="560px"
                    className="object-cover opacity-50 mix-blend-lighten pointer-events-none select-none"
                  />
                  <p className="relative z-10 text-[13px] text-white/70 leading-5">Amount to transfer</p>
                  <p className="relative z-10 text-[32px] tablet:text-[40px] font-extrabold text-white leading-[48px] mt-1">{amount} €</p>
                </div>

                {/* Payment Reference label */}
                <div className="flex flex-col gap-1 items-center text-center">
                  <p className="text-[16px] font-semibold text-[#181818] leading-6">Payment Reference</p>
                  <p className="text-[13px] text-[#7E7E7E] leading-5">Add this to your transfer so we can match your payment</p>
                </div>

                {/* Bank details list */}
                <div className="flex flex-col">
                  {bankDetails.map((d, i) => (
                    <div key={d.label}>
                      <CopyField label={d.label} value={d.value} />
                      {i < bankDetails.length - 1 && <div className="h-px bg-[#E7E7E7]" />}
                    </div>
                  ))}
                  <div className="h-px bg-[#E7E7E7]" />
                  <div className="py-2">
                    <p className="text-[12px] text-[#7E7E7E] leading-4">Payment Methods:</p>
                    <p className="text-[14px] font-semibold text-[#181818] leading-5 mt-0.5">SEPA, SEPA Instant, Internal</p>
                  </div>
                </div>

                {/* Payment reference callout */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[12px] text-[#7E7E7E] leading-4">Payment reference</p>
                    <div className="flex items-center gap-2">
                      <p className="text-[28px] tablet:text-[32px] font-extrabold text-[#181818] leading-[40px]">{paymentRef}</p>
                      <button onClick={copyRef} className="cursor-pointer shrink-0 opacity-80 hover:opacity-100 transition-opacity" aria-label="Copy reference">
                        {refCopied ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <CopyIcon />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#181818] leading-5 text-center">Use ONLY this payment reference in the transfer note/description.</p>

                  <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 mt-2">
                    <div className="flex flex-col gap-2">
                      <p className="text-[13px] font-semibold text-[#181818] leading-5">Do not write:</p>
                      {["Website name", "Any email address", "Product names or order details"].map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#FB2F2F] flex items-center justify-center shrink-0">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="3" strokeLinecap="round" /></svg>
                          </div>
                          <span className="text-[13px] text-[#181818] leading-5">{t}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[13px] font-semibold text-[#181818] leading-5">Do write:</p>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#00B638] flex items-center justify-center shrink-0">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-[13px] text-[#181818] leading-5">Payment reference only: <span className="font-semibold">{paymentRef}</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="cursor-pointer w-full h-12 bg-[#FF6701] hover:bg-[#E65D00] text-white text-[16px] font-semibold rounded-[8px] transition-colors">
                  I&apos;ve Made The Payment
                </button>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[12px] text-[#7E7E7E] leading-4">After you pay: reply to the payment details email with a PDF/screenshot — we&apos;ll confirm faster</p>
                  <p className="text-[12px] text-[#7E7E7E] leading-4">Didn&apos;t get the email? Check Spam/Promotions</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-semibold text-[#181818] leading-6">Bitcoin Payment</p>
                  <p className="text-[12px] text-[#7E7E7E] leading-4">1 BTC = € {btcRate.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                {/* Amount to send — black card with textured overlay */}
                <div className="relative bg-black rounded-[12px] p-6 text-center overflow-hidden">
                  <Image
                    src="/images/shop/wholesale-banner-bg.png"
                    alt=""
                    fill
                    sizes="560px"
                    className="object-cover opacity-50 mix-blend-lighten pointer-events-none select-none"
                  />
                  <p className="relative z-10 text-[13px] text-white/70 leading-5">Amount to send</p>
                  <div className="relative z-10 flex items-center justify-center gap-2 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center">
                      <span className="text-white text-[18px] font-extrabold leading-none">₿</span>
                    </div>
                    <p className="text-[28px] tablet:text-[36px] font-extrabold text-white leading-[44px]">{btcAmount}</p>
                  </div>
                  <p className="relative z-10 text-[14px] text-white/70 leading-5 mt-1">= {amount.toFixed(2)} €</p>
                </div>

                {/* Bitcoin Address label */}
                <div className="flex flex-col gap-1 items-center text-center">
                  <p className="text-[16px] font-semibold text-[#181818] leading-6">Bitcoin Address</p>
                  <p className="text-[13px] text-[#7E7E7E] leading-5">Scan the QR code with your wallet app or copy the address below</p>
                </div>

                {/* QR code placeholder */}
                <div className="flex justify-center">
                  <div className="w-[200px] h-[200px] bg-white border border-[#E7E7E7] rounded-[12px] p-3 relative">
                    <svg width="100%" height="100%" viewBox="0 0 29 29" shapeRendering="crispEdges">
                      <rect width="29" height="29" fill="white" />
                      {/* corner markers */}
                      {[[0, 0], [22, 0], [0, 22]].map(([x, y], i) => (
                        <g key={i} transform={`translate(${x} ${y})`}>
                          <rect x="0" y="0" width="7" height="7" fill="#181818" />
                          <rect x="1" y="1" width="5" height="5" fill="white" />
                          <rect x="2" y="2" width="3" height="3" fill="#181818" />
                        </g>
                      ))}
                      {/* data modules — deterministic pseudo-random pattern */}
                      {Array.from({ length: 29 }).flatMap((_, r) =>
                        Array.from({ length: 29 }).map((_, c) => {
                          const inCorner = (r < 8 && c < 8) || (r < 8 && c > 20) || (r > 20 && c < 8);
                          if (inCorner) return null;
                          const on = ((r * 31 + c * 17 + r * c) % 3 === 0);
                          return on ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="#181818" /> : null;
                        })
                      )}
                    </svg>
                    {/* logo overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 bg-white p-1 rounded-[6px]">
                        <Image src="/images/shop/logo.svg" alt="" width={40} height={40} className="object-contain w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BTC address copy row */}
                <div className="bg-[#F7F7F7] rounded-[8px] h-12 px-4 flex items-center gap-3">
                  <p className="flex-1 min-w-0 text-[13px] text-[#181818] leading-5 truncate font-mono">{btcAddress}</p>
                  <button onClick={() => { navigator.clipboard?.writeText(btcAddress); }} className="cursor-pointer shrink-0" aria-label="Copy address">
                    <CopyIcon />
                  </button>
                </div>

                <button className="cursor-pointer w-full h-12 bg-[#FF6701] hover:bg-[#E65D00] text-white text-[16px] font-semibold rounded-[8px] transition-colors">
                  I&apos;ve Made The Payment
                </button>
              </>
            )}
          </div>

          {/* Order Summary (collapsible) */}
          <div className="bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden">
            <button onClick={() => setSummaryOpen((o) => !o)} className="cursor-pointer w-full flex items-center justify-between p-4 tablet:p-6">
              <p className="text-[16px] font-semibold text-[#181818] leading-6">Order Summary</p>
              <PlusIcon open={summaryOpen} />
            </button>
            {summaryOpen && (
              <div className="px-4 tablet:px-6 pb-4 tablet:pb-6 flex flex-col gap-3">
                {orderItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-t border-[#E7E7E7]">
                    <div className="w-12 h-12 tablet:w-14 tablet:h-14 bg-white rounded-[8px] shrink-0 p-1 flex items-center justify-center border border-[#E7E7E7]">
                      <Image src={item.image} alt={item.name} width={48} height={48} className="object-contain" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <p className="text-[12px] text-[#7E7E7E] leading-4">{item.brand}</p>
                      <p className="text-[13px] font-semibold text-[#181818] leading-5 line-clamp-2">{item.name}</p>
                    </div>
                    <div className="hidden tablet:flex flex-col gap-0.5 text-right shrink-0">
                      <p className="text-[11px] text-[#7E7E7E]">Price</p>
                      <p className="text-[13px] font-semibold text-[#181818]">{item.price}€</p>
                    </div>
                    <div className="hidden tablet:flex flex-col gap-0.5 text-right shrink-0">
                      <p className="text-[11px] text-[#7E7E7E]">Quantity</p>
                      <p className="text-[13px] font-semibold text-[#181818]">{item.qty}</p>
                    </div>
                    <div className="flex flex-col gap-0.5 text-right shrink-0">
                      <p className="text-[11px] text-[#7E7E7E]">Total</p>
                      <p className="text-[13px] font-semibold text-[#181818]">{item.price * item.qty}€</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-[#E7E7E7] pt-3 flex flex-col gap-1.5">
                  <div className="flex justify-between text-[13px]"><span className="text-[#7E7E7E]">Subtotal:</span><span className="text-[#181818]">{subtotal.toFixed(2)} €</span></div>
                  <div className="flex justify-between text-[13px]"><span className="text-[#7E7E7E]">Shipping:</span><span className="text-[#FB2F2F]">{shipping.toFixed(2)} €</span></div>
                  <div className="flex justify-between text-[13px]"><span className="text-[#7E7E7E]">Payment method:</span><span className="text-[#FB2F2F]">{paymentMethodFee.toFixed(2)} €</span></div>
                  <div className="flex justify-between text-[15px] font-semibold mt-1"><span className="text-[#181818]">Total</span><span className="text-[#181818]">{total.toFixed(2)} €</span></div>
                </div>
                <div className="border-t border-[#E7E7E7] pt-3">
                  <p className="text-[12px] text-[#7E7E7E] leading-4 mb-1">Note</p>
                  <p className="text-[13px] text-[#181818] leading-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            )}
          </div>

          {/* Billing Address (collapsible) */}
          <div className="bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden">
            <button onClick={() => setBillingOpen((o) => !o)} className="cursor-pointer w-full flex items-center justify-between p-4 tablet:p-6">
              <p className="text-[16px] font-semibold text-[#181818] leading-6">Billing Address</p>
              <PlusIcon open={billingOpen} />
            </button>
            {billingOpen && (
              <div className="px-4 tablet:px-6 pb-4 tablet:pb-6 border-t border-[#E7E7E7] pt-3 flex flex-col gap-1 text-[13px] leading-5">
                <p className="text-[#181818] font-semibold">{billingAddress.name}</p>
                <p className="text-[#181818]">{billingAddress.line1}</p>
                <p className="text-[#181818]">{billingAddress.line2}</p>
                <p className="text-[#181818]">{billingAddress.country}</p>
                <p className="text-[#181818] mt-1">{billingAddress.phone}</p>
                <p className="text-[#181818]">{billingAddress.email}</p>
              </div>
            )}
          </div>

          </div>

          {/* FAQ — separate gray wrapper per Figma */}
          <div className="flex flex-col gap-3 bg-[#F7F7F7] rounded-[16px] p-4">
            <div className="bg-white border border-[#E7E7E7] rounded-[16px]">
              <button onClick={() => setFaq1Open((o) => !o)} className="cursor-pointer w-full flex items-center justify-between p-4 tablet:p-6">
                <p className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] leading-6">How do I make a payment?</p>
                <PlusIcon open={faq1Open} />
              </button>
              {faq1Open && (
                <div className="px-4 tablet:px-6 pb-4 tablet:pb-6 border-t border-[#E7E7E7] pt-3">
                  <p className="text-[13px] text-[#4D4D4D] leading-5">
                    Follow the instructions above: transfer the exact amount to the provided bank details and include the payment reference in the transfer note. For Bitcoin, scan the QR code or copy the address and send the exact amount from your wallet.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white border border-[#E7E7E7] rounded-[16px]">
              <button onClick={() => setFaq2Open((o) => !o)} className="cursor-pointer w-full flex items-center justify-between p-4 tablet:p-6">
                <p className="text-[14px] tablet:text-[16px] font-semibold text-[#181818] leading-6">I&apos;m having trouble making a payment</p>
                <PlusIcon open={faq2Open} />
              </button>
              {faq2Open && (
                <div className="px-4 tablet:px-6 pb-4 tablet:pb-6 border-t border-[#E7E7E7] pt-3">
                  <p className="text-[13px] text-[#4D4D4D] leading-5">
                    Contact our support via the Need Help? button at the top of the page. Reply to the payment details email with a screenshot of your transaction so we can match it faster.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Dev toggle — switch payment method for preview */}
          <div className="flex gap-2 justify-center mt-6">
            <button
              onClick={() => setMethod("bank")}
              className={`text-[12px] px-3 py-1.5 rounded-[6px] border transition-colors ${method === "bank" ? "bg-[#181818] text-white border-[#181818]" : "bg-white text-[#7E7E7E] border-[#E7E7E7]"}`}
            >
              View: Bank
            </button>
            <button
              onClick={() => setMethod("bitcoin")}
              className={`text-[12px] px-3 py-1.5 rounded-[6px] border transition-colors ${method === "bitcoin" ? "bg-[#181818] text-white border-[#181818]" : "bg-white text-[#7E7E7E] border-[#E7E7E7]"}`}
            >
              View: Bitcoin
            </button>
          </div>

        </div>
      </div>

      {/* Minimal footer — flat, full-width per Figma */}
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

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#181818]" />}>
      <ConfirmationContent />
    </Suspense>
  );
}
