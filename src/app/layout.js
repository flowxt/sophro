import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sophro-Analyse & Thérapies en Haute-Savoie | Stéphanie Lassagne",
  description:
    "Thérapeute en Sophro-Analyse, Constellations Familiales et Magnétisme à Allèves et en Haute-Savoie. Accompagnement personnalisé pour retrouver équilibre et bien-être.",
  keywords: [
    "sophro-analyse Haute-Savoie",
    "sophro-analyse Allèves",
    "thérapeute Haute-Savoie",
    "constellations familiales Allèves",
    "magnétisme Haute-Savoie",
    "bien-être proche de Annecy",
    "thérapie brève Haute-Savoie",
    "Stéphanie Lassagne thérapeute",
    "thérapie holistique 74",
    "équilibre émotionnel proche de Annecy",
    "accompagnement thérapeutique Haute-Savoie",
  ],
  openGraph: {
    title: "Sophro-Analyse & Thérapies en Haute-Savoie | Stéphanie Lassagne",
    description:
      "Thérapeute en Sophro-Analyse, Constellations Familiales et Magnétisme à Annecy et en Haute-Savoie. Accompagnement personnalisé pour retrouver équilibre et bien-être.",
    url: "https://harmonieetsens74.fr",
    siteName: "Harmonie & Sens - Thérapies en Haute-Savoie",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://harmonieetsens74.fr",
  },
  metadataBase: new URL("https://harmonieetsens74.fr"),
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
