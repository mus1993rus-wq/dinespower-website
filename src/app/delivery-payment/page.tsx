"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shippingFAQs = [
  {
    q: "What happens if my package is seized by customs?",
    a: "In rare cases where a package is seized by customs, we offer a one-time free reship or store credit for the full order value. Please contact our support team with any customs documentation you receive, and we will handle the rest.",
  },
  {
    q: "Can I change my shipping address after placing an order?",
    a: "You can change your shipping address within 12 hours of placing your order by contacting our support team. After that window, the order may already be processed and shipped, and address changes may not be possible.",
  },
  {
    q: "Do you provide tracking numbers?",
    a: "Yes, all orders come with a tracking number. You will receive your tracking number via email once your order has been dispatched. You can also find it in your account dashboard under 'My Orders'.",
  },
  {
    q: "What is the packaging like? Is it discreet?",
    a: "All orders are shipped in plain, unmarked packaging with no product descriptions or branding on the outside. The sender name on the label is a generic business name for complete discretion.",
  },
  {
    q: "Do you ship to PO Boxes?",
    a: "We generally recommend shipping to a physical address for the most reliable delivery. Some carriers may deliver to PO Boxes, but we cannot guarantee it. Contact our support team if you need clarification for your specific region.",
  },
  {
    q: "What if the package is lost or damaged?",
    a: "We offer full insurance on all shipments. If your package is lost or arrives damaged, contact our support team and we will send a replacement at no additional cost. We use discreet, reinforced packaging to minimize any risk of damage during transit.",
  },
];

const shippingLogos = [
  { name: "EMS", image: "/images/shop/delivery-logos/ems.png" },
  { name: "DHL", image: "/images/shop/delivery-logos/dhl.png" },
  { name: "GLS", image: "/images/shop/delivery-logos/gls.png" },
  { name: "DPD", image: "/images/shop/delivery-logos/dpd.png" },
  { name: "TNT", image: "/images/shop/delivery-logos/tnt.png" },
  { name: "FedEx", image: "/images/shop/delivery-logos/fedex.png" },
  { name: "UPS", image: "/images/shop/delivery-logos/ups.png" },
];

