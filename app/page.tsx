"use client";

import React from 'react';
import Link from 'next/link';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import LocalizedHero from '../components/LocalizedHero';
import LocalizedHowItWorks from '../components/LocalizedHowItWorks';
import LocalizedFinalCTA from '../components/LocalizedFinalCTA';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <>
            <LocalizedHero src="/videos/Lionel Messi - Top 30 Goals.mp4" />

            <div className="bg-black/30 py-4">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                            <span className="text-white font-bold ml-2">4.9/5</span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base">{/* social proof remains server-rendered initial language */} StreamverseTV — 50,000+ channels</p>
                    </div>
                </div>
            </div>
            <LocalizedHowItWorks />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="w-full lg:w-5/6 mx-auto">
                            <img src="/images/compatible-device-iptv-vod-streamverse.jpg" alt="Woman enjoying StreamVerse on a tablet" className="rounded-lg shadow-2xl w-full h-auto max-h-96 object-cover" />
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyChooseTitle')}</h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">{t('whyChooseSubtitle')}</p>
                            <div className="space-y-6">
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 p-3 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                                    <div><h3 className="text-xl font-semibold">{t('why1Title')}</h3><p className="text-gray-400">{t('why1Desc')}</p></div>
                                </div>
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 p-3 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                                    <div><h3 className="text-xl font-semibold">{t('why2Title')}</h3><p className="text-gray-400">{t('why2Desc')}</p></div>
                                </div>
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 p-3 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
                                    <div><h3 className="text-xl font-semibold">{t('why3Title')}</h3><p className="text-gray-400">{t('why3Desc')}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-16 px-6">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('comparisonTitle')}</h2>
                    <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                    <ComparisonTable />
                </div>
            </div>

            <Testimonials />

            <LocalizedFinalCTA />
        </>
    );
};

export default HomePage;