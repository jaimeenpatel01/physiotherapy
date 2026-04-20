import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import TechniqueCard from "@/components/TechniqueCard";
import CTASection from "@/components/CTASection";
import { TECHNIQUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Techniques",
  description:
    "Advanced physiotherapy techniques including manual therapy, dry needling, TENS, IFT, ultrasound, exercise therapy, taping, myofascial release, cupping, IASTM, and more. Home visits in Gandhinagar.",
};

export default function TechniquesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            Our Techniques
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Advanced Treatment{" "}
            <span className="text-secondary-light">Techniques</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We use 14+ proven physiotherapy methods for effective pain relief and
            faster recovery — all available at your home.
          </p>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="14+ Techniques"
            title="Evidence-Based Treatment Methods"
            subtitle="Each technique is selected based on your specific condition for the most effective recovery pathway."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {TECHNIQUES.map((technique) => (
              <TechniqueCard
                key={technique.id}
                title={technique.title}
                description={technique.description}
                icon={technique.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-section-gradient" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="Your Treatment Journey"
            subtitle="A simple process to get expert physiotherapy care at your doorstep."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Contact Us",
                desc: "Call or WhatsApp us to describe your condition and schedule a visit.",
                icon: "📞",
              },
              {
                step: "02",
                title: "Assessment",
                desc: "Dr. Ketu Patel visits your home for a thorough physical assessment.",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Treatment Plan",
                desc: "A personalized treatment plan is created based on your needs.",
                icon: "📋",
              },
              {
                step: "04",
                title: "Recovery",
                desc: "Regular sessions with progress tracking until full recovery.",
                icon: "💪",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-white border border-border shadow-sm text-center"
              >
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                  Step {item.step}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mx-auto mt-2 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get Expert Treatment at Home"
        subtitle="Experience advanced physiotherapy techniques in the comfort of your home."
      />
    </>
  );
}
