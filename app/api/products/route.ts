import { PRODUCTS_CATALOG } from '@/src/lib/catalog';
import { SITE } from '@/src/config/site';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category');

  let results = PRODUCTS_CATALOG;

  if (query) {
    results = results.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.shortDescription.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.categorySlug.toLowerCase().includes(query)
    );
  }

  if (category) {
    results = results.filter(p => p.categorySlug === category || p.category === category);
  }

  return Response.json({
    success: true,
    count: results.length,
    currency: SITE.currency,
    products: results.map(p => ({
      id: p.id,
      sku: p.sku,
      name: p.name,
      brand: p.brand,
      slug: p.slug,
      category: p.category,
      categorySlug: p.categorySlug,
      subcategory: p.subcategory,
      subcategorySlug: p.subcategorySlug,
      price: p.price,
      currency: SITE.currency,
      inStock: p.inStock,
      gstExempt: p.gstExempt,
      shortDescription: p.shortDescription,
      badge: p.badge,
      url: `https://${SITE.domain}/shop/${p.categorySlug}/${p.slug}/`
    }))
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
