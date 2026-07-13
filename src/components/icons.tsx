import {
  Shirt,
  Sparkles,
  House,
  Snowflake,
  Gem,
  Layers,
  Scissors,
  MapPin,
  Check,
  Clock,
  ShieldCheck,
  Phone,
  Star,
  ArrowRight,
  Mail,
  Menu,
  X,
  Truck,
  Wind,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  shirt: Shirt,
  sparkles: Sparkles,
  home: House,
  snowflake: Snowflake,
  gem: Gem,
  layers: Layers,
  scissors: Scissors,
  mapPin: MapPin,
  check: Check,
  clock: Clock,
  shieldCheck: ShieldCheck,
  phone: Phone,
  star: Star,
  arrowRight: ArrowRight,
  mail: Mail,
  menu: Menu,
  x: X,
  truck: Truck,
  wind: Wind,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" strokeWidth={1.75} />;
}
