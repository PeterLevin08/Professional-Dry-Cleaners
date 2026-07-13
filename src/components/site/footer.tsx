import { site, navLinks, serviceGroups } from "@/lib/site";
import { Icon } from "@/components/icons";

const allServices = serviceGroups.flatMap((g) => g.items);

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-midnight font-display text-[15px] font-bold text-cyan">
                P
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[15px] font-bold text-midnight">
                  Professional
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Cleaners &amp; Alteration
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Expert dry cleaning, tailoring and specialty garment care serving
              Mississauga from Dundas St E.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-midnight hover:text-cyan-deep"
              >
                <Icon name="phone" className="h-4 w-4 text-cyan-deep" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 text-muted-foreground hover:text-midnight"
              >
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 text-cyan-deep" />
                {site.addressLine}
              </a>
            </div>
          </div>

          {/* nav */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-midnight">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-cyan-deep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-midnight">
              Services
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-1">
              {allServices.slice(0, 9).map((s) => (
                <li key={s} className="text-muted-foreground">
                  {s}
                </li>
              ))}
              <li className="font-medium text-cyan-deep">
                <a href="#services">+ more services →</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Mississauga, ON · Proudly serving our community.</p>
        </div>
      </div>
    </footer>
  );
}
