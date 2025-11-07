"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const LocalizedFinalCTA: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-6 text-center bg-gradient-to-t from-blue-900/50 to-[#050a19]">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6" dangerouslySetInnerHTML={{ __html: t('finalCtaTitle') }}></h2>
                <p className="text-gray-300 mb-8 text-lg">{t('finalCtaSubtitle')}</p>
                <Link href="/pricing" className="nav-link-cta bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-4 px-10 rounded-lg text-xl cta-button inline-block mb-8">{t('finalCTA')}</Link>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-400 text-black p-3 rounded-full">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p className="text-lg font-semibold">{t('guarantee')}</p>
                    </div>
                    <p className="text-sm text-gray-400">{t('guaranteeDetails')}</p>
                </div>
            </div>
        </section>
    );
};

export default LocalizedFinalCTA;
