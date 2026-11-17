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
    body: "When you submit the project enquiry form, your name, email address, optional business name and project details are sent to Dhara Media by email through Web3Forms, our form processing service. The website does not store these form submissions; it temporarily processes request IP information to limit automated submissions. If you choose the email or WhatsApp fallback, your details are sent directly through the service you select. Web3Forms processes form submissions to forward them; review its privacy information for details about its handling and retention.",
  },
  {
    heading: "Website activity",
    body: "When the optional Plausible Analytics domain is configured, this website loads Plausible to report aggregate visits and selected interactions such as audit CTA clicks, successful form submissions, WhatsApp clicks and phone clicks. Analytics is not loaded when the setting is empty. The hosting provider may also process standard technical information needed to deliver and protect the website. Please refer to those providers' privacy information for details.",
  },
  {
    heading: "Changes to this page",
    body: "This notice may be updated when the website or its services change. Analytics remains optional and is enabled only when the site owner configures the analytics domain.",
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
