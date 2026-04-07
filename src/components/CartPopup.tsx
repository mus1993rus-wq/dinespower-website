"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPopup({ isOpen, onClose }: CartPopupProps) {
  const { items, removeItem, updateQty, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  const discountThreshold = 200;
  const amountToDiscount = Math.max(0, discountThreshold - totalPrice);

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[420px] bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E7E7E7]">
          <h2 className="text-[20px] font-extrabold">Cart ({totalItems})</h2>
          <button onClick={onClose} className="text-[#7E7E7E] hover:text-[#181818] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        {totalPrice > 0 && (
          <div className="px-6 py-3">
            <p className="text-[13px] text-[#7E7E7E]">
              {amountToDiscount > 0 ? (
                <>
                  You&apos;re just{" "}
                  <span className="font-bold text-[#181818] bg-[#F7F7F7] px-2 py-0.5 rounded">{amountToDiscount}&euro;</span>{" "}
                  away from getting a 5% discount
                </>
              ) : (
                <span className="font-bold text-[#00B638]">You qualify for a 5% discount!</span>
              )}
            </p>
            <div className="w-full h-[4px] bg-[#E7E7E7] rounded mt-2">
              <div className="h-full bg-[#FF6701] rounded" style={{ width: `${Math.min(100, (totalPrice / discountThreshold) * 100)}%` }} />
            </div>
          </div>
        )}

        {/* Cart items */}
        <div className="flex-1 overflow-auto px-6">
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-[#7E7E7E]">
              <p className="text-lg font-semibold mb-2">Your cart is empty</p>
              <p className="text-sm">Add products to get started</p>
            </div>
          )}
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 py-4 border-b border-[#E7E7E7]">
              <div className="w-[80px] h-[80px] bg-[#F7F7F7] rounded-[8px] shrink-0 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <Image src={item.image} alt={item.name} width={60} height={60} className="object-contain" unoptimized />
                ) : (
                  <div className="w-full h-full bg-[#F7F7F7]" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#7E7E7E]">{item.brand}</p>
                <p className="text-sm font-semibold line-clamp-2">{item.name}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#FF6701] font-extrabold">{item.price}&euro;</span>
                  {item.oldPrice && (
                    <span className="text-[#B6B6B6] line-through text-sm">{item.oldPrice} &euro;</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQty(index, item.qty - 1)}
                    className="w-7 h-7 border border-[#E7E7E7] rounded flex items-center justify-center text-[#181818] hover:border-[#FF6701] transition-colors"
                  >
                    &minus;
                  </button>
                  <span className="text-sm font-semibold">{item.qty}</span>
                  <button
                    onClick={() => updateQty(index, item.qty + 1)}
                    className="w-7 h-7 border border-[#E7E7E7] rounded flex items-center justify-center text-[#181818] hover:border-[#FF6701] transition-colors"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(index)}
                    className="ml-auto text-xs text-[#7E7E7E] hover:text-[#FF3B30] transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {items.length > 0 && (
            <>
              {/* You might also like */}
              <div className="py-4">
                <h3 className="text-[16px] font-extrabold mb-3">You might also like</h3>
                <div className="flex gap-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex-1 border border-[#E7E7E7] rounded-[8px] p-3">
                      <div className="w-full h-[80px] bg-[#F7F7F7] rounded-[6px] mb-2" />
                      <p className="text-xs text-[#7E7E7E]">Deus Medical</p>
                      <p className="text-xs font-semibold line-clamp-2 mt-0.5">Andarine S4 SARM</p>
                      <p className="text-sm font-extrabold text-[#FF6701] mt-1">44&euro;</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo code */}
              <button className="w-full flex items-center justify-between py-3 border-t border-[#E7E7E7] text-sm font-semibold">
                Do You Have A Promo Code? <span className="text-lg">+</span>
              </button>
              <button className="w-full flex items-center justify-between py-3 border-t border-[#E7E7E7] text-sm font-semibold">
                Calculate Shipping Rate <span className="text-lg">+</span>
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E7E7E7] p-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#7E7E7E]">Products</span>
              <span>{totalPrice}&euro;</span>
            </div>
            <div className="flex justify-between text-lg font-extrabold mb-4">
              <span>Total</span>
              <span>{totalPrice}&euro;</span>
            </div>
            <button className="w-full bg-[#FF6701] hover:bg-[#E65D00] text-white font-semibold h-[48px] rounded-[8px] mb-2 transition-colors">
              Check Out
            </button>
            <button onClick={onClose} className="w-full text-[14px] font-semibold text-[#181818] h-[40px] hover:text-[#FF6701] transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
