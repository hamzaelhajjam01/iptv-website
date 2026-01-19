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
                                <h2 className="text-2xl font-bold text-white mb-3">{t('seoUptimeTitle')}</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('seoUptimeDesc')}
                                </p>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-3">{t('seoAntiFreezeTitle')}</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('seoAntiFreezeDesc')}
                                </p>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-3">{t('seoVodTitle')}</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('seoVodDesc')}
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