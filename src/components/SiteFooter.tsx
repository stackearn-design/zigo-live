import { Mail } from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stackearn.zigo.live";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
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
            Zigo Live is a live entertainment platform where people connect, stream, chat and grow
            together — as users, hosts, sellers, agencies and partners.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#home" className="transition-colors hover:text-foreground">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="transition-colors hover:text-foreground">
                Features
              </a>
            </li>
            <li>
              <a href="#join" className="transition-colors hover:text-foreground">
                Join Us
              </a>
            </li>
            <li>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <a
            href="mailto:stackearn@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" /> stackearn@gmail.com
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            For partnership, agency and coin seller enquiries, use the application forms above.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-border/60 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zigo Live. All rights reserved.
      </p>
    </footer>
  );
}
