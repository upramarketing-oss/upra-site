import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { WhatsAppPopup } from "./components/WhatsAppPopup";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Construímos a presença digital de pequenas e médias empresas locais em Portugal. Websites, lojas online e identidade visual para negócios que ainda dependem do passa-palavra.";

export const metadata: Metadata = {
  metadataBase: new URL("https://upra.pt"),
  title: {
    default: "UPRA · Websites para negócios reais",
    template: "%s · UPRA",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "websites portugal",
    "criação de sites",
    "agência digital",
    "loja online portugal",
    "site para PME",
    "site para restaurante",
    "site para loja",
    "site para oficina",
    "design web portugal",
    "SEO local",
    "Next.js portugal",
    "agência marketing digital",
  ],
  authors: [{ name: "UPRA", url: "https://upra.pt" }],
  creator: "UPRA",
  publisher: "UPRA",
  applicationName: "UPRA",
  category: "Business",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://upra.pt",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://upra.pt",
    siteName: "UPRA",
    title: "UPRA · Websites para negócios reais",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/upra-logo.png",
        width: 1772,
        height: 1181,
        alt: "UPRA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPRA · Websites para negócios reais",
    description: SITE_DESCRIPTION,
    images: ["/upra-logo.png"],
  },
  verification: {
    google: "XWf2R8iB6CYeBAmiRnx0z4EwXnZHi9MdVt0I62DuOfA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "UPRA",
  legalName: "UPRA Marketing",
  url: "https://upra.pt",
  logo: "https://upra.pt/upra-logo.png",
  image: "https://upra.pt/upra-logo.png",
  description: SITE_DESCRIPTION,
  email: "upramarketing@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PT",
  },
  areaServed: {
    "@type": "Country",
    name: "Portugal",
  },
  serviceType: [
    "Criação de websites",
    "Lojas online",
    "Landing pages",
    "Identidade visual",
    "Gestão de redes sociais",
  ],
  sameAs: [
    "https://www.instagram.com/upramarketing",
    "https://www.facebook.com/upramarketing",
    "https://www.linkedin.com/company/upramarketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      className={`${bricolage.variable} ${interTight.variable} ${jbMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <WhatsAppPopup />
      </body>
    </html>
  );
}
