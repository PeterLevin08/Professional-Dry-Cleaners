import { faqs } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">Good to know</span>
          <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still have a question? Call us at{" "}
            <span className="font-semibold text-midnight">(905) 232-5099</span>{" "}
            — we&apos;re glad to help.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion multiple={false} className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border border-b bg-card px-5 shadow-soft data-[state=open]:border-cyan-deep/30"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-midnight hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
