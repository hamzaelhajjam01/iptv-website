"use client";

import React from 'react';
import Link from 'next/link';
import HeroVideo from './HeroVideo';
import { useLanguage } from '../contexts/LanguageContext';

const LocalizedHero: React.FC<{ src?: string }>= ({ src = '/videos/Lionel Messi - Top 30 Goals.mp4' }) => {
    const { t } = useLanguage();
    return (
        <section className="relative text-white text-center overflow-hidden">
            <HeroVideo src={src} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050a19] z-10"></div>
            <div className="relative z-20 container mx-auto max-w-4xl px-6 py-20 md:py-32">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{t('heroTitle')}</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t('heroSubtitle')}</p>
                <p className="text-xl md:text-2xl font-semibold text-cyan-400 mb-10">{t('heroSolve')}</p>
                <Link href="/pricing" className="nav-link-cta bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-4 px-10 rounded-lg text-xl cta-button inline-block">
                    {t('heroCTA')}
                </Link>
                <p className="mt-4 text-sm text-cyan-300 font-semibold">{t('heroUrgency')}</p>
            </div>
        </section>
    );
};

export default LocalizedHero;
