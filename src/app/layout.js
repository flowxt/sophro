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
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
