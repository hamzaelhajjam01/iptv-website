"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import GeminiClientForm from '../../components/GeminiClientForm';
import InstallationGuide from '../../components/InstallationGuide';
import { useLanguage } from '../../contexts/LanguageContext';

const HelpPage: React.FC = () => {
    const { t, lang } = useLanguage();

    const faqKeyPairs: [string, string][] = [
        ['faq1q', 'faq1a'], ['faq2q', 'faq2a'], ['faq3q', 'faq3a'], ['faq4q', 'faq4a'],
        ['faq5q', 'faq5a'], ['faq6q', 'faq6a'], ['faq7q', 'faq7a'], ['faq8q', 'faq8a'],
        ['faq9q', 'faq9a'], ['faq10q', 'faq10a'], ['faq11q', 'faq11a'], ['faq12q', 'faq12a'],
        ['faq13q', 'faq13a'], ['faq14q', 'faq14a'], ['faq15q', 'faq15a'], ['faq16q', 'faq16a'],
        ['faq17q', 'faq17a'], ['faq18q', 'faq18a'], ['faq19q', 'faq19a'], ['faq20q', 'faq20a'],
    ];

    const faqList = faqKeyPairs.map(([qk, ak]) => ({ q: t(qk as any), a: t(ak as any) }));

    const installerPrompt = `You are a helpful AI assistant for an IPTV service called StreamVerse. A user needs simple, step-by-step instructions to install an IPTV player and set up the service on their device. Device: "{input}". Your task is to generate clear, easy-to-follow instructions for a non-technical user. Your response MUST be in the same language as the user's query, which is ${lang}. Instructions: 1. Recommend one or two popular and reliable IPTV player apps for that specific device. 2. Provide a step-by-step guide on how to find, download, and install the recommended app(s) on that device. 3. Provide a final step explaining that after installation, they will need to open the app and log in using the username, password, and server URL provided in their welcome email from StreamVerse. Format the entire output as clean HTML. Use <h3> for the title and an ordered list (<ol><li>) for the steps. Use <strong> to highlight app names and important actions.`;

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (!carouselRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        // Avoid division by zero if not scrollable
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(progress);
    };

    // Calculate initial progress in case of pre-scrolled state or resize changes
    useEffect(() => {
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            // Scroll by one card width approximately (50% of container width)
            carouselRef.current.scrollBy({ left: -(carouselRef.current.clientWidth * 0.5), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            // Scroll by one card width approximately
            carouselRef.current.scrollBy({ left: (carouselRef.current.clientWidth * 0.5), behavior: 'smooth' });
        }
    };

    // Build JSON-LD for FAQPage (OrcaSEO strategy)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqList.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    const jsonLdString = JSON.stringify(jsonLd);

    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold mb-10 text-center">{t('helpTitle')}</h1>


                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 md:p-12 overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Text Content - Left Side */}
                            <div className="flex-1 text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">StreamVerse Support Resources</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Get help fast with 24/7 email support, live chat assistance, and comprehensive self-service resources. Our support team responds within 2-4 hours to handle installation help, troubleshooting, account issues, and technical questions.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Access device-specific installation guides for Firestick, Android boxes, Smart TVs, and mobile devices. Use our AI-powered assistant for custom setup instructions, or browse our detailed FAQ covering everything from sideloading to VPN compatibility.
                                </p>
                            </div>

                            {/* Image - Right Side */}
                            <div className="flex-shrink-0 w-full md:w-[500px]">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                                    <Image
                                        src="/images/help-support-concept.png"
                                        alt="StreamVerse Support Resources"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpSupportTitle')}</h3><p className="text-gray-400 mb-4">{t('helpSupportDesc')}</p><a href="mailto:support@streamversetv.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpSupportCTA')}</a></div>
                        <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpEmailTitle')}</h3><p className="text-gray-400 mb-4">{t('helpEmailDesc')}</p><a href="mailto:support@streamversetv.com" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpEmailCTA')}</a></div>
                        <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpTelegramTitle')}</h3><p className="text-gray-400 mb-4">{t('helpTelegramDesc')}</p><a href="#" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpTelegramCTA')}</a></div>
                    </div>
                </div>

                {/* Module 2: Semantic Glossary - SEO Content */}
                <div className="max-w-6xl mx-auto mb-20 relative">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4 px-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-tight">IPTV Technical Terms</h2>
                            <p className="text-gray-400 mt-2 text-sm md:text-base tracking-wide">Understanding the Basics</p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-3 self-end md:self-auto">
                            <button
                                onClick={scrollLeft}
                                aria-label="Scroll Left"
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-md ${scrollProgress <= 1
                                    ? 'bg-gray-800/20 border-gray-700/30 text-gray-600 cursor-not-allowed'
                                    : 'bg-gray-800/80 border-gray-600 text-white hover:bg-blue-600 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer'
                                    }`}
                                disabled={scrollProgress <= 1}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                aria-label="Scroll Right"
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-md ${scrollProgress >= 99
                                    ? 'bg-gray-800/20 border-gray-700/30 text-gray-600 cursor-not-allowed'
                                    : 'bg-gray-800/80 border-gray-600 text-white hover:bg-blue-600 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer'
                                    }`}
                                disabled={scrollProgress >= 99}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-800/50 rounded-full overflow-hidden mb-8 mx-2 max-w-[calc(100%-16px)]">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${scrollProgress}%` }}
                        ></div>
                    </div>

                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto pb-8 pt-4 gap-6 px-4 -mx-4 md:px-2 md:-mx-2 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                    >
                        {/* Card 1 */}
                        <div className="w-[85vw] md:w-[calc(50%-12px)] flex-shrink-0 snap-center bg-[#0f172a]/90 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-6 md:p-8 hover:bg-[#1e293b]/90 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-gray-700/50 flex-shrink-0 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 shadow-inner">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight group-hover:text-blue-300 transition-colors duration-300">Sideloading</h3>
                            </div>

                            <div className="relative z-10 space-y-3 flex-1">
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    The process of installing an application on your device from a source outside the official app store. Amazon Firestick users must sideload IPTV player apps because Amazon doesn&apos;t allow them in the official Appstore.
                                </p>
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    Done using a free tool called <strong>&quot;Downloader&quot;</strong> and requires enabling &quot;Apps from Unknown Sources&quot; in Developer Options.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[85vw] md:w-[calc(50%-12px)] flex-shrink-0 snap-center bg-[#0f172a]/90 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-6 md:p-8 hover:bg-[#1e293b]/90 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-gray-700/50 flex-shrink-0 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 shadow-inner">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight group-hover:text-purple-300 transition-colors duration-300">APK File</h3>
                            </div>

                            <div className="relative z-10 space-y-3 flex-1">
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    Stands for &quot;Android Package Kit,&quot; the file format used to distribute and install applications on Android-based devices (including Firestick, Android TV boxes, and Smart TVs).
                                </p>
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    When you download IPTV Smarters or TiviMate, you&apos;re downloading an <strong>.apk</strong> file. Think of it like an .exe on Windows or a .dmg on Mac.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-[85vw] md:w-[calc(50%-12px)] flex-shrink-0 snap-center bg-[#0f172a]/90 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-6 md:p-8 hover:bg-[#1e293b]/90 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-gray-700/50 flex-shrink-0 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 shadow-inner">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight group-hover:text-blue-300 transition-colors duration-300">M3U Playlist URL</h3>
                            </div>

                            <div className="relative z-10 space-y-3 flex-1">
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    A web link that contains a plain text list of IPTV channels, streams, logos, and EPG data.
                                </p>
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    While StreamVerse primarily uses the simpler <strong>Xtream Codes API</strong> (username and password), some older players still mandate M3U URLs. We provide both upon request!
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-[85vw] md:w-[calc(50%-12px)] flex-shrink-0 snap-center bg-[#0f172a]/90 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-6 md:p-8 hover:bg-[#1e293b]/90 hover:border-red-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] group-hover:bg-red-500/20 transition-all duration-500 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-gray-700/50 flex-shrink-0 group-hover:scale-110 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 shadow-inner">
                                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight group-hover:text-red-300 transition-colors duration-300">Buffering</h3>
                            </div>

                            <div className="relative z-10 space-y-3 flex-1">
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    When your video stream pauses to load more data. Almost always caused by local issues: <strong>Slow internet</strong> (Need 25+ Mbps for HD), <strong>Network congestion</strong>, or <strong>ISP throttling</strong>.
                                </p>
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    Fixes include using ethernet instead of WiFi, closing bandwidth-heavy apps, restarting your router, or using a VPN.
                                </p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="w-[85vw] md:w-[calc(50%-12px)] flex-shrink-0 snap-center bg-[#0f172a]/90 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-6 md:p-8 hover:bg-[#1e293b]/90 hover:border-yellow-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[50px] group-hover:bg-yellow-500/20 transition-all duration-500 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-gray-700/50 flex-shrink-0 group-hover:scale-110 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300 shadow-inner">
                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight group-hover:text-yellow-300 transition-colors duration-300">ISP Throttling</h3>
                            </div>

                            <div className="relative z-10 space-y-3 flex-1">
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    When your Internet Service Provider intentionally slows down your internet traffic, specifically targeting video streaming. ISPs do this to manage network congestion or curb competition.
                                </p>
                                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                    The most effective solution to this is using a reputable <strong>VPN service</strong> which masks your stream traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <InstallationGuide />

                <section id="ai-installer" className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aiHelpTitle')}</h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto">{t('aiHelpSubtitle')}</p>
                    <div className="max-w-3xl mx-auto">
                        <GeminiClientForm
                            placeholder={t('aiHelpPlaceholder')}
                            buttonText={t('aiHelpCTA')}
                            promptTemplate={installerPrompt}
                        />
                    </div>
                </section>

                {/* Module 3: Extended FAQ - SEO Content (Visible, No Accordions) */}
                <div className="max-w-6xl mx-auto mb-16 bg-gray-900/40 border border-gray-800 rounded-xl p-8 text-left">
                    <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Frequently Asked Questions: IPTV Setup & Troubleshooting</h2>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">How do I install the IPTV app on my Firestick?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Installing an IPTV player app on your Amazon Firestick requires a process called &quot;sideloading&quot; because these apps aren&apos;t available in the official Amazon Appstore. Follow these steps:
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 leading-relaxed space-y-2 mb-4">
                                <li>First, go to <strong>Settings → My Fire TV → Developer Options</strong> and enable &quot;Apps from Unknown Sources.&quot;</li>
                                <li>Next, install the free <strong>&quot;Downloader&quot;</strong> app from the Amazon Appstore.</li>
                                <li>Open Downloader and enter the APK download link provided in your welcome email (or use a popular player like IPTV Smarters Pro). The app will download automatically.</li>
                                <li>Once downloaded, click &quot;Install&quot; and wait for it to complete. After installation, you can delete the APK file to save space.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                Finally, open your newly installed IPTV player, select &quot;Login with Xtream Codes,&quot; and enter the server URL, username, and password from your welcome email. Your channels and VOD library will load automatically within seconds.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">I forgot my login credentials, what should I do?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Your IPTV login credentials (Xtream Codes server URL, username, and password) were sent to the email address you used when signing up. Search your email inbox for &quot;StreamVerse&quot; or &quot;welcome&quot; to find the original message. If you still can&apos;t locate it, check your spam or junk folder as automated emails sometimes get misdirected there.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                If you&apos;ve genuinely lost access to that email or deleted the message, contact our support team via the email button above with your order confirmation number or the email address you used to purchase. We can resend your credentials or reset your password within a few hours. For security reasons, we&apos;ll need to verify your identity before issuing new credentials, so having your payment confirmation or original signup details ready will speed up the process.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Channels are buffering constantly, how do I fix this?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Buffering is almost always a local network issue rather than a server problem. Start by running a speed test on the device where you&apos;re experiencing buffering—you need at least 25 Mbps for HD channels and 50+ Mbps for 4K content.
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 leading-relaxed space-y-2 mb-4">
                                <li>If your speed is below this, too many devices may be using your internet simultaneously, or your internet plan may be too slow.</li>
                                <li>Try closing other apps, pausing downloads, and disconnecting unused devices from Wi-Fi.</li>
                                <li>Switch from Wi-Fi to a wired Ethernet connection if possible, as this provides more stable speeds.</li>
                                <li>Restart your router by unplugging it for 30 seconds then plugging it back in—this often resolves temporary network congestion.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                If you have consistently fast internet but still experience buffering during prime time (evenings), your ISP may be throttling streaming traffic. The solution is to use a VPN service, which encrypts your traffic so your ISP cannot detect that you&apos;re streaming and therefore cannot slow you down. Many users report that enabling a VPN completely eliminates buffering issues.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Can I watch on multiple devices at the same time?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Yes, but only if you purchased a multi-connection plan.
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 leading-relaxed space-y-2 mb-4">
                                <li><strong>1 Screen:</strong> Only one device can stream at a time—logging in on a second device will disconnect the first.</li>
                                <li><strong>2 Screens:</strong> Two devices can watch different channels or content simultaneously without interfering with each other.</li>
                                <li><strong>3 Screens:</strong> Three simultaneous streams allowed.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                You can install the IPTV app on as many devices as you want (Fire TV, smartphone, tablet, etc.), but the number that can actively stream at the same time is limited by your plan. If you need additional screens, contact support to upgrade your account for a small additional monthly fee.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Does StreamVerse work with a VPN?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Yes, StreamVerse works perfectly with VPN services, and we actually recommend using one for multiple reasons:
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 leading-relaxed space-y-2 mb-4">
                                <li>First, a VPN prevents your Internet Service Provider from throttling your streaming speeds, which can significantly improve buffering issues.</li>
                                <li>Second, a VPN adds privacy by encrypting your internet traffic.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                Popular VPN services that work well with IPTV include ExpressVPN, NordVPN, and Surfshark. Simply install the VPN app on your streaming device, connect to a nearby server location, and then open your IPTV player as usual. Everything will work identically, potentially with better performance if your ISP was previously throttling you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* JSON-LD FAQ schema for SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
            </div>
        </section >
    );
};

export default HelpPage;