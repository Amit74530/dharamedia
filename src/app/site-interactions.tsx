"use client";

import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Script from "next/script";
import {
  type AnchorHTMLAttributes,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

declare global {
  interface Window {
    plausible?: (eventName: string) => void;
  }
}

export function trackAnalytics(eventName: string) {
  if (typeof window !== "undefined") window.plausible?.(eventName);
}

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  eventName: string;
};

export function TrackedLink({ eventName, ...props }: TrackedLinkProps) {
  return <a {...props} onClick={() => trackAnalytics(eventName)} />;
}

const navigation = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Experience", href: "#work" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#main");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const sections = [
      { href: "#main", element: document.querySelector<HTMLElement>(".hero") },
      ...navigation.map(({ href }) => ({
        href,
        element: document.querySelector<HTMLElement>(href),
      })),
    ].filter(
      (section): section is { href: string; element: HTMLElement } =>
        Boolean(section.element),
    );
    const hrefByTarget = new Map<Element, string>();
    sections.forEach(({ href, element }) => hrefByTarget.set(element, href));
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top - window.innerHeight * 0.28) -
              Math.abs(right.boundingClientRect.top - window.innerHeight * 0.28),
          )[0];
        const href = active ? hrefByTarget.get(active.target) : undefined;
        if (href) setActiveSection(href);
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    if (!menuOpen) return () => document.body.classList.remove("menu-is-open");

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  const items = [{ label: "Home", href: "#main" }, ...navigation];

  return (
    <>
      <header
        className={`site-header ${menuOpen ? "site-header-open" : ""} ${scrolled ? "site-header-scrolled" : ""}`}
      >
        <a className="wordmark" href="#main" aria-label="Dhara Media home">
          <BrandLogo className="header-brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map((item, index) => (
            <a
              aria-current={
                activeSection === item.href ? (index === 0 ? "page" : "location") : undefined
              }
              className="title-4"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-btn only-lg button-sm"
          href="#contact"
          onClick={() => trackAnalytics("CTA Click")}
        >
          Get a free 15-minute audit
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`menu-icon ${menuOpen ? "menu-icon-open" : ""}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </header>
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {items.map((item, index) => (
            <a
              aria-current={
                activeSection === item.href ? (index === 0 ? "page" : "location") : undefined
              }
              className="heading-5"
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${Math.min(index * 60, 400)}ms` : "0ms" }}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{item.label}</span>
              <ArrowUpRight aria-hidden="true" size={20} />
            </a>
          ))}
          <a
            className="button button-primary button-md mobile-cta"
            href="#contact"
            onClick={() => {
              setMenuOpen(false);
              trackAnalytics("CTA Click");
            }}
            style={{ transitionDelay: menuOpen ? `${Math.min(items.length * 60, 400)}ms` : "0ms" }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get a free 15-minute audit
          </a>
        </nav>
        <p className="caption-2 muted">Creative thinking. Strategic growth.</p>
      </div>
    </>
  );
}

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroActions = document.querySelector<HTMLElement>(".hero-actions");
    const endTargets = [
      document.getElementById("contact"),
      document.querySelector<HTMLElement>(".footer"),
    ].filter((element): element is HTMLElement => Boolean(element));
    if (!heroActions || endTargets.length === 0) return;

    let heroPassed = false;
    const endVisible = new Set<Element>();
    const update = () => setVisible(heroPassed && endVisible.size === 0);

    const heroObserver = new IntersectionObserver(([entry]) => {
      heroPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    });
    const endObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) endVisible.add(entry.target);
        else endVisible.delete(entry.target);
      });
      update();
    });

    heroObserver.observe(heroActions);
    endTargets.forEach((target) => endObserver.observe(target));
    return () => {
      heroObserver.disconnect();
      endObserver.disconnect();
    };
  }, []);

  return (
    <div aria-hidden={!visible} className={`mobile-cta-bar ${visible ? "is-visible" : ""}`}>
      <a
        className="button button-primary button-md"
        href="#contact"
        onClick={() => trackAnalytics("CTA Click")}
        tabIndex={visible ? 0 : -1}
      >
        Get a free 15-minute audit <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
      </a>
    </div>
  );
}

