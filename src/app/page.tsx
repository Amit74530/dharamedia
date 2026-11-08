import type { Metadata } from "next";
import type { CSSProperties } from "react";
import type { Icon } from "@phosphor-icons/react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  Check,
  Compass,
  CursorClick,
  DeviceMobile,
  Drop,
  EnvelopeSimple,
  GlobeHemisphereWest,
  Heartbeat,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Palette,
  Phone,
  Quotes,
  SealCheck,
  Shapes,
  Sparkle,
  SquaresFour,
  Storefront,
  VideoCamera,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm, Header, MobileCta, Reveal, TaglineReveal } from "./site-interactions";
import { BrandLogo } from "./brand-logo";

export const metadata: Metadata = {
  title: "Dhara Media | Branding, Websites & Digital Growth",
  description:
    "Build a clearer brand and stronger digital presence with Dhara Media, a creative and digital agency based in Dehradun, India.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    question: "What can Dhara Media help my business with?",
    answer:
      "We bring together brand identity, website design, social media, digital marketing, creator collaborations and content production. We can shape a focused project or discuss ongoing support.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with small and growing businesses, startups, professionals, retailers, creators and established teams looking to improve their brand or digital presence.",
  },
  {
    question: "How does a project get started?",
    answer:
      "Share a little about your business and what you want to improve. We will learn about your goals, discuss a suitable scope and outline the next steps before work begins.",
  },
  {
    question: "Do you offer ongoing monthly support?",
    answer:
      "Yes. Social media, content and marketing support can be discussed as an ongoing engagement. The scope is shaped around your needs rather than a fixed package.",
  },
  {
    question: "Can I hire Dhara Media for a single project?",
    answer:
      "Yes. Branding, website development, landing pages, campaign creative and other digital work can be scoped as individual projects.",
  },
  {
    question: "Where are you based, and can we work remotely?",
    answer:
      "Dhara Media is based in Dehradun, Uttarakhand, India. The agency is open to working with businesses across India and internationally.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

type Service = { icon: Icon; title: string; description: string; details: string[] };

const services: Service[] = [
  {
    icon: DeviceMobile,
    title: "Social media",
    description: "A consistent presence, shaped by a clear plan and content your audience has a reason to remember.",
    details: ["Strategy and planning", "Content and creative", "Publishing and review"],
  },
  {
    icon: GlobeHemisphereWest,
    title: "Websites",
    description: "Thoughtful, responsive websites that make your business easier to understand and trust.",
    details: ["Design and development", "Mobile first experiences", "Technical SEO foundations"],
  },
  {
    icon: Shapes,
    title: "Brand identity",
    description: "A visual language that gives your business a distinct and consistent way to show up.",
    details: ["Positioning and identity", "Logo and visual systems", "Brand guidelines"],
  },
  {
    icon: ChartLineUp,
    title: "Digital marketing",
    description: "Audience focused campaigns built around your business goals, not attention for its own sake.",
    details: ["Campaign planning", "Audience research", "Performance review"],
  },
  {
    icon: CursorClick,
    title: "Influencer marketing",
    description: "Relevant creator partnerships, thoughtfully selected and coordinated around your brief.",
    details: ["Creator discovery", "Collaboration planning", "Campaign coordination"],
  },
  {
    icon: VideoCamera,
    title: "Content and production",
    description: "Useful ideas and creative direction that help your brand tell a more compelling story.",
    details: ["Content strategy", "Short form video", "Scripts and creative direction"],
  },
];

const benefits = [
  {
    icon: Palette,
    title: "A brand with a point of view",
    text: "Build a recognisable identity that feels right for your business and your audience.",
  },
  {
    icon: DeviceMobile,
    title: "A better first impression",
    text: "Help visitors understand what you do through a clear, considered digital presence.",
  },
  {
    icon: SquaresFour,
    title: "Consistency across channels",
    text: "Make your website, social content and creative feel like parts of one brand.",
  },
  {
    icon: Compass,
    title: "A practical way forward",
    text: "Start with the work your business needs, shaped around clear goals and honest conversations.",
  },
];

const steps = [
  { title: "Discover", description: "We get to know your business, audience, goals and current digital presence." },
  { title: "Strategize", description: "Together, we shape a practical direction and agree on the work that matters." },
  { title: "Create and grow", description: "We make the work, bring it to life and look for ways to make it stronger." },
];

const areas: { icon: Icon; area: string; title: string }[] = [
  { icon: Heartbeat, area: "Wellness", title: "Movement, care and wellbeing" },
  { icon: Drop, area: "Products", title: "Skincare and nutrition" },
  { icon: Storefront, area: "Culture", title: "Retail and creative culture" },
];

// {{testimonial}}: add real client quotes here. The proof block stays hidden while this list is empty.
const testimonials: { quote: string; name: string; role: string }[] = [];

function HeroVisual() {
  return (
    <div
      aria-label="Illustration of a website, a brand board and a social post designed together"
      className="hero-visual"
      role="img"
    >
      <div className="hv-card hv-browser" style={{ "--i": 0 } as CSSProperties}>
        <div className="hv-browser-bar"><span /><span /><span /></div>
        <div className="hv-browser-body">
          <div className="hv-stack">
            <span className="hv-line hv-line-strong" />
            <span className="hv-line hv-line-strong hv-w60" />
            <span className="hv-line hv-w90" />
            <span className="hv-line hv-w70" />
            <span className="hv-btn" />
          </div>
          <div className="hv-image"><span /></div>
        </div>
      </div>
      <div className="hv-card hv-post" style={{ "--i": 1 } as CSSProperties}>
        <span className="hv-post-dot" />
        <span className="hv-line hv-line-light hv-w70" />
        <span className="hv-line hv-line-light hv-w50" />
      </div>
      <div className="hv-card hv-board" style={{ "--i": 2 } as CSSProperties}>
        <div className="hv-swatches"><span /><span /><span /><span /></div>
        <div className="hv-stack">
          <span className="hv-line hv-line-strong hv-w60" />
          <span className="hv-line hv-w90" />
          <span className="hv-line hv-w70" />
        </div>
      </div>
      <div className="hv-card hv-badge" style={{ "--i": 3 } as CSSProperties}>
        <Sparkle aria-hidden="true" size={24} weight="fill" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <MobileCta />
      <main id="main">
        {/* 1. Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="heading-1 hero-heading" id="hero-title">
                <span>Build a brand</span>
                <span>people remember.</span>
              </h1>
              <p className="title-2 hero-sub">
                Dhara Media is a creative and digital agency in Dehradun. We bring strategy,
                creative and technology together for businesses that want a clearer digital presence.
              </p>
              <div className="hero-actions">
                <a className="button button-primary button-md" href="#contact">
                  Start a project <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
                </a>
                <p className="proof caption-1">
                  <SealCheck aria-hidden="true" size={20} weight="fill" />
                  <span>Independent studio in Dehradun. Building brands since 2023.</span>
                </p>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* 2. Problem to solution */}
        <section className="section" id="intro">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <h2 className="heading-2">Your business has a story. Let&apos;s make it matter.</h2>
                <p className="body-3 muted">
                  A logo alone is not a brand, and a website alone is not a strategy. We bring the
                  pieces together so your business can show up with more clarity and consistency.
                </p>
              </div>
              <div className="compare">
                <article className="card compare-card compare-card-muted">
                  <span className="pill caption-1">Without a plan</span>
                  <h3 className="heading-5">Pieces that do not connect</h3>
                  <ul className="check-list body-3 muted">
                    <li><X aria-hidden="true" size={20} />A logo made without a strategy behind it</li>
                    <li><X aria-hidden="true" size={20} />A website that does not explain what you do</li>
                    <li><X aria-hidden="true" size={20} />Social posts that look like they belong to someone else</li>
                  </ul>
                </article>
                <article className="card compare-card">
                  <span className="pill pill-accent caption-1">With Dhara Media</span>
                  <h3 className="heading-5">One connected brand</h3>
                  <ul className="check-list body-3">
                    <li><Check aria-hidden="true" size={20} weight="bold" />A clear direction agreed before design starts</li>
                    <li><Check aria-hidden="true" size={20} weight="bold" />Website, social and creative built from that direction</li>
                    <li><Check aria-hidden="true" size={20} weight="bold" />The same voice everywhere people find you</li>
                  </ul>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Services */}
        <section className="section" id="services">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <h2 className="heading-2">Good work starts with the right mix.</h2>
                <p className="body-3 muted">
                  From the first impression to the ongoing conversation, we help bring your brand
                  together across the places that matter.
                </p>
              </div>
              <div className="grid-3">
                {services.map(({ icon: ServiceIcon, title, description, details }) => (
                  <article className="card service-card" key={title}>
                    <span className="icon-chip"><ServiceIcon aria-hidden="true" size={24} weight="light" /></span>
                    <h3 className="title-1">{title}</h3>
                    <p className="body-3 muted">{description}</p>
                    <ul className="check-list caption-1 service-details">
                      {details.map((detail) => (
                        <li key={detail}><Check aria-hidden="true" size={16} weight="bold" />{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Tagline reveal */}
        <section className="tagline on-dark" aria-label="Our point of view">
          <div className="wrap">
            <TaglineReveal />
            <p className="body-3 muted tagline-note">
              Strategy. Creativity. Execution. A clearer path from what you do to how people see it.
            </p>
          </div>
        </section>

        {/* 5. Benefits */}
        <section className="section">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <h2 className="heading-2">The right things, working together.</h2>
                <p className="body-3 muted">
                  A considered approach makes every piece of your brand feel like it belongs to the
                  same story.
                </p>
              </div>
              <div className="benefit-grid">
                {benefits.map(({ icon: BenefitIcon, title, text }) => (
                  <article className="benefit-cell" key={title}>
                    <span className="icon-chip"><BenefitIcon aria-hidden="true" size={24} weight="light" /></span>
                    <h3 className="title-1">{title}</h3>
                    <p className="body-3 muted">{text}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. How it works */}
        <section className="section" id="process">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <h2 className="heading-2">Good things grow with a clear process.</h2>
                <p className="body-3 muted">
                  No mystery handoffs. We stay close to the work and keep the conversation open from
                  the first brief to the final details.
                </p>
              </div>
              <ol className="steps">
                {steps.map((step, index) => (
                  <li className="card step-card" key={step.title}>
                    <span className="step-n title-4">{index + 1}</span>
                    <h3 className="heading-5">{step.title}</h3>
                    <p className="body-3 muted">{step.description}</p>
                  </li>
                ))}
              </ol>
              <p className="caption-2 muted steps-note">
                The right scope depends on your goals, timing and the work involved. We will make
                that clear before we begin.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 7. Experience and proof */}
        <section className="section" id="work">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <h2 className="heading-2">Different businesses. Thoughtful digital work.</h2>
                <p className="body-3 muted">
                  Our experience spans different kinds of businesses and creative challenges. Here
                  are a few areas we know well.
                </p>
              </div>
              <div className="grid-3">
                {areas.map(({ icon: AreaIcon, area, title }) => (
                  <article className="card exp-card" key={title}>
                    <span className="icon-chip"><AreaIcon aria-hidden="true" size={24} weight="light" /></span>
                    <div>
                      <p className="caption-1 muted">{area}</p>
                      <h3 className="heading-5">{title}</h3>
                    </div>
                  </article>
                ))}
              </div>
              <p className="caption-2 muted exp-note">
                Project visuals and verified results will be added as portfolio work is approved for
                publication.
              </p>
              {testimonials.length > 0 ? (
                <div className="grid-3 proof-grid">
                  {testimonials.map((item) => (
                    <figure className="card quote-card" key={item.name}>
                      <blockquote className="body-3">{item.quote}</blockquote>
                      <figcaption>
                        <p className="title-3">{item.name}</p>
                        <p className="caption-2 muted">{item.role}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </Reveal>
          </div>
        </section>

        {/* 8. Founder */}
        <section className="section" id="about">
          <div className="wrap">
            <Reveal>
              <div className="founder-card">
                {/* {{founder portrait}}: add a real photo here with next/image when available */}
                <div className="founder-intro">
                  <span className="icon-chip founder-icon"><Quotes aria-hidden="true" size={24} weight="light" /></span>
                  <h2 className="heading-3">Creative thinking.<br />A practical point of view.</h2>
                </div>
                <div className="founder-copy">
                  <p className="body-3">
                    Dhara Media began with a simple idea: bring creativity, marketing and technology
                    together to help businesses show up with purpose. I started the agency to help
                    turn good ideas into thoughtful digital experiences, one considered step at a time.
                  </p>
                  <div className="founder-name">
                    <p className="title-2">Amit Singh Karki</p>
                    <p className="caption-2 muted">Founder, Dhara Media</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="section" id="faq">
          <div className="wrap faq-layout">
            <Reveal>
              <div className="faq-intro">
                <h2 className="heading-2">Before we get started.</h2>
                <p className="body-3 muted">Something else on your mind? Tell us what you are working on.</p>
                <a className="text-link title-3" href="#contact">
                  Ask us directly <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="faq-list">
                {faqs.map(({ question, answer }) => (
                  <details className="faq-item" key={question}>
                    <summary>
                      <span className="title-2">{question}</span>
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <p className="body-3 muted faq-answer">{answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10. Risk reversal and final CTA */}
        <section className="section" id="contact">
          <div className="wrap">
            <Reveal>
              <div className="cta-card on-dark">
                <div className="cta-copy">
                  <h2 className="heading-2">Have a good idea? Let&apos;s give it shape.</h2>
                  <p className="body-3 muted">
                    Tell us about your business and what you would like to build. We will reply with
                    a suggested scope and next steps.
                  </p>
                  <div className="contact-details">
                    <h3 className="title-3">Contact Dhara Media</h3>
                    <div className="contact-links">
                      <a className="contact-link" href="mailto:dharamedia74@gmail.com">
                        <EnvelopeSimple aria-hidden="true" size={22} weight="light" />
                        <span className="contact-link-label">
                          <span className="caption-2 muted">Email</span>
                          <span className="body-2">dharamedia74@gmail.com</span>
                        </span>
                      </a>
                      <a className="contact-link" href="tel:+918272097663">
                        <Phone aria-hidden="true" size={22} weight="light" />
                        <span className="contact-link-label">
                          <span className="caption-2 muted">Phone</span>
                          <span className="body-2">8272097663</span>
                        </span>
                      </a>
                    </div>
                    <div className="contact-socials" aria-label="Social profiles">
                      <a
                        href="https://www.linkedin.com/in/amit-karki-work123"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LinkedinLogo aria-hidden="true" size={20} weight="regular" />
                        LinkedIn
                      </a>
                      <a
                        href="https://www.instagram.com/dhara.media/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <InstagramLogo aria-hidden="true" size={20} weight="regular" />
                        Instagram
                      </a>
                    </div>
                  </div>
                  <ul className="check-list body-3">
                    <li><Check aria-hidden="true" size={20} weight="bold" color="var(--orange)" />No obligation to proceed after the first conversation</li>
                    <li><Check aria-hidden="true" size={20} weight="bold" color="var(--orange)" />Scope, timing and fees agreed in writing before work begins</li>
                    <li><Check aria-hidden="true" size={20} weight="bold" color="var(--orange)" />Open to projects across India and internationally</li>
                  </ul>
                  <p className="caption-1 muted cta-place">
                    <MapPin aria-hidden="true" size={20} weight="light" /> Based in Dehradun, India
                  </p>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="footer-wordmark" href="#main" aria-label="Dhara Media home">
                <BrandLogo className="footer-brand-logo" />
              </a>
              <p className="body-3 muted footer-tag">Creative thinking.<br />Strategic growth.</p>
            </div>
            <nav className="footer-nav title-4" aria-label="Footer navigation">
              <p className="title-3 footer-heading">Explore</p>
              <a href="#services">Services</a>
              <a href="#process">How it works</a>
              <a href="#work">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="footer-nav title-4">
              <p className="title-3 footer-heading">Company</p>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="#main">Back to top</a>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <span className="caption-2 muted">© Dhara Media. All rights reserved.</span>
            <span className="caption-2 muted">Made with intent in Dehradun.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
