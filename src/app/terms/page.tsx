import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Liability Clause",
    content:
      "The information provided on this website is for general informational purposes only. DinesPower makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained therein. Any reliance you place on such information is therefore strictly at your own risk. In no event will DinesPower be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.",
  },
  {
    title: "2. General conditions",
    content:
      "By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes your acceptance of the revised terms. These terms apply to all visitors, users, and others who access or use the website.",
  },
  {
    title: "3. General conditions",
    content:
      "All products offered on this website are intended for research and educational purposes only, unless stated otherwise. DinesPower does not encourage or condone the misuse of any products. Customers are responsible for ensuring compliance with their local, state, and national laws regarding the purchase, possession, and use of any products offered. DinesPower shall not be held responsible for any actions taken by the customer upon receiving the products. All sales are final and subject to these terms and conditions.",
  },
  {
    title: "4. Acquiring, completion and Retention of Information",
    content:
      "DinesPower collects information necessary for the completion of orders and the improvement of our services. All personal data collected during account registration, order placement, and website interaction is stored securely in compliance with applicable data protection regulations. We retain customer data for as long as necessary to fulfill our contractual obligations, comply with legal requirements, and resolve disputes. Users may request access to, correction of, or deletion of their personal data at any time by contacting our support team. Information provided must be accurate and up to date; providing false or misleading information may result in account termination.",
  },
  {
    title: "5. Confidentiality obligations and intellectual property",
    content:
      "All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of DinesPower or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of DinesPower. All trademarks, service marks, and trade names are the property of their respective owners. No material from this site may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way without prior written consent. Unauthorized use of any materials may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.",
  },
  {
    title: "6. Accuracy, Eligibility and Legal formality",
    content:
      "DinesPower strives to maintain accurate product descriptions, pricing, and availability information. However, we do not warrant that product descriptions or other content on this website are accurate, complete, reliable, current, or error-free. If a product offered by DinesPower is not as described, your sole remedy is to return it in unused condition. Pricing errors do not constitute a binding offer. You must be at least 18 years of age to use this website and purchase products. By using this website, you represent and warrant that you are at least 18 years old and that you have the legal capacity to enter into binding agreements.",
  },
  {
    title: "7. Indemnity",
    content:
      "You agree to indemnify, defend, and hold harmless DinesPower, its officers, directors, employees, agents, licensors, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising from or relating to your use of the website, your violation of these Terms and Conditions, your violation of any rights of another party, or your violation of any applicable laws, rules, or regulations. DinesPower reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.",
  },
  {
    title: "8. External links",
    content:
      "This website may contain links to external websites that are not provided or maintained by DinesPower. Please note that DinesPower does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. Links to third-party websites are provided solely as a convenience and do not imply endorsement, sponsorship, or recommendation of the third party or any content, products, or services available through those sites. DinesPower shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any external links.",
  },
  {
    title: "9. Cookies",
    content:
      "This website uses cookies to enhance user experience and analyze website traffic. Cookies are small data files stored on your device when you visit our website. We use essential cookies that are necessary for the website to function properly, as well as analytical cookies that help us understand how visitors interact with the website. By continuing to use this website, you consent to the use of cookies in accordance with our Cookie Policy. You can manage your cookie preferences through your browser settings, though disabling certain cookies may affect website functionality.",
  },
  {
    title: "10. Privacy Data",
    content:
      "DinesPower is committed to protecting your privacy. We collect and process personal data in accordance with applicable data protection regulations, including the General Data Protection Regulation (GDPR). The types of personal data we collect include name, email address, shipping address, payment information, and browsing activity. This data is used solely for the purposes of processing orders, improving our services, and communicating with you about your account or orders. We implement appropriate technical and organizational measures to ensure the security of your personal data against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "11. Personal Information",
    content:
      "We collect personal information that you voluntarily provide to us when you register on the website, place an order, subscribe to our newsletter, or contact us. This information may include your name, postal address, email address, telephone number, and payment details. We use this information to process your transactions, manage your account, send you order confirmations and shipping updates, respond to your inquiries, and send you marketing communications if you have opted in. You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us directly.",
  },
  {
    title: "12. Children's Informations",
    content:
      "DinesPower does not knowingly collect or solicit personal information from anyone under the age of 18. If you are under 18, please do not attempt to register on this website or send any personal information about yourself to us. If we learn that we have collected personal information from a child under age 18, we will delete that information as quickly as possible. If you believe that a child under 18 may have provided us personal information, please contact us immediately at info@dinespower.info.",
  },
  {
    title: "13. Changes to terms of service",
    content:
      "DinesPower reserves the right to update, change, or replace any part of these Terms and Conditions by posting updates or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. We will make reasonable efforts to notify users of significant changes through email or a prominent notice on our website.",
  },
  {
    title: "14. Severability",
    content:
      "If any provision of these Terms and Conditions is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these terms and shall not affect the validity and enforceability of any remaining provisions. The failure of DinesPower to exercise or enforce any right or provision of these Terms and Conditions shall not constitute a waiver of such right or provision. These Terms and Conditions and any policies posted on our site constitute the entire agreement between you and DinesPower.",
  },
  {
    title: "15. Arbitration",
    content:
      "Any dispute, controversy, or claim arising out of or relating to these Terms and Conditions, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the applicable arbitration rules. The arbitration shall be conducted by a sole arbitrator appointed in accordance with the said rules. The place of arbitration shall be determined by DinesPower. The language of the arbitration shall be English. The arbitral award shall be final and binding upon both parties. Each party shall bear its own costs of arbitration unless the arbitrator determines otherwise.",
  },
  {
    title: "16. Self-Regulation",
    content:
      "DinesPower is committed to responsible business practices and self-regulation within the industry. We adhere to voluntary codes of conduct and best practices that exceed minimum legal requirements. Our internal compliance program includes regular audits of our supply chain, quality control processes, and marketing practices. We encourage feedback from our customers and partners to continuously improve our standards. DinesPower actively participates in industry associations and contributes to the development of fair and transparent business practices.",
  },
  {
    title: "17. Changes to terms",
    content:
      "We reserve the right to amend these Terms and Conditions at any time. All amendments will be posted on this page with an updated revision date. Material changes will be communicated to registered users via email at least 30 days before taking effect. Continued use of the website after changes become effective constitutes acceptance of the revised terms. If you do not agree with the updated terms, you must stop using the website and may request deletion of your account. Previous versions of the terms will be archived and available upon request.",
  },
  {
    title: "18. Changes to cost of service",
    content:
      "DinesPower reserves the right to modify prices of products and services at any time without prior notice. Price changes will not affect orders that have already been confirmed and paid for. For subscription-based services, if applicable, price changes will take effect at the start of the next billing cycle following notice of the change. We will make reasonable efforts to provide advance notice of significant price changes. All prices are listed in Euros and are subject to applicable taxes and shipping fees. Promotional pricing and discounts are subject to availability and may be withdrawn at any time.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4  py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">Terms &amp; Conditions</span>
          </div>
        </div>

        <div className="max-w-[1340px] mx-auto px-4  py-6 tablet:py-8 pb-12 tablet:pb-16">
          <h1 className="text-[24px] tablet:text-[30px] desktop:text-[36px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[38px] desktop:leading-[44px] mb-4 tablet:mb-6">
            Terms & Conditions
          </h1>

          {/* Disclaimer */}
          <div className="max-w-[900px] mb-8 tablet:mb-10">
            <h2 className="text-[18px] tablet:text-[20px] font-extrabold text-[#181818] mb-3 tablet:mb-4">Disclaimer</h2>
            <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-6 tablet:leading-7">
              The content provided on this website is intended for informational purposes only and does not constitute medical, legal, or professional advice. DinesPower is an authorized distributor of pharmaceutical-grade products and supplements. All products are intended for use in accordance with applicable local laws and regulations. Users are solely responsible for ensuring that their purchase and use of products comply with the laws of their jurisdiction. DinesPower assumes no responsibility for the misuse of any product purchased through this website.
            </p>
          </div>

          {/* Sections */}
          <div className="max-w-[900px] flex flex-col gap-6 tablet:gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[16px] tablet:text-[18px] font-extrabold text-[#181818] mb-2 tablet:mb-3">
                  {section.title}
                </h2>
                <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-6 tablet:leading-7">
                  {section.content}
                </p>
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
