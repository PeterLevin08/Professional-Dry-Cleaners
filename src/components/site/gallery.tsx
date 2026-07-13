"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { gallery, galleryReviews } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

const ease = [0.22, 1, 0.36, 1] as const;

// Bento placement: 6 photos + 2 review cards tiling a 4-col grid.
const spans = [
  "col-span-2 row-span-2", // 0 feature — rack boutique
  "col-span-1 row-span-2", // 1 suit tweed (tall)
  "col-span-1 row-span-2", // 2 pressing (tall)
  "col-span-2 row-span-1", // 3 shirts rack (wide)
  "col-span-2 row-span-1", // 4 rack neutral (wide)
  "col-span-1 row-span-1", // 5 suit walking
];

function Photo({
  item,
  index,
  className,
}: {
  item: (typeof gallery)[number];
  index: number;
  className: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.06, ease }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-soft ${className}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />
      {/* readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/75 via-midnight/10 to-transparent opacity-90" />
      <figcaption className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-bold text-white drop-shadow-sm">
          {item.label}
        </p>
        <p className="text-xs text-white/80">{item.caption}</p>
      </figcaption>
    </motion.figure>
  );
}

function ReviewCell({
  review,
  className,
}: {
  review: (typeof galleryReviews)[number];
  className: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, ease }}
      className={`flex flex-col justify-between rounded-2xl bg-midnight p-5 shadow-lift ${className}`}
    >
      <div className="flex text-cyan">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <blockquote className="mt-3 text-sm font-medium leading-relaxed text-white">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-xs font-semibold text-cyan">
        — {review.name}
      </figcaption>
    </motion.figure>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="container-x py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Our work</span>
        <h2 className="mt-4 text-3xl font-bold text-midnight sm:text-4xl">
          A look inside the shop
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every garment leaves pressed, protected and ready to wear — here&apos;s
          a glimpse of the care we put in, and what customers say about it.
        </p>
      </Reveal>

      <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[178px] md:grid-cols-4 md:gap-4">
        <Photo item={gallery[0]} index={0} className={spans[0]} />
        <Photo item={gallery[1]} index={1} className={spans[1]} />
        <Photo item={gallery[2]} index={2} className={spans[2]} />

        <ReviewCell
          review={galleryReviews[0]}
          className="col-span-2 row-span-1"
        />
        <Photo item={gallery[3]} index={3} className={spans[3]} />

        <Photo item={gallery[4]} index={4} className={spans[4]} />
        <Photo item={gallery[5]} index={5} className={spans[5]} />
        <ReviewCell
          review={galleryReviews[1]}
          className="col-span-1 row-span-1"
        />
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Photography shown for illustration. Swap in your own shop photos in{" "}
        <code className="rounded bg-secondary px-1 py-0.5">/public/images</code>.
      </p>
    </section>
  );
}
