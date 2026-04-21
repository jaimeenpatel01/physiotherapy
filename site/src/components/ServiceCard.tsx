import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  details?: readonly string[];
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  details,
  href = "/services",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-primary/20 card-hover shadow-sm hover:shadow-xl text-center overflow-hidden flex flex-col h-full"
    >
      {image && (
        <div className="relative w-full h-40 mb-5 rounded-xl overflow-hidden shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      {details && details.length > 0 && (
        <ul className="space-y-1.5 inline-block text-left">
          {details.slice(0, 4).map((detail) => (
            <li key={detail} className="flex items-center gap-2 text-xs text-muted">
              <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {detail}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
