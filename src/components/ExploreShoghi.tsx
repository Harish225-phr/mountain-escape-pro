import { Reveal, SectionHead } from "./Reveal";

const places = [
  { name: "Shoghi Village & Market", detail: "Local cafés, apple produce and mountain crafts minutes away." },
  { name: "Shimla Mall Road", detail: "Around 13 km — the Ridge, Christ Church and colonial promenades." },
  { name: "Tara Devi Temple", detail: "A short hillside drive to sweeping ridge-top views." },
  { name: "Kufri & Chail", detail: "Day trips for pine trails, viewpoints and quiet forest roads." },
];

export function ExploreShoghi() {
  return (
    <section className="bg-softwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Explore Shoghi"
          title="Close to Everything. Away from It All."
          sub="Shoghi sits just outside Shimla — near enough for a day out, far enough to keep the quiet."
        />

        <div className="mt-16 divide-y divide-border border-y border-border">
          {places.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div className="group flex flex-col gap-2 py-7 transition-colors md:flex-row md:items-baseline md:gap-10">
                <span className="eyebrow w-10 text-gold">0{i + 1}</span>
                <h3 className="text-2xl text-charcoal md:w-80 group-hover:text-forest transition-colors">
                  {p.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
