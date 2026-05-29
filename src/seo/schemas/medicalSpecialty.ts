import { Specialty } from "../../types";

export function buildMedicalSpecialtySchema(specialties: Specialty[]) {
  return specialties.map((spec) => ({
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": spec.name,
    "description": spec.description,
    "hasMedicalSpecialty": spec.name,
    "provider": {
      "@type": "MedicalClinic",
      "name": "Family Clinic Health Care",
      "telephone": "+3904441943203",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via F.lli Rosselli 58",
        "addressLocality": "Vicenza",
        "postalCode": "36100",
        "addressCountry": "IT"
      }
    }
  }));
}
