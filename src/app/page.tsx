import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import type { Icon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  Check,
  Compass,
  CursorClick,
  DeviceMobile,
  EnvelopeSimple,
  GlobeHemisphereWest,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Palette,
  Phone,
  Quotes,
  Shapes,
  Sparkle,
  SquaresFour,
  VideoCamera,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { work } from "@/data/work";
import {
  BackToTop,
  ContactForm,
  FloatingWhatsApp,
  FounderPhoto,
  Header,
  MobileCta,
  ProductionPreview,
  Reveal,
  TrackedLink,
  WhatsAppLink,
} from "./site-interactions";
import { BrandLogo } from "./brand-logo";

const founderPhotoAvailable = existsSync(join(process.cwd(), "public", "media", "founder.jpg"));

export const metadata: Metadata = {
  title: "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
  description:
    "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
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
      "Dhara Media is a marketing and branding agency in Dehradun for hotels, resorts, homestays, clinics and wellness centres looking to build their brand and grow enquiries.",
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

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/dhara-media-logo.png`,
      sameAs: [site.instagram, site.linkedin],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#professional-service`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phoneUrl.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      areaServed: ["Uttarakhand", "India"],
      sameAs: [site.instagram, site.linkedin],
      provider: { "@id": `${site.url}/#organization` },
    },
  ],
};

type CoreService = {
  icon: Icon;
  title: string;
  description: string;
  details: string[];
};

const coreServices: CoreService[] = [
  {
    icon: GlobeHemisphereWest,
    title: "Websites for bookings and appointments",
    description:
      "Present your rooms or services clearly and make it easy for prospective customers to enquire, book or request an appointment.",
    details: ["Clear service, room and appointment information", "Direct enquiry pathways", "Responsive, search-ready foundations"],
  },
  {
    icon: Shapes,
    title: "Brand identity for service businesses",
    description:
      "Create a recognisable look and voice that reflects your business and builds consistency across every customer touchpoint.",
    details: ["Positioning and visual identity", "A consistent brand voice", "Guidelines for digital touchpoints"],
  },
];

const additionalServices = [
  { icon: DeviceMobile, title: "Social media" },
  { icon: ChartLineUp, title: "Digital marketing" },
  { icon: CursorClick, title: "Creator collaborations" },
  { icon: VideoCamera, title: "Content and production" },
];

const mobileServices = [
  {
    icon: DeviceMobile,
    title: "Social media management",
    description: "A thoughtful, consistent presence that gives people a reason to remember you.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Website design and development",
    description: "A considered website that makes your services and next step clear.",
  },
  {
    icon: Shapes,
    title: "Brand identity",
    description: "A distinct visual and verbal foundation for every customer touchpoint.",
  },
  {
    icon: ChartLineUp,
    title: "Digital marketing",
    description: "Connected campaigns shaped around your business and audience.",
  },
  {
    icon: CursorClick,
    title: "Influencer marketing",
    description: "Relevant creator partnerships, planned with care.",
  },
  {
    icon: VideoCamera,
    title: "Content production",
    description: "Photography, video and campaign assets with a clear point of view.",
  },
];

const productionVideo = {
  src: "/media/brand-process.mp4",
  poster: "/media/brand-process-poster.webp",
};

