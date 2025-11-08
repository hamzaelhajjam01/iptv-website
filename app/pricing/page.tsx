"use client";

import React, { useState } from 'react';
import ComparisonTable from '../../components/ComparisonTable';
import Testimonials from '../../components/Testimonials';
import CountdownTimer from '../../components/CountdownTimer';
import CheckoutPopup from '../../components/CheckoutPopup';
import { useLanguage } from '../../contexts/LanguageContext';

const PricingPage: React.FC = () => {
    const { t } = useLanguage();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ title: '', price: '' });

    // Get WhatsApp number from environment variable
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

    const openCheckout = (planTitle: string, planPrice: string) => {
        setSelectedPlan({ title: planTitle, price: planPrice });
        setIsPopupOpen(true);
    };

    return (
        <section className="py-20 px-6 bg-section-dark">
            <CheckoutPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                planTitle={selectedPlan.title}
                planPrice={selectedPlan.price}
                whatsappNumber={WHATSAPP_NUMBER}
            />
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">{t('pricingTitle')}</h1>
                <p className="text-lg font-semibold mb-2">{t('countdownTitle')}</p>
                <CountdownTimer />
            
                <div className="py-16 px-6">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('comparisonTitle')}</h2>
                        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                        <ComparisonTable />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-4">
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">{t('plan1Title')}</h3><p className="text-gray-400 mb-6">{t('plan1Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">$29.99</span> $9.99</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature1Title')}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature2Title')}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature3Title')}</li>
                        </ul><button onClick={() => openCheckout(t('plan1Title'), '$9.99')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 glow-border relative flex flex-col scale-105">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-black font-bold text-sm px-4 py-1 rounded-full">{t('bestValue')}</span>
                        <h3 className="text-2xl font-bold mb-2">{t('plan2Title')}</h3><p className="text-gray-400 mb-6">{t('plan2Desc')}</p><p className="text-5xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">$239</span> $59.99</p>
                         <ul className="text-left space-y-2 mb-8 flex-grow">
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature1Title')}</li>
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature2Title')}</li>
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature3Title')}</li>
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature4Title')}</li>
                         </ul><button onClick={() => openCheckout(t('plan2Title'), '$59.99')} className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">{t('plan3Title')}</h3><p className="text-gray-400 mb-6">{t('plan3Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">$119</span> $37.99</p>
                         <ul className="text-left space-y-2 mb-8 flex-grow">
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature1Title')}</li>
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature2Title')}</li>
                             <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t('feature3Title')}</li>
                         </ul><button onClick={() => openCheckout(t('plan3Title'), '$37.99')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                </div>
                <p className="mt-8 text-violet-400 font-semibold">{t('pricingScarcity')}</p>
                <Testimonials />
            </div>
        </section>
    );
};

export default PricingPage;