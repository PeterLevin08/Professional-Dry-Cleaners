import { site } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Why neighbours choose us</span>
        <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
          A quarter century of trusted garment care
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {site.stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <p className="tabnums font-display text-3xl font-extrabold text-midnight sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
