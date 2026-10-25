import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cortera",
    default: "Physical AI for Mining & Agriculture",
  },
  description:
    "Cortera builds intelligent robotic systems for mining and agriculture, governed by a cloud AI control plane for permissions, guardrails, monitoring, cost visibility, failure analysis, and human oversight.",
  metadataBase: new URL("https://www.cortera.space"),
  openGraph: {
    images: [{ url: "/assets/og-twitter.jpg", width: 2400, height: 1200, alt: "Cortera hero" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-twitter.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
