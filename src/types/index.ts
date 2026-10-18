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
