"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ourWork, site, type WorkItem } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

const ease = [0.22, 1, 0.36, 1] as const;

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const reduce = useReducedMotion();
  // Show the placeholder until a real file is present; if the src 404s
  // (file not added yet), fall back to the placeholder gracefully.
  const [failed, setFailed] = useState(false);
  const hasPhoto = Boolean(item.src) && !failed;

  return (
    <motion.figure
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease }}
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      {hasPhoto ? (
        <Image
          src={item.src as string}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={() => setFailed(true)}
          className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      ) : (
        <PlaceholderArt index={index} icon={item.icon} />
      )}

      {/* readability gradient (photos) / subtle tint (placeholder) */}
      <div
        className={
          hasPhoto
            ? "absolute inset-0 bg-gradient-to-t from-midnight/75 via-midnight/10 to-transparent"
            : "absolute inset-0 bg-gradient-to-t from-midnight/10 to-transparent"
        }
      />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <div>
          <p
            className={`text-sm font-bold drop-shadow-sm ${
              hasPhoto ? "text-white" : "text-midnight"
            }`}
          >
            {item.title}
          </p>
          <p
            className={`text-xs ${
              hasPhoto ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            {item.caption}
          </p>
        </div>
        {!hasPhoto && (
          <span className="shrink-0 rounded-full border border-cyan-deep/30 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-deep backdrop-blur-sm">
            Photo soon
          </span>
        )}
      </figcaption>
    </motion.figure>
  );
}

function PlaceholderArt({ index, icon }: { index: number; icon: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-cyan-soft/60">
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* sweeping sheen for a touch of life */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          style={{
            animation: "sheen 4.5s ease-in-out infinite",
            animationDelay: `${index * 0.5}s`,
          }}
        />
      </div>
      {/* centered icon inside a dashed frame */}
      <div className="absolute inset-4 flex items-center justify-center rounded-xl border-2 border-dashed border-cyan-deep/25">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-cyan-deep shadow-soft">
          <Icon name={icon} className="h-7 w-7" />
        </span>
      </div>
    </div>
  );
}

export function OurWork() {
  return (
    <section id="work" className="bg-secondary/50 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our work</span>
          <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
            See the difference for yourself
          </h2>
          <p className="mt-4 text-muted-foreground">
            A showcase of the garments we care for every day. Real photos of our
            own work are on the way — here&apos;s a taste of what we do.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ourWork.map((item, i) => (
            <WorkCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-sm text-muted-foreground">
            Want to see more, or have a special piece in mind?{" "}
            <span className="font-semibold text-midnight">
              Bring it in or give us a call.
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
