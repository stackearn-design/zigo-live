import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/community-guidelines")({
  head: () => ({
    meta: [
      { title: "Community Guidelines – Zigo Live" },
      {
        name: "description",
        content:
          "The rules for streaming, chatting and interacting on Zigo Live, and how we moderate and enforce them.",
      },
      { property: "og:title", content: "Community Guidelines – Zigo Live" },
      {
        property: "og:description",
        content: "Rules for streaming, chatting and interacting safely on Zigo Live.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CommunityGuidelines,
});

function CommunityGuidelines() {
  return (
    <LegalPage title="Community Guidelines" updated="September 2026">
      <p>
        Zigo Live is a space for live entertainment, conversation and creativity. These guidelines
        apply to live streams, audio rooms, chats, profiles and every other part of the platform.
      </p>
      <LegalSection heading="Respect other people">
        <p>
          No harassment, bullying, hate speech, threats or discrimination based on race, religion,
          gender, sexuality, disability or nationality.
        </p>
      </LegalSection>
      <LegalSection heading="Keep content appropriate">
        <p>
          No nudity, sexual content, graphic violence, self-harm content or promotion of dangerous
          activity. Streams should be suitable for a general adult audience.
        </p>
      </LegalSection>
      <LegalSection heading="No illegal activity">
        <p>
          Do not use Zigo Live for drugs, weapons, gambling scams, fraud, trafficking or any other
          illegal activity.
        </p>
      </LegalSection>
      <LegalSection heading="Be authentic">
        <p>
          Do not impersonate others, use someone else's stream or media, run fake giveaways, or use
          bots and automation to inflate engagement or gifts.
        </p>
      </LegalSection>
      <LegalSection heading="Protect privacy">
        <p>
          Do not share personal information about yourself or others, including phone numbers,
          addresses or payment details, in public rooms.
        </p>
      </LegalSection>
      <LegalSection heading="Reporting and enforcement">
        <p>
          Use the in-app report and block tools, or email{" "}
          <a className="text-foreground underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . Depending on severity we may remove content, restrict features, suspend a stream or
          permanently ban an account.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
