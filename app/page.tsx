"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import LocalizedHero from '../components/LocalizedHero';
import LocalizedHowItWorks from '../components/LocalizedHowItWorks';
import LocalizedFinalCTA from '../components/LocalizedFinalCTA';
import FaqSchema from '../components/FaqSchema';
import SEOContentSection from '../components/SEOContentSection';
import VisibleFAQ from '../components/VisibleFAQ';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <>
            <FaqSchema />
            <LocalizedHero src="/videos/Lionel Messi - Top 30 Goals.mp4" />

            <div className="bg-black/30 py-4 border-b border-gray-800/50">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                            <span className="text-white font-bold ml-2">4.9/5</span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base font-medium">StreamVerse™ — The Best IPTV Subscription of 2026 (50,000+ Channels)</p>
                    </div>
                </div>
            </div>

            <LocalizedHowItWorks />

            <section className="pt-32 pb-20 px-6 bg-section-dark">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="w-full lg:w-5/6 mx-auto">
                            <div className="relative aspect-video max-h-96 group overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                                <Image 
                                    src="/images/compatible-device-iptv-vod-streamverse.jpg" 
                                    alt="Best IPTV Subscription 2026 Compatible Devices" 
                                    fill
                                    className="rounded-lg object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">{t('whyChooseTitle')}</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">{t('whyChooseSubtitle')}</p>
                            <div className="grid gap-8">
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-5 group">
                                    <div className="flex-shrink-0 bg-blue-500/10 text-blue-500 p-4 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500 transition-colors duration-300 group-hover:text-white">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <div><h3 className="text-2xl font-bold mb-2 text-white">{t('why1Title')}</h3><p className="text-lg text-gray-400">{t('why1Desc')}</p></div>
                                </div>
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-5 group">
                                    <div className="flex-shrink-0 bg-blue-500/10 text-blue-500 p-4 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500 transition-colors duration-300 group-hover:text-white">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div><h3 className="text-2xl font-bold mb-2 text-white">{t('why2Title')}</h3><p className="text-lg text-gray-400">{t('why2Desc')}</p></div>
                                </div>
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-5 group">
                                    <div className="flex-shrink-0 bg-blue-500/10 text-blue-500 p-4 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500 transition-colors duration-300 group-hover:text-white">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    </div>
                                    <div><h3 className="text-2xl font-bold mb-2 text-white">{t('why3Title')}</h3><p className="text-lg text-gray-400">{t('why3Desc')}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white">{t('comparisonTitle')}</h2>
                    <p className="text-xl text-gray-400 mb-16 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                    <ComparisonTable />
                </div>
                {/* Background decoration */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <SEOContentSection />

            {/* Local Services Section for Internal Linking */}
            <section className="py-16 bg-black/40 border-y border-gray-800/50">
                <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-bold text-center mb-10 text-gray-300">Global Coverage - Local Support</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'IPTV USA', path: '/best-iptv-usa' },
                            { name: 'IPTV UK', path: '/best-iptv-uk' },
                            { name: 'IPTV Canada', path: '/best-iptv-canada' },
                            { name: 'IPTV Netherlands', path: '#' },
                            { name: 'IPTV France', path: '#' },
                            { name: 'IPTV Germany', path: '#' }
                        ].map((loc, idx) => (
                            <Link 
                                key={idx} 
                                href={loc.path}
                                className="p-4 border border-gray-800 rounded-xl text-center text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all bg-gray-900/40 hover:bg-blue-500/5"
                            >
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <VisibleFAQ />

            <Testimonials />

            <LocalizedFinalCTA />
        </>
    );
};

export default HomePage;