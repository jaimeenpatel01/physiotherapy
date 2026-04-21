import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homephysiotherapyvisits.com"),
  title: {
    default: "Home Physiotherapy Visits | Dr. Ketu Patel | Gandhinagar",
    template: "%s | Home Physiotherapy Visits - Gandhinagar",
  },
  description:
    "Professional home physiotherapy visits in Gandhinagar by Dr. Ketu Patel (BPT). Expert treatment for back pain, stroke rehab, sports injuries, and more at your doorstep. Call now!",
  keywords: [
    "physiotherapist in Gandhinagar",
    "home physiotherapy Gandhinagar",
    "physiotherapy home visit Gandhinagar",
    "back pain treatment Gandhinagar",
    "stroke rehab Gandhinagar",
    "physiotherapist near me",
    "home physiotherapy Gujarat",
    "Dr. Ketu Patel physiotherapy",
    "best physiotherapist Gandhinagar",
    "physiotherapy at home",
  ],
  authors: [{ name: "Dr. Ketu Patel" }],
  openGraph: {
    title: "Home Physiotherapy Visits | Dr. Ketu Patel | Gandhinagar",
    description:
      "Professional home physiotherapy visits in Gandhinagar. Expert pain relief, rehabilitation & personalized care at your doorstep.",
    type: "website",
    locale: "en_IN",
    siteName: "Home Physiotherapy Visits",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "u3GthlZTy0vdGLuFiWoGMOJhmHjs1yhUvMleEtK9MwI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physiotherapy",
              name: "Home Physiotherapy Visits",
              description:
                "Professional home physiotherapy visits in Gandhinagar by Dr. Ketu Patel (BPT).",
              url: "https://homephysiotherapyvisits.com",
              telephone: "+917046083586",
              email: "drketupatel0209@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gandhinagar",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.2156",
                longitude: "72.6369",
              },
              areaServed: [
                "Gandhinagar",
                "Pethapur",
                "Randheja",
                "Raysan",
                "Randesan",
                "Adalaj",
                "Vavol",
                "Uvarsad",
                "Tintoda",
                "Kudasan",
                "Sargasan",
              ],
              founder: {
                "@type": "Person",
                name: "Dr. Ketu Patel",
                jobTitle: "Physiotherapist",
                qualification: "BPT (Bachelor of Physiotherapy)",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "20:00",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        {/* Bottom padding for mobile sticky bar */}
        <div className="h-[72px] md:hidden" />
        <SpeedInsights />
      </body>
    </html>
  );
}
