import { reasons } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Why() {
  return (
    <section id="why" className="bg-secondary/50 py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">The difference</span>
            <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
              Craftsmanship you can feel in every garment
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re a neighbourhood cleaner with the standards of a couture
              atelier. Real expertise, real accountability — and a finish that
              keeps customers coming back.
            </p>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <StaggerItem key={r.title} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-soft text-cyan-deep">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-midnight">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
