import { site } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

export function Cta() {
  return (
    <section className="container-x pb-20 md:pb-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-midnight px-8 py-14 text-center shadow-lift md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-cyan-deep/25 blur-3xl" />
        </div>
        <div className="relative">
          <span className="eyebrow !text-cyan justify-center">
            Ready when you are
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl md:text-[2.75rem]">
            Give your wardrobe the care it deserves
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Call us today or drop by our Dundas St E location — expert cleaning,
            tailoring and specialty care are just a visit away.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-4 text-sm font-semibold text-midnight shadow-lift transition-all hover:bg-white active:scale-[0.98]"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Icon name="mapPin" className="h-4 w-4" />
              Get directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
