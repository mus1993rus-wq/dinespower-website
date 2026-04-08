"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    number: 1,
    title: "Place your order",
    content: (
      <p className="text-[15px] text-[#4A4A4A] leading-[24px]">
        After selecting your preferred products, you need to select Bitcoin (BTC) as your payment method, complete the order &mdash; address, delivery terms, and all the payment information.
      </p>
    ),
  },
  {
    number: 2,
    title: "Checkout payment details",
    content: (
      <div>
        <p className="text-[15px] text-[#4A4A4A] leading-[24px] mb-3">
          After placing the order, you will receive an email with:
        </p>
        <ul className="list-disc pl-5 text-[15px] text-[#4A4A4A] leading-[28px] mb-4">
          <li>Order number</li>
          <li>Order total (sum in &euro;)</li>
          <li>USDT BTC Address</li>
          <li>Copy ID reference</li>
        </ul>
        <div className="bg-[#FFF8F0] border border-[#FFD9A8] rounded-[10px] p-4 flex gap-3">
          <div className="shrink-0 mt-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" fill="#FF8C38"/>
              <path d="M10 6v5M10 13.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-[14px] text-[#8B6914] leading-[20px]">
            The amounts in Euro/USD is a mirrored 1 to based on The current Exchange Rate.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: "Open your crypto wallet",
    content: (
      <div>
        <p className="text-[15px] text-[#4A4A4A] leading-[24px] mb-3">
          Use a trusted exchange or wallet app such as:
        </p>
        <ul className="list-disc pl-5 text-[15px] text-[#4A4A4A] leading-[28px] mb-3">
          <li>Binance</li>
          <li>Coinbase</li>
          <li>Trust Wallet</li>
          <li>Kraken</li>
        </ul>
        <p className="text-[15px] text-[#4A4A4A] leading-[24px]">
          Or use a hard / offline crypto wallet.
        </p>
      </div>
    ),
  },
  {
    number: 4,
    title: "Setup payment information",
    content: (
      <div>
        <p className="text-[15px] text-[#4A4A4A] leading-[24px] mb-3">
          Follow these steps:
        </p>
        <ul className="list-disc pl-5 text-[15px] text-[#4A4A4A] leading-[28px]">
          <li>Open your crypto wallet</li>
          <li>Paste the wallet address</li>
          <li>Enter the exact BTC amount pointed</li>
        </ul>
      </div>
    ),
  },
  {
    number: 5,
    title: "Select the correct network",
    content: (
      <p className="text-[15px] text-[#4A4A4A] leading-[24px]">
        Make sure you select the <strong>Bitcoin (BTC)</strong> network when sending. Using a wrong network (e.g. BEP20, ERC20) may result in permanent loss of funds. Always double-check the network before confirming.
      </p>
    ),
  },
  {
    number: 6,
    title: "Confirm the payment",
    content: (
      <p className="text-[15px] text-[#4A4A4A] leading-[24px]">
        Review all payment details carefully &mdash; wallet address, amount, and network. Once everything is correct, confirm and send the transaction from your wallet.
      </p>
    ),
  },
  {
    number: 7,
    title: "Wait for blockchain confirmation",
    content: (
      <p className="text-[15px] text-[#4A4A4A] leading-[24px]">
        Bitcoin transactions typically require 1-3 network confirmations. This can take anywhere from 10 minutes to 1 hour depending on network congestion. You can track the status using your transaction hash (TXID).
      </p>
    ),
  },
  {
    number: 8,
    title: "Order processing",
    content: (
      <p className="text-[15px] text-[#4A4A4A] leading-[24px]">
        Once the payment is confirmed on the blockchain, your order will be processed and prepared for shipment. You will receive an email confirmation with tracking information.
      </p>
    ),
  },
];

const commonMistakes = [
  "Sending the wrong amount (always send the exact amount specified)",
  "Using the wrong network (always use BTC network, not BEP20 or ERC20)",
  "Sending to the wrong wallet address (always copy-paste, never type manually)",
  "Not including the reference ID in the transaction memo when required",
  "Waiting too long to send payment (exchange rates may change)",
];

export default function BitcoinPaymentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-3">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Bitcoin Payment</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto flex gap-10 pb-16">
          {/* Main content */}
          <div className="flex-1 max-w-[880px]">
            <h1 className="text-[36px] font-extrabold text-[#181818] leading-[42px] mb-8">
              Bitcoin payment guideline
            </h1>

            {/* Steps */}
            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  {/* Step number */}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#FF6701] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-[16px] font-bold">{step.number}</span>
                  </div>
                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-[#181818] leading-[28px] mb-2">
                      {step.title}
                    </h3>
                    {step.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Common Mistakes */}
            <div className="mt-12 bg-[#FFF5F5] border border-[#FFD4D4] rounded-[12px] p-6">
              <h2 className="text-[22px] font-bold text-[#181818] leading-[28px] mb-4 flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#FF3B30"/>
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Common Mistakes to Avoid
              </h2>
              <ul className="flex flex-col gap-3">
                {commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-[#4A4A4A] leading-[22px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
                      <path d="M13.5 4.5L4.5 13.5M4.5 4.5l9 9" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-[320px] shrink-0">
            {/* Still Have Questions card */}
            <div className="bg-[#F7F7F7] rounded-[12px] p-4 mb-4">
              <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-5 flex flex-col items-center gap-4">
                <Image src="/images/shop/faq-help-icon.png" alt="Help" width={64} height={64} className="object-contain" unoptimized />
                <h3 className="text-[16px] font-semibold text-black text-center">Still Have Questions?</h3>
                <p className="text-[14px] text-[#1E1E1E] text-center leading-[20px]">
                  Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.
                </p>
                <button className="bg-white border border-[#CBCBCB] rounded-[8px] h-[44px] w-full text-[14px] font-semibold text-black text-center hover:border-[#FF6701] transition-colors">
                  Ask a Question
                </button>
                <div className="flex gap-4">
                  <a href="#" className="w-[48px] h-[48px] rounded-full bg-[#00A9DE] flex items-center justify-center">
                    <Image src="/images/shop/telegram.svg" alt="Telegram" width={22} height={22} unoptimized />
                  </a>
                  <a href="#" className="w-[48px] h-[48px] rounded-full bg-[#00D43F] flex items-center justify-center">
                    <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={22} height={22} unoptimized />
                  </a>
                </div>
              </div>
            </div>

            {/* 100% Secure Payment badge */}
            <div className="bg-[#F7F7F7] rounded-[12px] p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-full bg-[#00B638] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 1L3 5v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-4z" fill="white"/>
                    <path d="M8 11l2.5 2.5L14.5 9" stroke="#00B638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#181818] leading-[18px]">100% Secure Payment</p>
                  <p className="text-[12px] text-[#7E7E7E] leading-[16px] mt-0.5">Your transactions are protected</p>
                </div>
              </div>
            </div>

            {/* Fast & Discreet Delivery badge */}
            <div className="bg-[#F7F7F7] rounded-[12px] p-4">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-full bg-[#FF6701] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M14 3H3v11h11V3z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 8h3l3 3v3h-6V8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="16.5" r="1.5" stroke="white" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="16.5" r="1.5" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#181818] leading-[18px]">Fast &amp; Discreet Delivery</p>
                  <p className="text-[12px] text-[#7E7E7E] leading-[16px] mt-0.5">Shipped quickly and privately</p>
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
