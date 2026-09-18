import { Check, Sparkles } from "lucide-react";

import { StoreButtons } from "@/components/StoreButtons";
import heroPhones from "@/assets/zigo-hero-phones.png";

const trustPoints = [
  "Live Video & Audio Rooms",
  "Real-Time Chat",
  "Virtual Gifts",
  "Creator Community",
];

export function Hero() {
  return (
    <section id="home" className="px-4 pt-12 pb-10 sm:px-6 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-4 text-accent" aria-hidden="true" /> More Than Just a Live App
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Go Live.
            <br />
            <span className="text-gradient">Connect.</span>
            <br />
            Grow.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Zigo Live is a live streaming and social entertainment platform where people connect
            through live video, audio chat rooms, real-time messaging, virtual gifts and interactive
            experiences. Discover new people, join live rooms, support your favorite creators and
            grow your community.
          </p>

          <StoreButtons className="mt-8" />

          <p className="mt-6 max-w-xl text-sm text-muted-foreground">
            Join live conversations, discover creators, send virtual gifts and be part of a growing
            global community.
          </p>

          <ul className="mt-5 flex flex-wrap gap-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium sm:text-sm"
              >
                <Check className="size-4 text-success" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-xl rounded-full bg-[radial-gradient(circle_at_50%_45%,oklch(0.66_0.25_320/45%),transparent_65%)] blur-2xl"
          />
          <img
            src={heroPhones}
            alt="Zigo Live live streaming app with live video and creator discovery screens"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(min-width: 1024px) 40rem, 90vw"
            className="animate-float w-full max-w-xl drop-shadow-2xl lg:max-w-[38rem]"
          />
        </div>
      </div>
    </section>
  );
}
