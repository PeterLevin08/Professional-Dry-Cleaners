import { serviceGroups, site } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/50 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
            Complete care for everything you wear &amp; own
          </h2>
          <p className="mt-4 text-muted-foreground">
            From daily essentials to the pieces you treasure, our specialists
            match the right method to every fabric.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <StaggerItem key={group.id} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-soft text-cyan-deep transition-colors group-hover:bg-midnight group-hover:text-cyan">
                  <Icon name={group.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-midnight">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {group.blurb}
                </p>

                <ul className="mt-6 grid gap-2.5 border-t border-border pt-6">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-ink/85"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-soft text-cyan-deep">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          delay={0.1}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-sm text-muted-foreground">
            Not sure how a special item should be cleaned?{" "}
            <span className="font-semibold text-midnight">
              Ask us — we&apos;re happy to advise.
            </span>
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-midnight px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-midnight-600"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
