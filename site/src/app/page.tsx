import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TechniqueCard from "@/components/TechniqueCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  SERVICES,
  TECHNIQUES,
  TESTIMONIALS,
  FAQS,
  WHY_CHOOSE_US,
  AREAS,
  PHONE_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Trust Badges */}
      <section className="py-6 md:py-16 bg-white" id="trust-badges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              વિશ્વાસ અને સંતોષ <span className="text-primary">— Trust & Quality</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
            {[
              {
                icon: "🎓",
                title: "Qualified Professional",
                desc: "BPT certified with expertise in 14+ modern techniques",
              },
              {
                icon: "🏠",
                title: "100% Home Visits",
                desc: "Professional treatment at your doorstep — no travel needed",
              },
              {
                icon: "💎",
                title: "Personalized Care",
                desc: "Every treatment plan tailored to your unique condition",
              },
            ].map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 p-3.5 md:p-6 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-lg md:text-2xl shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">{badge.title}</h3>
                  <p className="text-muted text-[11px] md:text-xs mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10 md:py-24 bg-section-gradient" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Home Physiotherapy"
            subtitle="From orthopedic rehabilitation to neurological care — expert treatment delivered to your home."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.slice(0, 8).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={"image" in service ? service.image : undefined}
              />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-10 md:py-24 bg-white" id="techniques-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Techniques"
            title="Advanced Treatment Methods"
            subtitle="Expert care using the latest physiotherapy techniques for faster recovery."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TECHNIQUES.slice(0, 8).map((technique) => (
              <TechniqueCard
                key={technique.id}
                title={technique.title}
                description={technique.description}
                image={"image" in technique ? technique.image : undefined}
              />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/techniques"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors"
            >
              Learn About Techniques
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-24 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Testimonials"
            title="What Our Patients Say"
            subtitle="Real stories of recovery and improved quality of life from patients who received home care."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                gujaratiLocation={testimonial.gujaratiLocation}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-10 md:py-24 bg-section-gradient" id="areas-served">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Locations"
            title="Areas We Serve in Gandhinagar"
            subtitle="Professional home physiotherapy visits available across these areas."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {AREAS.map((area) => (
              <div
                key={area.name}
                className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl border text-center text-sm font-medium transition-all ${
                  area.primary
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white border-border/50 text-foreground shadow-sm hover:border-primary/20 hover:text-primary"
                }`}
              >
                <span>{area.name}</span>
                <span className={area.primary ? "text-white/80 text-xs mt-1" : "text-primary/70 text-xs mt-1"}>
                  {area.gujaratiName}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 p-6 md:p-8 rounded-3xl bg-primary text-white text-center">
            <h3 className="text-xl font-bold mb-2">Don't see your area?</h3>
            <p className="text-white/80 mb-6">Contact us to check availability for home visits in your location.</p>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary font-bold text-sm shadow-xl"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-24 bg-white" id="faq-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about our home physiotherapy services."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
