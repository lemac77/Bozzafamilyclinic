export interface Review {
  id: string;
  authorName: string;
  rating: number;
  relativeTimeDescription: string;
  text: string;
  profilePhotoUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  questions: FAQItem[];
}

export interface RouteGuide {
  title: string;
  address: string;
  timeCar: string;
  timeFoot?: string;
  googleMapsLink: string;
}

export interface Specialty {
  id: string;
  name: string;
  anchor: string;
  eyebrow: string;
  h2: string;
  description: string;
  conditions: string[];
  proceduresTitle?: string;
  procedures?: string[];
  whenBooking: string;
  image?: string;
}
