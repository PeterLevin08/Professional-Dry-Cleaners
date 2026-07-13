import { specialties, site } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

export function Specialty() {
  return (
    <section id="specialty" className="relative overflow-hidden bg-midnight py-20 text-white md:py-28">
      {/* decorative glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-deep/20 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow !text-cyan">Specialty care</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              For the pieces that deserve extra care
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Luxury outerwear, delicate fabrics and once-in-a-lifetime garments
              are handled by specialists using methods matched precisely to the
              material — never a one-size-fits-all wash.
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 text-sm font-semibold text-midnight shadow-lift transition-all hover:bg-white active:scale-[0.98]"
            >
              <Icon name="phone" className="h-4 w-4" />
              Talk to a specialist
            </a>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {specialties.map((s) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.07]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan transition-colors group-hover:bg-cyan group-hover:text-midnight">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
