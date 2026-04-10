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

const menuLinks = [
  { label: "About Us", href: "/about" },
  { label: "Lab Tests", href: "/lab-tests" },
  { label: "Shipping & Payment", href: "/delivery-payment" },
  { label: "Payment in Bitcoin", href: "/bitcoin" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Wholesale & Dropshipping", href: "#" },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  "Injectable", "Oral", "Fat Burn", "Peptides & HGH", "SARMs",
  "PCT", "Energy", "Sex Support", "Health", "Stacks", "Amino Acids",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] mt-auto">
      {/* Partner logos bar */}
      <div className="bg-[#F6F6F6] rounded-bl-2xl rounded-br-2xl">
        <div className="max-w-[1340px] mx-auto flex items-center justify-between h-[80px]">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="h-16 w-[164px] relative flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={164} height={64} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1340px] mx-auto pt-[100px] pb-[25px]">
        <div className="flex gap-16">
          {/* Logo column */}
          <div className="w-[305px] shrink-0 flex flex-col gap-7">
            <Link href="/" className="block">
              <Image src="/images/shop/logo-footer.svg" alt="Dines Power" width={226} height={94} />
            </Link>
            <p className="text-sm font-semibold text-[#B6B6B6] leading-5">
              Official Representative Of<br/>Deus Medical, Biaxol, Astera Labs
            </p>
            <Image src="/images/shop/verified-seller.svg" alt="Verified Seller" width={124} height={124} />
          </div>

          {/* Menu */}
          <div className="w-[305px] flex flex-col gap-6">
            <h4 className="text-lg font-semibold text-white uppercase">Menu</h4>
            <div className="flex flex-col gap-2">
              {menuLinks.map((l) => (
                <Link key={l.label} href={l.href} className="text-sm text-[#B6B6B6] hover:text-white transition-colors leading-5">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="w-[305px] flex flex-col gap-6">
            <h4 className="text-lg font-semibold text-white uppercase">Categories</h4>
            <div className="flex flex-col gap-2">
              {categoryLinks.map((cat) => (
                <Link key={cat} href="/catalog" className="text-sm text-[#B6B6B6] hover:text-white transition-colors leading-5">
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="w-[305px] flex flex-col gap-6">
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
        <div className="border-t border-[#292929] mt-10 pt-6 flex items-center justify-between">
          <p className="text-sm text-[#7E7E7E] leading-[18px]">
            © 2026 DINESPOWER.TO is the best place to buy steroids online. We are authorized distributor of brand DEUSMEDICAL (INDIA).
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-[#7E7E7E] hover:text-white transition-colors leading-[18px]">Terms & Conditions</Link>
            <Link href="/privacy" className="text-sm text-[#7E7E7E] hover:text-white transition-colors leading-[18px]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
