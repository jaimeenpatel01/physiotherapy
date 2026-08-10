"use client";

export default function DevBanner() {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

  if (isProduction) return null;

  return (
    <div className="relative z-[100] bg-amber-500 text-amber-950 text-center text-xs font-semibold py-1.5 px-4">
      <span className="inline-flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-800 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-800" />
        </span>
        DEV PREVIEW — This is not the live site
      </span>
    </div>
  );
}
