"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["Product", "Account", "Orders", "Shipment", "Payment"];

const faqSections: Record<string, { q: string; a: string }[]> = {
  Product: [
    {
      q: "How do we know that these products are genuine?",
      a: "All our products are manufactured in full compliance with global quality standards and are fully certified by WHO-GMP and EU-GMP. We are an official worldwide distributor of the Deus Medical brand. You can verify our status by entering our website name 'dinespower.to' here or by sending an email to 'info@dinespower.info'. deusmedical.com/verify/verifyseller. Furthermore, every Deus Medical product has a unique product code. You can use this code to check your product here: deusmedical.com/verify/verifyproduct",
    },
    {
      q: "Do you accept returns or exchanges?",
      a: "Due to the nature of pharmaceutical products, we do not accept returns or exchanges once the order has been shipped. However, if you receive a damaged or incorrect product, please contact our support team within 48 hours of delivery.",
    },
    {
      q: "Are third party laboratory test reports available for all products?",
      a: "Yes, we provide third-party laboratory test reports for all our products. You can view these reports on our Lab Tests page or request specific reports by contacting our support team.",
    },
    {
      q: "How should I store my products?",
      a: "Most products should be stored at room temperature (15-25\u00B0C) in a dry place away from direct sunlight. Injectable products should be stored upright. Always check the specific storage instructions on the product packaging.",
    },
  ],
  Account: [
    {
      q: "Do I need an account to place an order?",
      a: "No, you can place an order as a guest. However, creating an account allows you to track your orders, save your shipping details, and access your order history.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, we use industry-standard SSL encryption and security measures to protect all personal and payment information.",
    },
  ],
  Orders: [
    {
      q: "Can I change or cancel my order?",
      a: "You can change or cancel your order within 24 hours of placement by contacting our support team. Once the order has been processed and shipped, changes cannot be made.",
    },
    {
      q: "I entered the wrong delivery address. How can I change it?",
      a: "Contact our support team immediately with your order number and the correct address. If the order hasn't been shipped yet, we can update the delivery address.",
    },
    {
      q: "I didn't receive an email confirmation after placing my order?",
      a: "Please check your spam/junk folder. If you still can't find it, contact our support team with your order details and we'll resend the confirmation.",
    },
    {
      q: "My package has been confiscated or lost. What can I do?",
      a: "If your package is confiscated by customs or lost during transit, please contact our support team. We offer a free reship or full refund for all lost/confiscated packages.",
    },
    {
      q: "What happens if I receive the wrong, missing, or defective product?",
      a: "Contact our support team within 48 hours of delivery with photos of the product. We will arrange a replacement shipment at no additional cost.",
    },
  ],
  Shipment: [
    {
      q: "Where do you ship from?",
      a: "We ship from our warehouses in Europe and India, depending on the product brand and destination.",
    },
    {
      q: "Which countries do you ship to?",
      a: "We ship worldwide, including all European countries, USA, UK, Canada, Australia, and many more. Contact us for specific country availability.",
    },
    {
      q: "How much are the shipping costs?",
      a: "Shipping starts from 29\u20AC for Europe and worldwide. Express shipping is available for 45\u20AC. Free shipping on orders over 500\u20AC.",
    },
    {
      q: "How long will it take for me to receive my package?",
      a: "Europe: 5-14 business days. USA: 7-21 business days. Rest of world: 7-21 business days.",
    },
    {
      q: "What are your shipping costs?",
      a: "Standard shipping: from 29\u20AC. Express shipping: 45\u20AC. Free shipping on orders over 500\u20AC to EU destinations.",
    },
    {
      q: "What are your return policies in case of damage/loss/confiscation?",
      a: "We offer 100% reship guarantee. If your package is lost, damaged, or confiscated, we will reship your order for free or provide a full refund.",
    },
    {
      q: "Do you ship to P.O. boxes?",
      a: "We generally do not ship to P.O. boxes as our carriers require a physical address for delivery.",
    },
    {
      q: "Do you use discreet packaging?",
      a: "Yes, all orders are shipped in plain, unmarked packaging with no indication of the contents. The sender name is generic.",
    },
    {
      q: "Will I receive a tracking number?",
      a: "Yes, you will receive a tracking number via email within 1-3 business days after payment confirmation.",
    },
    {
      q: "When will my package be shipped?",
      a: "Orders are typically shipped within 1-3 business days after payment is confirmed.",
    },
    {
      q: "What are your return policies?",
      a: "Due to the nature of our products, we do not accept returns. However, we offer a 100% reship guarantee for lost, damaged, or confiscated packages.",
    },
  ],
  Payment: [
    {
      q: "Which payment methods do you accept?",
      a: "We accept bank transfers (SEPA/SWIFT) and cryptocurrency (Bitcoin, Ethereum, USDT). Bitcoin is our recommended payment method.",
    },
    {
      q: "How do I send the payment?",
      a: "After placing your order, you'll receive payment instructions via email. For bank transfers, use the provided bank details. For crypto, send to the provided wallet address.",
    },
    {
      q: "Is there a minimum payment or order quantity?",
      a: "There is no minimum order amount for regular customers. For wholesale orders, the minimum is \u20AC1,500.",
    },
  ],
};

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("Product");
  const [openIndices, setOpenIndices] = useState<Record<string, number | null>>({});

  const toggleFAQ = (section: string, index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const scrollToSection = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById(`faq-section-${cat}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">FAQs</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto pb-16">
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-6">Frequently Asked Questions</h1>

          <div className="flex gap-[80px]">
            {/* LEFT sidebar */}
            <div className="w-[440px] shrink-0">
              <div className="sticky top-4 bg-[#F7F7F7] rounded-[12px] p-4 flex flex-col gap-4">
                {/* Category menu card */}
                <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-2 flex flex-col gap-2">
                  {categories.map((cat) => {
                    const active = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => scrollToSection(cat)}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-[8px] w-full transition-colors ${
                          active ? "bg-[#F7F7F7]" : "hover:bg-[#F7F7F7]"
                        }`}
                      >
                        <span className="flex-1 text-left text-[14px] font-semibold text-[#181818] leading-5">{cat}</span>
                        {active && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0">
                            <path d="M9 6l6 6-6 6" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Still Have Questions Card */}
                <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-4 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image src="/icons/question-bubble.png" alt="" fill className="object-contain" />
                  </div>
                  <p className="text-[16px] font-semibold text-black leading-6 capitalize">Still have questions?</p>
                  <p className="text-[14px] text-[#1E1E1E] leading-5 text-center">
                    Reach out to our manager right away &mdash; we&apos;re happy to help with any questions.
                  </p>
                  <button className="cursor-pointer flex items-center justify-center h-11 w-full bg-white border border-[#CBCBCB] rounded-[8px] text-[14px] font-semibold text-black hover:border-[#181818] transition-colors">Ask a Question</button>
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
            </div>

            {/* RIGHT main content */}
            <div className="flex-1">
              {categories.map((section) => (
                <div key={section} id={`faq-section-${section}`} className="mb-10">
                  <h2 className="text-[20px] font-extrabold text-[#181818] leading-[28px] mb-4">{section}</h2>
                  <div className="flex flex-col">
                    {faqSections[section].map((faq, i) => (
                      <div key={i} className="border-b border-[#E7E7E7]">
                        <button
                          onClick={() => toggleFAQ(section, i)}
                          className="w-full flex items-center justify-between py-5 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} className="shrink-0" />
                            <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{faq.q}</span>
                          </div>
                          <div className={`w-[40px] h-[40px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0 transition-colors ${openIndices[section] === i ? 'bg-[#E7E7E7] text-[#181818]' : 'text-[#181818]'}`}>
                            <span className="text-[20px] leading-none">{openIndices[section] === i ? '−' : '+'}</span>
                          </div>
                        </button>
                        {openIndices[section] === i && (
                          <div className="pb-5 pl-[36px] pr-[56px] text-[14px] text-[#7E7E7E] leading-[22px]">{faq.a}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
