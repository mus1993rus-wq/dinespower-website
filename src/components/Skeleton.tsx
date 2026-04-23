// Generic skeleton primitives for loading states.
// Pure CSS (no external deps) — uses Tailwind animate-pulse.

export function SkeletonLine({
  className = "",
  width,
}: {
  className?: string;
  width?: string | number;
}) {
  return (
    <div
      className={`bg-[#E7E7E7] rounded-[4px] animate-pulse ${className}`}
      style={width ? { width: typeof width === "number" ? `${width}px` : width } : undefined}
    />
  );
}

export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`bg-[#E7E7E7] rounded-[8px] animate-pulse ${className}`} />;
}

export function SkeletonCircle({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`bg-[#E7E7E7] rounded-full animate-pulse shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function SkeletonProductCard() {
  return (
    <div className="product-card bg-white border border-[#E7E7E7] rounded-[16px] overflow-hidden flex flex-col w-[170px] tablet:w-[210px] wide:w-[255px] shrink-0">
      <div className="aspect-square wide:h-[252px] wide:aspect-auto bg-[#F7F7F7] flex items-center justify-center p-4">
        <SkeletonBlock className="w-full h-full" />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <SkeletonLine className="h-3 w-16" />
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/4" />
        <SkeletonLine className="h-3 w-20 mt-1" />
        <SkeletonBlock className="h-10 mt-2" />
        <SkeletonBlock className="h-10 mt-3" />
      </div>
    </div>
  );
}

export function SkeletonOrderRow() {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-[#E7E7E7] px-4">
      <SkeletonCircle size={32} />
      <SkeletonLine className="h-4 flex-1" />
      <SkeletonLine className="h-4 w-20" />
      <SkeletonLine className="h-4 w-16" />
    </div>
  );
}

export function SkeletonAccountDashboard() {
  return (
    <div className="flex flex-col gap-6 pt-2">
      <div className="flex flex-col gap-2">
        <SkeletonLine className="h-6 w-64" />
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/4" />
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <SkeletonBlock key={i} className="h-[140px]" />
        ))}
      </div>
    </div>
  );
}
