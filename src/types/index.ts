/**
 * MASTER TYPE SPECIFICATIONS FOR LIFESTYLE MOBILITY SCOOTERS AUSTRALIA
 * Operating Entity: BUTLER TRADING PTY. LTD. (ABN: 84 008 071 323 | ACN: 008 071 323)
 * Framework: Next.js 15 (App Router, Server Components, TypeScript Strict, React 19)
 */

export interface ProductSpecs {
  safeWorkingLoadKg: number;
  maxSpeedKmh: number;
  estimatedRangeKm: number;
  totalWeightKg: number;
  heaviestPartKg?: number;
  batteryType: string;
  batteryCapacityWh?: number;
  motorOutputWatts: number;
  turningRadiusMm?: number;
  groundClearanceMm?: number;
  tyreType: string;
  airlineApproved: boolean;
  arr204FootpathCompliant: boolean;
  warrantyYears: number;
}

export type ProductSpecification = ProductSpecs;

export interface Product {
  id: string;
  sku: string;
  mpn: string;
  name: string;
  brand: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  price: number;
  gstExempt: boolean;
  inStock: boolean;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  specs: ProductSpecs;
  includedAccessories: string[];
}

/**
 * SCHEMA.ORG GRAPH DEFINITIONS (Strict RFC-compliant JSON-LD models)
 */
export interface SchemaPostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface SchemaGeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface SchemaOrganizationRef {
  "@id": string;
}

export interface SchemaLocalBusiness {
  "@type": ["MedicalBusiness", "LocalBusiness"];
  "@id": string;
  name: string;
  legalName: string;
  url: string;
  logo: string;
  image: string;
  description: string;
  telephone: string;
  email: string;
  taxID: string;
  vatID?: string;
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  areaServed: {
    "@type": "Country";
    name: string;
  };
  address: SchemaPostalAddress;
  geo: SchemaGeoCoordinates;
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
}

export interface SchemaWebSite {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  publisher: SchemaOrganizationRef;
  inLanguage: string;
}

export interface SchemaOffer {
  "@type": "Offer";
  url: string;
  price: string;
  priceCurrency: string;
  priceValidUntil: string;
  itemCondition: "https://schema.org/NewCondition";
  availability: "https://schema.org/InStock" | "https://schema.org/OutOfStock";
  valueAddedTaxIncluded: boolean;
  seller: SchemaOrganizationRef;
  hasMerchantReturnPolicy: {
    "@type": "MerchantReturnPolicy";
    applicableCountry: "AU";
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow";
    merchantReturnDays: 14;
    returnMethod: "https://schema.org/ReturnByMail";
    returnFees: "https://schema.org/FreeReturn";
  };
  shippingDetails: {
    "@type": "OfferShippingDetails";
    shippingRate: {
      "@type": "MonetaryAmount";
      value: string;
      currency: "AUD";
    };
    shippingDestination: {
      "@type": "DefinedRegion";
      addressCountry: "AU";
    };
    deliveryTime: {
      "@type": "ShippingDeliveryTime";
      handlingTime: {
        "@type": "QuantitativeValue";
        minValue: 1;
        maxValue: 2;
        unitCode: "d";
      };
      transitTime: {
        "@type": "QuantitativeValue";
        minValue: 2;
        maxValue: 5;
        unitCode: "d";
      };
    };
  };
}

export interface SchemaProduct {
  "@type": "Product";
  "@id": string;
  name: string;
  image: string[];
  description: string;
  sku: string;
  mpn: string;
  brand: {
    "@type": "Brand";
    name: string;
  };
  category: string;
  audience: {
    "@type": "MedicalAudience";
    audienceType: "Seniors & Individuals with physical mobility needs";
    geographicArea: {
      "@type": "Country";
      name: "Australia";
    };
  };
  additionalProperty: Array<{
    "@type": "PropertyValue";
    name: string;
    value: string | number;
  }>;
  offers: SchemaOffer;
}

export interface SchemaBreadcrumbList {
  "@type": "BreadcrumbList";
  "@id": string;
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface SchemaGraph {
  "@context": "https://schema.org";
  "@graph": Array<
    | SchemaLocalBusiness
    | SchemaWebSite
    | SchemaProduct
    | SchemaBreadcrumbList
  >;
}

/**
 * FORM & API INTERFACES
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  state?: string;
}

export interface OrderFormData {
  productId: string;
  productName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  paymentMethod: "bank-transfer" | "crypto-BTC" | "crypto-USDT" | "invoice";
  ndisParticipantNumber?: string;
  notes?: string;
}

export interface WholesaleFormData {
  businessName: string;
  abn: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  facilityType: "pharmacy" | "aged_care" | "mobility_store" | "hospital" | "other";
  annualEstimatedVolume: string;
  state: string;
  notes?: string;
}

export interface NDISQuoteFormData {
  participantName: string;
  participantNumber: string;
  planType: "self_managed" | "plan_managed" | "ndia_managed";
  planManagerEmail?: string;
  planManagerName?: string;
  occupationalTherapistName?: string;
  occupationalTherapistEmail?: string;
  productId: string;
  productName: string;
  accessories: string[];
  deliveryPostcode: string;
}

export interface APIResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string | string[];
}
