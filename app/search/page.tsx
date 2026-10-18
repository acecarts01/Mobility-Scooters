import React, { Suspense } from 'react';
import { SITE, PRODUCTS, POSTS } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Search | ${SITE.name}`,
  description: `Search for mobility scooters, folding scooters, and accessories at ${SITE.name}.`,
  robots: { index: false, follow: true }
};

function SearchContent() {
  // In a real app, this would use useSearchParams()
  // But for this static build, we'll just show a generic search result UI
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <Search size={32} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Search Results</h1>
        <p className="text-charcoal/60">Results for your mobility needs.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">Products</h2>
          <div className="space-y-4">
            {PRODUCTS.slice(0, 3).map(product => (
              <Link 
                key={product.slug} 
                href={`/shop/${product.category}/${product.slug}/`}
                className="block p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-charcoal">{product.name}</h3>
                    <p className="text-xs text-primary font-bold">${product.price.toLocaleString()}</p>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-gray-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">Articles & Guides</h2>
          <div className="space-y-4">
            {POSTS.map(post => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}/`}
                className="block p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-charcoal">{post.title}</h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Suspense fallback={<div className="py-20 text-center font-bold">Loading results...</div>}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
