'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, X } from 'lucide-react';
import { REVIEWS } from '@/src/config/site';

export default function ReviewPopup() {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [shownIndices, setShownIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const showNextReview = useCallback(() => {
    if (!REVIEWS || REVIEWS.length === 0) return;

    setShownIndices(prevShown => {
      // Filter out indices already shown in this cycle
      let availableIndices = REVIEWS.map((_, i) => i).filter(i => !prevShown.includes(i));
      
      // If all reviews have been shown, reset the tracker
      if (availableIndices.length === 0) {
        availableIndices = REVIEWS.map((_, i) => i);
        const nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        setCurrentIndex(nextIndex);
        return [nextIndex];
      } else {
        const nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        setCurrentIndex(nextIndex);
        return [...prevShown, nextIndex];
      }
    });

    setIsVisible(true);

    // Auto-hide after 8 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => clearTimeout(hideTimeout);
  }, []);

  useEffect(() => {
    // Show the first review after 10 seconds of initial load
    const initialTimeout = setTimeout(() => {
      showNextReview();
    }, 10000);

    // Set up the recurring interval for 55 seconds
    const interval = setInterval(() => {
      showNextReview();
    }, 55000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showNextReview]);

  if (currentIndex === -1 || !REVIEWS[currentIndex]) return null;

  const review = REVIEWS[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-6 left-6 z-[110] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-4 max-w-[320px] flex gap-4 items-start"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-charcoal transition-colors p-1"
            aria-label="Close review popup"
          >
            <X size={14} />
          </button>

          {/* User Initial Avatar */}
          <div className="flex-shrink-0 w-10 h-10 medical-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
            {review.name.charAt(0)}
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={12} 
                  fill={i < review.rating ? "#22c55e" : "none"} 
                  className={i < review.rating ? "text-green-500" : "text-gray-300"} 
                />
              ))}
            </div>
            
            <p className="text-xs font-bold text-charcoal leading-tight mb-1">
              {review.name} from {review.location}
            </p>
            
            <p className="text-[11px] text-gray-600 line-clamp-2 italic leading-relaxed mb-2">
              &quot;{review.comment}&quot;
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[9px] text-green-600 font-bold uppercase tracking-wider">
                <CheckCircle2 size={10} />
                <span>Verified Purchase</span>
              </div>
              <span className="text-[9px] text-gray-400">Recently</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
