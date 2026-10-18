import { CATEGORIES } from '@/src/config/site';
import { PRODUCTS_CATALOG } from '@/src/lib/catalog';
import CategoryClient from '@/src/components/CategoryClient';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';

const ALIAS_TO_CONFIG_SLUG: Record<string, string> = {
  'portable-folding-scooters': 'portable-folding',
  'portable-folding': 'portable-folding',
  'mid-size-pavement-scooters': 'mid-size-everyday',
  'mid-size-everyday': 'mid-size-everyday',
  'heavy-duty-all-terrain': 'heavy-duty-all-terrain',
  'ramps-hoists': 'ramps-hoists',
  'batteries-accessories': 'batteries-accessories',
};

function getCategoryInfo(categorySlug: string) {
  const normalizedSlug = ALIAS_TO_CONFIG_SLUG[categorySlug] || categorySlug;
  const match = CATEGORIES.find(c => c.slug === normalizedSlug || c.slug === categorySlug);

  if (match) return match;

  const title = categorySlug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    slug: categorySlug,
    name: title,
    description: `Explore our range of clinical ${title}. 100% ARR 204 compliant for Australian footpath travel and GST-free.`,
    image: 'portable-cat.webp'
  };
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryInfo(categorySlug);

  return {
    title: `${category.name} | Lifestyle Mobility Scooters Australia`,
    description: category.description,
    alternates: {
      canonical: `https://${SITE.domain}/shop/${categorySlug}/`,
    },
    openGraph: {
      title: `${category.name} | ${SITE.name}`,
      description: category.description,
      url: `https://${SITE.domain}/shop/${categorySlug}/`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | ${SITE.name}`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategoryInfo(categorySlug);
  
  const filteredProducts = PRODUCTS_CATALOG.filter(p => 
    p.categorySlug === categorySlug || 
    p.categorySlug === category.slug ||
    (category.slug === 'portable-folding' && p.categorySlug === 'portable-folding-scooters') ||
    (category.slug === 'mid-size-everyday' && p.categorySlug === 'mid-size-pavement-scooters') ||
    (category.slug === 'ramps-hoists' && p.categorySlug === 'ramps-hoists-loading') ||
    (category.slug === 'batteries-accessories' && p.categorySlug === 'batteries-chargers-accessories') ||
    p.category === category.name
  );

  return <CategoryClient category={category} products={filteredProducts} />;
}

export async function generateStaticParams() {
  const categorySlugs = new Set<string>();
  CATEGORIES.forEach(c => categorySlugs.add(c.slug));
  PRODUCTS_CATALOG.forEach(p => {
    categorySlugs.add(p.categorySlug);
  });
  categorySlugs.add('portable-folding-scooters');
  categorySlugs.add('mid-size-pavement-scooters');
  categorySlugs.add('ramps-hoists-loading');
  categorySlugs.add('batteries-chargers-accessories');
  return Array.from(categorySlugs).map(category => ({ category }));
}
