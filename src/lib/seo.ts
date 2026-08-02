import type { Metadata } from "next";

const SITE_URL = "https://owlhacks.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OwlHacks 2026 | Temple University Hackathon",
    template: "%s | OwlHacks 2026",
  },
  description:
    "OwlHacks is Temple University's student-run hackathon. Join us September 26–27, 2026 in Philadelphia for coding, workshops, and community — free to attend.",
  keywords: [
    "OwlHacks",
    "Temple University",
    "hackathon",
    "Philadelphia",
    "student hackathon",
    "MLH",
    "2026",
  ],
  authors: [{ name: "OwlHacks Team", url: SITE_URL }],
  creator: "OwlHacks",
  publisher: "OwlHacks",
  applicationName: "OwlHacks",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "OwlHacks",
    title: "OwlHacks 2026 | Temple University Hackathon",
    description:
      "Temple University's student-run hackathon — September 26–27, 2026 in Philadelphia. Build, learn, and connect.",
    images: [
      {
        url: "/hero_content/oh-logo.png",
        width: 750,
        height: 762,
        alt: "OwlHacks logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OwlHacks 2026 | Temple University Hackathon",
    description:
      "Temple University's student-run hackathon — September 26–27, 2026 in Philadelphia.",
    images: ["/hero_content/oh-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};
