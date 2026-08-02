import React from "react";

const SITE_URL = "https://owlhacks.com";

/** Public Event schema for search engines — no secrets or private data */
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "OwlHacks 2026",
  description:
    "OwlHacks is Temple University's student-run hackathon. Join us September 26–27, 2026 in Philadelphia for 24 hours of building, learning, and community.",
  startDate: "2026-09-26T08:00:00-04:00",
  endDate: "2026-09-27T18:00:00-04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  url: SITE_URL,
  image: [`${SITE_URL}/hero_content/oh-logo.png`],
  location: {
    "@type": "Place",
    name: "Temple University",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1925 N. 12th St.",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      postalCode: "19122",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "OwlHacks",
    url: SITE_URL,
    email: "tuowlhacks@gmail.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OwlHacks",
  url: SITE_URL,
  logo: `${SITE_URL}/hero_content/oh-logo.png`,
  sameAs: [
    "https://www.linkedin.com/company/templeowlhacks/",
    "https://instagram.com/owlhacks",
    "https://github.com/owlhacks",
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        // Public marketing schema only — safe to embed as JSON
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
