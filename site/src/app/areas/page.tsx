import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { AREAS, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Areas Covered",
  description:
    "Home physiotherapy services available in Gandhinagar (all sectors), Pethapur, Randheja, Raysan, Randesan, Adalaj, Vavol, Uvarsad, Tintoda, Kudasan, and Sargasan.",
};

export default function AreasPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            Service Areas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Areas We{" "}
            <span className="text-secondary-light">Cover</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Home physiotherapy visits available across Gandhinagar and surrounding
            areas in Gujarat.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="11+ Locations"
            title="We Come to You"
            subtitle="No matter where you are in Gandhinagar or nearby areas, we bring professional physiotherapy to your doorstep."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {AREAS.map((area) => (
              <div
                key={area.name}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  area.primary
                    ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                    : "bg-white border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                      area.primary
                        ? "bg-primary/10"
                        : "bg-surface"
                    }`}
                  >
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      {area.name} <span className="text-primary/70 font-medium ml-1">({area.gujaratiName})</span>
                    </h3>
                    <p className="text-muted text-sm mt-0.5">
                      {area.primary
                        ? "Primary service area — All sectors covered"
                        : "Home physiotherapy visits available"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not in Listed Area */}
      <section className="py-16 md:py-20 bg-section-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-border shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mx-auto mb-5">
              🗺️
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We may still be able to serve your location! Contact us to check if
              we can provide home physiotherapy visits in your area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_LINK}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Check
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold text-sm shadow-lg shadow-secondary/25 hover:bg-secondary-dark transition-all"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Book Your Home Visit Today"
        subtitle="Professional physiotherapy delivered to your doorstep anywhere in Gandhinagar."
      />
    </>
  );
}
