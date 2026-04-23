"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function InfoBox({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "warning" | "error" }) {
  const colors = {
    info: { bg: "#FFF8F0", border: "#FFD9A8", icon: "#FF8C38", text: "#8B6914" },
    warning: { bg: "#FFF8F0", border: "#FFD9A8", icon: "#FF8C38", text: "#8B6914" },
    error: { bg: "#FFF0F0", border: "#FFD0D0", icon: "#FF3B30", text: "#8B2020" },
  }[variant];
  return (
    <div className="flex items-start gap-3 md:gap-4 rounded-[12px] px-4 md:px-6 py-4 my-4" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}>
      <div className="shrink-0 mt-0.5">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill={colors.icon} />
          <path d="M12 7v5M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex-1 text-[16px] leading-[24px]" style={{ color: colors.text }}>
        {children}
      </div>
    </div>
  );
}

function StepScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-4 w-full rounded-[16px] overflow-hidden border border-[#E7E7E7] relative bg-[#F7F7F7]" style={{ aspectRatio: "820/418" }}>
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

const steps = [
  {
    number: 1,
    title: "Place your order",
    content: (
      <p className="text-[16px] text-[#1E1E1E] leading-[24px]">
        Add products to cart, proceed to checkout, and select Bitcoin (BTC) as your payment method. Complete the order &mdash; payment instructions will be generated immediately.
      </p>
    ),
  },
  {
    number: 2,
    title: "Receive payment details",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mb-2">
          After placing the order, you will receive an email with:
        </p>
        <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
          <li>Bitcoin wallet address</li>
          <li>Exact amount to send (in BTC)</li>
          <li>Order ID / reference</li>
        </ul>
        <InfoBox variant="info">
          The amount is fixed for a limited time based on the current exchange rate.
        </InfoBox>
        <StepScreenshot src="/images/shop/bitcoin/step2.png" alt="Payment details email" />
      </>
    ),
  },
  {
    number: 3,
    title: "Open your crypto wallet",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mb-2">
          Use any crypto wallet or exchange, such as:
        </p>
        <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
          <li>Trust Wallet</li>
          <li>Binance</li>
          <li>Coinbase</li>
          <li>OKX</li>
        </ul>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mt-2">
          Go to <strong>Send / Withdraw BTC</strong>.
        </p>
        <StepScreenshot src="/images/shop/bitcoin/step3.png" alt="Send / Withdraw BTC" />
      </>
    ),
  },
  {
    number: 4,
    title: "Enter payment information",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mb-2">
          In your wallet:
        </p>
        <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
          <li>Paste the wallet address</li>
          <li>Enter the exact BTC amount provided</li>
        </ul>
        <InfoBox variant="warning">
          <strong>Important:</strong> Do not round the amount. Do not subtract network fees. Send the exact value shown in your instructions.
        </InfoBox>
        <StepScreenshot src="/images/shop/bitcoin/step4.png" alt="Paste address and enter amount" />
      </>
    ),
  },
  {
    number: 5,
    title: "Select the correct network",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mb-2">
          Make sure you are sending via:
        </p>
        <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
          <li><strong>Bitcoin network (BTC)</strong></li>
        </ul>
        <InfoBox variant="error">
          ❌ Do <strong>NOT</strong> use: BEP20 (BSC), ERC20 (Ethereum), TRC20 (Tron). Sending via the wrong network may result in loss of funds.
        </InfoBox>
      </>
    ),
  },
  {
    number: 6,
    title: "Confirm and send payment",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px]">
          Double-check all details, then click <strong>Send / Confirm</strong> in your wallet. Your transaction will be broadcast to the blockchain.
        </p>
        <StepScreenshot src="/images/shop/bitcoin/step6.png" alt="Confirmation screen" />
      </>
    ),
  },
  {
    number: 7,
    title: "Wait for confirmation",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mb-2">
          The payment is confirmed after network confirmations.
        </p>
        <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
          <li>Typical time: 10&ndash;30 minutes</li>
          <li>May take longer depending on network load</li>
        </ul>
        <StepScreenshot src="/images/shop/bitcoin/step7.png" alt="Transaction confirmation" />
      </>
    ),
  },
  {
    number: 8,
    title: "Order processing",
    content: (
      <>
        <p className="text-[16px] text-[#1E1E1E] leading-[24px] mb-2">
          Once the payment is confirmed:
        </p>
        <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
          <li>Your order is marked as paid</li>
          <li>Processing starts within 1&ndash;3 business days</li>
          <li>You will receive status updates via email</li>
        </ul>
        <StepScreenshot src="/images/shop/bitcoin/step8.png" alt="Order status update email" />
      </>
    ),
  },
];

const commonMistakes = [
  "Sending a different cryptocurrency (e.g. USDT instead of BTC)",
  "Sending the wrong amount",
  "Using the wrong network",
  "Delaying payment (exchange rate may expire)",
];

