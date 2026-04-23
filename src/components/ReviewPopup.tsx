"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function ReviewPopup({ isOpen, onClose, productName = "Dinespower" }: ReviewPopupProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handlePhotoAdd = (files: FileList | null) => {
    if (!files) return;
    const newUrls: string[] = [];
    Array.from(files).forEach((file) => {
      if (file.size > 5 * 1024 * 1024) return; // 5MB limit
      const url = URL.createObjectURL(file);
      newUrls.push(url);
    });
    setPhotos((prev) => [...prev, ...newUrls].slice(0, 8)); // max 8 photos
  };

  const removePhoto = (idx: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const canSubmit = rating > 0 && feedback.trim().length > 0 && agreed;

  const handleSubmit = () => {
    if (!canSubmit) return;
    // TODO: integrate with real API
    onClose();
    setRating(0);
    setFeedback("");
    setAgreed(false);
    setPhotos([]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end tablet:items-center justify-center tablet:p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-t-[16px] tablet:rounded-[16px] w-full tablet:max-w-[540px] max-h-[92vh] tablet:max-h-[90vh] overflow-y-auto z-10">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#181818] hover:opacity-60 transition-opacity z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-5 tablet:p-6 desktop:p-8 flex flex-col gap-5 tablet:gap-6">
          {/* Title + description */}
          <div className="flex flex-col items-center gap-2 text-center pr-6">
            <h2 className="text-[20px] tablet:text-[22px] desktop:text-[24px] font-extrabold text-[#181818] leading-[26px] tablet:leading-[28px] desktop:leading-[30px]">Add a Review</h2>
            <p className="text-[13px] tablet:text-[14px] text-[#7E7E7E] leading-5">
              How would you rate your experience with {productName} so far?
            </p>
          </div>

          {/* Star rating */}
          <div className="flex justify-center gap-1" onMouseLeave={() => setHoverRating(0)}>
            {[1, 2, 3, 4, 5].map((s) => {
              const filled = s <= (hoverRating || rating);
              return (
                <button
                  key={s}
                  onClick={() => setRating(s)}
                  onMouseEnter={() => setHoverRating(s)}
                  aria-label={`${s} stars`}
                  className="cursor-pointer w-10 h-10 tablet:w-12 tablet:h-12 flex items-center justify-center transition-transform hover:scale-110"
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill={filled ? "#FF6701" : "none"} className="transition-colors">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={filled ? "#FF6701" : "#D8D8D8"} strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Feedback textarea */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#181818] leading-5">
              Your feedback <span className="text-[#FF6701]">*</span>
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your impressions about us"
              rows={4}
              className="w-full bg-white border border-[#E7E7E7] rounded-[8px] px-4 py-3 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors resize-none leading-5"
            />
          </div>

          {/* Photo upload */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#181818] leading-5">
              Add photo <span className="text-[#7E7E7E] font-normal">(optional)</span>
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml"
              multiple
              onChange={(e) => handlePhotoAdd(e.target.files)}
              className="hidden"
            />

            {photos.length === 0 ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer w-full border border-dashed border-[#CBCBCB] rounded-[12px] py-6 flex flex-col items-center justify-center gap-2 hover:border-[#181818] transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#7E7E7E]">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="10" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[14px] font-semibold text-[#181818]">Add images here</p>
                <p className="text-[12px] text-[#7E7E7E]">PNG, JPG, SVG — max size 5 MB</p>
              </button>
            ) : (
              <div className="flex flex-wrap gap-2">
                {photos.map((src, i) => (
                  <div key={i} className="relative w-[72px] h-[72px] rounded-[8px] overflow-hidden border border-[#E7E7E7] bg-[#F7F7F7] shrink-0 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label="Remove photo"
                      className="cursor-pointer absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                    </button>
                  </div>
                ))}
                {photos.length < 8 && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer w-[72px] h-[72px] rounded-[8px] border border-dashed border-[#CBCBCB] bg-[#F7F7F7] flex items-center justify-center hover:border-[#181818] transition-colors shrink-0"
                    aria-label="Add more photos"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#7E7E7E]">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Agreement checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <span
              onClick={() => setAgreed(!agreed)}
              className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                agreed ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
              }`}
            >
              {agreed && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className="text-[13px] tablet:text-[14px] text-[#181818] leading-[18px] tablet:leading-5">
              I agree to the{" "}
              <Link href="/privacy" onClick={onClose} className="font-semibold underline">Privacy Policy</Link>{" "}
              and receive offers
            </span>
          </label>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`h-12 tablet:h-[52px] rounded-[8px] text-[15px] tablet:text-[16px] font-semibold transition-colors ${
              canSubmit
                ? "cursor-pointer bg-[#181818] hover:bg-black text-white"
                : "bg-[#E7E7E7] text-[#7E7E7E] cursor-not-allowed"
            }`}
          >
            Send Review
          </button>
        </div>
      </div>
    </div>
  );
}
