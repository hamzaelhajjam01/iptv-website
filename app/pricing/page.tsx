"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ComparisonTable from '../../components/ComparisonTable';
import Testimonials from '../../components/Testimonials';
import CountdownTimer from '../../components/CountdownTimer';
import CheckoutPopup from '../../components/CheckoutPopup';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';

// Simple FAQ Component for Pricing Page
const PricingFaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item bg-card-dark rounded-lg mb-4 border border-gray-800 transition-colors ${isOpen ? 'active bg-gray-900' : ''}`}>
            <div
                className="faq-question flex justify-between items-center p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className={`faq-answer px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    );
};

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

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 mb-16">
                    {/* 1 Month Plan */}
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month Plan" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t('plan1Title')}</h3><p className="text-gray-400 mb-6">{t('plan1Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(29.99 + (screens - 1) * 10).toFixed(2)}</span> ${(9.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan1Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(9.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH1.png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    {/* 12 Month Plan (Best Value) */}
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 glow-border relative flex flex-col scale-105 z-10">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-black font-bold text-sm px-4 py-1 rounded-full whitespace-nowrap">{t('bestValue')}</span>
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Months Plan" fill className="object-contain" />
                        </div>
                        <h3 className="2xl font-bold mb-2">{t('plan2Title')}</h3><p className="text-gray-400 mb-6">{t('plan2Desc')}</p><p className="text-5xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(239 + (screens - 1) * 10).toFixed(2)}</span> ${(59.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan2Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(59.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH12.png')} className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    {/* 6 Month Plan */}
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Months Plan" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t('plan3Title')}</h3><p className="text-gray-400 mb-6">{t('plan3Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(119 + (screens - 1) * 10).toFixed(2)}</span> ${(37.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan3Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(37.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH6.png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-16 text-left">
                    <h2 className="text-2xl font-bold mb-6 text-center">{t('pricingFaqTitle')}</h2>
                    <PricingFaqItem question={t('pricingFaq1Q')} answer={t('pricingFaq1A')} />
                    <PricingFaqItem question={t('pricingFaq2Q')} answer={t('pricingFaq2A')} />
                    <PricingFaqItem question={t('pricingFaq3Q')} answer={t('pricingFaq3A')} />
                </div>

                <p className="mt-8 text-violet-400 font-semibold mb-8">{t('pricingScarcity')}</p>
                <Testimonials />
            </div >
        </section >
    );
};

export default PricingPage;