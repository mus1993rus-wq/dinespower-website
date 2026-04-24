import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly when placing an order, including your name, email address, phone number, shipping address, and payment details. We also automatically collect certain technical data such as IP addresses, browser type, and browsing activity on our website through cookies and similar technologies."
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your personal information to process and fulfill orders, communicate with you about your orders, provide customer support, send promotional materials (with your consent), improve our website and services, prevent fraud, and comply with legal obligations."
  },
  {
    title: "3. Data Sharing",
    content: "We do not sell your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website, processing payments, and delivering orders. These providers are contractually bound to protect your information and use it only for the purposes we specify."
  },
  {
    title: "4. Data Security",
    content: "We implement industry-standard security measures including SSL encryption, secure payment processing, and restricted access to personal data. While we strive to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
  },
  {
    title: "5. Cookies",
    content: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Essential cookies are necessary for the website to function and cannot be disabled."
  },
  {
    title: "6. Your Rights",
    content: "Under applicable data protection laws (including GDPR), you have the right to access, correct, or delete your personal data, restrict or object to processing, data portability, and withdraw consent at any time. To exercise these rights, contact us at info@dinespower.info."
  },
  {
    title: "7. Data Retention",
    content: "We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Order data is typically retained for 5 years for legal and accounting purposes."
  },
  {
    title: "8. Discreet Packaging",
    content: "We prioritize your privacy in all aspects of our service, including shipping. All orders are sent in plain, unmarked packaging with no product descriptions or branding visible on the outside. Sender information is kept generic to ensure complete discretion."
  },
  {
    title: "9. Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically."
  },
  {
    title: "10. Contact Us",
    content: "If you have any questions about this Privacy Policy or our data practices, please contact us at info@dinespower.info."
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4  py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Privacy Policy</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto px-4  py-6 tablet:py-8 pb-12 tablet:pb-16">
          <h1 className="text-[24px] tablet:text-[30px] desktop:text-[36px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[38px] desktop:leading-[44px] mb-3 tablet:mb-6">
            Privacy Policy
          </h1>
          <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] mb-8 tablet:mb-10">Last updated: April 1, 2026</p>

          <div className="max-w-none flex flex-col gap-6 tablet:gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[16px] tablet:text-[18px] font-extrabold text-[#181818] mb-2 tablet:mb-3">
                  {section.title}
                </h2>
                <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-6 tablet:leading-7">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
