import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { SERVICES, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive home physiotherapy services in Gandhinagar: orthopedic, neurological, cardiopulmonary, sports rehab, pre/post surgery, fitness, pregnancy exercises, and personalized home exercise programs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Home Physiotherapy{" "}
            <span className="text-secondary-light">Services</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive rehabilitation and wellness services delivered to your
            doorstep in Gandhinagar.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={PHONE_LINK}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Book This Service
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-secondary/10 text-secondary font-semibold text-sm hover:bg-secondary/20 transition-colors"
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {service.image && (
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-border/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border">
                    <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                      What We Treat
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2.5 text-sm text-foreground/80"
                        >
                          <svg className="w-4 h-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help With Any Condition?"
        subtitle="Contact us to discuss your specific needs and get a personalized treatment plan."
      />
    </>
  );
}
