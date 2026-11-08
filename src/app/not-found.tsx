import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export default function NotFound() {
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
      <main className="wrap not-found-page" id="main">
        <p className="caption-1 muted">Error 404</p>
        <h1 className="heading-1">This page took<br />another direction.</h1>
        <p className="body-3 muted">
          The page may have moved or the address may be mistyped. Head back to the Dhara Media
          homepage to find your way.
        </p>
        <Link className="button button-primary button-md" href="/">
          <ArrowLeft aria-hidden="true" size={20} /> Back to home
        </Link>
      </main>
    </>
  );
}
