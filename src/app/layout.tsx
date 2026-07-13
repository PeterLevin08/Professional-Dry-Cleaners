import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // ~62 chars: leads with the primary local keyword, keeps the brand.
    default: "Mississauga Dry Cleaning & Alterations | Professional Cleaners",
    template: `%s | ${site.shortName}`,
  },
  description:
    "Expert dry cleaning, alterations & specialty care on Dundas St E, Mississauga — Canada Goose, wedding gowns, leather & more. Call (905) 232-5099.",
  keywords: [
    "dry cleaning Mississauga",
    "alterations Mississauga",
    "tailoring Mississauga",
    "Canada Goose cleaning",
    "wedding gown preservation",
    "leather suede fur cleaning",
    "Dundas St E dry cleaner",
  ],
  openGraph: {
    title: "Mississauga Dry Cleaning & Alterations | Professional Cleaners",
    description:
      "Impeccable dry cleaning, expert tailoring and specialty garment care on Dundas St E, Mississauga.",
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Dry Cleaners & Alteration — Mississauga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mississauga Dry Cleaning & Alterations | Professional Cleaners",
    description:
      "Expert dry cleaning, alterations & specialty garment care on Dundas St E, Mississauga.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: site.name,
  telephone: "+19052325099",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  areaServed: "Mississauga",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
