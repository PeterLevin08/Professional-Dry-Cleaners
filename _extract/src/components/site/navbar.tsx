"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site, navLinks } from "@/lib/site";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solid (light) bar once scrolled or when the mobile menu is open;
  // otherwise transparent with light text over the dark hero.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-[74px]">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-xl font-display text-[15px] font-bold shadow-soft transition-colors",
              solid
                ? "bg-midnight text-cyan"
                : "bg-white/10 text-cyan ring-1 ring-white/25 backdrop-blur-sm"
            )}
          >
            P
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-[15px] font-bold transition-colors",
                solid ? "text-midnight" : "text-white"
              )}
            >
              Professional
            </span>
            <span
              className={cn(
                "block text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors",
                solid ? "text-muted-foreground" : "text-white/70"
              )}
            >
              Cleaners &amp; Alteration
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-ink/80 hover:bg-secondary hover:text-midnight"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={cn(
              "hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-soft transition-all hover:shadow-lift active:scale-[0.98] sm:inline-flex",
              solid
                ? "bg-midnight text-white hover:bg-midnight-600"
                : "bg-white text-midnight hover:bg-cyan"
            )}
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl border transition-colors md:hidden",
              solid
                ? "border-border bg-card text-midnight hover:bg-secondary"
                : "border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            )}
          >
            <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-midnight px-4 py-3.5 text-base font-semibold text-white"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
