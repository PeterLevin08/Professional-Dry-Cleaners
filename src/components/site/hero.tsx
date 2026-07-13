"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Icon } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* background photo */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={reduce ? {} : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="h-full w-full"
        >
          <Image
            src="/images/hero-couple-v2.jpg"
            alt="A groom in a tailored suit beside a bride in a lace wedding gown"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* on-brand navy tint: dark on the text side (left) + bottom,
            light on the couple so they stay bright and visible */}
        <div className="absolute inset-0 bg-midnight/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/38 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
        {/* top scrim keeps the navbar legible */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-midnight/60 to-transparent" />
      </div>

      {/* content */}
      <div className="container-x w-full pt-28 pb-24 md:py-0">
        <div className="max-w-2xl">
          <motion.span
            {...rise(0.05)}
            className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan"
          >
            <span className="h-px w-7 bg-cyan/70" />
            Mississauga · Dundas St E
          </motion.span>

          <motion.h1
            {...rise(0.14)}
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Impeccable garment care &amp;{" "}
            <span className="relative whitespace-nowrap text-cyan">
              expert tailoring
              <svg
                className="absolute -bottom-1 left-0 h-2.5 w-full text-cyan/80"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8C60 3 120 3 180 6C230 8 270 8 298 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            {...rise(0.22)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Trusted dry cleaning, specialty fabric care and precision alterations
            in the heart of Mississauga. From wedding gowns and Canada Goose to
            everyday shirts — we treat every garment as if it were our own.
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 text-sm font-semibold text-midnight shadow-lift transition-all hover:bg-white active:scale-[0.98]"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              Explore services
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.38)}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75"
          >
            {[
              "Expert alterations on-site",
              "Wedding gown specialists",
              "~48-hour turnaround",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-cyan" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
        </span>
      </motion.div>
    </section>
  );
}
