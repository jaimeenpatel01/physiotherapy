interface TechniqueCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function TechniqueCard({ title, description, icon }: TechniqueCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/20 card-hover shadow-sm hover:shadow-xl">
      <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-xl mb-4 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
