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

* `NEXT_PUBLIC_SITE_URL` to the public website address. This is used for canonical, social sharing and sitemap URLs.
* `NEXT_PUBLIC_CONTACT_EMAIL` to the business inbox.
* `NEXT_PUBLIC_WHATSAPP_NUMBER` to the business WhatsApp number, including country code and digits only.
* `WEB3FORMS_KEY` to the server-only Web3Forms access key. Do not expose it with a `NEXT_PUBLIC_` prefix. The enquiry form sends validated submissions to Web3Forms, which forwards them to the business by email; the site does not store them.
* `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is optional. Leave it empty to keep analytics disabled; set it to the registered domain to enable Plausible.

Dhara Media is a marketing and branding agency in Dehradun for hotels, resorts, homestays, clinics and wellness centres. The agency helps business owners build their brand, website and social presence to grow bookings and enquiries. Do not add testimonials, client names, performance statistics or portfolio claims until they are verified and approved. Homepage stock imagery and video are illustrative, not client case studies. They are served locally from `public/media` and are used under the [Pexels License](https://www.pexels.com/license/).

## Checks

```bash
npm run lint
npm run build
```

The privacy and terms pages are starter website notices. Review them for the actual hosting, analytics and legal requirements before publishing.
