"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ComparisonTable from '../../components/ComparisonTable';
import Testimonials from '../../components/Testimonials';
import CountdownTimer from '../../components/CountdownTimer';
import CheckoutPopup from '../../components/CheckoutPopup';
import { useLanguage } from '../../contexts/LanguageContext';

const PricingPage: React.FC = () => {
    const { t } = useLanguage();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ title: '', price: '', image: '' });
    const [screens, setScreens] = useState(1);

    // Get WhatsApp number from environment variable
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

    const openCheckout = (planTitle: string, planPrice: string, planImage: string) => {
        setSelectedPlan({ title: planTitle, price: planPrice, image: planImage });
        setIsPopupOpen(true);
    };

    return (
        <section className="py-20 px-6 bg-section-dark">
            <CheckoutPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                planTitle={selectedPlan.title}
                planPrice={selectedPlan.price}
                planImage={selectedPlan.image}
                whatsappNumber={WHATSAPP_NUMBER}
            />
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">{t('pricingTitle')}</h1>
                <p className="text-lg font-semibold mb-2">{t('countdownTitle')}</p>
                <CountdownTimer />




                <div className="container mx-auto max-w-5xl py-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('comparisonTitle')}</h2>
                    <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                    <ComparisonTable />
                </div>

                <div className="flex justify-center mt-12 mb-16 px-6">
                    <div className="bg-card-dark p-1 rounded-xl border border-gray-700 inline-flex">
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                onClick={() => setScreens(num)}
                                className={`px-4 sm:px-8 py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${screens === num
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {t(`screens${num}` as any)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month Plan" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t('plan1Title')}</h3><p className="text-gray-400 mb-6">{t('plan1Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(29.99 + (screens - 1) * 10).toFixed(2)}</span> ${(9.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan1Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(9.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH1.png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 glow-border relative flex flex-col scale-105">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-black font-bold text-sm px-4 py-1 rounded-full whitespace-nowrap">{t('bestValue')}</span>
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Months Plan" fill className="object-contain" />
                        </div>
                        <h3 className="2xl font-bold mb-2">{t('plan2Title')}</h3><p className="text-gray-400 mb-6">{t('plan2Desc')}</p><p className="text-5xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(239 + (screens - 1) * 10).toFixed(2)}</span> ${(59.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan2Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(59.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH12.png')} className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Months Plan" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t('plan3Title')}</h3><p className="text-gray-400 mb-6">{t('plan3Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(119 + (screens - 1) * 10).toFixed(2)}</span> ${(37.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan3Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(37.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH6.png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                </div>


                <p className="mt-8 text-violet-400 font-semibold">{t('pricingScarcity')}</p>
                <Testimonials />
            </div >
        </section >
    );
};

export default PricingPage;