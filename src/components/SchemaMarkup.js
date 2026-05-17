export default function SchemaMarkup({ lang }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://abis-garten.de/#localbusiness",
        "name": "Abi's Garten-Pflege",
        "description": "Professionelle Gartenpflege, Rasenpflege und Baumschnitt in Deutschland.",
        "url": "https://abis-garten.de",
        "telephone": "+49123456789",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Musterstraße 1",
          "addressLocality": "Musterstadt",
          "postalCode": "12345",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.165691,
          "longitude": 10.451526
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://abis-garten.de/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Bieten Sie regelmäßige Rasenpflege an?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wir bieten regelmäßige Rasenpflege an, einschließlich Mähen, Vertikutieren und Düngen."
            }
          },
          {
            "@type": "Question",
            "name": "Führen Sie auch professionelle Baumpflege durch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, unser Team ist auf professionellen Baumschnitt und Kronenpflege spezialisiert, unter Einhaltung aller Sicherheitsstandards."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
