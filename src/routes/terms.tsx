import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions – Zigo Live" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Zigo Live live streaming and social entertainment app and website.",
      },
      { property: "og:title", content: "Terms & Conditions – Zigo Live" },
      {
        property: "og:description",
        content: "Terms governing use of the Zigo Live app and website.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage title="Terms & Conditions" updated="September 2026">
      <p>
        These Terms &amp; Conditions govern your access to and use of the Zigo Live app and this
        website. If you do not agree, please do not use the service.
      </p>
      <LegalSection heading="Service">
        <p>
          Zigo Live provides live video streaming, audio chat rooms, real-time messaging, virtual
          gifts and related interactive features. Features may change, be added or be withdrawn as
          the platform evolves.
        </p>
      </LegalSection>
      <LegalSection heading="Eligibility">
        <p>
          You must be at least 18 years old and legally able to enter into this agreement in your
          country.
        </p>
      </LegalSection>
      <LegalSection heading="Payments">
        <p>
          Coin purchases are processed through the app store or an authorised coin seller. Prices
          and applicable taxes are shown before purchase. Coins have no cash value outside the app.
        </p>
      </LegalSection>
      <LegalSection heading="Intellectual property">
        <p>
          The Zigo Live name, logo, app design and software are owned by us and may not be copied or
          reused without written permission.
        </p>
      </LegalSection>
      <LegalSection heading="Disclaimers and liability">
        <p>
          The service is provided on an "as is" basis. We are not responsible for content created by
          users or for interruptions caused by networks, devices or third-party services. To the
          extent permitted by law, our liability is limited.
        </p>
      </LegalSection>
      <LegalSection heading="Changes">
        <p>
          We may update these terms. Continued use after an update means you accept the revised
          terms.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          For any questions, email{" "}
          <a className="text-foreground underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
