import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { CONTACT_EMAIL, PLAY_STORE_URL } from "@/lib/site";

const exploreLinks = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Live Streaming", href: "/#features" },
  { label: "Audio Rooms", href: "/#features" },
  { label: "Creators", href: "/#join" },
];

const connectLinks = [
  { label: "Contact", href: "/#contact" },
  { label: "Support", href: `mailto:${CONTACT_EMAIL}` },
  { label: "Partnership", href: "/#join" },
  { label: "Host / Agency", href: "/#join" },
  { label: "Coin Seller", href: "/#join" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Child Safety Policy", to: "/child-safety-policy" },
  { label: "Account Deletion Policy", to: "/account-deletion" },
  { label: "User Agreement", to: "/user-agreement" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Community Guidelines", to: "/community-guidelines" },
] as const;

const linkClass =
  "rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div id="about">
          <div className="flex items-center gap-3">
            <span className="brand-gradient flex size-10 items-center justify-center rounded-xl text-lg font-extrabold text-primary-foreground">
              Z
            </span>
            <span className="font-display text-lg font-extrabold">
              ZIGO <span className="text-gradient">LIVE</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Zigo Live is a social live-streaming platform where people connect, stream, chat, share
            virtual gifts and build communities through real-time experiences.
          </p>
        </div>

        <nav aria-label="Explore">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Download App
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Connect</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {connectLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`Email Zigo Live at ${CONTACT_EMAIL}`}
            title="Email Zigo Live"
            className="glass-panel mt-5 inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Mail className="size-5" aria-hidden="true" />
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-border/60 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zigo Live. All rights reserved.
      </p>
    </footer>
  );
}
