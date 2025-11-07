"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LocalizedHowItWorks: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-6 bg-section-dark relative">
            <div className="container mx-auto text-center max-w-4xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('howItWorksTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0 bg-card-dark text-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-blue-500 mb-4">1</div>
                        <h3 className="text-xl font-semibold">{t('step1Title')}</h3>
                        <p className="text-gray-400">{t('step1Desc')}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0 bg-card-dark text-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-blue-500 mb-4">2</div>
                        <h3 className="text-xl font-semibold">{t('step2Title')}</h3>
                        <p className="text-gray-400">{t('step2Desc')}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0 bg-card-dark text-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-blue-500 mb-4">3</div>
                        <h3 className="text-xl font-semibold">{t('step3Title')}</h3>
                        <p className="text-gray-400">{t('step3Desc')}</p>
                    </div>
                </div>
                <p className="mt-12 text-lg text-cyan-400 font-semibold">{t('howItWorksHook')}</p>
            </div>
            <div className="relative container mx-auto max-w-2xl mt-12 z-20"> 
                <div className="relative aspect-video"> 
                    <img src="/images/abonnement-iptv-multi-devices.webp" alt="StreamVerse interface on a television" className="absolute top-0 left-0 w-full h-full object-contain" />
                </div>
            </div>
        </section>
    );
};

export default LocalizedHowItWorks;
