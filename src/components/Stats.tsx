import { Gift, Radio, Star, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1M+",
    label: "Active Users",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.7_0.2_300),oklch(0.72_0.22_345))]",
  },
  {
    icon: Radio,
    value: "50K+",
    label: "Live Hosts",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.7_0.19_260),oklch(0.68_0.22_295))]",
  },
  {
    icon: Gift,
    value: "10M+",
    label: "Gifts Sent",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.76_0.2_350),oklch(0.78_0.18_45))]",
  },
  {
    icon: Star,
    value: "4.8",
    label: "App Rating",
    iconClass: "bg-[linear-gradient(135deg,oklch(0.87_0.17_90),oklch(0.76_0.2_340))]",
  },
];

export function Stats() {
  return (
    <section
      id="community"
      className="bg-[linear-gradient(180deg,oklch(0.97_0.015_300),oklch(0.94_0.03_305))] px-4 py-16 text-[oklch(0.22_0.06_296)] sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why People Choose Zigo Live
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[oklch(0.42_0.05_296)]">
            A growing global community streaming, chatting and sharing virtual gifts every day.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-3xl border border-[oklch(0.62_0.1_300/25%)] bg-white/70 p-6 text-center shadow-sm backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none"
              >
                <span
                  className={`flex size-14 items-center justify-center rounded-full shadow-md ${stat.iconClass}`}
                >
                  <Icon className="size-7 text-white" aria-hidden="true" />
                </span>
                <dd className="text-3xl font-extrabold sm:text-4xl">{stat.value}</dd>
                <dt className="text-sm text-[oklch(0.45_0.05_296)]">{stat.label}</dt>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
