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
                icon={service.icon}
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
                icon={technique.icon}
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

      {/* Why Choose Us */}
      <section className="py-10 md:py-24 bg-section-gradient overflow-hidden" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="Why Choose Us"
                title="Expert Care That Comes To You"
                subtitle="We bring clinical excellence to the comfort of your home, ensuring a faster and more convenient recovery."
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 md:p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted text-xs mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book Appointment
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-semibold text-sm border border-primary/20 shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.609l4.458-1.496A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.833-6.32-2.222l-.44-.36-3.2 1.072 1.072-3.2-.36-.44A9.952 9.952 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl rotate-6 transform" />
              <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-border/50">
                <div className="space-y-4 md:space-y-6">
                  {[
                    "Recovery from the comfort of home",
                    "No travel time or transportation costs",
                    "One-on-one attention from the therapist",
                    "Personalized exercise plan for your environment",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs shrink-0">
                        ✓
                      </div>
                      <p className="text-foreground text-sm md:text-base">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                className={`px-4 py-3 rounded-xl border text-center text-sm font-medium transition-all ${
                  area.primary
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white border-border/50 text-foreground shadow-sm hover:border-primary/20 hover:text-primary"
                }`}
              >
                {area.name}
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
