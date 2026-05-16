"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type CheckoutPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  planPrice: string;
  planImage: string;
  whatsappNumber: string; // Your WhatsApp business number (international format without +)
  customMessage?: string; // Optional custom message to override default
};

const getPaymentUrl = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('12 month')) return 'https://checkout.streamversetv.com/checkout/1778956396423';
  if (lowerTitle.includes('6 month')) return 'https://checkout.streamversetv.com/checkout/1778956376404';
  if (lowerTitle.includes('3 month')) return 'https://checkout.streamversetv.com/checkout/1778956354296';
  if (lowerTitle.includes('1 month')) return 'https://checkout.streamversetv.com/checkout/1778956324068';
  if (lowerTitle.includes('test') || lowerTitle.includes('trial')) return 'https://checkout.streamversetv.com/checkout/1778956286150';
  // Fallback
  return 'https://checkout.streamversetv.com/checkout/1778956324068';
};

const CheckoutPopup: React.FC<CheckoutPopupProps> = ({
  isOpen,
  onClose,
  planTitle,
  planPrice,
  planImage,
  whatsappNumber,
  customMessage,
}) => {
  const [deviceType, setDeviceType] = useState('');
  const [adultContent, setAdultContent] = useState('No');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1); // Reset to step 1 when opened
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save choice data to database if needed
    const leadData = {
      deviceType,
      adultContent,
      planTitle,
      planPrice,
      timestamp: new Date().toISOString(),
    };

    fetch('/api/save-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    }).catch(err => console.error('Failed to save data:', err));

    const paymentUrl = getPaymentUrl(planTitle);

    // Redirect to payment in a new tab
    window.open(paymentUrl, '_blank');

    // Move to step 2
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 500);
  };

  const handleWhatsApp = () => {
    const message = customMessage || `Hello! I have completed my payment for StreamVerse.

📦 *Plan:* ${planTitle}
📱 *Device:* ${deviceType}
🔞 *Adult Content:* ${adultContent}

Here is my payment screenshot:`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-heading"
            className="bg-card-dark rounded-2xl shadow-xl w-full max-w-sm md:max-w-md p-6 relative border border-gray-700 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-2 ml-auto float-right flex items-center justify-center w-9 h-9 rounded-full bg-[#0b162b] text-gray-400 hover:text-white hover:bg-[#132545] transition-colors"
              aria-label="Close checkout popup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {step === 1 ? (
              <>
                {/* Header */}
                <div className="mb-5 pr-10" id="checkout-heading">
                  <h2 className="text-xl font-bold text-white mb-1">Complete Your Order</h2>
                  <p className="text-gray-400 text-xs">Almost there! Just a few details before payment.</p>
                </div>

                {/* Plan Summary */}
                <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-3 mb-5 text-center">
                  {planImage && (
                    <div className="relative w-full h-32 mb-2 mx-auto">
                      <Image src={planImage} alt={planTitle} fill className="object-contain" priority />
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mb-0">Selected Plan</p>
                  <p className="text-lg font-bold text-white">{planTitle}</p>
                  <p className="text-xl font-extrabold text-blue-400 mt-1">{planPrice}</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="deviceType" className="block text-xs font-semibold text-gray-300 mb-1">
                      Device Type *
                    </label>
                    <input
                      id="deviceType"
                      type="text"
                      required
                      value={deviceType}
                      onChange={(e) => setDeviceType(e.target.value)}
                      placeholder="e.g. Firestick, Smart TV, Android Box, Apple TV"
                      className="w-full bg-[#050a19] text-white placeholder-gray-500 rounded-lg px-3 py-2.5 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Do you need Adult Content? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                        <input
                          type="radio"
                          name="adultContent"
                          value="Yes"
                          checked={adultContent === 'Yes'}
                          onChange={(e) => setAdultContent(e.target.value)}
                          className="text-blue-600 focus:ring-blue-600 bg-[#050a19] border-gray-700"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                        <input
                          type="radio"
                          name="adultContent"
                          value="No"
                          checked={adultContent === 'No'}
                          onChange={(e) => setAdultContent(e.target.value)}
                          className="text-blue-600 focus:ring-blue-600 bg-[#050a19] border-gray-700"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  {/* Disclaimers */}
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3 mt-4">
                    <p className="text-xs text-blue-300 mb-2 flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Our account comes with a <strong>Premium VPN</strong> included at no extra cost.</span>
                    </p>
                    <p className="text-xs text-yellow-300 flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>IMPORTANT:</strong> After your payment is complete, please contact us on WhatsApp with your order details to receive your login credentials.</span>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-3 px-5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Opening Payment...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span>Proceed to Payment</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Footer Note */}
                <p className="text-[10px] text-gray-500 text-center mt-3">
                  🔒 Your payment is processed securely via our encrypted checkout.
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Payment Tab Opened!</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Please complete your payment securely in the new tab. Once you have paid, <strong>take a screenshot of your receipt</strong> and send it to us on WhatsApp to receive your login credentials.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-5 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Send Screenshot on WhatsApp
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full text-xs text-gray-400 hover:text-white underline"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutPopup;
