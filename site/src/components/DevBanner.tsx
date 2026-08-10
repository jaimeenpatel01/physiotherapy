"use client";

export default function DevBanner() {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

  if (isProduction) return null;

  return (
    <div className="fixed bottom-24 right-4 md:bottom-4 md:right-4 z-[9999] bg-amber-500 text-amber-950 text-xs font-semibold py-2 px-4 rounded-full shadow-lg border border-amber-600 flex items-center gap-2 pointer-events-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-800 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-800" />
      </span>
      DEV PREVIEW
    </div>
  );
}
