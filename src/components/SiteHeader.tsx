import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stackearn.zigo.live";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Join Us", href: "#join" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
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

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="brand-gradient hidden h-11 px-5 font-semibold text-primary-foreground hover:opacity-90 sm:inline-flex"
          >
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 size-4" /> Download App
            </a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 px-4 pb-4 lg:hidden">
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
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 size-4" /> Download App
            </a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
