'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';
import { REVIEWS, AGGREGATE_RATING } from '@/src/config/site';

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentReview = REVIEWS[index];

  return (
    <section className="py-20 bg-accent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex bg-[#00b67a] p-1 gap-0.5 rounded-sm">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} fill="white" color="white" />
              ))}
            </div>
            <span className="font-bold text-xl text-charcoal">Trustpilot</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Trusted by {AGGREGATE_RATING.reviewCount}+ Australians
          </h2>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1 font-semibold">
              Excellent {AGGREGATE_RATING.ratingValue} out of 5
            </span>
            <Link href="/reviews/" className="text-primary hover:underline font-bold">
              Read all {AGGREGATE_RATING.reviewCount} reviews
            </Link>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative">
                <Quote className="absolute top-6 left-6 text-primary/10" size={60} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`p-0.5 rounded-sm ${i < currentReview.rating ? 'bg-[#00b67a]' : 'bg-gray-200'}`}
                    >
                      <Star size={16} fill="white" color="white" />
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-4 italic">
                  &quot;{currentReview.title}&quot;
                </h3>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {currentReview.comment}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <span className="block font-bold text-charcoal">{currentReview.name}</span>
                    <span className="text-sm text-gray-500">{currentReview.location}</span>
                  </div>
                  {currentReview.verified && (
                    <div className="flex items-center gap-1.5 text-[#00b67a] text-sm font-bold bg-[#00b67a]/10 px-3 py-1 rounded-full">
                      <CheckCircle2 size={16} />
                      Verified Purchase
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute -left-4 md:-left-16 z-10 p-3 bg-white shadow-lg rounded-full text-charcoal hover:text-primary transition-colors focus:ring-2 focus:ring-primary"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="absolute -right-4 md:-right-16 z-10 p-3 bg-white shadow-lg rounded-full text-charcoal hover:text-primary transition-colors focus:ring-2 focus:ring-primary"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/reviews/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Read More Customer Stories
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
