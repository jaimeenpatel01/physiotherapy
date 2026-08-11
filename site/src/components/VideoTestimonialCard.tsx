"use client";

import { useState } from "react";
import type { VideoTestimonial } from "@/lib/constants";

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
}

export default function VideoTestimonialCard({ testimonial }: VideoTestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const { youtubeId, name, location, title, description, type } = testimonial;

  // YouTube thumbnail — use hqdefault for standard, for shorts it still works
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  // Embed URL with privacy-enhanced mode
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;

  const isShort = type === "short";

  return (
    <div
      className="group flex flex-col rounded-2xl border border-border/50 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden motion-safe:hover:-translate-y-1"
    >
      {/* Video area */}
      <div
        className={`relative w-full bg-foreground/5 ${
          isShort ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={`Video testimonial from ${name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video testimonial from ${name}`}
            className="absolute inset-0 w-full h-full cursor-pointer group/play focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-t-2xl"
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={`Video thumbnail — ${name}'s ${title}`}
              className={`w-full h-full ${isShort ? "object-contain bg-black" : "object-cover"}`}
              loading="lazy"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/40 transition-colors" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/30 group-hover/play:scale-110 transition-transform motion-safe:transition-transform">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
            {name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm truncate">{name}</p>
            <p className="text-muted text-xs truncate">{location}</p>
          </div>
        </div>
        {title && (
          <p className="mt-2 text-xs font-medium text-primary/80">{title}</p>
        )}
        {description && (
          <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
}
