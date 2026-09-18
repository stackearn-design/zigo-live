import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PLAY_STORE_URL } from "@/lib/site";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#join" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="/#home" className="flex items-center gap-3" aria-label="Zigo Live home">
          <span className="brand-gradient flex size-11 items-center justify-center rounded-xl text-xl font-extrabold text-primary-foreground">
            Z
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-extrabold tracking-tight">
              ZIGO <span className="text-gradient">LIVE</span>
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Live · Connect · Grow
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative rounded-sm text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[image:var(--gradient-brand)] after:transition-[width] after:duration-300 hover:text-foreground hover:after:w-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="brand-gradient hidden h-11 px-5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] hover:opacity-90 sm:inline-flex motion-reduce:transform-none"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Zigo Live on Google Play"
            >
              <Download className="mr-2 size-4" aria-hidden="true" /> Download App
            </a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border/60 px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-sm font-medium text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="brand-gradient mt-4 h-11 w-full font-semibold text-primary-foreground"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Zigo Live on Google Play"
            >
              <Download className="mr-2 size-4" aria-hidden="true" /> Download App
            </a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