export function FloatingWhatsApp() {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(([entry]) => {
      setContactVisible(entry.isIntersecting);
    });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (contactVisible || !/^\d{8,15}$/.test(site.whatsappNumber)) return null;

  return (
    <a
      aria-label="Chat with Dhara Media on WhatsApp"
      className="floating-whatsapp"
      href={site.whatsappUrl}
      onClick={() => trackAnalytics("WhatsApp Click")}
      rel="noopener noreferrer"
      target="_blank"
    >
      WhatsApp <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 640);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <a className="back-to-top" href="#main" aria-label="Back to top">
      <ArrowUp aria-hidden="true" size={20} weight="bold" />
    </a>
  );
}

export function FounderPhoto({ available }: { available: boolean }) {
  const [hasImage, setHasImage] = useState(available);

  if (!hasImage) return null;

  return (
    <figure className="founder-photo">
      <Image
        alt="Amit Karki, founder of Dhara Media"
        fill
        onError={() => setHasImage(false)}
        sizes="(max-width: 1023px) 100vw, 42vw"
        src="/media/founder.jpg"
      />
    </figure>
  );
}

export function ProductionPreview({ src, poster }: { src: string; poster: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <details
      className="production-preview"
      onToggle={(event) => setExpanded(event.currentTarget.open)}
    >
      <summary className="caption-1">View illustrative content-production footage</summary>
      {expanded ? (
        <figure className="service-video">
          <video
            aria-label="Illustrative brand planning footage"
            controls
            playsInline
            preload="none"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption className="caption-2 muted">
            Illustrative stock video by{" "}
            <a
              href="https://www.pexels.com/@leeloothefirst/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Leeloo The First on Pexels
            </a>
          </figcaption>
        </figure>
      ) : null}
    </details>
  );
}

