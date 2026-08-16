import { Reveal } from "./Reveal";
import { waLink } from "@/lib/contact";

export function AccommodationCard({
  image,
  alt,
  name,
  description,
  delay = 0,
}: {
  image: string;
  alt: string;
  name: string;
  description: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col bg-card shadow-[0_20px_60px_-40px_rgba(0,0,0,0.5)]">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col p-8">
          <h3 className="text-2xl text-charcoal">{name}</h3>
          <div className="rule-gold mt-4" />
          <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={waLink(`Hello Celebs Resort, please share more details about the ${name}.`)}
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] tracking-[0.2em] uppercase text-forest underline-offset-4 hover:underline"
            >
              Explore Room
            </a>
            <a
              href={waLink(`Hello Celebs Resort, I would like to view details of the ${name}.`)}
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] tracking-[0.2em] uppercase text-charcoal/60 underline-offset-4 hover:underline"
            >
              View Details
            </a>
            <a
              href={waLink(`Hello Celebs Resort, I would like to book the ${name}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-solid !px-5 !py-3"
            >
              Book Now
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
