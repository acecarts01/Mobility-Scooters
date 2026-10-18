import React from 'react';
import { SITE, POSTS } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Safety Guides & Mobility Blog | ${SITE.name}`,
  description: `Expert guides on Australian mobility scooter road rules, battery safety, and buying tips. Stay informed with Lifestyle Mobility Australia.`,
  alternates: { canonical: `https://${SITE.domain}/blog/` }
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-accent py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Safety Guides & <span className="text-primary">Insights</span></h1>
            <p className="text-xl text-charcoal/60 leading-relaxed">
              Expert advice to help you navigate Australian mobility regulations and maintain your equipment for long-term independence.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-charcoal rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
              <div className="lg:w-1/2 relative min-h-[300px]">
                <Image 
                  src={`https://picsum.photos/seed/safety-rules/800/600`} 
                  alt="Mobility Scooter Road Rules" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Must Read</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{POSTS[0].title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {POSTS[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${POSTS[0].slug}/`}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold w-fit flex items-center gap-2 hover:bg-primary/90 transition-all"
                >
                  Read Full Guide <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {POSTS.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}/`}
                  className="group"
                >
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden mb-6 shadow-md transition-shadow group-hover:shadow-xl">
                    <Image 
                      src={`https://picsum.photos/seed/${post.slug}/600/400`} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm">
                    Read More <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-accent rounded-3xl p-12 text-center max-w-4xl mx-auto border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Stay Informed on Mobility Safety</h2>
              <p className="text-charcoal/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                Receive the latest updates on Australian road rules and equipment maintenance tips directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-grow bg-white border border-gray-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
                <button type="submit" className="medical-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
