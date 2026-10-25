import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport = { themeColor: "#0A0A0B" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Cortera",
    default: "Cortera | Physical AI and Cloud AI for Agriculture and Mining",
  },
  description:
    "Cortera builds frontier Physical AI robotics for mining and agriculture, and the control plane that keeps cloud and physical agents safe, observable and under human oversight.",
  openGraph: {
    images: [{ url: "/assets/og-twitter.jpg", width: 2400, height: 1200, alt: "Cortera hero" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-twitter.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Nav />
        <ScrollToTop />
        <main id="content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
