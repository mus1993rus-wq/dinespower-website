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
      a: "All our products come directly from authorized manufacturers including Deus Medical, Biaxol, and Astera Labs. Each product includes a unique verification code that you can check on our Verify Authenticity page or on the manufacturer's website.",
    },
    {
      q: "Do you accept returns or exchanges?",
      a: "Due to the nature of our products, we cannot accept returns of opened items. However, if you receive a damaged or incorrect product, we will gladly provide a replacement or full refund. Contact us within 14 days of delivery.",
    },
    {
      q: "Are third party laboratory test reports available for all products?",
      a: "Yes, every batch of products we sell undergoes independent third-party laboratory testing. You can view all lab test certificates on our Lab Tests page. We test for purity, concentration, and the absence of harmful contaminants.",
    },
    {
      q: "How should I store my products?",
      a: "Store products in a cool, dry place away from direct sunlight. Most products should be kept at room temperature (15-25\u00B0C). Peptides and certain compounds may require refrigeration \u2014 please check the product label for specific storage instructions.",
    },
  ],
  Account: [
    {
      q: "Do I need an account to place an order?",
      a: "While you can browse our catalog without an account, you will need to create one to place an order. This allows us to provide you with order tracking, order history, and faster checkout for future purchases.",
    },
    {
      q: "Is my data secure?",
      a: "We take your privacy very seriously. All data is encrypted using SSL and we never share personal information with third parties. We use discreet packaging with no product descriptions on the outside. Please see our Privacy Policy for full details.",
    },
  ],
  Orders: [
    {
      q: "Can I change or cancel my order?",
      a: "You can change or cancel your order within 12 hours of placing it by contacting our support team. After that window, the order may already be in processing and changes may not be possible.",
    },
    {
      q: "What is the minimum order amount?",
      a: "The minimum order amount for first-time customers is 50\u20AC. This allows us to ensure proper packaging and shipping for your products. Returning customers have no minimum order requirement.",
    },
    {
      q: "How can I track my order?",
      a: "Once your order is dispatched, you will receive a tracking number via email. You can also find it in your account dashboard under 'My Orders'. Tracking information is usually updated within 24-48 hours of dispatch.",
    },
  ],
  Shipment: [
    {
      q: "Where do you ship from?",
      a: "We ship from our warehouse located in the European Union. This allows us to provide fast delivery to most European countries while ensuring compliance with EU regulations.",
    },
    {
      q: "Which countries do you ship to?",
      a: "We currently ship to most European countries including Germany, UK, France, Netherlands, Poland, Spain, Italy, and many more. We also ship to the USA and selected countries worldwide. Please check our Delivery & Payment page for a full list.",
    },
    {
      q: "How long does delivery take?",
      a: "Standard delivery to Europe takes 5-14 business days. USA delivery takes 7-21 business days. Delivery times depend on your location and the shipping method selected. All orders include tracking numbers.",
    },
    {
      q: "Is the packaging discreet?",
      a: "All orders are shipped in plain, unmarked packaging with no product descriptions or branding on the outside. The sender name on the label is a generic business name for complete discretion.",
    },
  ],
  Payment: [
    {
      q: "Which payment methods do you accept?",
      a: "We accept bank transfers (SEPA and SWIFT) and cryptocurrency payments including Bitcoin. Cryptocurrency payments are our recommended method as they are always available and process quickly.",
    },
    {
      q: "How do I send the payment?",
      a: "After placing your order, you will receive payment instructions via email. For bank transfers, we provide our bank details. For Bitcoin, we provide a wallet address. Contact your manager if you need assistance.",
    },
    {
      q: "Is there a minimum payment or order quantity?",
      a: "The minimum order amount for first-time customers is 50\u20AC. There is no minimum for returning customers. Wholesale orders have separate minimums \u2014 contact our sales team for details.",
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
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">Frequently Asked Questions</h1>

          <div className="flex gap-8">
            {/* LEFT sidebar */}
            <div className="w-[300px] shrink-0">
              <div className="sticky top-4 flex flex-col gap-6">
                {/* Category tabs */}
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => scrollToSection(cat)}
                      className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                        activeCategory === cat
                          ? "bg-[#FF6701] text-white"
                          : "text-[#181818] hover:bg-[#F7F7F7]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Still Have Questions Card */}
                <div className="bg-[#F7F7F7] rounded-[12px] p-4">
                  <div className="bg-white border border-[#E7E7E7] rounded-[8px] p-6 flex flex-col items-center gap-4">
                    <Image src="/images/shop/faq-help-icon.png" alt="Help" width={48} height={48} unoptimized />
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
                            <div className="w-8 h-8 rounded-full border border-[#E7E7E7] flex items-center justify-center shrink-0">
                              <Image src="/images/shop/faq-question-icon.svg" alt="?" width={16} height={16} unoptimized />
                            </div>
                            <span className="text-base font-semibold text-[#181818] text-left leading-6">{faq.q}</span>
                          </div>
                          <span className="text-xl text-[#181818] shrink-0 ml-4">
                            {openIndices[section] === i ? "\u2212" : "+"}
                          </span>
                        </button>
                        {openIndices[section] === i && (
                          <div className="pb-5 pl-11 text-sm text-[#7E7E7E] leading-6">{faq.a}</div>
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
