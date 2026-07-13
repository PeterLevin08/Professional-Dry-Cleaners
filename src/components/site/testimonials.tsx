import { testimonials } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="container-x py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Kind words</span>
        <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
          Trusted by Mississauga for years
        </h2>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-soft">
          <span className="flex text-cyan-deep">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-current" />
            ))}
          </span>
          <span className="font-semibold text-midnight">Real reviews</span>
          <span className="text-muted-foreground">from Google</span>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex text-cyan-deep">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-midnight font-display text-sm font-bold text-cyan">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-midnight">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
