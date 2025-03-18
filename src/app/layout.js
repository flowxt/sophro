import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Thérapeute en Sophro-Analyse, Constellations Familiales et Magnétisme à Annecy et en Haute-Savoie. Accompagnement personnalisé pour retrouver équilibre et bien-être.",
  keywords: [
    "sophro-analyse Haute-Savoie",
    "sophro-analyse Annecy",
    "thérapeute Haute-Savoie",
    "constellations familiales Annecy",
    "magnétisme Haute-Savoie",
    "bien-être Annecy",
    "thérapie brève Haute-Savoie",
    "Stéphanie Lassagne thérapeute",
    "thérapie holistique 74",
    "équilibre émotionnel Annecy",
    "accompagnement thérapeutique Haute-Savoie",
  ],
  openGraph: {
    title: "Sophro-Analyse & Thérapies en Haute-Savoie | Stéphanie Lassagne",
    description:
      "Thérapeute en Sophro-Analyse, Constellations Familiales et Magnétisme à Annecy et en Haute-Savoie. Accompagnement personnalisé pour retrouver équilibre et bien-être.",
    url: "https://harmonie-et-sens.fr",
    siteName: "Harmonie & Sens - Thérapies en Haute-Savoie",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://harmonie-et-sens.fr",
  },
  metadataBase: new URL("https://harmonie-et-sens.fr"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
