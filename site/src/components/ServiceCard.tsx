import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details?: readonly string[];
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  details,
  href = "/services",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-primary/20 card-hover shadow-sm hover:shadow-xl"
    >
      <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-2xl mb-5 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      {details && details.length > 0 && (
        <ul className="space-y-1.5">
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
