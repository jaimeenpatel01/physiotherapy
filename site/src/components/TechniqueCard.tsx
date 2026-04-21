import Image from "next/image";

interface TechniqueCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function TechniqueCard({ title, description, image }: TechniqueCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/20 card-hover shadow-sm hover:shadow-xl text-center overflow-hidden flex flex-col h-full">
      {image && (
        <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
}
