"use client";

import React from 'react';
import Link from 'next/link';
import HeroVideo from './HeroVideo';
import { useLanguage } from '../contexts/LanguageContext';

const LocalizedHero: React.FC<{ src?: string }> = ({ src = '/videos/Lionel Messi - Top 30 Goals.mp4' }) => {
    const { t } = useLanguage();
    return (
        <section className="relative text-white text-center overflow-hidden">
            <HeroVideo src={src} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050a19] z-10"></div>
            <div className="relative z-20 container mx-auto max-w-4xl px-6 py-20 md:py-32">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{t('heroTitle')}</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t('heroSubtitle')}</p>
                <p className="text-xl md:text-2xl font-semibold text-cyan-400 mb-10">{t('heroSolve')}</p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
                    <Link href="/pricing" className="nav-link-cta bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-4 px-10 rounded-lg text-xl cta-button inline-block w-full md:w-auto">
                        {t('heroCTA')}
                    </Link>
                    <a
                        href="https://wa.me/447537172381?text=Hi!%20I'm%20interested%20in%20the%2024-Hour%20Premium%20Trial%20for%20%241.99.%0A%0A%F0%9F%93%A6%20*Offer%3A*%2024-Hour%20Premium%20Trial%20Access%0A%F0%9F%92%B0%20*Price%3A*%20%241.99%0A%0APlease%20send%20me%20the%20payment%20details%20and%20setup%20instructions%20to%20get%20started%20immediately!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-extrabold py-4 px-10 rounded-lg text-xl cta-button inline-block w-full md:w-auto"
                    >
                        {t('trialButton')}
                    </a>
                </div>

                {/* 30-Day Money Back Guarantee Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-5 py-2.5 backdrop-blur-sm w-fit mx-auto">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-green-300 font-bold text-base">{t('moneyBackGuarantee')}</span>
                </div>

                <p className="mt-4 text-sm text-cyan-300 font-semibold">{t('heroUrgency')}</p>
            </div>
        </section>
    );
};

export default LocalizedHero;
