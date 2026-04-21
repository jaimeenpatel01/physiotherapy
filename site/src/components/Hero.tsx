import Image from "next/image";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center bg-hero-gradient overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 md:py-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-3 md:space-y-8"> 
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              નમસ્તે! — Serving Gandhinagar
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] tracking-tight">
              Expert{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Physiotherapy</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/30 -z-0 rounded" />
              </span>
              <br />
              at Your{" "}
              <span className="text-secondary-light">Doorstep</span>
            </h1>

            {/* Mobile Photo - visible only on mobile */}
            <div className="lg:hidden flex justify-center py-4">
              <div className="relative">
                <div className="w-64 h-72 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-2 overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/ketu-image.jpg"
                      alt="Dr. Ketu Patel - Physiotherapist"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Simplified floating badges for mobile */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-white shadow-xl text-[11px] font-bold text-primary animate-float">
                  ✅ Qualified BPT
                </div>
                <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-secondary text-white shadow-xl text-[11px] font-bold animate-float" style={{ animationDelay: "2s" }}>
                  🏠 Home Visits
                </div>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-base md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              Professional Home Physiotherapy Visits in Gandhinagar.<br />
              <span className="text-secondary-light font-medium italic">ઘરે બેઠા ફિઝિયોથેરાપી સારવાર — Physiotherapy at Home</span>.
              Personalized care by Dr. Ketu Patel — recover faster, at home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start px-4 sm:px-0">
              <a
                href={PHONE_LINK}
                id="hero-call-btn"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-primary font-bold text-base shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-secondary text-white font-bold text-base shadow-2xl shadow-secondary/30 hover:bg-secondary-dark hover:-translate-y-1 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.609l4.458-1.496A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.833-6.32-2.222l-.44-.36-3.2 1.072 1.072-3.2-.36-.44A9.952 9.952 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                </span>
                WhatsApp Now
              </a>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-2 md:pt-4">
              {[
                { value: "2+", label: "Years Exp." },
                { value: "14+", label: "Techniques" },
                { value: "100%", label: "Home Visits" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-sm text-white/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-96 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-2 flex flex-col items-center justify-center text-center space-y-4 overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/ketu-image.jpg"
                    alt="Dr. Ketu Patel - Physiotherapist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay for text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    <h3 className="text-xl font-bold text-white">Dr. Ketu Patel</h3>
                    <p className="text-white/80 text-sm">BPT — Physiotherapist</p>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white shadow-xl text-sm font-semibold text-primary animate-float">
                ✅ Qualified BPT
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-secondary text-white shadow-xl text-sm font-semibold animate-float" style={{ animationDelay: "2s" }}>
                🏠 Home Visits
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
