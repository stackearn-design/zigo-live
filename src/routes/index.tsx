import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Users,
  Crown,
  Handshake,
  Coins,
  Building2,
  Star,
  Gift,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ApplicationDialog } from "@/components/ApplicationDialog";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import type { ApplicationType } from "@/components/application-config";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stackearn.zigo.live";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zigo — Become a User, Host, Partner, Coin Seller or Agency" },
      {
        name: "description",
        content:
          "Join Zigo live entertainment: go live as a host, partner with us, sell coins or grow your agency. Apply in minutes.",
      },
      { property: "og:title", content: "Become a Part of Zigo" },
      {
        property: "og:description",
        content:
          "Different roles. A bigger community. Join Zigo as a user, host, partner, coin seller or agency.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type CardDef = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  icon: typeof Users;
  tags: string[];
  surface: string;
  iconClass: string;
  action: { kind: "link" } | { kind: "form"; type: ApplicationType };
};

const primaryCards: CardDef[] = [
  {
    eyebrow: "Become a",
    title: "User",
    text: "Join Zigo and explore live entertainment, connect with people, chat, enjoy live streams and discover new experiences.",
    cta: "Join Zigo",
    icon: Users,
    tags: ["Watch", "Chat", "Enjoy"],
    surface: "surface-card",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.6_0.2_255),oklch(0.62_0.24_300))]",
    action: { kind: "link" },
  },
  {
    eyebrow: "Become a",
    title: "Host",
    text: "Go live, showcase your talent, build your audience, receive virtual gifts and grow with Zigo.",
    cta: "Become a Host",
    icon: Crown,
    tags: ["Show Your Talent", "Earn", "Be a Star"],
    surface: "surface-card-pink",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.66_0.25_350),oklch(0.62_0.24_310))]",
    action: { kind: "link" },
  },
];

const secondaryCards: CardDef[] = [
  {
    eyebrow: "Become a",
    title: "Partner",
    text: "Partner with Zigo and explore business, marketing, distribution and strategic growth opportunities.",
    cta: "Become a Partner",
    icon: Handshake,
    tags: ["Business", "Growth", "Success"],
    surface: "surface-card-cyan",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.8_0.16_195),oklch(0.68_0.2_255))]",
    action: { kind: "form", type: "PARTNER" },
  },
  {
    eyebrow: "Become a",
    title: "Coin Seller",
    text: "Build your own Zigo coin-selling business and serve Zigo users with flexible recharge opportunities.",
    cta: "Become a Seller",
    icon: Coins,
    tags: ["Sell Coins", "Earn More", "Be Independent"],
    surface: "surface-card-warm",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.78_0.17_60),oklch(0.65_0.2_30))]",
    action: { kind: "form", type: "SELLER" },
  },
  {
    eyebrow: "Become an",
    title: "Agency",
    text: "Build your host network, recruit talent, manage your team and grow your agency with Zigo.",
    cta: "Become an Agency",
    icon: Building2,
    tags: ["Recruit", "Manage", "Grow"],
    surface: "surface-card-lime",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.87_0.2_150),oklch(0.78_0.16_195))]",
    action: { kind: "form", type: "AGENCY" },
  },
];

const stats = [
  { icon: Users, value: "1M+", label: "Active Users" },
  { icon: Video, value: "50K+", label: "Live Hosts" },
  { icon: Gift, value: "10M+", label: "Gifts Sent" },
  { icon: Star, value: "4.8", label: "App Rating" },
];

function RoleCard({ card, onApply }: { card: CardDef; onApply: (type: ApplicationType) => void }) {
  const Icon = card.icon;
  return (
    <article
      className={`${card.surface} glow-hover animate-rise flex h-full flex-col rounded-3xl p-6 sm:p-8`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex size-14 shrink-0 items-center justify-center rounded-full ${card.iconClass}`}>
          <Icon className="size-7 text-primary-foreground" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{card.eyebrow}</p>
          <h3 className="text-2xl font-bold sm:text-3xl">{card.title}</h3>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{card.text}</p>

      <div className="mt-auto pt-6">
        {card.action.kind === "link" ? (
          <Button
            asChild
            className="brand-gradient h-12 w-full text-base font-semibold text-primary-foreground hover:opacity-90 sm:w-auto sm:px-10"
          >
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              {card.cta} <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
        ) : (
          <Button
            onClick={() => card.action.kind === "form" && onApply(card.action.type)}
            className="brand-gradient h-12 w-full text-base font-semibold text-primary-foreground hover:opacity-90 sm:w-auto sm:px-10"
          >
            {card.cta} <ArrowRight className="ml-2 size-5" />
          </Button>
        )}

        <p className="mt-4 text-xs tracking-wide text-muted-foreground">
          {card.tags.join("  •  ")}
        </p>
      </div>
    </article>
  );
}

function Index() {
  const [activeForm, setActiveForm] = useState<ApplicationType | null>(null);

  return (
    <>
      <SiteHeader />
      <Hero />
      <Features />
      <main id="join" className="px-4 pb-16 sm:px-6 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <header className="animate-rise text-center">
          <span className="inline-flex rounded-full border border-border bg-secondary/60 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Join our community
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Become a Part of <span className="text-gradient">Zigo</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Different roles. A bigger community. Find your place in the Zigo family and be part of
            something amazing.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {primaryCards.map((card) => (
            <RoleCard key={card.title} card={card} onApply={setActiveForm} />
          ))}
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryCards.map((card) => (
            <RoleCard key={card.title} card={card} onApply={setActiveForm} />
          ))}
        </section>

      </div>

      <ApplicationDialog
        type={activeForm}
        onOpenChange={(open) => !open && setActiveForm(null)}
      />
      </main>
      <Stats />
      <FinalCta />
      <SiteFooter />
    </>
  );
}
