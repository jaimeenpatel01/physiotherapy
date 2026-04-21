interface TestimonialCardProps {
  name: string;
  location: string;
  gujaratiLocation?: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({ name, location, gujaratiLocation, text, rating }: TestimonialCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-muted text-xs">
            {location} {gujaratiLocation && <span className="text-primary/70 ml-1">({gujaratiLocation})</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