export default function DeliveryPaymentPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Delivery &amp; Payment</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">Delivery &amp; Payment</h1>

          <div className="flex gap-6">
            {/* Left column - all content */}
            <div className="flex-1 min-w-0">
              {/* Payment Methods Section */}
              <section className="mb-8">
                <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-2">Payment Methods</h2>
                <p className="text-sm text-[#7E7E7E] mb-8">Everything You Need To Know Before Placing An Order</p>

                <div className="flex flex-col gap-6">
                  {/* Bank Transfer Card */}
                  <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <Image src="/images/shop/delivery-bank.png" alt="Bank transfer" width={64} height={64} className="rounded-full object-contain" unoptimized />
                      <h3 className="text-[18px] font-extrabold text-[#181818]">Bank transfer</h3>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {[
                        "Telegraphic Transfer (wire) to company bank account",
                        "Processing time: 1-5 business days",
                        "Note: may be temporarily suspended without prior notice",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#FF6701] mt-[7px] shrink-0" />
                          <span className="text-sm text-[#7E7E7E] leading-[22px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bitcoin Card */}
                  <div className="bg-white border border-[#E7E7E7] rounded-[16px] p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <Image src="/images/shop/delivery-bitcoin.png" alt="Bitcoin" width={64} height={64} className="rounded-full object-contain" unoptimized />
                      <h3 className="text-[18px] font-extrabold text-[#181818]">Bitcoin</h3>
                      <span className="bg-[#FF6701] text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">We recommend!</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {[
                        "The preferred and most reliable payment method",
                        "Always available \u2013 never suspended or restricted",
                        "Fast processing with instant network confirmation",
                        "Contact your manager for the wallet address and assistance",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#FF6701] mt-[7px] shrink-0" />
                          <span className="text-sm text-[#7E7E7E] leading-[22px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Payment FAQ */}
              <section className="mb-8">
                <div className="flex flex-col">
                  {[
                    { q: "Which payment method is the most reliable?", a: "Bitcoin is our most reliable payment method. It is always available, never suspended, and offers fast processing with instant network confirmation. We highly recommend using Bitcoin for all orders." },
                    { q: "How long does a bank transfer take?", a: "Bank transfers typically take 1-5 business days to process. Please note that this method may be temporarily suspended without prior notice due to banking regulations." },
                    { q: "Is my payment information secure?", a: "Absolutely. We use industry-standard encryption and security protocols to protect all payment information. For Bitcoin payments, transactions are secured by the blockchain network itself." },
                  ].map((faq, i) => (
                    <div key={`payment-${i}`} className="border-b border-[#E7E7E7]">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === 100 + i ? null : 100 + i)}
                        className="w-full flex items-center justify-between py-5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} unoptimized className="shrink-0" />
                          <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{faq.q}</span>
                        </div>
                        <div className={`w-[40px] h-[40px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0 transition-colors ${openFAQ === 100 + i ? 'bg-[#FF6701] text-white' : 'text-[#181818]'}`}>
                          <span className="text-[20px] leading-none">{openFAQ === 100 + i ? '−' : '+'}</span>
                        </div>
                      </button>
                      {openFAQ === 100 + i && (
                        <div className="pb-5 pl-[40px] text-sm text-[#7E7E7E] leading-6">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Shipping Methods Section */}
              <section className="mb-8">
                <h2 className="text-[24px] font-extrabold text-[#181818] leading-[30px] mb-6">Shipping Methods</h2>

                {/* Table */}
                <div className="bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F7F7F7]">
                        <th className="text-left text-sm font-semibold text-[#181818] px-6 py-4">Region</th>
                        <th className="text-center text-sm font-semibold text-[#181818] px-6 py-4">Delivery Time</th>
                        <th className="text-right text-sm font-semibold text-[#181818] px-6 py-4">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E7E7E7]">
                        <td className="text-sm text-[#181818] font-semibold px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Image src="/images/shop/popup-icons/flag-eu.png" alt="EU" width={24} height={24} className="object-contain" unoptimized />
                            Europe
                          </div>
                        </td>
                        <td className="text-sm text-[#7E7E7E] text-center px-6 py-4">5-14 Days</td>
                        <td className="text-sm text-[#FF6701] font-semibold text-right px-6 py-4">From 29&euro;</td>
                      </tr>
                      <tr className="border-t border-[#E7E7E7] bg-[#FAFAFA]">
                        <td className="text-sm text-[#181818] font-semibold px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Image src="/images/shop/popup-icons/flag-usa.png" alt="USA" width={24} height={24} className="object-contain" unoptimized />
                            USA
                          </div>
                        </td>
                        <td className="text-sm text-[#7E7E7E] text-center px-6 py-4">7-21 Days</td>
                        <td className="text-sm text-[#FF6701] font-semibold text-right px-6 py-4">From 29&euro;</td>
                      </tr>
                      <tr className="border-t border-[#E7E7E7]">
                        <td className="text-sm text-[#181818] font-semibold px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Image src="/images/shop/popup-icons/flag-world.png" alt="World" width={24} height={24} className="object-contain" unoptimized />
                            World &amp; Islands
                          </div>
                        </td>
                        <td className="text-sm text-[#7E7E7E] text-center px-6 py-4">7-21 Days</td>
                        <td className="text-sm text-[#FF6701] font-semibold text-right px-6 py-4">From 29&euro;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Shipping logos */}
                <div className="flex items-center gap-4 py-4">
                  {shippingLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="h-[52px] px-5 rounded-[10px] border border-[#E7E7E7] flex items-center justify-center"
                    >
                      <Image src={logo.image} alt={logo.name} width={80} height={40} className="object-contain h-[40px] w-auto" unoptimized />
                    </div>
                  ))}
                </div>
              </section>

              {/* Shipping FAQ */}
              <section>
                <div className="flex flex-col">
                  {shippingFAQs.map((faq, i) => (
                    <div key={i} className="border-b border-[#E7E7E7]">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                        className="w-full flex items-center justify-between py-5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} unoptimized className="shrink-0" />
                          <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{faq.q}</span>
                        </div>
                        <div className={`w-[40px] h-[40px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0 transition-colors ${openFAQ === i ? 'bg-[#FF6701] text-white' : 'text-[#181818]'}`}>
                          <span className="text-[20px] leading-none">{openFAQ === i ? '−' : '+'}</span>
                        </div>
                      </button>
                      {openFAQ === i && (
                        <div className="pb-5 pl-[40px] text-sm text-[#7E7E7E] leading-6">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right sidebar - sticky */}
            <div className="w-[440px] shrink-0">
              <div className="sticky top-6 flex flex-col gap-6 self-start">
                {/* Still Have Questions Card */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                  <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-6 flex flex-col items-center gap-4">
                    <Image src="/images/shop/faq-help-icon.png" alt="Help" width={80} height={80} unoptimized />
                    <h3 className="text-[16px] font-semibold text-black text-center">Still Have Questions?</h3>
                    <p className="text-[14px] text-[#1E1E1E] text-center leading-[22px]">
                      Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.
                    </p>
                    <button className="bg-white border border-[#CBCBCB] rounded-[8px] h-[44px] w-full text-[14px] font-semibold text-black text-center hover:bg-[#F7F7F7] transition-colors">
                      Ask a Question
                    </button>
                    <div className="flex gap-4">
                      <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#00A9DE] flex items-center justify-center hover:opacity-90 transition-opacity">
                        <Image src="/images/shop/telegram.svg" alt="Telegram" width={24} height={24} unoptimized />
                      </a>
                      <a href="#" className="w-[56px] h-[56px] rounded-full bg-[#00D43F] flex items-center justify-center hover:opacity-90 transition-opacity">
                        <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={24} height={24} unoptimized />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Wholesale Banner */}
                <div className="bg-[#181818] rounded-[12px] p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF6701]/20 flex items-center justify-center mx-auto mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12V22H4V12" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 7H2V12H22V7Z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22V7" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="#FF6701" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-white text-[18px] font-extrabold leading-[24px]">
                    Save up to <span className="text-[#FF6701]">50%</span> on shipping
                  </p>
                  <p className="text-white/50 text-sm mt-2 leading-5">Order wholesale and get discounted shipping rates across Europe</p>
                  <button className="bg-[#FF6701] hover:bg-[#E65D00] text-white text-sm font-semibold rounded-lg h-[44px] w-full mt-4 transition-colors">
                    Get Wholesale Prices
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
