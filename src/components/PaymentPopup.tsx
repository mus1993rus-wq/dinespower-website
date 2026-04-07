"use client";

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentPopup({ isOpen, onClose }: PaymentPopupProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-[16px] p-8 max-w-[600px] w-full mx-4 z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#7E7E7E] hover:text-[#181818]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <h2 className="text-[24px] font-extrabold text-center mb-2">Payment Methods</h2>
        <p className="text-[14px] text-[#7E7E7E] text-center mb-6">Choose your preferred payment method</p>

        <div className="flex flex-col gap-4">
          <div className="border border-[#E7E7E7] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#181818] rounded-[12px] flex items-center justify-center shrink-0">
              <span className="text-white text-[20px]">🏦</span>
            </div>
            <div>
              <h3 className="text-[16px] font-extrabold text-[#181818]">Bank Transfer</h3>
              <p className="text-[13px] text-[#7E7E7E] mt-1">Telegraphic Transfer (wire) to company bank account. Processing time: 1-5 business days.</p>
            </div>
          </div>

          <div className="border border-[#FF6701] bg-[#FFF8F4] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#FF6701] rounded-[12px] flex items-center justify-center shrink-0">
              <span className="text-white text-[20px] font-bold">&#8383;</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-[16px] font-extrabold text-[#181818]">Bitcoin (BTC)</h3>
                <span className="bg-[#FF6701] text-white text-[11px] font-semibold px-2 py-0.5 rounded">Recommended</span>
              </div>
              <p className="text-[13px] text-[#7E7E7E] mt-1">The preferred and most reliable payment method. Always available, fast processing with instant network confirmation.</p>
            </div>
          </div>

          <div className="border border-[#E7E7E7] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#627EEA] rounded-[12px] flex items-center justify-center shrink-0">
              <span className="text-white text-[20px] font-bold">&Xi;</span>
            </div>
            <div>
              <h3 className="text-[16px] font-extrabold text-[#181818]">Ethereum (ETH)</h3>
              <p className="text-[13px] text-[#7E7E7E] mt-1">Pay with Ethereum. Fast confirmation times and widely supported.</p>
            </div>
          </div>

          <div className="border border-[#E7E7E7] rounded-[12px] p-5 flex items-start gap-4">
            <div className="w-[48px] h-[48px] bg-[#26A17B] rounded-[12px] flex items-center justify-center shrink-0">
              <span className="text-white text-[16px] font-bold">USDT</span>
            </div>
            <div>
              <h3 className="text-[16px] font-extrabold text-[#181818]">USDT (Tether)</h3>
              <p className="text-[13px] text-[#7E7E7E] mt-1">Stablecoin payment. No price volatility, instant settlement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
