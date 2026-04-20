"use client";

import { useState } from "react";
import { SITE_CONFIG, WHATSAPP_LINK, PHONE_LINK, AREAS } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
    area: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const message = encodeURIComponent(
      `Hello Dr. Ketu Patel,\n\nI would like to book a home physiotherapy visit.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nProblem: ${formData.problem}\nArea: ${formData.area}\nPreferred Time: ${formData.preferredTime}`
    );
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Get in Touch</h3>
          <p className="text-muted text-sm leading-relaxed">
            Reach out to book your home physiotherapy session or ask any questions.
            We respond within a few hours.
          </p>
        </div>

        <div className="space-y-4">
          {/* Call Card */}
          <a
            href={PHONE_LINK}
            id="contact-call-card"
            className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Call Us</p>
              <p className="text-primary font-bold">{SITE_CONFIG.phoneFormatted}</p>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-card"
            className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.609l4.458-1.496A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.833-6.32-2.222l-.44-.36-3.2 1.072 1.072-3.2-.36-.44A9.952 9.952 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">WhatsApp</p>
              <p className="text-secondary font-bold">{SITE_CONFIG.phoneFormatted}</p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            id="contact-email-card"
            className="flex items-center gap-4 p-4 rounded-2xl bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Email</p>
              <p className="text-accent font-bold text-sm">{SITE_CONFIG.email}</p>
            </div>
          </a>

          {/* Location Card */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Service Area</p>
              <p className="text-muted text-sm">{SITE_CONFIG.location} & nearby areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border border-border shadow-lg">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-3xl mb-4">
              ✅
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
            <p className="text-muted text-sm">
              We&apos;ll get back to you shortly via WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
            <h3 className="text-lg font-bold text-foreground mb-1">Book an Appointment</h3>
            <p className="text-muted text-sm mb-6">Fill in the form and we&apos;ll reach out to you on WhatsApp.</p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground placeholder:text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground placeholder:text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-foreground mb-1.5">
                Describe Your Problem *
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                rows={3}
                value={formData.problem}
                onChange={handleChange}
                placeholder="E.g., Back pain, knee pain, post-surgery rehab..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground placeholder:text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <div>
              <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1.5">
                Your Area *
              </label>
              <select
                id="area"
                name="area"
                required
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="">Select your area</option>
                {AREAS.map((area) => (
                  <option key={area.name} value={area.name}>
                    {area.name}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-1.5">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="">Select preferred time</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>

            <button
              type="submit"
              id="contact-submit-btn"
              className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
