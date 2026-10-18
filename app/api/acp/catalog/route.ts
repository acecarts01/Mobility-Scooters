import { CATEGORIES, SHOP, SITE } from '@/src/config/site';
import { PRODUCTS_CATALOG } from '@/src/lib/catalog';

export async function GET() {
  const catalog = CATEGORIES.map(c => ({
    ...c,
    url: `https://${SITE.domain}/shop/${c.slug}/`,
    products: PRODUCTS_CATALOG.filter(p => 
      p.categorySlug === c.slug ||
      (c.slug === 'portable-folding' && p.categorySlug === 'portable-folding-scooters') ||
      (c.slug === 'mid-size-everyday' && p.categorySlug === 'mid-size-pavement-scooters') ||
      (c.slug === 'heavy-duty-all-terrain' && (p.categorySlug === 'heavy-duty-all-terrain' || p.categorySlug === 'heavy-duty-bariatric')) ||
      (c.slug === 'ramps-hoists' && p.categorySlug === 'ramps-hoists-loading') ||
      (c.slug === 'batteries-accessories' && p.categorySlug === 'batteries-chargers-accessories')
    ).map(p => ({
      id: p.id,
      sku: p.sku,
      slug: p.slug,
      name: p.name,
      brand: p.brand,
      price: p.price,
      currency: SITE.currency,
      url: `https://${SITE.domain}/shop/${c.slug}/${p.slug}/`
    }))
  }));

  return Response.json({
    catalog,
    currency: SITE.currency,
    minimumOrder: SHOP.minOrder,
    paymentMethods: SHOP.paymentMethods,
    shipping: {
      freeThreshold: SHOP.freeShippingThreshold,
      flatMetro: SHOP.flatMetroFreight
    }
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
