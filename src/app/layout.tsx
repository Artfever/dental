import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { clinic } from "@/config/clinic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/animations";
import "./globals.css";

const serif = localFont({
  src: [
    {
      path: "../../public/fonts/cormorant-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cormorant-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
  display: "swap",
});
const sans = localFont({
  src: [
    {
      path: "../../public/fonts/manrope-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope-semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: {
    default: `${clinic.name} | Dental Care in Islamabad — Concept`,
    template: `%s | ${clinic.name}`,
  },
  description: `Explore publicly described dental care at ${clinic.name}, ${clinic.area}, ${clinic.city}. A concept website with contact details pending clinic verification.`,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${clinic.name} — A thoughtful beginning`,
    description:
      "A dental website concept for I-8 Markaz, Islamabad. Clinic details await confirmation.",
    type: "website",
    locale: "en_PK",
    siteName: clinic.name,
  },
  twitter: { card: "summary_large_image" },
  applicationName: `${clinic.name} — Concept`,
};
export const viewport: Viewport = { themeColor: "#F7F5EE" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const business = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.streetAddress}, ${clinic.area}`,
      addressLocality: clinic.city,
      addressCountry: "PK",
    },
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(business).replaceAll("<", "\\u003c"),
          }}
        />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
