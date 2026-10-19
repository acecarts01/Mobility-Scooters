'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { formatAud, GST_FREE_LABEL } from '@/lib/utils';
import ProductThumbnail from '@/src/components/shop/ProductThumbnail';

export default function CategoryClient({ category, products }: { category: any, products: any[] }) {
  return (
    <div className="min-h-screen bg-accent/30 py-12">
      <div className="container mx-auto px-4">
        <Link href="/shop/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Back to All Products
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-charcoal/60">{category.description}</p>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <Image src={`https://picsum.photos/seed/${category.slug}/400/400`} alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.slug} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group"
            >
              <Link href={`/shop/${product.categorySlug || product.category}/${product.slug}/`}>
                <div className="product-frame aspect-[4/3] mb-4 relative overflow-hidden bg-accent/20 rounded-2xl flex items-center justify-center">
                    {product.images?.[0] ? (
                      <>
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          <span className="bg-primary text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            GST-Free
                          </span>
                        </div>
                      </>
                    ) : (
                      <ProductThumbnail
                        alt={product.name}
                        sku={product.sku}
                        brand={product.brand}
                        categorySlug={product.categorySlug || product.category}
                      />
                    )}
                </div>
                <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors line-clamp-2 h-12">{product.name}</h3>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                  <span className="font-bold text-lg text-primary">{formatAud(product.price)} <span className="text-[10px] font-semibold text-charcoal/50">{GST_FREE_LABEL}</span></span>
                  <div className="bg-accent text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
