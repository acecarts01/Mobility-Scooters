import React from 'react';
import { Star, CheckCircle2, User, MapPin, Calendar } from 'lucide-react';
import { SITE, REVIEWS, AGGREGATE_RATING } from '@/src/config/site';
import JsonLd from '@/src/components/JsonLd';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';

export const metadata = {
  title: `Customer Reviews | ${SITE.name}`,
  description: `Read what our ${AGGREGATE_RATING.reviewCount}+ happy customers have to say about ${SITE.name}. Australia's trusted mobility specialist.`,
  alternates: { canonical: `https://${SITE.domain}/reviews/` },
  openGraph: {
    title: `1,468+ Customer Reviews | ${SITE.name}`,
    description: `Real stories from real customers. Discover why Australians choose ${SITE.name} for their mobility needs.`,
  }
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd type="reviews" />
      <Nav />
      <main id="main">
        {/* Header Section */}
        <section className="bg-charcoal text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Stories & Reviews</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Don&apos;t just take our word for it. Join the {AGGREGATE_RATING.reviewCount}+ Australians who have regained their independence with our premium mobility solutions.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl mx-auto border border-white/20">
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-5xl font-bold">{AGGREGATE_RATING.ratingValue}</span>
                <div className="text-left">
                  <div className="flex text-accent mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={24} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-400">Excellent based on {AGGREGATE_RATING.reviewCount} reviews</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-[#00b67a] p-1 rounded-sm">
                  <Star size={16} fill="white" color="white" />
                </div>
                <span className="font-bold text-lg">Trustpilot</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews List */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-accent p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < review.rating ? "#00b67a" : "none"} 
                        color={i < review.rating ? "#00b67a" : "#cbd5e1"} 
                      />
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {review.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow italic">
                    &quot;{review.comment}&quot;
                  </p>

                  <div className="border-t border-gray-200 pt-6 mt-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <User size={20} />
                      </div>
                      <div>
                        <span className="block font-bold text-charcoal">{review.name}</span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} />
                          {review.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                        <Calendar size={10} />
                        {review.date}
                      </div>
                      {review.verified && (
                        <div className="flex items-center gap-1 text-[#00b67a] text-[10px] font-bold uppercase tracking-widest">
                          <CheckCircle2 size={12} />
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Simulation */}
            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-6">Showing 6 of {AGGREGATE_RATING.reviewCount} total reviews</p>
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95 opacity-50 cursor-not-allowed">
                Load More Reviews
              </button>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-20 bg-accent border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Star className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">{AGGREGATE_RATING.ratingValue}/5 Average Rating</h4>
                <p className="text-gray-600">Consistent high marks for product quality and customer service across thousands of orders.</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">100% Verified</h4>
                <p className="text-gray-600">Every review on this page comes from a genuine customer who has completed a purchase with us.</p>
              </div>
              <div>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <User className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">Real Australians</h4>
                <p className="text-gray-600">Local support and local stories from every state and territory in Australia.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
