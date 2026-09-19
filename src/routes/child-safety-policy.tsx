import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/child-safety-policy")({
  head: () => ({
    meta: [
      { title: "Child Safety Policy – Zigo Live" },
      {
        name: "description",
        content:
          "Zigo Live's child safety standards: age requirements, zero tolerance for child sexual abuse material, reporting and enforcement.",
      },
      { property: "og:title", content: "Child Safety Policy – Zigo Live" },
      {
        property: "og:description",
        content: "Age requirements, zero-tolerance rules and reporting channels on Zigo Live.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ChildSafetyPolicy,
});

function ChildSafetyPolicy() {
  return (
    <LegalPage title="Child Safety Policy" updated="September 2026">
      <p>
        Zigo Live has zero tolerance for child sexual abuse and exploitation (CSAE) of any kind on
        our platform.
      </p>
      <LegalSection heading="Age requirement">
        <p>
          Zigo Live is for adults aged 18 and above. Accounts believed to belong to minors are
          removed. Creating an account with a false age is a violation of our rules.
        </p>
      </LegalSection>
      <LegalSection heading="Prohibited content and behaviour">
        <p>
          Child sexual abuse material, sexualisation of minors, grooming, solicitation of minors,
          and any content that endangers a child are strictly prohibited in live streams, audio
          rooms, chats, profiles and uploaded media.
        </p>
      </LegalSection>
      <LegalSection heading="Reporting">
        <p>
          Any user can report a stream, room, message or profile from inside the app. Reports of
          child endangerment are prioritised. You can also email{" "}
          <a className="text-foreground underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          with the details.
        </p>
      </LegalSection>
      <LegalSection heading="Enforcement">
        <p>
          Confirmed violations lead to immediate removal of the content, permanent account
          termination, and reporting to the relevant authorities where required by law. We cooperate
          with law enforcement requests.
        </p>
      </LegalSection>
      <LegalSection heading="Moderation">
        <p>
          We combine user reporting, moderation tooling and review of flagged activity to detect and
          act on violations as quickly as possible.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
