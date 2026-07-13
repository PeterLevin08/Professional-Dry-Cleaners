import { site } from "@/lib/site";
import { Icon } from "@/components/icons";

/** Persistent one-tap call button on small screens (phone-first local site). */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-md [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] sm:hidden">
      <a
        href={site.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-midnight px-6 py-3.5 text-sm font-semibold text-white active:scale-[0.99]"
      >
        <Icon name="phone" className="h-4 w-4" />
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
