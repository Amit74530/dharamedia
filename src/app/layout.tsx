import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { site } from "@/lib/site";
import { Analytics } from "./site-interactions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
    template: "%s | Dhara Media",
  },
  description:
    "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
  applicationName: "Dhara Media",
  category: "Marketing and branding agency",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
    description:
      "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
    type: "website",
    locale: "en_IN",
    siteName: "Dhara Media",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dhara Media, marketing and branding agency for hotels, resorts, homestays, clinics and wellness centres in Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
    description:
      "Dhara Media | Branding and Websites for Hotels and Clinics in Dehradun",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f5",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
