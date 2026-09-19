import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/account-deletion")({
  head: () => ({
    meta: [
      { title: "Account Deletion Policy – Zigo Live" },
      {
        name: "description",
        content:
          "How to delete your Zigo Live account and what happens to your data, profile, coins and history after deletion.",
      },
      { property: "og:title", content: "Account Deletion Policy – Zigo Live" },
      {
        property: "og:description",
        content: "Steps to delete your Zigo Live account and what data is removed or retained.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AccountDeletion,
});

function AccountDeletion() {
  return (
    <LegalPage title="Account Deletion Policy" updated="September 2026">
      <p>You can request deletion of your Zigo Live account at any time.</p>
      <LegalSection heading="How to request deletion">
        <p>
          Open the Zigo Live app, go to your profile settings and choose the account deletion
          option. If you cannot access the app, email{" "}
          <a className="text-foreground underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          from the email address registered on your account, including your Zigo Live user ID.
        </p>
      </LegalSection>
      <LegalSection heading="What is deleted">
        <p>
          Your profile, display name, photo, followers and following lists, chat messages and
          uploaded media associated with your account are removed from the live service.
        </p>
      </LegalSection>
      <LegalSection heading="What may be retained">
        <p>
          Limited records such as transaction and recharge history, moderation records and data we
          are required to keep by law may be retained for the legally required period, and are kept
          only for those purposes.
        </p>
      </LegalSection>
      <LegalSection heading="Coins and balances">
        <p>
          Unused coins, gifts and any earnings balance are forfeited on deletion and cannot be
          restored or transferred. Please settle any pending balance before requesting deletion.
        </p>
      </LegalSection>
      <LegalSection heading="Timeline">
        <p>
          Deletion requests are normally processed within 30 days. You will receive a confirmation
          once the account has been removed. Deletion is permanent and cannot be undone.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
