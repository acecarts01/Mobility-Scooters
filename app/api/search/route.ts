import { PRODUCTS_CATALOG } from '@/src/lib/catalog';
import { POSTS, SITE } from '@/src/config/site';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category')?.toLowerCase() || '';
  const maxPrice = parseFloat(searchParams.get('max_price') || '0');

  let results = PRODUCTS_CATALOG;

  if (category) {
    results = results.filter(p => 
      p.categorySlug === category ||
      p.category?.toLowerCase() === category ||
      (category === 'portable-folding' && p.categorySlug === 'portable-folding-scooters') ||
      (category === 'mid-size-everyday' && p.categorySlug === 'mid-size-pavement-scooters') ||
      (category === 'heavy-duty-all-terrain' && (p.categorySlug === 'heavy-duty-all-terrain' || p.categorySlug === 'heavy-duty-bariatric')) ||
      (category === 'ramps-hoists' && p.categorySlug === 'ramps-hoists-loading') ||
      (category === 'batteries-accessories' && p.categorySlug === 'batteries-chargers-accessories')
    );
  }

  if (maxPrice > 0) {
    results = results.filter(p => p.price <= maxPrice);
  }

  if (q) {
    results = results.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      (p.specs && Object.values(p.specs).some(val => String(val).toLowerCase().includes(q)))
    );
  }

  const matchingPosts = q ? POSTS.filter(post => 
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.category.toLowerCase().includes(q)
  ).map(post => ({
    type: 'post' as const,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.category,
    url: `https://${SITE.domain}/blog/${post.slug}/`
  })) : [];

  const formattedProducts = results.map(p => ({
    type: 'product' as const,
    id: p.id,
    sku: p.sku,
    name: p.name,
    brand: p.brand,
    slug: p.slug,
    price: p.price,
    currency: SITE.currency,
    categorySlug: p.categorySlug,
    categoryName: p.category,
    shortDescription: p.shortDescription,
    url: `https://${SITE.domain}/shop/${p.categorySlug}/${p.slug}/`
  }));

  return Response.json({
    query: q,
    count: formattedProducts.length + matchingPosts.length,
    products: formattedProducts,
    posts: matchingPosts
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=120'
    }
  });
}
