'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CheckoutPopup from './CheckoutPopup';

export default function ReferralTopBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const offers = [
    {
      id: 'referral',
      content: (
        <>
          <span className="md:hidden font-bold">Refer & Get 30% OFF!</span>
          <span className="hidden md:inline">Refer & Earn! </span>
          <span className="hidden md:inline font-bold">30% OFF for Everyone!</span>
          <span className="hidden lg:inline"> - Both you and your friend get the discount</span>
        </>
      ),
      whatsappMessage: 'Hi! I want to refer someone for the 30% OFF discount program.',
      ctaText: { desktop: 'Contact Us', mobile: 'Chat' },
      action: 'whatsapp'
    },
    {
      id: 'promo',
      content: (
        <>
          <span className="md:hidden font-bold text-yellow-300">12 + 3 Months FREE!</span>
          <span className="hidden md:inline font-bold text-yellow-300">LIMITED OFFER: </span>
          <span className="hidden md:inline font-bold">Get 12 Months + 3 Months FREE! </span>
          <span className="hidden lg:inline">- Premium 4K IPTV. Instant Setup.</span>
        </>
      ),
      whatsappMessage: 'Hi! I am interested in the 12 Months + 3 Months FREE special offer.',
      ctaText: { desktop: 'Claim Offer', mobile: 'Claim' },
      action: 'popup'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers.length]);

  const handleActionClick = () => {
    const offer = offers[currentOfferIndex];
    if (offer.action === 'whatsapp') {
      const message = encodeURIComponent(offer.whatsappMessage);
      window.open(`https://wa.me/447537172381?text=${message}`, '_blank');
    } else if (offer.action === 'popup') {
      setIsPopupOpen(true);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 text-white py-2 px-4 relative transition-all duration-500 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-1 justify-center md:justify-start overflow-hidden h-6 relative">
            <svg className="w-5 h-5 flex-shrink-0 animate-pulse text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className="relative flex-1 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentOfferIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center text-sm md:text-base font-semibold whitespace-nowrap"
                >
                  {offers[currentOfferIndex].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2 z-10">
            <button
              onClick={handleActionClick}
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-1 px-3 md:px-4 rounded-lg transition-all text-sm flex items-center gap-1 whitespace-nowrap backdrop-blur-sm"
            >
              {offers[currentOfferIndex].action === 'whatsapp' && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              )}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentOfferIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="hidden md:inline"
                >
                  {offers[currentOfferIndex].ctaText.desktop}
                </motion.span>
                <motion.span
                  key={`mobile-${currentOfferIndex}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="md:hidden"
                >
                  {offers[currentOfferIndex].ctaText.mobile}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CheckoutPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        planTitle="12 Months + 3 Months FREE - 1 Screen"
        planPrice="$59.99"
        planImage="/images/boxes/Box_IPTV_MONTH12.png"
        whatsappNumber="447537172381"
        customMessage="Hi! I am interested in the limited time offer: 12 Months + 3 Months FREE for $59.99."
      />
    </>
  );
}
