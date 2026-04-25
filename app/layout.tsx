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

export const metadata: Metadata = {
  metadataBase: new URL("https://upra.pt"),
  title: {
    default: "UPRA Marketing · Websites para negócios reais",
    template: "%s · UPRA Marketing",
  },
  description:
    "Construímos a presença digital de PMEs locais. Websites, lojas online e identidade visual para negócios que ainda dependem do passa-palavra.",
  openGraph: {
    title: "UPRA Marketing · Websites para negócios reais",
    description:
      "Construímos a presença digital de PMEs locais. Websites, lojas online e identidade visual.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      className={`${bricolage.variable} ${interTight.variable} ${jbMono.variable}`}
    >
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
