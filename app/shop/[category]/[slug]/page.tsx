import { getProductBySlug, PRODUCTS_CATALOG } from '@/src/lib/catalog';
import { SITE } from '@/src/config/site';
import ProductClient from '@/src/components/ProductClient';
import JsonLd from '@/src/components/JsonLd';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ category: string, slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return {};

  return {
    title: `${product.name} | Lifestyle Mobility Scooters`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://${SITE.domain}/shop/${product.categorySlug}/${product.slug}/`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: 'article',
      url: `https://${SITE.domain}/shop/${product.categorySlug}/${product.slug}/`,
      images: [
        {
          url: `https://${SITE.domain}/images/products/${product.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.shortDescription,
      images: [`https://${SITE.domain}/images/products/${product.slug}-og.jpg`],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  // Find up to 4 related products from the same category, prioritizing same subcategory
  const relatedProducts = PRODUCTS_CATALOG
    .filter(p => p.id !== product.id && (
      p.categorySlug === product.categorySlug ||
      p.category === product.category ||
      (product.categorySlug === 'portable-folding-scooters' && p.categorySlug === 'portable-folding') ||
      (product.categorySlug === 'portable-folding' && p.categorySlug === 'portable-folding-scooters') ||
      (product.categorySlug === 'mid-size-pavement-scooters' && p.categorySlug === 'mid-size-everyday') ||
      (product.categorySlug === 'mid-size-everyday' && p.categorySlug === 'mid-size-pavement-scooters') ||
      (product.categorySlug === 'ramps-hoists-loading' && p.categorySlug === 'ramps-hoists') ||
      (product.categorySlug === 'ramps-hoists' && p.categorySlug === 'ramps-hoists-loading') ||
      (product.categorySlug === 'batteries-chargers-accessories' && p.categorySlug === 'batteries-accessories') ||
      (product.categorySlug === 'batteries-accessories' && p.categorySlug === 'batteries-chargers-accessories')
    ))
    .sort((a, b) => {
      if (a.subcategorySlug && product.subcategorySlug && a.subcategorySlug === product.subcategorySlug && b.subcategorySlug !== product.subcategorySlug) return -1;
      if (b.subcategorySlug && product.subcategorySlug && b.subcategorySlug === product.subcategorySlug && a.subcategorySlug !== product.subcategorySlug) return 1;
      return 0;
    })
    .slice(0, 4);

  return (
    <>
      <JsonLd type="Product" data={product} />
      <ProductClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  PRODUCTS_CATALOG.forEach(p => {
    params.push({ category: p.categorySlug, slug: p.slug });
    if (p.categorySlug === 'portable-folding-scooters') {
      params.push({ category: 'portable-folding', slug: p.slug });
    }
    if (p.categorySlug === 'mid-size-pavement-scooters') {
      params.push({ category: 'mid-size-everyday', slug: p.slug });
    }
    if (p.categorySlug === 'ramps-hoists-loading') {
      params.push({ category: 'ramps-hoists', slug: p.slug });
    }
    if (p.categorySlug === 'batteries-chargers-accessories') {
      params.push({ category: 'batteries-accessories', slug: p.slug });
    }
  });
  return params;
}
