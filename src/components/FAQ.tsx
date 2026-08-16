import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHead } from "./Reveal";

const faqs = [
  {
    q: "Is Celebs Resort family friendly?",
    a: "Yes. The resort offers family rooms, children's play facilities and recreational activities.",
  },
  {
    q: "Is Celebs Resort pet friendly?",
    a: "Yes, the property is pet-friendly. Bring your companion along for the mountain escape.",
  },
  {
    q: "Does the resort have mountain views?",
    a: "Yes. The property is known for panoramic mountain, pine forest and valley views.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free parking is available for all guests.",
  },
  {
    q: "Is Wi-Fi available?",
    a: "Yes, free Wi-Fi is available throughout the resort.",
  },
  {
    q: "Is there a restaurant?",
    a: "Yes, the property has an on-site multi-cuisine restaurant serving vegetarian meals and local flavours.",
  },
  {
    q: "How far is Shoghi Railway Station?",
    a: "Approximately 440–570 metres away — an easy walk from the resort.",
  },
  {
    q: "How can I book?",
    a: "Contact the resort directly through WhatsApp or phone. We confirm availability quickly.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-softwhite py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHead
          center
          eyebrow="FAQ"
          title="Good to Know."
          sub="Everything you might want to ask before packing for the hills."
        />

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-14">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-border [&[data-state=open]>button]:text-forest"
              >
                <AccordionTrigger className="text-left text-base text-charcoal hover:text-forest hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
