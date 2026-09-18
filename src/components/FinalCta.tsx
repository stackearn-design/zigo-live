import { StoreButtons } from "@/components/StoreButtons";

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="glass-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-16 size-64 rounded-full bg-[radial-gradient(circle,oklch(0.66_0.25_320/40%),transparent_70%)] blur-2xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,oklch(0.62_0.24_275/38%),transparent_70%)] blur-2xl"
        />
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to Join the <span className="text-gradient">Live Community?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Discover live rooms, meet new people, connect with creators and experience real-time
          entertainment with Zigo Live.
        </p>
        <StoreButtons className="mt-8 justify-center" />
      </div>
    </section>
  );
}