export default function BitcoinPaymentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4 lg:px-0 py-3">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/delivery-payment" className="hover:text-[#181818] transition-colors">Shipping &amp; Payment</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Bitcoin Payment</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-6 lg:gap-[80px] pb-16">
          {/* Main content */}
          <div className="flex-1 max-w-[820px]">
            <h1 className="text-[24px] md:text-[36px] font-extrabold text-[#181818] leading-[30px] md:leading-[44px] mb-6">
              Bitcoin payment guideline
            </h1>

            {/* Steps */}
            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.number}>
                  <h3 className="text-[20px] md:text-[24px] font-extrabold text-[#181818] leading-[26px] md:leading-[30px] mb-4">
                    {step.number}. {step.title}
                  </h3>
                  <div className="text-[16px] text-[#1E1E1E] leading-6">
                    {step.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Common Mistakes to Avoid */}
            <div className="mt-12 pt-8 border-t border-[#E7E7E7]">
              <h2 className="text-[20px] font-extrabold text-[#181818] leading-[28px] mb-4">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc pl-5 text-[16px] text-[#1E1E1E] leading-[28px]">
                {commonMistakes.map((mistake, i) => (
                  <li key={i}>{mistake}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right sidebar — sticky */}
          <div className="w-full lg:w-[440px] lg:shrink-0">
           <div className="lg:sticky lg:top-4 flex flex-col gap-4">
            {/* Still Have Questions card — Figma style */}
            <div className="bg-[#F7F7F7] rounded-[12px] p-4">
              <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-4 flex flex-col items-center gap-4">
                <div className="w-12 h-12 relative shrink-0">
                  <Image src="/icons/question-bubble.png" alt="" fill className="object-contain" />
                </div>
                <p className="text-[16px] font-semibold text-black leading-6 capitalize">Still have questions?</p>
                <p className="text-[14px] text-[#1E1E1E] leading-5 text-center">
                  Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.
                </p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-help-popup'))} className="cursor-pointer flex items-center justify-center h-11 w-full bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black hover:border-[#181818] transition-colors">Ask a Question</button>
                <div className="flex gap-4 items-center">
                  <a href="https://t.me/+eFl6hboMcbxlNDI0" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#00A9DE] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3.32168 11.8714L18.7484 5.92338C19.4644 5.66472 20.0897 6.09805 19.8577 7.18072L19.859 7.17938L17.2323 19.5541C17.0377 20.4314 16.5164 20.6447 15.787 20.2314L11.787 17.2834L9.85768 19.1421C9.64435 19.3554 9.46435 19.5354 9.05102 19.5354L9.33502 15.4647L16.7483 8.76738C17.071 8.48338 16.6763 8.32338 16.251 8.60605L7.08968 14.374L3.14035 13.1421C2.28302 12.8701 2.26435 12.2847 3.32168 11.8714Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#00D43F] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15.25 13.2808C15.0625 13.1558 14.875 13.0933 14.6875 13.3433L13.9375 14.3433C13.75 14.4683 13.625 14.5308 13.375 14.4058C12.4375 13.9058 11.125 13.3433 10 11.4683C9.93753 11.2183 10.0625 11.0933 10.1875 10.9683L10.75 10.0933C10.875 9.96832 10.8125 9.84332 10.75 9.71832L10 7.90582C9.81253 7.40582 9.62503 7.46832 9.43753 7.46832H8.93753C8.81253 7.46832 8.56253 7.53082 8.31253 7.78082C6.93753 9.15582 7.50003 11.0933 8.50003 12.3433C8.68753 12.5933 9.93753 14.8433 12.625 16.0308C14.625 16.9058 15.0625 16.7808 15.625 16.6558C16.3125 16.5933 17 16.0308 17.3125 15.4683C17.375 15.2808 17.6875 14.4683 17.4375 14.3433" fill="white"/>
                      <path d="M12.5 20.2183C9.9375 20.2183 8 18.8433 8 18.8433L4.9375 19.6558L5.6875 16.6558C5.6875 16.6558 4.4375 14.7183 4.4375 12.2808C4.4375 7.78076 8.125 4.03076 12.6875 4.03076C16.9375 4.03076 20.5625 7.34326 20.5625 11.9683C20.5625 16.4683 16.9375 20.1558 12.5 20.2183ZM2.5625 22.0308L7.75 20.5933C9.25239 21.3624 10.9268 21.7336 12.6135 21.6715C14.3002 21.6094 15.9428 21.116 17.3846 20.2384C18.8263 19.3608 20.019 18.1284 20.8489 16.6587C21.6788 15.189 22.1182 13.5311 22.125 11.8433C22.125 6.46826 17.875 2.15576 12.5 2.15576C10.7748 2.16018 9.08091 2.61647 7.58694 3.4792C6.09297 4.34194 4.85109 5.58101 3.98497 7.07301C3.11884 8.56502 2.65871 10.2579 2.65038 11.9831C2.64205 13.7082 3.08582 15.4055 3.9375 16.9058" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 100% Secure Payment badge */}
            <div className="bg-[#F7F7F7] rounded-[12px] px-6 py-5 flex items-center gap-6">
              <div className="w-14 h-14 relative shrink-0">
                <Image src="/images/shop/bitcoin/badge-secure.png" alt="" fill className="object-contain" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-[16px] font-semibold text-[#181818] leading-6">100% Secure Payment</p>
                <p className="text-[12px] text-[#4D4D4D] leading-4">Encrypted checkout. Your data is fully protected.</p>
              </div>
            </div>

            {/* Fast & Discreet Delivery badge */}
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
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
