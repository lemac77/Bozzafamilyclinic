import { FAQCategory } from "../../types";

export function buildFaqPageSchema(categories: FAQCategory[]) {
  const mainEntity = categories
    .flatMap((cat) => cat.questions)
    .map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity,
  };
}
