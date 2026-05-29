import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function Seo({ title, description, schema }: SeoProps) {
  const location = useLocation();
  const canonicalUrl = `https://familyclinic.health${location.pathname === "/" ? "" : location.pathname}`;

  return (
    <Helmet>
      {/* Absolute Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <html lang="en" />

      {/* Opengraph Meta (Facebook / LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Family Clinic Health Care" />
      <meta property="og:image" content="https://familyclinic.health/logo.svg" />

      {/* Twitter Card Meta Preview */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://familyclinic.health/logo.svg" />

      {/* JSON-LD Schema Injections */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      )}
    </Helmet>
  );
}
