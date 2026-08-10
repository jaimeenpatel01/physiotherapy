"use client";

import { useState, useEffect } from "react";
import { PHONE_LINK } from "@/lib/constants";

/**
 * ═══════════════════════════════════════════════════════════════
 * 🔌 PLUGIN: Special Offer Banner — Independence Day Camp 2026
 * ═══════════════════════════════════════════════════════════════
 *
 * TO REMOVE: Delete this file and remove the <SpecialOfferBanner />
 *            line from src/app/page.tsx. That's it!
 *
 * TO UPDATE: Change the OFFER_CONFIG object below with new dates,
 *            venue, and offer details.
 * ═══════════════════════════════════════════════════════════════
 */

const OFFER_CONFIG = {
  title: "Free Physiotherapy Checkup Camp",
  occasion: "Independence Day Special",
  tagline: "Healthy Body. Active Life.",
  dates: [
    { date: "15 Aug 2026", day: "Saturday", time: "2 PM – 6 PM" },
    { date: "16 Aug 2026", day: "Sunday", time: "2 PM – 6 PM" },
  ],
  offer: {
    highlight: "50% OFF",
    detail: "On Consultation & Initial Checkup",
  },
  venue: {
  name: "Dr. Desai's Super Speciality Hospital",
    address: "Pratham Marg, Shivshakti Avenue, Near Bus Stand, Pethapur, Gandhinagar",
  },
  // Banner auto-hides after this date (end of last camp day)
  expiresAfter: new Date("2026-08-16T18:30:00+05:30"),
};

export default function SpecialOfferBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed this session
    const wasDismissed = sessionStorage.getItem("offer-banner-dismissed");
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    // Check if the offer has expired
    if (new Date() > OFFER_CONFIG.expiresAfter) {
      setIsExpired(true);
      return;
    }

    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("offer-banner-dismissed", "true");
    setTimeout(() => setDismissed(true), 500);
  };

  if (dismissed || isExpired) return null;

  return (
    <section
      id="special-offer-banner"
      className={`relative overflow-hidden transition-all duration-500 ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
        }`}
    >
      {/* Background — site primary blue base + vibrant tiranga accents */}
      <div className="relative py-8 md:py-12 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B6CB0 0%, #094d80 40%, #0B6CB0 70%, #06B6D4 100%)" }}>

        {/* ── Glowing tiranga fades bleeding inward ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Saffron glow — top-left */}
          <div
            className="absolute -top-20 -left-10 w-[24rem] h-[24rem] rounded-full blur-[80px] animate-pulse-soft"
            style={{ background: "radial-gradient(circle, rgba(255,153,51,0.5) 0%, transparent 70%)" }}
          />
          {/* Green glow — bottom-right */}
          <div
            className="absolute -bottom-20 -right-10 w-[24rem] h-[24rem] rounded-full blur-[80px] animate-pulse-soft"
            style={{ background: "radial-gradient(circle, rgba(19,136,8,0.5) 0%, transparent 70%)", animationDelay: "1.5s" }}
          />
          {/* White shimmer — center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[18rem] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
          />
          {/* Saffron edge wash — left */}
          <div className="absolute top-0 left-0 bottom-0 w-1/4" style={{ background: "linear-gradient(to right, rgba(255,153,51,0.2), transparent)" }} />
          {/* Green edge wash — right */}
          <div className="absolute top-0 right-0 bottom-0 w-1/4" style={{ background: "linear-gradient(to left, rgba(19,136,8,0.2), transparent)" }} />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Occasion badge */}
          <div className="flex justify-center mb-4 md:mb-5">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 shadow-lg" style={{ background: "linear-gradient(135deg, rgba(255,153,51,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(19,136,8,0.25) 100%)", backdropFilter: "blur(8px)" }}>
              <span className="text-lg">🇮🇳</span>
              <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
                {OFFER_CONFIG.occasion}
              </span>
              <span className="text-lg">🇮🇳</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-1.5 md:mb-2 tracking-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
            {OFFER_CONFIG.title}
          </h2>
          <p className="text-center text-white/70 text-sm md:text-base mb-7 md:mb-9 italic font-light">
            {OFFER_CONFIG.tagline}
          </p>

          {/* Three cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

            {/* Card 1: Camp Dates */}
            <div className="rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/20 p-5 md:p-6 hover:bg-white/[0.18] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF9933, #FFB366)" }}>
                  <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide">Camp Dates</h3>
              </div>
              <div className="space-y-2.5">
                {OFFER_CONFIG.dates.map((d) => (
                  <div
                    key={d.date}
                    className="flex items-center justify-between bg-white/[0.08] rounded-xl px-3.5 py-2.5 border border-white/10"
                  >
                    <div>
                      <p className="text-white font-semibold text-sm">{d.date}</p>
                      <p className="text-[#FFB366] text-xs font-semibold">{d.day}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {d.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Special Offer */}
            <div className="rounded-2xl backdrop-blur-md border border-[#34D399]/30 p-5 md:p-6 hover:border-[#34D399]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(255,255,255,0.08) 100%)" }}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #10B981, #34D399)" }}>
                  <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide">Special Offer</h3>
              </div>
              <div className="text-center py-1">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black tracking-tight animate-pulse-soft" style={{ color: "#34D399", textShadow: "0 0 30px rgba(52,211,153,0.4)" }}>
                    {OFFER_CONFIG.offer.highlight}
                  </span>
                </div>
                <p className="text-white/90 text-xs mb-3 font-medium">
                  {OFFER_CONFIG.offer.detail}
                </p>
               
              </div>
            </div>

            {/* Card 3: Venue */}
            <div className="rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/20 p-5 md:p-6 hover:bg-white/[0.18] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #06B6D4, #22D3EE)" }}>
                  <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide">Venue</h3>
              </div>
              <div className="space-y-2.5">
                <p className="text-white font-semibold text-sm leading-snug">
                  {OFFER_CONFIG.venue.name}
                </p>
                <p className="text-white/75 text-xs leading-relaxed">
                  {OFFER_CONFIG.venue.address}
                </p>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(OFFER_CONFIG.venue.name + ", " + OFFER_CONFIG.venue.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline mt-1 transition-colors duration-200" style={{ color: "#22D3EE" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
