import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const p = 1 - Math.pow(1 - frame / total, 3);
      setValue(to * p);
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function TrustStats() {
  return (
    <section className="bg-charcoal py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
        <Reveal delay={0}>
          <p className="font-display text-4xl text-gold md:text-5xl">
            <Counter to={4.5} decimals={1} /> <span className="text-cream/40 text-2xl">/ 5</span>
          </p>
          <p className="eyebrow mt-3 text-cream/60">Guest Rating</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-4xl text-gold md:text-5xl">
            <Counter to={314} suffix="+" />
          </p>
          <p className="eyebrow mt-3 text-cream/60">Guest Reviews</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display text-4xl text-gold md:text-5xl">
            <Counter to={5700} /> <span className="text-cream/40 text-2xl">ft</span>
          </p>
          <p className="eyebrow mt-3 text-cream/60">Mountain Escape</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-display text-4xl text-gold md:text-5xl">
            <Counter to={440} suffix="m" />
          </p>
          <p className="eyebrow mt-3 text-cream/60">From Shoghi Railway Station</p>
        </Reveal>
      </div>
    </section>
  );
}
