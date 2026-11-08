import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: "Dhara Media | Branding, Websites & Digital Growth",
    template: "%s | Dhara Media",
  },
  description:
    "Build a clearer brand and stronger digital presence with Dhara Media, a creative and digital agency based in Dehradun, India.",
  applicationName: "Dhara Media",
  category: "Marketing and creative services",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "Dhara Media | Creative Thinking. Strategic Growth.",
    description:
      "Thoughtful branding, content and websites for businesses ready to build a stronger digital presence.",
    type: "website",
    locale: "en_IN",
    siteName: "Dhara Media",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "Dhara Media, creative thinking and strategic growth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhara Media | Creative Thinking. Strategic Growth.",
    description:
      "Thoughtful branding, content and websites for businesses ready to build a stronger digital presence.",
    images: ["/opengraph-image.svg"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
