import { SITE, BRAND, CONTACT, PRODUCTS, AGGREGATE_RATING, REVIEWS, FAQ } from '@/src/config/site';

export default function JsonLd({ type, data = {} }: { type: string, data?: any }) {
  let schema: any = {};

  if (type === 'FAQPage') {
    const faqList = Array.isArray(data) && data.length > 0 
      ? data 
      : (data?.items && Array.isArray(data.items) ? data.items : FAQ);

    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map((item: { question: string; answer: string }) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }

  if (type === 'BreadcrumbList') {
    const items = Array.isArray(data) ? data : (data?.items || []);
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((crumb: { name: string; url: string }, idx: number) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url.startsWith('http') ? crumb.url : `https://${SITE.domain}${crumb.url}`
      }))
    };
  }

  if (type === 'Organization') {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalBusiness",
          "@id": `https://${SITE.domain}/#organization`,
          "name": SITE.name,
          "legalName": CONTACT.entity,
          "url": `https://${SITE.domain}`,
          "logo": `https://${SITE.domain}/images/logo.png`,
          "telephone": `+61-${CONTACT.phone.replace(/\s+/g, '-')}`,
          "email": CONTACT.email,
          "taxID": CONTACT.abn,
          "identifier": {
            "@type": "PropertyValue",
            "name": "ACN",
            "value": CONTACT.acn
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Shepley Ave",
            "addressLocality": "Panorama",
            "addressRegion": "SA",
            "postalCode": "5041",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.9892,
            "longitude": 138.5991
          },
          "priceRange": "$$",
          "currenciesAccepted": SITE.currency,
          "paymentAccepted": "Bank Transfer, PayID, OSKO, Crypto (BTC/USDT), Zip Money, Afterpay",
          "areaServed": [
            { "@type": "Country", "name": "Australia" }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": AGGREGATE_RATING.ratingValue,
            "reviewCount": AGGREGATE_RATING.reviewCount,
            "bestRating": AGGREGATE_RATING.bestRating,
            "worstRating": AGGREGATE_RATING.worstRating
          }
        },
        {
          "@type": "WebSite",
          "@id": `https://${SITE.domain}/#website`,
          "url": `https://${SITE.domain}`,
          "name": SITE.name,
          "publisher": {
            "@id": `https://${SITE.domain}/#organization`
          },
          "inLanguage": SITE.locale,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `https://${SITE.domain}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };
  }

  if (type === 'Product' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "description": data.description,
      "image": `https://${SITE.domain}/images/${data.images[0]}`,
      "brand": { "@type": "Brand", "name": SITE.name },
      "offers": {
        "@type": "Offer",
        "price": data.price,
        "priceCurrency": SITE.currency,
        "availability": "https://schema.org/InStock",
        "url": `https://${SITE.domain}/shop/${data.category}/${data.slug}/`,
      }
    };
  }
  if (type === 'reviews') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "MedicalBusiness",
        "name": SITE.name,
        "url": `https://${SITE.domain}/`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": AGGREGATE_RATING.ratingValue,
        "reviewCount": AGGREGATE_RATING.reviewCount,
        "bestRating": AGGREGATE_RATING.bestRating,
        "worstRating": AGGREGATE_RATING.worstRating
      },
      "review": REVIEWS.map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "datePublished": r.date,
        "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
        "reviewBody": r.comment,
        "name": r.title
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
