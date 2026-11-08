"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Experience", href: "#work" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
      <header className={`site-header ${menuOpen ? "site-header-open" : ""}`}>
        <a className="wordmark" href="#main" aria-label="Dhara Media home">
          <BrandLogo className="header-brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map((item, index) => (
            <a
              aria-current={index === 0 ? "page" : undefined}
              className="title-4"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-btn only-lg button-sm" href="#contact">Start a project</a>
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
              aria-current={index === 0 ? "page" : undefined}
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
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${Math.min(items.length * 60, 400)}ms` : "0ms" }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Start a project
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
      <a className="button button-primary button-md" href="#contact" tabIndex={visible ? 0 : -1}>
        Start a project <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
      </a>
    </div>
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

const tagline =
  "We build meaningful brands and stronger digital experiences, one considered step at a time.";

export function TaglineReveal() {
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observers = wordRefs.current.map((word) => {
      if (!word) return null;
      word.classList.add("word-pending");
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            word.classList.remove("word-pending");
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px -38% 0px", threshold: 0.1 },
      );
      observer.observe(word);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <h2 className="heading-2 tagline-heading" aria-label={tagline}>
      {tagline.split(" ").map((word, index) => (
        <span
          aria-hidden="true"
          className="tagline-word"
          key={`${word}-${index}`}
          ref={(element) => {
            wordRefs.current[index] = element;
          }}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
}

type FieldName = "name" | "email" | "project";
type FieldErrors = Partial<Record<FieldName, string>>;

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "dharamedia74@gmail.com";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Enter your name so we know who to reply to.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address, like you@company.com.";
    }
    if (!project) nextErrors.project = "Tell us what you would like to work on.";

    setErrors(nextErrors);
    const firstInvalid = (["name", "email", "project"] as const).find((key) => nextErrors[key]);
    if (firstInvalid) {
      setStatus("idle");
      setMessage("");
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    if (!emailAddress || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      setStatus("error");
      setMessage("The enquiry form needs a valid business email address before it can be used.");
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "Not provided"}\n\nProject details:\n${project}`,
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setMessage("Your email app is opening with your project details.");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <h3 className="heading-5">Tell us about your project</h3>
        <p className="body-3 muted">A few details are enough to get started.</p>
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
            name="project"
            placeholder="A website, a brand refresh, ongoing content"
            required
            rows={4}
          />
          {errors.project ? <p className="field-error caption-2" id="project-error">{errors.project}</p> : null}
        </div>
      </div>
      <button className="button button-primary button-md form-submit" type="submit">
        Start a project <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
      </button>
      <p
        aria-live="polite"
        className={`form-message caption-1 ${status === "error" ? "is-error" : ""}`}
        role="status"
      >
        {message}
      </p>
      <p className="caption-2 muted">Your details open in your email app. This website does not store your enquiry.</p>
      <WhatsAppLink />
    </form>
  );
}

function WhatsAppLink() {
  const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (!configuredNumber) return null;

  const number = configuredNumber.replace(/\D/g, "");
  if (!/^\+?[\d\s()-]+$/.test(configuredNumber) || !/^\d{8,15}$/.test(number)) {
    return (
      <p className="field-error caption-2" role="alert">
        The WhatsApp number needs a country code and between 8 and 15 digits.
      </p>
    );
  }

  return (
    <a
      className="whatsapp-link caption-1"
      href={`https://wa.me/${number}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      Prefer WhatsApp? Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
