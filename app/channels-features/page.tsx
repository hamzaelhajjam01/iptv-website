"use client";

import React from 'react';
import DeviceGrid from '../../components/DeviceGrid';
import GeminiClientForm from '../../components/GeminiClientForm';
import { useLanguage } from '../../contexts/LanguageContext';

const ChannelsFeaturesPage: React.FC = () => {
    const { t, lang } = useLanguage();

    const promptTemplate = `You are an expert entertainment guide for an IPTV service called StreamVerse which has over 16,000 channels. A potential customer is interested in the following topics: "{input}". Your task is to generate a personalized recommendation list to show them the value they'll get. Your response MUST be in the same language as the user's query, which is ${lang}. Please provide: 1. A list of 4-5 relevant LIVE TV channels they would love. 2. A list of 3 relevant on-demand movies or TV series they can binge-watch. For each item, provide a one-sentence explanation for why it's a great match for their interests. Format the entire output as clean HTML. Use <h3> for titles and an unordered list (<ul><li>) for the recommendations. Make the channel/movie titles bold using <strong>.`;

    return (
        <>
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/bg-entertainment.jpg" alt="Abstract background" className="w-full h-full object-cover opacity-10" />
                </div>
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('featuresTitle')}</h1>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t('featuresSubtitle')}</p>

                    {/* SEO Content Expansion */}
                    <div className="w-full mx-auto mb-16 text-left bg-card-dark/50 p-8 rounded-xl border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-3">99.9% Uptime Guarantee</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Reliability is the cornerstone of the StreamVerse experience. We understand that there is nothing worse than a stream cutting out during the final minutes of a qualified game or the climax of a movie. That is why we invest heavily in a redundant server infrastructure. Our load-balancing technology automatically distributes traffic across multiple global data centers, ensuring that if one server experiences high load, your connection is instantly rerouted to a stable backup. This allows us to maintain a 99.9% uptime record, providing you with a broadcast-quality signal that you can trust, 24/7.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-3">Next-Gen Anti-Freeze Technology</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Buffering is the enemy of streaming. StreamVerse utilizes proprietary Anti-Freeze Technology 5.0 to eliminate lag before it starts. Unlike traditional streams that download data in small chunks, our smart-buffering system pre-loads a larger cache of content, smoothing out any minor fluctuations in your internet connection. Combined with H.265 HEVC compression, we deliver crystal-clear 4K and FHD streams that use less bandwidth, making our service incredibly stable even on average internet connections.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-3">Massive VOD Library: Movies & TV Shows</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Your subscription includes more than just live TV. Unlock an on-demand library that rivals the biggest streaming platforms. Access over 50,000 movies, from the latest cinema releases to timeless classics, all in stunning HD and 4K quality. Binge-watch complete seasons of your favorite TV shows from providers like HBO, Netflix, Disney+, and Hulu—all in one place. Our library is updated daily, so you never miss a premiere. With clean organization, subtitles, and multi-language support, it's the ultimate entertainment hub for the whole family.
                                </p>
                            </section>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature1Title')}</h3><p className="text-gray-300">{t('feature1Desc')}</p></div>
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature2Title')}</h3><p className="text-gray-300">{t('feature2Desc')}</p></div>
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature3Title')}</h3><p className="text-gray-300">{t('feature3Desc')}</p></div>
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature4Title')}</h3><p className="text-gray-300">{t('feature4Desc')}</p></div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-section-dark">
                <div className="container mx-auto text-center max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('devicesTitle')}</h2>
                    <p className="text-gray-400 mb-12 max-w-3xl mx-auto">{t('devicesSubtitle')}</p>
                    <DeviceGrid />
                </div>
            </section>

            <div className="py-10 bg-section-dark"><div className="section-divider"></div></div>
            <section className="py-20 px-6 bg-section-dark">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('channelsTitle')}</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t('channelsSubtitle')}</p>
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=SPORTS" alt="Sports Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=MOVIES" alt="Movies Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=NEWS" alt="News Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=KIDS" alt="Kids Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=USA" alt="USA Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=UK" alt="UK Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=CANADA" alt="Canada Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=EUROPE" alt="Europe Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=ASIA" alt="Asia Channels" className="rounded-md channel-logo" />
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=LATINO" alt="Latino Channels" className="rounded-md channel-logo" />
                    </div>
                </div>
            </section>

            <section id="gemini-guide" className="py-20 px-6 bg-gradient-to-b from-blue-900/30 to-bg-section-dark">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('geminiTitle')}</h2>
                    <p className="text-gray-300 mb-8 text-lg">{t('geminiSubtitle')}</p>
                    <div className="bg-card-dark rounded-lg p-8">
                        <GeminiClientForm
                            placeholder={t('geminiPlaceholder')}
                            buttonText={t('geminiCTA')}
                            promptTemplate={promptTemplate}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChannelsFeaturesPage;