import {
  Bell,
  Briefcase,
  Compass,
  Crown,
  Gamepad2,
  Gift,
  MessageCircle,
  Mic,
  Radio,
  ShieldCheck,
  Swords,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PLAY_STORE_URL } from "@/lib/site";

const features = [
  {
    icon: Radio,
    title: "HD Live Streaming",
    text: "Go live with smooth video streaming and connect with your audience in real time.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.68_0.24_300),oklch(0.66_0.25_350))]",
  },
  {
    icon: Mic,
    title: "Audio Chat Rooms",
    text: "Join interactive audio rooms, talk with others and build engaging communities.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.7_0.2_270),oklch(0.72_0.18_220))]",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    text: "Chat with viewers and creators through fast real-time messaging.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.78_0.16_200),oklch(0.66_0.2_260))]",
  },
  {
    icon: Gift,
    title: "Virtual Gifts",
    text: "Send animated virtual gifts and support your favorite creators.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.76_0.23_350),oklch(0.72_0.2_20))]",
  },
  {
    icon: Swords,
    title: "PK Battles",
    text: "Compete in interactive PK battles and keep your audience engaged.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.66_0.24_310),oklch(0.72_0.22_355))]",
  },
  {
    icon: Wallet,
    title: "Creator Earnings",
    text: "Creators can earn through virtual gifts and eligible platform reward systems.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.8_0.16_95),oklch(0.72_0.2_35))]",
  },
  {
    icon: Crown,
    title: "VIP & Premium",
    text: "Unlock premium experiences with VIP benefits, badges, frames and exclusive features.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.85_0.16_85),oklch(0.7_0.22_330))]",
  },
  {
    icon: Gamepad2,
    title: "Games & Entertainment",
    text: "Enjoy interactive games and entertainment experiences within the platform.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.7_0.2_255),oklch(0.66_0.24_300))]",
  },
  {
    icon: Briefcase,
    title: "Host & Agency System",
    text: "Support creators, hosts and agencies with tools designed for organized growth.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.74_0.18_180),oklch(0.66_0.2_270))]",
  },
  {
    icon: ShieldCheck,
    title: "Safe Community",
    text: "Use reporting, blocking and moderation tools to help maintain a safer community.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.78_0.18_160),oklch(0.72_0.16_200))]",
  },
  {
    icon: Compass,
    title: "Follow & Discover",
    text: "Discover creators, follow people you like and find new live rooms.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.72_0.2_290),oklch(0.76_0.18_215))]",
  },
  {
    icon: Bell,
    title: "Notifications & Engagement",
    text: "Stay updated about live sessions, interactions and community activity.",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.78_0.2_345),oklch(0.68_0.22_295))]",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-border bg-secondary/60 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Powerful Features
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Everything You Need to <span className="text-gradient">Go Live</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            From live video and audio rooms to virtual gifts, creator tools and interactive
            experiences — Zigo Live brings everything together in one social platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="surface-card glow-hover rounded-3xl p-7">
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl border border-white/20 shadow-lg ${feature.iconClass}`}
                >
                  <Icon className="size-7 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </article>
            );
          })}
        </div>

        <div className="glass-panel mt-12 flex flex-col items-center gap-5 rounded-3xl p-8 text-center">
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Ready to Go Live?</h3>
          <Button
            asChild
            className="brand-gradient h-13 px-8 text-base font-semibold text-primary-foreground hover:opacity-90"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Zigo Live on Google Play"
            >
              Download Zigo Live
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
