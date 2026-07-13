import { Icon } from "@/components/icons";

const keywords = [
  "Dry Cleaning",
  "Alterations & Tailoring",
  "Canada Goose",
  "Down Garments",
  "Wedding Gown Preservation",
  "Formal Wear",
  "Silks",
  "Suede",
  "Leather",
  "Fur",
  "Drapery & Curtains",
  "Rugs & Carpets",
  "Shoe Cleaning",
];

export function Marquee() {
  const row = [...keywords, ...keywords];
  return (
    <div className="border-y border-border bg-white/60 py-4">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {row.map((k, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 whitespace-nowrap text-sm font-medium text-ink/60"
            >
              {k}
              <Icon name="sparkles" className="h-3.5 w-3.5 text-cyan-deep/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
