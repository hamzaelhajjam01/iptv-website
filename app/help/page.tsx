"use client";

import React, { useState } from 'react';
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

                {/* Quick Navigation for Mobile/Desktop */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Devices */}
                        <div className="bg-card-dark p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                Setup Guides by Device
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a href="/best-iptv-firestick" className="block p-3 bg-gray-800/50 hover:bg-blue-900/20 rounded-lg transition-colors border border-gray-700/50 hover:border-blue-500/30">
                                    <span className="text-gray-200 font-medium">Best IPTV for Firestick</span>
                                </a>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    Samsung TV <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    LG TV <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    Apple TV <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    Android TV <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                            </div>
                        </div>

                        {/* Regions */}
                        <div className="bg-card-dark p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Regional Guides
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a href="/best-iptv-usa" className="block p-3 bg-gray-800/50 hover:bg-blue-900/20 rounded-lg transition-colors border border-gray-700/50 hover:border-blue-500/30">
                                    <span className="text-gray-200 font-medium">Best IPTV USA</span>
                                </a>
                                <a href="/best-iptv-uk" className="block p-3 bg-gray-800/50 hover:bg-blue-900/20 rounded-lg transition-colors border border-gray-700/50 hover:border-blue-500/30">
                                    <span className="text-gray-200 font-medium">Best IPTV UK</span>
                                </a>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    Best IPTV Canada <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                            </div>
                        </div>

                        {/* Educational Guides */}
                        <div className="bg-card-dark p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                Educational Guides
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                                <a href="/how-to-setup-iptv-on-firestick" className="block p-3 bg-gray-800/50 hover:bg-blue-900/20 rounded-lg transition-colors border border-gray-700/50 hover:border-blue-500/30">
                                    <span className="text-gray-200 font-medium">How to Setup Firestick</span>
                                </a>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    Fix IPTV Buffering <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    VPN Guide for IPTV <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                                <span className="block p-3 bg-gray-800/30 rounded-lg border border-gray-800 text-gray-500 cursor-not-allowed">
                                    Legal & Safety FAQ <span className="text-xs ml-1 opacity-60">(Coming Soon)</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 text-center">IPTV Technical Terms: Understanding the Basics</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Sideloading</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                Sideloading is the process of installing an application on your device from a source outside the official app store. For example, Amazon Firestick users must sideload IPTV player apps because Amazon doesn&apos;t allow them in the official Appstore.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                This is done using a free tool called &quot;Downloader&quot; and requires enabling a setting called &quot;Apps from Unknown Sources&quot; in your device&apos;s Developer Options menu. Sideloading is completely legal and safe when installing trusted applications from reputable providers.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                It&apos;s called &quot;sideloading&quot; because you&apos;re loading the app from the &quot;side&quot; (an external source) rather than from the front door (the official store). The process takes about 2-3 minutes and only needs to be done once per device. Once sideloaded and installed, the app functions exactly like any other app on your system.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">APK File</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                APK stands for &quot;Android Package Kit,&quot; and it&apos;s the file format used to distribute and install applications on Android-based devices. Since devices like Amazon Firestick, Android TV boxes, and most Smart TVs run on Android operating systems, their apps are distributed as APK files.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                When you download an IPTV app like IPTV Smarters or TiviMate, you&apos;re downloading an .apk file. Think of it like a .exe file on Windows or a .dmg file on Mac—it&apos;s simply the installation package for the software.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                APK files are completely normal and standard in the Android ecosystem. After you install the APK, you can (and should) delete the APK file itself to free up storage space; the installed app will continue to work perfectly without it.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">M3U Playlist URL</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                An M3U URL is a web link that contains a list of IPTV channels and streams in a specific text format. While StreamVerse primarily uses the more advanced Xtream Codes API for login (which is simpler and includes more features), some older IPTV players or advanced users prefer M3U URLs.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                The M3U format is essentially a plain text file listing every channel&apos;s stream URL, channel name, and logo. If your IPTV player asks for an &quot;M3U URL&quot; or &quot;playlist link&quot; instead of Xtream Codes credentials, contact our support team and we can provide your account&apos;s M3U link.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                However, we strongly recommend using Xtream Codes when possible because it auto-updates your channel list, integrates the EPG seamlessly, and supports VOD libraries—features that basic M3U playlists lack.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Buffering</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                Buffering occurs when your video stream pauses to load more data before it can continue playing. You&apos;ll typically see a spinning loading icon or a frozen picture when this happens. Buffering is almost always caused by one of three issues:
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 text-sm leading-relaxed mb-3 text-left">
                                <li>Slow internet speed (IPTV requires a minimum of 25 Mbps for HD and 50+ Mbps for 4K)</li>
                                <li>Network congestion (too many devices using your internet simultaneously)</li>
                                <li>ISP throttling (your internet provider intentionally slowing down streaming traffic)</li>
                            </ul>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                To minimize buffering, close bandwidth-heavy applications, connect your streaming device via Ethernet cable instead of Wi-Fi when possible, restart your router periodically, and consider using a VPN if your ISP is known to throttle video streams. Buffering is not typically caused by the IPTV service itself—our servers are robust and high-capacity—but rather by the &quot;last mile&quot; connection between your router and your device.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 md:col-span-2">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">ISP Throttling</h3>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
                                ISP throttling is when your Internet Service Provider (like Comcast, Spectrum, or AT&T) intentionally slows down certain types of internet traffic—most commonly video streaming. ISPs do this to manage network congestion, discourage &quot;cord-cutting&quot; (since many ISPs also sell cable TV packages and view IPTV as competition), or to push customers toward more expensive data plans.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
                                You can detect throttling by running speed tests: if your general internet speed is fine but streaming video consistently buffers, throttling is likely the culprit. The most effective solution is using a reputable VPN service, which encrypts your internet traffic so your ISP can&apos;t see that you&apos;re streaming video and therefore can&apos;t selectively slow it down.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
                                Many StreamVerse customers in the US and Canada report significant improvements in stream quality after enabling a VPN, particularly during peak evening hours when throttling is most aggressive.
                            </p>
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
        </section>
    );
};

export default HelpPage;