import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy – Zigo Live" },
      {
        name: "description",
        content:
          "How Zigo Live collects, uses, stores and protects your information when you use our live streaming and social entertainment app.",
      },
      { property: "og:title", content: "Privacy Policy – Zigo Live" },
      {
        property: "og:description",
        content: "How Zigo Live collects, uses and protects your personal information.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <p>
        This Privacy Policy explains how Zigo Live handles information when you use our live
        streaming and social entertainment app and this website.
      </p>
      <LegalSection heading="Information we collect">
        <p>
          Account details you provide (such as name, email address, mobile number and profile
          information), content you share in live rooms and chats, and technical data such as device
          type, app version and basic usage activity needed to operate the service.
        </p>
        <p>
          If you submit a partner, coin seller or agency application on this website, we collect the
          details entered in that form so our team can review and contact you.
        </p>
      </LegalSection>
      <LegalSection heading="How we use information">
        <p>
          To create and secure your account, deliver live streaming, audio rooms, chat, virtual
          gifts and other features, prevent abuse and fraud, respond to your requests, and improve
          the service.
        </p>
      </LegalSection>
      <LegalSection heading="Sharing">
        <p>
          We do not sell your personal information. Information may be shared with service providers
          that help us operate the platform, or when required by law or to protect the safety of our
          users.
        </p>
      </LegalSection>
      <LegalSection heading="Data retention and security">
        <p>
          We keep information for as long as your account is active or as needed to meet legal
          obligations, and we use reasonable technical and organisational measures to protect it.
        </p>
      </LegalSection>
      <LegalSection heading="Your choices">
        <p>
          You can update your profile in the app, request a copy of your data, or ask us to delete
          your account at any time. See our Account Deletion Policy for the deletion process.
        </p>
      </LegalSection>
      <LegalSection heading="Children">
        <p>
          Zigo Live is not intended for children. See our Child Safety Policy for details on age
          requirements and protection measures.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Email us at{" "}
          <a className="text-foreground underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
