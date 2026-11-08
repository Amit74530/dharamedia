import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";

type LegalShellProps = {
  title: string;
  sections: { heading: string; body: string }[];
  otherLink: { href: string; label: string };
};

export function LegalShell({ title, sections, otherLink }: LegalShellProps) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Dhara Media home">
          <BrandLogo className="header-brand-logo" />
        </Link>
        <Link className="header-btn button-sm" href="/">
          <ArrowLeft aria-hidden="true" size={16} /> Back to home
        </Link>
      </header>
      <main className="wrap legal-page" id="main">
        <h1 className="heading-2">{title}</h1>
        <div className="legal-content">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="heading-5">{section.heading}</h2>
              <p className="body-3">{section.body}</p>
            </section>
          ))}
          <Link className="back-link title-4" href="/">
            <ArrowLeft aria-hidden="true" size={16} /> Back to Dhara Media
          </Link>
        </div>
      </main>
      <footer className="footer">
        <div className="wrap footer-bottom">
          <span className="caption-2 muted">© Dhara Media.</span>
          <Link className="caption-2 muted" href={otherLink.href}>{otherLink.label}</Link>
        </div>
      </footer>
    </>
  );
}
