import { CATEGORIES, SITE } from '@/src/config/site';
import { PRODUCTS_CATALOG } from '@/src/lib/catalog';

export async function GET() {
  const categoriesWithCounts = CATEGORIES.map(c => {
    const count = PRODUCTS_CATALOG.filter(p => 
      p.categorySlug === c.slug ||
      (c.slug === 'portable-folding' && p.categorySlug === 'portable-folding-scooters') ||
      (c.slug === 'mid-size-everyday' && p.categorySlug === 'mid-size-pavement-scooters') ||
      (c.slug === 'heavy-duty-all-terrain' && (p.categorySlug === 'heavy-duty-all-terrain' || p.categorySlug === 'heavy-duty-bariatric')) ||
      (c.slug === 'ramps-hoists' && p.categorySlug === 'ramps-hoists-loading') ||
      (c.slug === 'batteries-accessories' && p.categorySlug === 'batteries-chargers-accessories')
    ).length;

    return {
      slug: c.slug,
      name: c.name,
      description: c.description,
      productCount: count,
      url: `https://${SITE.domain}/shop/${c.slug}/`
    };
  });

  return Response.json({
    categories: categoriesWithCounts,
    totalProducts: PRODUCTS_CATALOG.length
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
