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

                {/* Module 1: Executive Summary - SEO Content */}
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
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Sideloading is the process of installing an application on your device from a source outside the official app store. For example, Amazon Firestick users must sideload IPTV player apps because Amazon doesn't allow them in the official Appstore. This is done using a free tool called "Downloader" and requires enabling a setting called "Apps from Unknown Sources" in your device's Developer Options menu. Sideloading is completely legal and safe when installing trusted applications from reputable providers. It's called "sideloading" because you're loading the app from the "side" (an external source) rather than from the front door (the official store). The process takes about 2-3 minutes and only needs to be done once per device. Once sideloaded and installed, the app functions exactly like any other app on your system.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">APK File</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                APK stands for "Android Package Kit," and it's the file format used to distribute and install applications on Android-based devices. Since devices like Amazon Firestick, Android TV boxes, and most Smart TVs run on Android operating systems, their apps are distributed as APK files. When you download an IPTV app like IPTV Smarters or TiviMate, you're downloading an .apk file. Think of it like a .exe file on Windows or a .dmg file on Mac—it's simply the installation package for the software. APK files are completely normal and standard in the Android ecosystem. After you install the APK, you can (and should) delete the APK file itself to free up storage space; the installed app will continue to work perfectly without it.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">M3U Playlist URL</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                An M3U URL is a web link that contains a list of IPTV channels and streams in a specific text format. While StreamVerse primarily uses the more advanced Xtream Codes API for login (which is simpler and includes more features), some older IPTV players or advanced users prefer M3U URLs. The M3U format is essentially a plain text file listing every channel's stream URL, channel name, and logo. If your IPTV player asks for an "M3U URL" or "playlist link" instead of Xtream Codes credentials, contact our support team and we can provide your account's M3U link. However, we strongly recommend using Xtream Codes when possible because it auto-updates your channel list, integrates the EPG seamlessly, and supports VOD libraries—features that basic M3U playlists lack.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Buffering</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Buffering occurs when your video stream pauses to load more data before it can continue playing. You'll typically see a spinning loading icon or a frozen picture when this happens. Buffering is almost always caused by one of three issues: slow internet speed (IPTV requires a minimum of 25 Mbps for HD and 50+ Mbps for 4K), network congestion (too many devices using your internet simultaneously), or ISP throttling (your internet provider intentionally slowing down streaming traffic). To minimize buffering, close bandwidth-heavy applications, connect your streaming device via Ethernet cable instead of Wi-Fi when possible, restart your router periodically, and consider using a VPN if your ISP is known to throttle video streams. Buffering is not typically caused by the IPTV service itself—our servers are robust and high-capacity—but rather by the "last mile" connection between your router and your device.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 md:col-span-2">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">ISP Throttling</h3>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
                                ISP throttling is when your Internet Service Provider (like Comcast, Spectrum, or AT&T) intentionally slows down certain types of internet traffic—most commonly video streaming. ISPs do this to manage network congestion, discourage "cord-cutting" (since many ISPs also sell cable TV packages and view IPTV as competition), or to push customers toward more expensive data plans. You can detect throttling by running speed tests: if your general internet speed is fine but streaming video consistently buffers, throttling is likely the culprit. The most effective solution is using a reputable VPN service, which encrypts your internet traffic so your ISP can't see that you're streaming video and therefore can't selectively slow it down. Many StreamVerse customers in the US and Canada report significant improvements in stream quality after enabling a VPN, particularly during peak evening hours when throttling is most aggressive.
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
                            <p className="text-gray-300 leading-relaxed">
                                Installing an IPTV player app on your Amazon Firestick requires a process called "sideloading" because these apps aren't available in the official Amazon Appstore. First, go to Settings → My Fire TV → Developer Options and enable "Apps from Unknown Sources." Next, install the free "Downloader" app from the Amazon Appstore. Open Downloader and enter the APK download link provided in your welcome email (or use a popular player like IPTV Smarters Pro). The app will download automatically. Once downloaded, click "Install" and wait for it to complete. After installation, you can delete the APK file to save space—the installed app will continue to work. Finally, open your newly installed IPTV player, select "Login with Xtream Codes," and enter the server URL, username, and password from your welcome email. Your channels and VOD library will load automatically within seconds.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">I forgot my login credentials, what should I do?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Your IPTV login credentials (Xtream Codes server URL, username, and password) were sent to the email address you used when signing up. Search your email inbox for "StreamVerse" or "welcome" to find the original message. If you still can't locate it, check your spam or junk folder as automated emails sometimes get misdirected there. If you've genuinely lost access to that email or deleted the message, contact our support team via the email button above with your order confirmation number or the email address you used to purchase. We can resend your credentials or reset your password within a few hours. For security reasons, we'll need to verify your identity before issuing new credentials, so having your payment confirmation or original signup details ready will speed up the process.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Channels are buffering constantly, how do I fix this?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Buffering is almost always a local network issue rather than a server problem. Start by running a speed test on the device where you're experiencing buffering—you need at least 25 Mbps for HD channels and 50+ Mbps for 4K content. If your speed is below this, too many devices may be using your internet simultaneously, or your internet plan may be too slow. Try closing other apps, pausing downloads, and disconnecting unused devices from Wi-Fi. Switch from Wi-Fi to a wired Ethernet connection if possible, as this provides more stable speeds. Restart your router by unplugging it for 30 seconds then plugging it back in—this often resolves temporary network congestion. If you have consistently fast internet but still experience buffering during prime time (evenings), your ISP may be throttling streaming traffic. The solution is to use a VPN service, which encrypts your traffic so your ISP cannot detect that you're streaming and therefore cannot slow you down. Many users report that enabling a VPN completely eliminates buffering issues.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Can I watch on multiple devices at the same time?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Yes, but only if you purchased a multi-connection plan. If you have a "1 Screen" subscription, only one device can stream at a time—logging in on a second device will disconnect the first. If you have "2 Screens," two devices can watch different channels or content simultaneously without interfering with each other. The same applies to "3 Screens" for three simultaneous streams. You can install the IPTV app on as many devices as you want (Fire TV, smartphone, tablet, etc.), but the number that can actively stream at the same time is limited by your plan. If you need additional screens, contact support to upgrade your account for a small additional monthly fee.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Does StreamVerse work with a VPN?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Yes, StreamVerse works perfectly with VPN services, and we actually recommend using one for multiple reasons. First, a VPN prevents your Internet Service Provider from throttling your streaming speeds, which can significantly improve buffering issues. Second, a VPN adds privacy by encrypting your internet traffic. Popular VPN services that work well with IPTV include ExpressVPN, NordVPN, and Surfshark. Simply install the VPN app on your streaming device, connect to a nearby server location, and then open your IPTV player as usual. Everything will work identically, potentially with better performance if your ISP was previously throttling you.
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