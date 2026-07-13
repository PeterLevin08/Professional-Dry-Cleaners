import { site } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { HoursList } from "@/components/site/hours-list";

export function Visit() {
  return (
    <section id="visit" className="container-x py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Come see us</span>
        <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
          Visit our Mississauga location
        </h2>
        <p className="mt-4 text-muted-foreground">
          Conveniently located on Dundas St E. No appointment needed for
          drop-off.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* map */}
        <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title={`Map to ${site.name}`}
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[340px] w-full"
          />
        </Reveal>

        {/* info */}
        <Reveal delay={0.08} className="grid gap-6">
          {/* contact card */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-soft text-cyan-deep">
                  <Icon name="mapPin" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region}{" "}
                    {site.address.postal}
                  </p>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-cyan-deep hover:underline"
                  >
                    Get directions
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-soft text-cyan-deep">
                  <Icon name="phone" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Call us
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-sm font-semibold text-midnight hover:text-cyan-deep"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Questions &amp; special-care advice welcome
                  </p>
                </div>
              </div>
            </div>

            <a
              href={site.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-midnight-600 hover:shadow-lift active:scale-[0.99]"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
          </div>

          {/* hours card */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-soft text-cyan-deep">
                <Icon name="clock" className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-midnight">
                Hours of operation
              </h3>
            </div>
            <HoursList />
            <p className="mt-4 text-xs text-muted-foreground">
              * Hours shown are a placeholder — update in{" "}
              <code className="rounded bg-secondary px-1 py-0.5">
                src/lib/site.ts
              </code>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
