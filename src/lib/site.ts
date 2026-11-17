const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://dharamedia.cc.cd.in";
const configuredEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
if (!configuredEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail)) {
  throw new Error("Set NEXT_PUBLIC_CONTACT_EMAIL to a valid business email address.");
}

const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "918272097663"
).replace(/\D/g, "");
const indianPhone = whatsappNumber.startsWith("91") ? whatsappNumber.slice(2) : "";

export const site = {
  name: "Dhara Media",
  url: new URL(configuredUrl).origin,
  email: configuredEmail,
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  phoneDisplay:
    indianPhone.length === 10
      ? `+91 ${indianPhone.slice(0, 5)} ${indianPhone.slice(5)}`
      : `+${whatsappNumber}`,
  phoneUrl: `tel:+${whatsappNumber}`,
  instagram: "https://www.instagram.com/dhara.media/",
  linkedin: "https://www.linkedin.com/in/amit-karki-work123",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() || "",
  locality: "Dehradun",
  region: "Uttarakhand",
  country: "IN",
};
