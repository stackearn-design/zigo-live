import { Gift, MessageCircle, Radio, ShieldCheck, Users, Wallet } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "HD Live Streaming",
    text: "Go live in seconds with smooth, low-latency video and crystal clear audio.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    text: "Chat one-on-one or with the whole room while the stream is running.",
  },
  {
    icon: Gift,
    title: "Virtual Gifts",
    text: "Send and receive animated gifts that support your favorite creators.",
  },
  {
    icon: Wallet,
    title: "Earn With Talent",
    text: "Convert gifts into real earnings with transparent host rewards.",
  },
  {
    icon: Users,
    title: "Global Community",
    text: "Meet people from around the world through video and audio rooms.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Moderated",
    text: "Active moderation and reporting tools keep the community friendly.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-border bg-secondary/60 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Why Zigo
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Everything you need to <span className="text-gradient">go live</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            One app for entertainment, connection and income — built for viewers, hosts and
            businesses alike.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="surface-card glow-hover rounded-3xl p-7"
              >
                <div className="brand-gradient flex size-12 items-center justify-center rounded-2xl">
                  <Icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
