"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Build page numbers: 1 2 3 4 5 6 7 8 ... last
  const pages: (number | "...")[] = [];
  const maxVisible = 8;
  if (totalPages <= maxVisible + 2) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) pages.push(i);
    if (maxVisible < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between w-full mt-10">
      {/* Prev */}
      <button
        onClick={() => !isFirst && onPageChange(currentPage - 1)}
        className={`flex items-center gap-1 h-[48px] w-[120px] rounded-[8px] justify-center text-[14px] font-semibold transition-colors ${
          isFirst
            ? "bg-[#F7F7F7] text-[#B6B6B6] cursor-default"
            : "bg-white border border-[#E7E7E7] text-[#181818] hover:border-[#181818] cursor-pointer"
        }`}
        disabled={isFirst}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Prev
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-2">
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`dots-${i}`} className="w-[48px] h-[48px] flex items-center justify-center text-[16px] font-semibold text-black">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`cursor-pointer w-[48px] h-[48px] rounded-[8px] flex items-center justify-center text-[16px] font-semibold transition-colors ${
                currentPage === p
                  ? "border-2 border-black text-black"
                  : "bg-white border border-[#E7E7E7] text-black hover:border-[#181818]"
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => !isLast && onPageChange(currentPage + 1)}
        className={`flex items-center gap-1 h-[48px] w-[120px] rounded-[8px] justify-center text-[14px] font-semibold transition-colors ${
          isLast
            ? "bg-[#F7F7F7] text-[#B6B6B6] cursor-default"
            : "bg-white border border-[#E7E7E7] text-[#181818] hover:border-[#181818] cursor-pointer"
        }`}
        disabled={isLast}
      >
        Next
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
