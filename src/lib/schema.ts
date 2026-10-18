import { Product, SchemaGraph, SchemaLocalBusiness, SchemaWebSite, SchemaProduct, SchemaBreadcrumbList } from '@/src/types';

const SITE_URL = 'https://lifestylemobilityscooters.com.au';
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Builds the canonical Schema.org LocalBusiness / MedicalBusiness entity.
 * Represents BUTLER TRADING PTY. LTD. operating Lifestyle Mobility Scooters Australia.
 */
export function buildOrganizationSchema(): SchemaLocalBusiness {
  return {
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": ORG_ID,
    "name": "Lifestyle Mobility Scooters Australia",
    "legalName": "BUTLER TRADING PTY. LTD.",
    "url": `${SITE_URL}/`,
    "logo": `${SITE_URL}/images/logo.png`,
    "image": `${SITE_URL}/images/hero.webp`,
    "description": "Australia's premier distributor of ARR 204 compliant electric mobility scooters, folding travel scooters, bariatric all-terrain models, and NDIS assistive mobility technology.",
    "telephone": "+61-1800-543-378",
    "email": "enquiries@lifestylemobilityscooters.com.au",
    "taxID": "84 008 071 323",
    "vatID": "ABN 84 008 071 323 | ACN 008 071 323",
    "priceRange": "$$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Bank Transfer, PayID, OSKO, Crypto (BTC/USDT), NDIS Invoicing, Zip Money, Afterpay",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "17:00"
      }
    ]
  };
}

/**
 * Builds the canonical Schema.org WebSite entity with Organization publisher link.
 * Sitelinks SearchBox is explicitly excluded per modern deprecation guidelines.
 */
export function buildWebSiteSchema(): SchemaWebSite {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": `${SITE_URL}/`,
    "name": "Lifestyle Mobility Scooters Australia",
    "description": "Australian Road Rule 204 compliant mobility scooters, folding travel buggies, and NDIS funded mobility aids.",
    "publisher": {
      "@id": ORG_ID
    },
    "inLanguage": "en-AU"
  };
}

/**
 * Builds the Schema.org Product and Offer entity for a given catalog product.
 */
export function buildProductSchema(product: Product): SchemaProduct {
  const canonicalProductUrl = `${SITE_URL}/shop/${product.categorySlug}/${product.slug}/`;
  const productImages = product.images && product.images.length > 0
    ? product.images.map(img => img.startsWith('http') ? img : `${SITE_URL}${img.startsWith('/') ? '' : '/'}${img}`)
    : [`${SITE_URL}/images/products/${product.slug}.webp`];

  return {
    "@type": "Product",
    "@id": `${canonicalProductUrl}#product`,
    "name": product.name,
    "image": productImages,
    "description": product.fullDescription || product.shortDescription,
    "sku": product.sku || `LMS-${product.id}`,
    "mpn": product.mpn || `MPN-${product.sku || product.id}`,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Lifestyle Mobility"
    },
    "category": product.category,
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Seniors & Individuals with physical mobility needs",
      "geographicArea": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue" as const,
        "name": "Safe Working Load",
        "value": `${product.specs.safeWorkingLoadKg} kg`
      },
      {
        "@type": "PropertyValue" as const,
        "name": "Governed Maximum Speed",
        "value": `${product.specs.maxSpeedKmh} km/h (ARR 204 Pedestrian Compliant)`
      },
      {
        "@type": "PropertyValue" as const,
        "name": "Estimated Driving Range",
        "value": `${product.specs.estimatedRangeKm} km`
      },
      {
        "@type": "PropertyValue" as const,
        "name": "Total Weight",
        "value": `${product.specs.totalWeightKg} kg`
      },
      {
        "@type": "PropertyValue" as const,
        "name": "Australian Regulatory Status",
        "value": "ARR 204 Pedestrian Ready (No Licence or Registration Required)"
      },
      {
        "@type": "PropertyValue" as const,
        "name": "Taxation Exemption",
        "value": "100% GST-Free under Section 38-45 A New Tax System (GST) Act 1999"
      },
      ...(product.specs.airlineApproved ? [
        {
          "@type": "PropertyValue" as const,
          "name": "Dangerous Goods Aviation Compliance",
          "value": "CASA / IATA UN 38.3 Lithium Battery Certified"
        }
      ] : [])
    ],
    "offers": {
      "@type": "Offer",
      "url": canonicalProductUrl,
      "price": product.price.toFixed(2),
      "priceCurrency": "AUD",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "valueAddedTaxIncluded": false, // 100% GST-Exempt under Section 38-45
      "seller": {
        "@id": ORG_ID
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "AU",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": product.price >= 150 ? "0.00" : "14.95",
          "currency": "AUD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "AU"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "d"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 5,
            "unitCode": "d"
          }
        }
      }
    }
  };
}

/**
 * Builds the Schema.org BreadcrumbList for a Product Detail Page.
 */
export function buildProductBreadcrumbs(product: Product): SchemaBreadcrumbList {
  const canonicalProductUrl = `${SITE_URL}/shop/${product.categorySlug}/${product.slug}/`;

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalProductUrl}#breadcrumbs`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": `${SITE_URL}/shop/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.category,
        "item": `${SITE_URL}/shop/${product.categorySlug}/`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": canonicalProductUrl
      }
    ]
  };
}

/**
 * Generates a single, stable @graph containing:
 * - MedicalBusiness / LocalBusiness (BUTLER TRADING PTY. LTD.)
 * - WebSite entity linking to publisher
 * - Product entity with MerchantListing details and Section 38-45 GST exemption
 * - BreadcrumbList entity
 */
export function generateProductSchemaGraph(product: Product): SchemaGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildProductSchema(product),
      buildProductBreadcrumbs(product)
    ]
  };
}
