import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dr. Ketu Patel for home physiotherapy visits in Gandhinagar. Call, WhatsApp, or fill the form. Phone: 7046083586. Available in Gandhinagar and nearby areas.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Contact{" "}
            <span className="text-secondary-light">Us</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Ready to start your recovery? Reach out to book your home
            physiotherapy session in Gandhinagar.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Map Placeholder / Info Section */}
      <section className="py-16 md:py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                ⏰
              </div>
              <h3 className="font-bold text-foreground mb-2">Working Hours</h3>
              <p className="text-muted text-sm">Monday - Sunday</p>
              <p className="text-primary font-semibold text-sm mt-1">
                6:00 AM - 8:00 PM
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="font-bold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted text-sm">We respond within</p>
              <p className="text-secondary font-semibold text-sm mt-1">
                2-3 Hours
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                🏠
              </div>
              <h3 className="font-bold text-foreground mb-2">Home Visits Only</h3>
              <p className="text-muted text-sm">We come to you in</p>
              <p className="text-accent font-semibold text-sm mt-1">
                Gandhinagar & Nearby
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