export function Analytics() {
  if (!site.plausibleDomain) return null;

  return (
    <Script
      data-domain={site.plausibleDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

export function Reveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.classList.add("is-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("is-pending");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className="reveal" ref={containerRef}>{children}</div>;
}

type FieldName = "name" | "email" | "project";
type FieldErrors = Partial<Record<FieldName, string>>;
type FallbackLinks = { email: string; whatsappMessage: string };

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fallbackLinks, setFallbackLinks] = useState<FallbackLinks | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (status === "loading") return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const website = String(data.get("website") ?? "");

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Enter your name so we know who to reply to.";
    else if (name.length > 100) nextErrors.name = "Keep your name under 100 characters.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address, like you@company.com.";
    }
    if (!project) nextErrors.project = "Tell us what you would like to work on.";
    else if (project.length > 5000) nextErrors.project = "Keep project details under 5,000 characters.";
    if (business.length > 120) {
      setStatus("idle");
      setMessage("Keep the business name under 120 characters.");
      return;
    }

    setErrors(nextErrors);
    const firstInvalid = (["name", "email", "project"] as const).find((key) => nextErrors[key]);
    if (firstInvalid) {
      setStatus("idle");
      setMessage("");
      const field = form.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const fallbackBody = `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "Not provided"}\n\nProject details:\n${project}`;
    setFallbackLinks({
      email: `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(fallbackBody)}`,
      whatsappMessage: `Project enquiry from ${name}\nEmail: ${email}\nBusiness: ${business || "Not provided"}\n\n${project}`,
    });
    setStatus("loading");
    setMessage("Sending your enquiry…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, business, project, website }),
      });

      if (!response.ok) {
        const result: unknown = await response.json().catch(() => null);
        const responseMessage =
          typeof result === "object" &&
          result !== null &&
          "message" in result &&
          typeof result.message === "string"
            ? result.message
            : "The enquiry could not be sent.";
        throw new Error(responseMessage);
      }

      setStatus("sent");
      setMessage("Thanks — your enquiry has been sent to Dhara Media.");
      trackAnalytics("Form Submission");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message !== "Failed to fetch"
          ? error.message
          : "We could not send your enquiry. Use email or WhatsApp below instead.",
      );
    }
  }

  return (
    <form
      aria-busy={status === "loading"}
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-heading">
        <h3 className="heading-5">Request your free audit</h3>
        <p className="body-3 muted">Share your business website and a few details to get started.</p>
      </div>
      <div aria-hidden="true" className="honeypot">
        <label htmlFor="field-website">Leave this field empty</label>
        <input autoComplete="off" id="field-website" name="website" tabIndex={-1} />
      </div>
      <div className="form-fields">
        <div className="form-field">
          <label className="title-4" htmlFor="field-name">Your name</label>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className="body-3"
            id="field-name"
            maxLength={100}
            name="name"
            placeholder="How should we address you?"
            required
          />
          {errors.name ? <p className="field-error caption-2" id="name-error">{errors.name}</p> : null}
        </div>
        <div className="form-field">
          <label className="title-4" htmlFor="field-email">Email address</label>
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className="body-3"
            id="field-email"
            maxLength={254}
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
          {errors.email ? <p className="field-error caption-2" id="email-error">{errors.email}</p> : null}
        </div>
        <div className="form-field">
          <label className="title-4" htmlFor="field-business">Business name (optional)</label>
          <input
            autoComplete="organization"
            className="body-3"
            id="field-business"
            maxLength={120}
            name="business"
            placeholder="Your business or brand"
          />
        </div>
        <div className="form-field">
          <label className="title-4" htmlFor="field-project">What would you like to work on?</label>
          <textarea
            aria-describedby={errors.project ? "project-error" : undefined}
            aria-invalid={Boolean(errors.project)}
            className="body-3"
            id="field-project"
            maxLength={5000}
            name="project"
            placeholder="A website, a brand refresh, ongoing content"
            required
            rows={4}
          />
          {errors.project ? <p className="field-error caption-2" id="project-error">{errors.project}</p> : null}
        </div>
      </div>
      <button
        className="button button-primary button-md form-submit"
        disabled={status === "loading"}
        onClick={() => trackAnalytics("CTA Click")}
        type="submit"
      >
        {status === "loading" ? "Sending…" : "Request a free audit"}
        {status !== "loading" ? <ArrowUpRight aria-hidden="true" size={20} weight="bold" /> : null}
      </button>
      <p
        aria-live="polite"
        className={`form-message caption-1 ${status === "error" ? "is-error" : ""}`}
        role="status"
      >
        {message}
      </p>
      {status === "error" && fallbackLinks ? (
        <div className="form-fallback">
          <a className="whatsapp-link caption-1" href={fallbackLinks.email}>
            Email your enquiry instead <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <WhatsAppLink label="Continue on WhatsApp" message={fallbackLinks.whatsappMessage} />
        </div>
      ) : (
        <WhatsAppLink />
      )}
      <p className="caption-2 muted">
        Your enquiry is emailed to Dhara Media through Web3Forms. The website does not store submissions.
      </p>
    </form>
  );
}

export function WhatsAppLink({
  label = "Prefer WhatsApp? Start a conversation",
  message,
}: {
  label?: string;
  message?: string;
}) {
  if (!/^\d{8,15}$/.test(site.whatsappNumber)) return null;

  const href = message
    ? `${site.whatsappUrl}?text=${encodeURIComponent(message)}`
    : site.whatsappUrl;

  return (
    <a
      className="whatsapp-link caption-1"
      href={href}
      onClick={() => trackAnalytics("WhatsApp Click")}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label} <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
