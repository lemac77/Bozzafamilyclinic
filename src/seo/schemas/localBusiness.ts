export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Family Clinic Health Care",
  "image": "https://familyclinic.health/logo.svg",
  "telephone": "+3904441943203",
  "email": "info@familyclinic.health",
  "url": "https://familyclinic.health",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via F.lli Rosselli 58",
    "addressLocality": "Vicenza",
    "addressRegion": "VI",
    "postalCode": "36100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.5455,
    "longitude": 11.5354
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "$$"
};

// Generates structural Breadcrumbs schemas for all non-home page trails
export function buildBreadcrumbSchema(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://familyclinic.health"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": `https://familyclinic.health${path}`
      }
    ]
  };
}
