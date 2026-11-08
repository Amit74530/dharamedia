import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Dhara Media website handles information you choose to share.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Information you provide",
    body: "The project enquiry form opens a message in your own email application. This website does not submit or store the information entered in that form. Your email provider handles the message when you choose to send it.",
  },
  {
    heading: "Website activity",
    body: "This website does not currently use analytics or advertising cookies. The hosting provider may process standard technical information needed to deliver and protect the website. Please refer to the provider's privacy information for details.",
  },
  {
    heading: "Changes to this page",
    body: "This notice may be updated when the website or its services change. If a form service, analytics tool or other data collection is added, this page should be updated to explain how that information is handled.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      otherLink={{ href: "/terms", label: "Terms and conditions" }}
      sections={sections}
      title="Privacy policy"
    />
  );
}
