# Dhara Media website

A responsive agency website built with Next.js, React, TypeScript, Tailwind CSS and Phosphor icons.

The services section presents all six service areas in a responsive, accessible list.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure before launch

Copy `.env.example` to `.env.local` and set:

* `NEXT_PUBLIC_SITE_URL` to the final public website address. This is used to make canonical and social sharing URLs absolute.
* `NEXT_PUBLIC_CONTACT_EMAIL` to the business inbox. The enquiry form validates the visitor's details and opens a prepared email in their email application. The website does not store form submissions.
* `NEXT_PUBLIC_WHATSAPP_NUMBER` to the verified number, including country code and digits only. A WhatsApp contact link appears when it is configured.

The business profile did not include confirmed contact details, a public domain, social accounts, approved testimonials or client approved portfolio visuals. Add those only after they have been verified and approved. The abstract work cards on the homepage are illustrative, not client case studies.

## Checks

```bash
npm run lint
npm run build
```

The privacy and terms pages are starter website notices. Review them for the actual hosting, analytics and legal requirements before publishing.
