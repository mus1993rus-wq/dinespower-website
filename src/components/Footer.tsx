"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const partnerLogos = [
  { src: "/images/shop/trustpilot.svg", alt: "Trustpilot" },
  { src: "/images/shop/mesorx.svg", alt: "MesoRx" },
  { src: "/images/shop/musclegurus.svg", alt: "Muscle Gurus" },
  { src: "/images/shop/bitcoin.svg", alt: "Bitcoin Accepted" },
  { src: "/images/shop/steroidwiki.svg", alt: "Steroid Wiki" },
  { src: "/images/shop/eroids.svg", alt: "Eroids" },
];

const menuLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "About Us", href: "/about" },
  { label: "Lab Tests", href: "/lab-tests" },
  { label: "Shipping & Payment", href: "/delivery-payment" },
  { label: "Payment in Bitcoin", href: "/bitcoin" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Wholesale & Dropshipping", href: "https://dinespower.to/partners-landing/", external: true },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  "Injectable", "Oral", "Fat Burn", "Peptides & HGH", "SARMs",
  "PCT", "Energy", "Sex Support", "Health", "Stacks", "Amino Acids",
];

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="tablet:contents border-b border-[#292929] tablet:border-0 py-2 tablet:py-0">
      <button
        onClick={() => setOpen(!open)}
        className="tablet:hidden w-full flex items-center justify-between py-3 text-left"
        type="button"
      >
        <h4 className="text-lg font-semibold text-white uppercase">{title}</h4>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <h4 className="hidden tablet:block text-lg font-semibold text-white uppercase">{title}</h4>
      <div className={`${open ? "flex" : "hidden"} tablet:flex flex-col gap-2 tablet:mt-0 pb-3 tablet:pb-0`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] mt-auto">
      {/* Partner logos bar */}
      <div className="bg-[#F6F6F6] rounded-bl-2xl rounded-br-2xl px-4 tablet:px-0">
        <div className="max-w-[1340px] mx-auto grid grid-cols-3 tablet:flex items-center justify-between gap-4 py-6 tablet:py-0 tablet:h-[80px]">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="h-10 tablet:h-16 tablet:w-[164px] relative flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={164} height={64} className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1340px] mx-auto pt-10 tablet:pt-[100px] pb-[25px] px-4 tablet:px-0">
        <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-16">
          {/* Logo column — hidden on mobile per Figma 2236:38551 */}
          <div className="hidden tablet:flex tablet:w-[305px] shrink-0 flex-col gap-5 tablet:gap-7">
            <Link href="/" className="block">
              <Image src="/images/shop/logo-footer.svg" alt="Dines Power" width={226} height={94} />
            </Link>
            <p className="text-sm font-semibold text-[#B6B6B6] leading-5">
              Official Representative Of<br/>Deus Medical, Biaxol, Astera Labs
            </p>
            <Image src="/images/shop/verified-seller.svg" alt="Verified Seller" width={124} height={124} />
          </div>

          {/* Menu */}
          <div className="tablet:w-[305px] flex flex-col tablet:gap-6">
            <AccordionSection title="Menu">
              {menuLinks.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#B6B6B6] hover:text-white transition-colors leading-5"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href} className="text-sm text-[#B6B6B6] hover:text-white transition-colors leading-5">
                    {l.label}
                  </Link>
                )
              )}
            </AccordionSection>
          </div>

          {/* Categories */}
          <div className="tablet:w-[305px] flex flex-col tablet:gap-6">
            <AccordionSection title="Categories">
              {categoryLinks.map((cat) => (
                <Link key={cat} href="/catalog" className="text-sm text-[#B6B6B6] hover:text-white transition-colors leading-5">
                  {cat}
                </Link>
              ))}
            </AccordionSection>
          </div>

          {/* Contact */}
          <div className="tablet:w-[305px] flex flex-col gap-4 tablet:gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white uppercase">Write to us</h4>
              <p className="text-sm text-[#7E7E7E] mt-3 leading-5">Still have questions? Ask via social media</p>
            </div>
            {/* Social */}
            <div className="flex gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <Image src="/images/shop/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#00A9DE] flex items-center justify-center">
                <Image src="/images/shop/telegram.svg" alt="Telegram" width={24} height={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#00D43F] flex items-center justify-center">
                <Image src="/images/shop/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
            <p className="text-sm text-[#7E7E7E] leading-5">Or write to us by emails</p>
            {/* Emails */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <Image src="/images/shop/email-icon.svg" alt="" width={20} height={20} className="mt-0.5" />
                <div>
                  <a href="mailto:info@dinespower.info" className="text-sm text-white leading-5 hover:text-[#FF6701] transition-colors">info@dinespower.info</a>
                  <p className="text-sm text-[#7E7E7E] leading-5">For All Questions</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Image src="/images/shop/email-sales.svg" alt="" width={20} height={20} className="mt-0.5" />
                <div>
                  <a href="mailto:sales@dinespower.info" className="text-sm text-white leading-5 hover:text-[#FF6701] transition-colors">sales@dinespower.info</a>
                  <p className="text-sm text-[#7E7E7E] leading-5">Wholesale orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#292929] mt-8 tablet:mt-[100px] pt-6 flex flex-col tablet:flex-row items-start tablet:items-center justify-between gap-3">
          <p className="text-xs tablet:text-sm text-[#7E7E7E] leading-[18px]">
            © 2026 DINESPOWER.TO is the best place to buy steroids online. We are authorized distributor of brand DEUSMEDICAL (INDIA).
          </p>
          <div className="flex gap-4 shrink-0">
            <Link href="/terms" className="text-xs tablet:text-sm text-[#7E7E7E] hover:text-white transition-colors leading-[18px]">Terms & Conditions</Link>
            <Link href="/privacy" className="text-xs tablet:text-sm text-[#7E7E7E] hover:text-white transition-colors leading-[18px]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