const benefits = [
  {
    icon: Palette,
    title: "A brand with a point of view",
    text: "Build a recognisable identity that feels right for your business and your audience.",
  },
  {
    icon: DeviceMobile,
    title: "A better first impression",
    text: "Help prospective customers understand your services and take the next step through a clear digital presence.",
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
  { title: "Discover", description: "We get to know your business, customers, goals and current digital presence." },
  { title: "Strategize", description: "Together, we shape a practical direction and agree on the work that matters." },
  { title: "Create and grow", description: "We make the work, bring it to life and look for ways to make it stronger." },
];

const areas = [
  {
    area: "Wellness",
    title: "Movement, care and wellbeing",
    image: "/media/wellness.webp",
    imageAlt: "A wellness practitioner providing a stone massage",
  },
  {
    area: "Products",
    title: "Skincare and nutrition",
    image: "/media/skincare.webp",
    imageAlt: "Assorted skincare products arranged on a pale surface",
  },
  {
    area: "Culture",
    title: "Retail and creative culture",
    image: "/media/retail.webp",
    imageAlt: "People browsing clothing rails in a boutique",
  },
];

function HeroVisual() {
  return (
    <div
      aria-label="Illustration of a website, a brand board and a social post designed together"
      className="hero-visual"
      role="img"
    >
      <div className="hv-card hv-browser">
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
      <div className="hv-card hv-post">
        <span className="hv-post-dot" />
        <span className="hv-line hv-line-light hv-w70" />
        <span className="hv-line hv-line-light hv-w50" />
      </div>
      <div className="hv-card hv-board">
        <div className="hv-swatches"><span /><span /><span /><span /></div>
        <div className="hv-stack">
          <span className="hv-line hv-line-strong hv-w60" />
          <span className="hv-line hv-w90" />
          <span className="hv-line hv-w70" />
        </div>
      </div>
      <div className="hv-card hv-badge">
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
      <FloatingWhatsApp />
      <BackToTop />
      <main id="main">
        {/* 1. Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-mobile-eyebrow">Creative studio · Dehradun</p>
              <h1 className="heading-1 hero-heading" id="hero-title">
                <span className="hero-title-desktop">
                  Branding and websites that bring in more bookings and appointments.
                </span>
                <span className="hero-title-mobile">Make your brand impossible to overlook.</span>
              </h1>
              <p className="title-2 hero-sub hero-sub-desktop">
                Dhara Media is a marketing and branding agency in Dehradun for hotels, resorts, homestays, clinics and wellness centres. We build the brand, website and social presence that turn searches into enquiries.
              </p>
              <p className="title-2 hero-sub hero-sub-mobile">
                Branding, websites and digital marketing for businesses ready to grow.
              </p>
              <div className="hero-actions">
                <div className="hero-actions-desktop">
                  <TrackedLink
                    className="button button-primary button-md"
                    eventName="CTA Click"
                    href="#contact"
                  >
                    Get a free 15-minute audit <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
                  </TrackedLink>
                  <WhatsAppLink label="Chat on WhatsApp" />
                </div>
                <div className="hero-actions-mobile">
                  <TrackedLink
                    className="button button-primary button-md"
                    eventName="CTA Click"
                    href="#contact"
                  >
                    Let&apos;s build something better <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
                  </TrackedLink>
                  <a className="hero-explore-link" href="#work">
                    Explore our work <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                  <p className="hero-trust">Independent creative studio · Est. 2023</p>
                </div>
              </div>
            </div>
            <div className="hero-art">
              <figure className="hero-mobile-image">
                <Image
                  alt=""
                  fill
                  fetchPriority="high"
                  loading="eager"
                  sizes="(max-width: 767px) calc(100vw - 40px), 1px"
                  src="/media/dhara-mobile-hero.png"
                />
              </figure>
              <HeroVisual />
            </div>
          </div>
        </section>
        <section className="trust-strip" aria-label="Working with Dhara Media">
          <div className="wrap">
            <ul className="trust-list">
              <li><MapPin aria-hidden="true" size={20} />Based in Dehradun, Uttarakhand</li>
              <li><Check aria-hidden="true" size={20} />Scope and fees agreed in writing</li>
              <li><Check aria-hidden="true" size={20} />Free 15-minute brand and website audit</li>
            </ul>
          </div>
        </section>

        {/* 2. Problem to solution */}
        <section className="section" id="intro">
          <div className="wrap">
            <Reveal>
              <div className="intro-desktop">
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
              </div>
              <div className="intro-mobile">
                <h2 className="heading-2">Good businesses deserve better branding.</h2>
                <p className="body-3 muted">
                  We connect strategy, design and technology to make your business stand out.
                </p>
                <span aria-hidden="true" className="intro-rule" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Services */}
        <section className="section" id="services">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <h2 className="heading-2">A clearer brand and a website that earns enquiries.</h2>
                <p className="body-3 muted">
                  Start with a clear identity and a useful website. Add ongoing support where it helps.
                </p>
              </div>
              <ol className="mobile-service-list">
                {mobileServices.map(({ icon: ServiceIcon, title, description }) => (
                  <li key={title}>
                    <TrackedLink
                      className="mobile-service-link"
                      eventName="CTA Click"
                      href="#contact"
                    >
                      <ServiceIcon aria-hidden="true" size={19} weight="light" />
                      <span className="mobile-service-copy">
                        <span className="title-2">{title}</span>
                        <span className="body-3 muted">{description}</span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="mobile-service-arrow" size={17} />
                    </TrackedLink>
                  </li>
                ))}
              </ol>
              <div className="core-service-grid">
                {coreServices.map(({ icon: ServiceIcon, title, description, details }) => (
                  <article className="card core-service-card" key={title}>
                    <span className="icon-chip"><ServiceIcon aria-hidden="true" size={24} weight="light" /></span>
                    <h3 className="heading-4">{title}</h3>
                    <p className="body-3 muted">{description}</p>
                    <ul className="check-list caption-1 service-details">
                      {details.map((detail) => (
                        <li key={detail}><Check aria-hidden="true" size={16} weight="bold" />{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="also-available">
                <h3 className="title-3">Also available</h3>
                <ul className="available-service-row">
                  {additionalServices.map(({ icon: ServiceIcon, title }) => (
                    <li className="available-service caption-1" key={title}>
                      <ServiceIcon aria-hidden="true" size={18} weight="light" />
                      {title}
                    </li>
                  ))}
                </ul>
                <ProductionPreview src={productionVideo.src} poster={productionVideo.poster} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Agency approach */}
        <section className="tagline on-dark" aria-label="Our point of view">
          <div className="wrap">
            <h2 className="heading-2 tagline-heading tagline-heading-desktop">
              We build clear brands and digital experiences that help businesses earn bookings and appointments.
            </h2>
            <h2 className="tagline-heading-mobile">
              Creative thinking.<br />Strategic growth.
            </h2>
            <p className="body-3 muted tagline-note tagline-note-desktop">
              Strategy. Creativity. Execution. A clearer path from what you do to how people see it.
            </p>
            <span aria-hidden="true" className="tagline-accent" />
          </div>
        </section>

        {/* 5. Benefits */}
        <section className="section" id="benefits">
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
                    <span className="step-n title-4">
                      <span className="step-n-desktop">{index + 1}</span>
                      <span className="step-n-mobile">{`0${index + 1}`}</span>
                    </span>
                    <h3 className="heading-5">
                      <span className="step-title-desktop">{step.title}</span>
                      <span className="step-title-mobile">
                        {index === 0 ? "Discover" : index === 1 ? "Create" : "Grow"}
                      </span>
                    </h3>
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
                <h2 className="heading-2">
                  {work.length > 0 ? "Selected work" : "Experience areas"}
                </h2>
                <p className="body-3 muted">
                  {work.length > 0
                    ? "A look at approved projects, the challenge behind them and the work delivered."
                    : "We are building our approved case-study portfolio. These illustrative images are not client work."}
                </p>
              </div>
              {work.length > 0 ? (
                <div className="case-study-grid">
                  {work.map((item) => (
                    <article className="card case-study-card" key={item.title}>
                      <figure className="case-study-image">
                        <Image
                          alt={`Approved project visual for ${item.title}`}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          src={item.image}
                        />
                      </figure>
                      <div className="case-study-copy">
                        <p className="caption-1 muted">{item.clientType}</p>
                        <h3 className="heading-5">{item.title}</h3>
                        <div className="case-study-detail">
                          <p className="caption-1"><strong>Challenge</strong>{item.problem}</p>
                          <div>
                            <p className="caption-1"><strong>What we did</strong></p>
                            <ul className="check-list caption-1">
                              {item.whatWeDid.map((service) => (
                                <li key={service}><Check aria-hidden="true" size={16} />{service}</li>
                              ))}
                            </ul>
                          </div>
                          <p className="caption-1"><strong>Result</strong>{item.result}</p>
                        </div>
                        {item.quote ? (
                          <blockquote className="case-study-quote">
                            <p className="body-3">{item.quote.text}</p>
                            <cite className="caption-2">{item.quote.attribution}</cite>
                          </blockquote>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}
              {work.length === 0 ? (
                <>
                  <div className="grid-3">
                    {areas.map(({ area, title, image, imageAlt }) => (
                      <article className="card exp-card" key={title}>
                        <figure className="exp-image">
                          <Image
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 640px) 112px, (max-width: 1024px) 45vw, 30vw"
                            src={image}
                          />
                        </figure>
                        <div className="exp-copy">
                          <p className="caption-1 muted">{area}</p>
                          <h3 className="heading-5">{title}</h3>
                        </div>
                      </article>
                    ))}
                  </div>
                  <p className="caption-2 muted exp-note">
                    Illustrative stock imagery, not client work. Project visuals and verified results
                    will be published only when approved.
                  </p>
                </>
              ) : null}
            </Reveal>
          </div>
        </section>

        {/* 8. Founder */}
        <section className="section" id="about">
          <div className="wrap">
            <Reveal>
              <div className="founder-card">
                <div className="founder-intro">
                  {/* TODO: add an approved portrait at public/media/founder.jpg; the image hides itself when missing. */}
                  <FounderPhoto available={founderPhotoAvailable} />
                  <span className="icon-chip founder-icon"><Quotes aria-hidden="true" size={24} weight="light" /></span>
                  <h2 className="heading-3">Creative thinking.<br />A practical point of view.</h2>
                  <p className="caption-1 muted founder-location">Founder-led studio based in Dehradun, Uttarakhand.</p>
                </div>
                <div className="founder-copy">
                  <p className="body-3">
                    I started Dhara Media to bring creativity, marketing and technology together for
                    hotels, resorts, homestays, clinics and wellness centres. The work starts with
                    understanding each business and shaping a clear, practical direction for its brand and website.
                  </p>
                  <p className="body-3 founder-mobile-copy">
                    I started Dhara Media to bring creativity, marketing and technology together for
                    hotels, resorts, homestays, clinics and wellness centres. We understand each
                    business first, then shape a practical direction for its brand and website.
                  </p>
                  <div className="founder-name">
                    <p className="title-2">
                      <span className="founder-name-desktop">Amit Karki</span>
                      <span className="founder-name-mobile">Amit Singh Karki</span>
                    </p>
                    <p className="caption-2 muted">Founder, Dhara Media</p>
                    <TrackedLink
                      className="text-link title-4"
                      eventName="CTA Click"
                      href={site.linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn profile <ArrowUpRight aria-hidden="true" size={16} />
                    </TrackedLink>
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
                <TrackedLink className="text-link title-3" eventName="CTA Click" href="#contact">
                  Get a free 15-minute audit <ArrowUpRight aria-hidden="true" size={16} />
                </TrackedLink>
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
                  <h2 className="heading-2 cta-heading-desktop">Get a free 15-minute brand &amp; website audit.</h2>
                  <h2 className="cta-heading-mobile">Have something in mind?</h2>
                  <p className="body-3 muted cta-copy-desktop">
                    Share your business website and what you would like to improve. We will review
                    the brand and website together and send you practical next steps.
                  </p>
                  <p className="body-3 cta-copy-mobile">Let&apos;s make it happen.</p>
                  <a className="button button-primary button-md cta-start-link" href="#field-name">
                    Start a conversation <ArrowUpRight aria-hidden="true" size={20} weight="bold" />
                  </a>
                  <div className="contact-details">
                    <h3 className="title-3">Contact Dhara Media</h3>
                    <div className="contact-links">
                      <a className="contact-link" href={`mailto:${site.email}`}>
                        <EnvelopeSimple aria-hidden="true" size={22} weight="light" />
                        <span className="contact-link-label">
                          <span className="caption-2 muted">Email</span>
                          <span className="body-2">{site.email}</span>
                        </span>
                      </a>
                      <TrackedLink
                        className="contact-link"
                        eventName="Phone Click"
                        href={site.phoneUrl}
                      >
                        <Phone aria-hidden="true" size={22} weight="light" />
                        <span className="contact-link-label">
                          <span className="caption-2 muted">Phone</span>
                          <span className="body-2">{site.phoneDisplay}</span>
                        </span>
                      </TrackedLink>
                    </div>
                    <div className="contact-socials" aria-label="Social profiles">
                      <a
                        href={site.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LinkedinLogo aria-hidden="true" size={20} weight="regular" />
                        LinkedIn
                      </a>
                      <a
                        href={site.instagram}
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
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
              <div className="footer-socials-mobile">
                <a href={site.instagram} rel="noopener noreferrer" target="_blank">
                  <InstagramLogo aria-hidden="true" size={18} /> Instagram
                </a>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  <LinkedinLogo aria-hidden="true" size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <nav className="footer-nav title-4" aria-label="Footer navigation">
              <p className="title-3 footer-heading">Explore</p>
              <a href="#services">Services</a>
              <a href="#process">How it works</a>
              <a href="#work">Experience</a>
              <TrackedLink eventName="CTA Click" href="#contact">Get a free 15-minute audit</TrackedLink>
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
