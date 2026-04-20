import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { SITE_CONFIG, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dr. Ketu Patel",
  description:
    "Learn about Dr. Ketu Patel, BPT-certified physiotherapist providing expert home physiotherapy visits in Gandhinagar, Gujarat. Specializing in manual therapy, pain relief, and strength training.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Meet Your <span className="text-secondary-light">Physiotherapist</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Dedicated to bringing professional physiotherapy care to your doorstep.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Card */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 md:w-80 h-96 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border p-8 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-28 h-28 rounded-full bg-hero-gradient flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-primary/20">
                    KP
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-foreground">
                      {SITE_CONFIG.owner}
                    </h2>
                    <p className="text-primary font-semibold text-sm mt-1">
                      {SITE_CONFIG.qualification}
                    </p>
                    <p className="text-muted text-sm mt-1">
                      {SITE_CONFIG.experience}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SITE_CONFIG.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 px-4 py-2 rounded-xl bg-secondary text-white text-sm font-semibold shadow-xl animate-float">
                  🏠 Home Visits
                </div>
                <div className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl bg-white border border-border text-foreground text-sm font-semibold shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                  ✅ BPT Certified
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  About {SITE_CONFIG.owner}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                  Professional Physiotherapy{" "}
                  <span className="text-gradient">at Your Home</span>
                </h2>
                <p className="text-muted leading-relaxed">
                  Dr. Ketu Patel is a BPT-certified physiotherapist dedicated to providing
                  professional, personalized physiotherapy services at your doorstep in
                  Gandhinagar and surrounding areas. With expertise in manual therapy, pain
                  relief, and strength training, Dr. Ketu Patel brings the clinic experience to
                  the comfort of your home.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted leading-relaxed">
                  Understanding that many patients face challenges traveling to clinics —
                  whether due to post-surgery limitations, chronic pain, or elderly care needs
                  — Dr. Ketu Patel offers comprehensive home visit physiotherapy with over 14
                  advanced techniques including dry needling, IASTM, cupping therapy, and more.
                </p>
                <p className="text-muted leading-relaxed">
                  Every treatment plan is carefully designed after a thorough assessment,
                  ensuring personalized care that addresses your specific condition, goals,
                  and pace of recovery. Communication is effortless in Gujarati, Hindi, or
                  English.
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="font-bold text-foreground mb-3 text-lg">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-4 py-2 rounded-xl bg-surface border border-border text-foreground text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold text-sm shadow-lg shadow-secondary/25 hover:bg-secondary-dark hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.609l4.458-1.496A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.833-6.32-2.222l-.44-.36-3.2 1.072 1.072-3.2-.36-.44A9.952 9.952 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 md:py-20 bg-section-gradient" id="about-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "1+", label: "Years Experience", icon: "📅" },
              { value: "14+", label: "Techniques", icon: "🔬" },
              { value: "8+", label: "Service Categories", icon: "🏥" },
              { value: "11+", label: "Areas Covered", icon: "📍" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white border border-border text-center shadow-sm"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Professional Physiotherapy at Home?"
        subtitle="Contact Dr. Ketu Patel today for personalized treatment in Gandhinagar."
      />
    </>
  );
}
