import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/user-agreement")({
  head: () => ({
    meta: [
      { title: "User Agreement – Zigo Live" },
      {
        name: "description",
        content:
          "The agreement between you and Zigo Live covering accounts, acceptable use, content ownership, virtual gifts and account suspension.",
      },
      { property: "og:title", content: "User Agreement – Zigo Live" },
      {
        property: "og:description",
        content: "Your rights and responsibilities as a Zigo Live user.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UserAgreement,
});

function UserAgreement() {
  return (
    <LegalPage title="User Agreement" updated="September 2026">
      <p>
        By creating an account or using Zigo Live, you agree to this User Agreement together with
        our Terms &amp; Conditions, Community Guidelines and Privacy Policy.
      </p>
      <LegalSection heading="Your account">
        <p>
          You must be 18 or older, provide accurate information, and keep your login credentials
          secure. You are responsible for all activity that happens on your account.
        </p>
      </LegalSection>
      <LegalSection heading="Acceptable use">
        <p>
          You agree not to stream or share illegal, sexual, violent, hateful, harassing or deceptive
          content, not to impersonate others, not to use bots or exploits, and not to buy, sell or
          transfer accounts.
        </p>
      </LegalSection>
      <LegalSection heading="Your content">
        <p>
          You keep ownership of the content you create. You grant Zigo Live a licence to host,
          display and distribute that content as needed to run the service and promote the platform.
        </p>
      </LegalSection>
      <LegalSection heading="Virtual gifts and coins">
        <p>
          Coins and virtual gifts are a licence to use in-app features, not real currency. Purchases
          are generally non-refundable except where required by law or store policy.
        </p>
      </LegalSection>
      <LegalSection heading="Hosts, agencies and sellers">
        <p>
          Participation in host, agency or coin seller programmes is subject to approval and to any
          additional terms provided at the time of onboarding.
        </p>
      </LegalSection>
      <LegalSection heading="Suspension and termination">
        <p>
          We may limit, suspend or terminate accounts that violate this agreement or the law. You
          may stop using Zigo Live and delete your account at any time.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions? Email{" "}
          <a className="text-foreground underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
