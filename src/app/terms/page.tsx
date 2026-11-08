import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Dhara Media website.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "Using this website",
    body: "This website shares general information about Dhara Media and its services. You may browse and share links to its public pages. Please do not misuse the website or attempt to disrupt its operation.",
  },
  {
    heading: "Project enquiries",
    body: "Sending an enquiry does not create a client relationship or confirm a project. Any work, scope, timing, fees and other terms will be agreed separately in writing before a project begins.",
  },
  {
    heading: "Website content",
    body: "Website content is provided for general information and may change. Project work, results, availability and services should be confirmed directly before making a business decision.",
  },
];

export default function TermsPage() {
  return (
    <LegalShell
      otherLink={{ href: "/privacy", label: "Privacy policy" }}
      sections={sections}
      title="Terms and conditions"
    />
  );
}
