export const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Family Clinic Health Care",
  "description": "English-speaking medical clinic in Vicenza, Italy, serving the American military community at Caserma Ederle and Camp Del Din.",
  "url": "https://familyclinic.health",
  "logo": "https://familyclinic.health/logo.svg",
  "telephone": "+3904441943203",
  "email": "info@familyclinic.health",
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
  "availableLanguage": ["English", "Italian"],
  "areaServed": {
    "@type": "City",
    "name": "Vicenza"
  },
  "medicalSpecialty": [
    "GeneralPractice",
    "Cardiovascular",
    "Orthopedic",
    "Gynecological",
    "Pediatric",
    "Endocrinology"
  ],
  "paymentAccepted": "Major US insurance plans, TRICARE, Aetna, Cigna, BCBS, UnitedHealthcare, Humana, GEHA, MetLife"
};
