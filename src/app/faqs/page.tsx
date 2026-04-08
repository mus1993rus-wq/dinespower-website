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
          <h1 className="text-[36px] font-extrabold text-[#181818] leading-[44px] mb-10">Frequently Asked Questions</h1>

          <div className="flex gap-8">
            {/* LEFT sidebar */}
            <div className="w-[440px] shrink-0">
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
                            <Image src="/images/shop/faq-question-icon.svg" alt="?" width={24} height={24} unoptimized className="shrink-0" />
                            <span className="text-[16px] font-semibold text-[#181818] text-left leading-6">{faq.q}</span>
                          </div>
                          <div className={`w-[40px] h-[40px] rounded-[8px] bg-[#F7F7F7] flex items-center justify-center shrink-0 transition-colors ${openIndices[section] === i ? 'bg-[#FF6701] text-white' : 'text-[#181818]'}`}>
                            <span className="text-[20px] leading-none">{openIndices[section] === i ? '−' : '+'}</span>
                          </div>
                        </button>
                        {openIndices[section] === i && (
                          <div className="pb-5 pl-[40px] text-sm text-[#7E7E7E] leading-6">{faq.a}</div>
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
