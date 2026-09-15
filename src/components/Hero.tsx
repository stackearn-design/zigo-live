import { Apple, Play, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroPhones from "@/assets/zigo-hero-phones.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.stackearn.zigo.live";

export function Hero() {
  return (
    <section id="home" className="px-4 pt-12 pb-8 sm:px-6 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-4 text-accent" /> More Than Just a Live App
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Go Live.
            <br />
            <span className="text-gradient">Connect.</span>
            <br />
            Grow.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Zigo Live brings people closer through live streaming, video &amp; audio calls,
            real-time chat, virtual gifts and more. Meet new people, make friends, support your
            favorite hosts and earn with your talent.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              className="brand-gradient h-14 px-7 text-base font-semibold text-primary-foreground hover:opacity-90"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Play className="mr-3 size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[11px] font-normal opacity-80">Download on</span>
                  Google Play
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 border-border bg-secondary/50 px-7 text-base font-semibold hover:bg-secondary"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Apple className="mr-3 size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[11px] font-normal opacity-70">Download on</span>
                  App Store
                </span>
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">1M+ people</span> are already streaming,
            chatting and earning on Zigo Live.
          </p>
        </div>

        <div className="animate-rise flex justify-center lg:justify-end">
          <img
            src={heroPhones}
            alt="Zigo Live app showing a live stream and the explore screen on two phones"
            width={1024}
            height={1024}
            className="animate-float w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
