"use client";

interface ShippingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShippingPopup({ isOpen, onClose }: ShippingPopupProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-[16px] p-8 max-w-[600px] w-full mx-4 z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#7E7E7E] hover:text-[#181818]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <h2 className="text-[24px] font-extrabold text-center mb-2">Shipping Methods</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-6">Choose your preferred shipping option</p>

        <div className="flex flex-col gap-4">
          <div className="border border-[#E7E7E7] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#181818] rounded-[12px] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 16L12 12V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-extrabold text-[#181818]">Standard Shipping</h3>
                <span className="text-[14px] font-bold text-[#181818]">From 29&euro;</span>
              </div>
              <p className="text-[13px] text-[#7E7E7E] mt-1">Europe: 5-14 business days. Tracked and insured delivery to your door.</p>
            </div>
          </div>

          <div className="border border-[#FF6701] bg-[#FFF8F4] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#FF6701] rounded-[12px] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-extrabold text-[#181818]">Express Shipping</h3>
                  <span className="bg-[#FF6701] text-white text-[11px] font-semibold px-2 py-0.5 rounded">Fast</span>
                </div>
                <span className="text-[14px] font-bold text-[#181818]">45&euro;</span>
              </div>
              <p className="text-[13px] text-[#7E7E7E] mt-1">Europe: 2-4 business days. Priority handling with express courier service.</p>
            </div>
          </div>

          <div className="border border-[#E7E7E7] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#00A9DE] rounded-[12px] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                <path d="M2 12H22" stroke="white" strokeWidth="1.5"/>
                <path d="M12 2C14.5 4.5 15.5 8 15.5 12C15.5 16 14.5 19.5 12 22C9.5 19.5 8.5 16 8.5 12C8.5 8 9.5 4.5 12 2Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-extrabold text-[#181818]">Worldwide Shipping</h3>
                <span className="text-[14px] font-bold text-[#181818]">From 39&euro;</span>
              </div>
              <p className="text-[13px] text-[#7E7E7E] mt-1">International: 7-21 business days. Available to most countries worldwide.</p>
            </div>
          </div>
        </div>

        <p className="text-[13px] text-[#7E7E7E] text-center mt-5 flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#00B638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12L11 14L15 10" stroke="#00B638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All shipments include tracking and insurance
        </p>
      </div>
    </div>
  );
}
