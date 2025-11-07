"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const reviews = [1, 2, 3, 4, 5, 6];
    const waReviews = [1, 2, 3, 4, 5, 6];

    return (
        <section className="py-20 px-6 bg-section-dark">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('testimonialsTitle')}</h2>
            </div>
        
            <div className="marquee group mt-6">
              <div className="track">
                {[...reviews, ...reviews].map((rev, index) => (
                    <img key={index} src={`/images/reviews/rev${rev}.webp`} alt={`Trustpilot review ${rev}`} className="tp-card" />
                ))}
              </div>
            </div>
        
            <div className="flex justify-center mt-6">
              <img src="/images/reviews/Trust-Pilot-Review-badge-streamversetv.png" alt="Trustpilot badge" className="trust-badge" />
            </div>

            <div className="marquee group mt-12">
              <div className="track">
                {[...waReviews, ...waReviews].map((rev, index) => (
                    <img key={index} src={`/images/reviews/streamversetv-review-${rev}.jpg`} alt={`WhatsApp Review ${rev}`} className="wa-shot" />
                ))}
              </div>
            </div>
          </div>
        </section>
    );
};

export default Testimonials;
