import { steps } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Process() {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Simple &amp; convenient</span>
        <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
          Three easy steps
        </h2>
      </Reveal>

      <Stagger className="relative mt-14 grid gap-8 md:grid-cols-3">
        {/* connecting line */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          aria-hidden="true"
        />
        {steps.map((s, i) => (
          <StaggerItem key={s.title} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card text-cyan-deep shadow-soft">
                <Icon name={s.icon} className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-midnight text-xs font-bold text-cyan">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-midnight">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
