"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function HoursList() {
  // Resolve "today" only after mount to avoid SSR/client mismatch.
  const [currentDay, setCurrentDay] = useState<string | null>(null);
  useEffect(() => {
    setCurrentDay(days[new Date().getDay()]);
  }, []);

  return (
    <ul className="divide-y divide-border">
      {site.hours.map((h) => {
        const isToday = h.day === currentDay;
        const closed = h.time.toLowerCase() === "closed";
        return (
          <li
            key={h.day}
            className={`flex items-center justify-between py-2.5 text-sm ${
              isToday ? "font-semibold text-midnight" : "text-ink/80"
            }`}
          >
            <span className="flex items-center gap-2">
              {h.day}
              {isToday && (
                <span className="rounded-full bg-cyan-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cyan-deep">
                  Today
                </span>
              )}
            </span>
            <span className={closed ? "text-muted-foreground" : ""}>
              {h.time}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
