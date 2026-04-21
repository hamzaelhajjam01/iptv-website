"use client";

import React from 'react';
import DeviceGrid from '../../components/DeviceGrid';
import GeminiClientForm from '../../components/GeminiClientForm';
import { useLanguage } from '../../contexts/LanguageContext';

const channelImages = [
    "580b57fcd9996e24bc43c529.png",
    "apple-tv-plus-logo-1.png",
    "fubo-tv-logo.png",
    "golf-logo.png",
    "hbo-max-logo-white.png",
    "hulu-logo.png",
    "mgm-logo.png",
    "nba-logo.png",
    "nfl-logo.png",
    "premier-league-logo.png",
    "prime-video-logo.png",
    "showtime-logo.png",
    "starz-logo-white.png",
    "the-movie-channel-logo.png"
];

const movieImages = [
    "efc10d_58769540c3af46e4b1b8373d25053dce_mv2-1.webp",
    "efc10d_82f6ea18c2494be98c46c59b9e55cf71_mv2-1.webp",
    "efc10d_c4763bc9523c4fc89ba4e9f22e5ce52d_mv2-1.webp",
    "efc10d_cf5918f2dcf64cf39fcefe135495cc43_mv2-1.webp",
    "efc10d_d0631c9b9c3f4be9bd6caef12c4d0694_mv2-1.webp",
    "efc10d_e83995fe1b33435a982de93f05c82c29_mv2-1.webp"
];

const ChannelsFeaturesPage: React.FC = () => {
    const { t, lang } = useLanguage();

    const promptTemplate = `You are an expert entertainment guide for an IPTV service called StreamVerse which has over 50,000 channels. A potential customer is interested in the following topics: "{input}". Your task is to generate a personalized recommendation list to show them the value they'll get. Your response MUST be in the same language as the user's query, which is ${lang}. Please provide: 1. A list of 4-5 relevant LIVE TV channels they would love. 2. A list of 3 relevant on-demand movies or TV series they can binge-watch. For each item, provide a one-sentence explanation for why it's a great match for their interests. Format the entire output as clean HTML. Use <h3> for titles and an unordered list (<ul><li>) for the recommendations. Make the channel/movie titles bold using <strong>.`;

    return (
        <>
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/bg-entertainment.jpg" alt="Abstract background" className="w-full h-full object-cover opacity-10" />
                </div>
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('featuresTitle')}</h1>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t('featuresSubtitle')}</p>



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
            <section className="py-20 px-0 bg-section-dark overflow-hidden">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('channelsTitle')}</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t('channelsSubtitle')}</p>
                </div>
                
                {/* Horizontal scrolling marquee */}
                <div className="relative w-full overflow-hidden flex items-center group
                  before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-section-dark before:to-transparent before:content-[''] 
                  after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-section-dark after:to-transparent after:content-['']">
                    
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {/* First set of images */}
                        {channelImages.map((img, i) => (
                            <div key={`img1-${i}`} className="mx-6 w-[120px] h-[80px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                                <img src={`/images/channels/${img}`} alt="Channel logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        {/* Second set of images (duplicate) */}
                        {channelImages.map((img, i) => (
                            <div key={`img2-${i}`} className="mx-6 w-[120px] h-[80px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                                <img src={`/images/channels/${img}`} alt="Channel logo" className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Horizontal scrolling marquee for movies */}
            <section className="pb-20 px-0 bg-section-dark overflow-hidden">
                <div className="relative w-full overflow-hidden flex items-center group
                  before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-section-dark before:to-transparent before:content-[''] 
                  after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-section-dark after:to-transparent after:content-['']">
                    
                    <div className="flex w-max animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused]">
                        {/* First set of images */}
                        {movieImages.map((img, i) => (
                            <div key={`movie1-${i}`} className="mx-4 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
                                <img src={`/images/movies/${img}`} alt="Movie poster" className="w-[160px] h-[240px] rounded-lg shadow-lg border border-white/10 object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        {/* Second set of images (duplicate) */}
                        {movieImages.map((img, i) => (
                            <div key={`movie2-${i}`} className="mx-4 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
                                <img src={`/images/movies/${img}`} alt="Movie poster" className="w-[160px] h-[240px] rounded-lg shadow-lg border border-white/10 object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
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