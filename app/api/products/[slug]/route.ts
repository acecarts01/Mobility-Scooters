import { PRODUCTS_CATALOG } from '@/src/lib/catalog';
import { SITE } from '@/src/config/site';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = PRODUCTS_CATALOG.find(p => p.slug === slug || p.id === slug || p.sku.toLowerCase() === slug.toLowerCase());

  if (!product) {
    return Response.json(
      { error: "Product not found", slug },
      { 
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }

  return Response.json({
    ...product,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${product.categorySlug}/${product.slug}/`
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
