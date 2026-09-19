import type { ReactNode } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-14 sm:px-6 lg:py-20">
        <article className="glass-panel mx-auto max-w-3xl rounded-3xl p-7 sm:p-10">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
            Last updated: {updated}
          </p>
          <div className="legal-body mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-foreground sm:text-xl">{heading}</h2>
      {children}
    </section>
  );
}
