import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/src/config/site';
import { PRODUCTS_CATALOG } from '@/src/lib/catalog';

/**
 * PRODUCTION DYNAMIC SITEMAP GENERATOR (Next.js 15 App Router)
 * Operating Entity: BUTLER TRADING PTY. LTD.
 *
 * Emits clean, 200-only canonical URLs with zero redirects or noindex routes:
 * 1. Static Core Routes (Home, Shop, NDIS Funding, About, FAQ, Contact)
 * 2. 5 Main Category Landing Routes
 * 3. Canonical Product URLs from master PRODUCTS_CATALOG
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lifestylemobilityscooters.com.au';
  const buildDate = new Date('2026-10-18T00:00:00.000Z');

  // 1. Static Core Routes
  const staticCoreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shop/`,
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ndis-funding/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/calculator/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/quiz/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // 2. 5 Main Category Landing Routes
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/shop/${cat.slug}/`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3. Master Catalog Canonical Product Routes
  const seenProductUrls = new Set<string>();
  const productRoutes: MetadataRoute.Sitemap = [];

  for (const product of PRODUCTS_CATALOG) {
    const canonicalUrl = `${baseUrl}/shop/${product.categorySlug}/${product.slug}/`;
    if (!seenProductUrls.has(canonicalUrl)) {
      seenProductUrls.add(canonicalUrl);
      productRoutes.push({
        url: canonicalUrl,
        lastModified: buildDate,
        changeFrequency: 'weekly',
        priority: product.badge === 'Top Seller' ? 0.8 : 0.7,
      });
    }
  }

  return [...staticCoreRoutes, ...categoryRoutes, ...productRoutes];
}
