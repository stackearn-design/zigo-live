import { Apple, Play } from "lucide-react";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";

const badgeClass =
  "group inline-flex h-14 items-center gap-3 rounded-2xl border border-white/15 bg-black/70 px-5 text-left text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none motion-reduce:transform-none";

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Zigo Live on Google Play"
        title="Get it on Google Play"
        className={badgeClass}
      >
        <Play className="size-7 shrink-0 fill-current" aria-hidden="true" />
        <span className="leading-tight">
          <span className="block text-[10px] tracking-wide uppercase opacity-70">Get it on</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </a>

      {APP_STORE_URL ? (
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Zigo Live on the App Store"
          title="Download on the App Store"
          className={badgeClass}
        >
          <Apple className="size-7 shrink-0" aria-hidden="true" />
          <span className="leading-tight">
            <span className="block text-[10px] tracking-wide uppercase opacity-70">
              Download on the
            </span>
            <span className="block text-base font-semibold">App Store</span>
          </span>
        </a>
      ) : null}
    </div>
  );
}
