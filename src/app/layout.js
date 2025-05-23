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
  title:
    "Constellations Familiales, Sophro-Analyse, Magnétisme en Haute-Savoie | Annecy, Allèves",
  description:
    "Thérapeute spécialiste en Constellations Familiales, Sophro-Analyse et Magnétisme à Allèves près d'Annecy et en Haute-Savoie (74). Séances individuelles pour libérer vos blocages et retrouver équilibre et bien-être.",
  keywords: [
    "constellations familiales Haute-Savoie",
    "constellations familiales Annecy",
    "constellations familiales Allèves",
    "sophro-analyse Haute-Savoie",
    "sophro-analyse Annecy",
    "sophro-analyse Allèves",
    "magnétisme Haute-Savoie",
    "magnétisme Annecy",
    "magnétisme Allèves",
    "thérapeute constellations familiales 74",
    "thérapeute Haute-Savoie",
    "thérapie brève Annecy",
    "thérapie brève Haute-Savoie",
    "Stéphanie Lassagne thérapeute",
    "thérapie holistique 74",
    "équilibre émotionnel Annecy",
    "accompagnement thérapeutique Haute-Savoie",
    "bien-être Annecy",
    "bien-être Haute-Savoie",
  ],
  openGraph: {
    title:
      "Constellations Familiales, Sophro-Analyse, Magnétisme en Haute-Savoie | Annecy, Allèves",
    description:
      "Thérapeute spécialiste en Constellations Familiales, Sophro-Analyse et Magnétisme à Allèves près d'Annecy et en Haute-Savoie (74). Séances individuelles pour libérer vos blocages et retrouver équilibre et bien-être.",
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

        {/* Schema.org structured data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://harmonieetsens74.fr",
              name: "Harmonie & Sens - Thérapies en Haute-Savoie",
              description:
                "Cabinet de thérapies douces à Allèves et Annecy en Haute-Savoie. Constellations Familiales, Sophro-Analyse et Magnétisme.",
              url: "https://harmonieetsens74.fr",
              telephone: "+33600000000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Allèves",
                addressLocality: "Allèves",
                addressRegion: "Haute-Savoie",
                postalCode: "74540",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.7419",
                longitude: "6.1036",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              priceRange: "€€",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "45.899",
                  longitude: "6.1294",
                },
                geoRadius: "30000",
              },
              servesCuisine: [
                "Constellations Familiales",
                "Sophro-Analyse",
                "Magnétisme",
                "Thérapies douces",
              ],
            }),
          }}
        />
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
