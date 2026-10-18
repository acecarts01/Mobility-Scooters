import React from 'react';
import { SITE, POSTS } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import Image from 'next/image';
import { Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://${SITE.domain}/blog/${post.slug}/`,
      images: [
        {
          url: `https://${SITE.domain}/images/blog/${post.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://${SITE.domain}/images/blog/${post.slug}-og.jpg`],
    },
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main id="main">
        <article className="bg-white">
          {/* Article Header */}
          <header className="py-20 bg-accent relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
              <Link href="/blog/" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-8 hover:underline">
                <ChevronLeft size={16} /> Back to Guides
              </Link>
              <div className="flex items-center gap-4 text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-6">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-8 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-charcoal/70 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container mx-auto px-4 max-w-5xl -mt-12 mb-16 relative z-20">
             <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
               <Image 
                src={`https://picsum.photos/seed/${post.slug}/1200/800`} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
               />
             </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 max-w-4xl pb-24">
            <div className="prose prose-lg prose-primary max-w-none text-charcoal/80 leading-relaxed">
              <p className="text-xl font-medium text-charcoal leading-relaxed mb-8">
                Navigating the world of mobility aids in Australia involves more than just picking a machine; it requires a clear understanding of the regulatory landscape and safety protocols that govern their use.
              </p>
              
              <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Pedestrian Classification & ARR Rule 204</h2>
              <p>
                In Australia, mobility scooters are generally classified as pedestrian devices rather than motor vehicles. This is a critical distinction that allows for operation without a driver&apos;s licence or vehicle registration in most states. However, this classification is strictly contingent on speed capability.
              </p>
              <p>
                Under Australian Road Rule (ARR) 204, a motorized mobility device must have a maximum speed capability not exceeding 10 km/h on level ground to maintain its pedestrian status. Any machine capable of exceeding this limit is legally classified as a motor vehicle, requiring full registration and licensing.
              </p>

              <blockquote className="border-l-4 border-primary pl-8 my-10 italic text-xl text-charcoal/60 bg-accent p-8 rounded-r-2xl">
                &quot;Safety isn&apos;t just about the machine; it&apos;s about how that machine integrates with the pedestrian environment.&quot;
              </blockquote>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Where Can You Legally Ride?</h2>
              <p>
                As a pedestrian, you have the right to use footpaths, nature strips, and shopping centres. When a footpath is not available or is unusable, you may travel on the road, but you must keep as far to the left as possible and face oncoming traffic if safe to do so.
              </p>
              
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 my-12">
                <h3 className="text-xl font-bold text-primary mb-4">Key Safety Checks for Daily Use:</h3>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 medical-gradient rounded-full flex items-center justify-center text-white shrink-0 mt-1 font-bold text-xs">1</div>
                    <p><strong>Visibility:</strong> Ensure your reflective strips are clean and functional, especially at dusk.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 medical-gradient rounded-full flex items-center justify-center text-white shrink-0 mt-1 font-bold text-xs">2</div>
                    <p><strong>Braking:</strong> Test your electromagnetic brakes on a flat surface before starting your journey.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 medical-gradient rounded-full flex items-center justify-center text-white shrink-0 mt-1 font-bold text-xs">3</div>
                    <p><strong>Battery:</strong> Always check your charge levels; never rely on the last 10% for return trips.</p>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Conclusion</h2>
              <p>
                Maintaining your independence through mobility solutions is a rewarding experience when done safely. By adhering to the 10 km/h speed limit and following pedestrian rules, you ensure your safety and the safety of the community around you.
              </p>
            </div>

            {/* Post Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Share this guide:</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-charcoal/60">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-charcoal/60">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-charcoal/60">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-charcoal/60 italic">Updated: {post.date}</span>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
