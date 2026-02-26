"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CheckoutPopup from '../../components/CheckoutPopup';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item bg-card-dark rounded-lg mb-4 border border-gray-800 transition-colors ${isOpen ? 'active bg-gray-900' : ''}`}>
            <div
                className="faq-question flex justify-between items-center p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className={`faq-answer px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    );
};

const IPTVForLGSmartTVPage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ title: '', price: '', image: '' });

    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

    const openCheckout = (planTitle: string, planPrice: string, planImage: string) => {
        setSelectedPlan({ title: planTitle, price: planPrice, image: planImage });
        setIsPopupOpen(true);
    };

    return (
        <>
            <CheckoutPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                planTitle={selectedPlan.title}
                planPrice={selectedPlan.price}
                planImage={selectedPlan.image}
                whatsappNumber={WHATSAPP_NUMBER}
            />

            <section className="py-20 px-6 bg-section-dark">
                <div className="container mx-auto max-w-6xl">
                    {/* Hero Section */}
                    <div className="relative mb-16 -mx-6 px-6 py-20 md:py-32 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-gray-900">
                            {/* WebP Image Placeholder 1 */}
                            <Image
                                src="/images/lg-smart-tv-home-screen-iptv-app.png"
                                alt="LG Smart TV home screen with IPTV app"
                                fill
                                className="object-cover opacity-30"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-section-dark/80 via-section-dark/90 to-section-dark"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                                Premium IPTV for LG Smart TV: The Ultimate 4K Streaming Experience
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                                Transform your LG WebOS TV into a powerhouse entertainment hub. Enjoy <span className="text-white font-semibold">10,000+ live channels</span> and <span className="text-white font-semibold">140,000+ VOD options</span> in native 4K with instant activation and zero buffering.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#pricing"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Get LG Access →
                                </a>
                                <a
                                    href="#activation"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-gray-700"
                                >
                                    View Setup Guide
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Context Card */}
                    <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-4 mb-12 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <span>Active Guides: </span>
                        <a href="/best-iptv-firestick" className="text-blue-400 hover:underline">IPTV for Firestick</a> |
                        <a href="/best-iptv-usa" className="text-blue-400 hover:underline">Best IPTV USA</a> |
                        <a href="/best-iptv-uk" className="text-blue-400 hover:underline">Best IPTV UK</a> |
                        <a href="/blog" className="text-blue-400 hover:underline">&apos;How-to&apos; Guides</a>
                        <span className="text-gray-500 italic ml-2">(Other device guides upcoming)</span>
                    </div>

                    {/* Educational Content (40%) */}
                    <div id="education" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Best IPTV Players for LG (IPTV Smarters vs. Nanomid)
                        </h2>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 leading-relaxed mb-8">
                                WebOS features an excellent native app store (LG Content Store) meaning you don&apos;t need to sideload complex APKs. For the best experience, we recommend using dedicated premium players. Here is a technical breakdown of the top choices available directly on your LG TV.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gray-800/50 rounded-lg p-6 border-t-4 border-blue-500">
                                    <h3 className="text-xl font-bold text-white mb-3">IPTV Smarters Pro (Top Choice)</h3>
                                    <p className="text-gray-300 text-sm mb-4">The industry standard for a reason. IPTV Smarters offers a flawless interface optimized for LG Magic Remotes.</p>
                                    <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                                        <li>Instant EPG syncing</li>
                                        <li>Multi-screen viewing capabilities</li>
                                        <li>Native parental controls</li>
                                        <li>Free to download from the LG Store</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6 border-t-4 border-purple-500">
                                    <h3 className="text-xl font-bold text-white mb-3">Nanomid Player (Premium Alternative)</h3>
                                    <p className="text-gray-300 text-sm mb-4">A high-performance player designed specifically for Smart TVs, excellent for managing massive playlists.</p>
                                    <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                                        <li>Incredibly fast channel zapping</li>
                                        <li>Advanced video decoding algorithms</li>
                                        <li>QR code based playlist uploading</li>
                                        <li>Paid license required after trial</li>
                                    </ul>
                                </div>
                            </div>

                            {/* WebP Image Placeholder 2 */}
                            <div className="mt-8 rounded-xl overflow-hidden border-2 border-blue-500/30 max-w-3xl mx-auto bg-gray-800 aspect-video relative">
                                <Image
                                    src="/images/lg-webos-iptv-player.png"
                                    alt="LG WebOS UI showing IPTV Smarters Pro and Nanomid player"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <h2 id="activation" className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center mt-16">
                            3 Simple Steps to Activate StreamVerse on LG
                        </h2>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <div className="flex flex-col md:flex-row gap-6 mb-8">
                                <div className="flex-1 bg-gray-800/50 rounded-lg p-6 relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 z-0">1</div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-2">Install the App</h3>
                                        <p className="text-gray-300 text-sm">Open the LG Content Store on your TV, search for &quot;IPTV Smarters Pro,&quot; and click Install.</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-gray-800/50 rounded-lg p-6 relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 z-0">2</div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-2">Choose Plan</h3>
                                        <p className="text-gray-300 text-sm">Select a StreamVerse LG package below and instantly receive your Xtream Codes login credentials via email.</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-gray-800/50 rounded-lg p-6 relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 z-0">3</div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-2">Login &amp; Stream</h3>
                                        <p className="text-gray-300 text-sm">Open the app, enter your Username, Password, and our Portal URL. Bam! 10k+ channels ready to watch.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-yellow-500 mb-2">Crucial Tip: Use a Wired Connection</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    While LG TVs have great Wi-Fi receivers, streaming 4K sports requires absolute stability. Even minor wireless interference can cause packet loss. <strong>Always connect your LG TV directly to your router using an Ethernet cable</strong> for the promised zero-buffer experience. Connecting via ethernet bypasses the majority of local network congestion issues.
                                </p>
                                <p className="text-gray-300 text-sm">
                                    Experiencing lag even on ethernet? Read our full technical guide on <a href="/how-to-fix-iptv-buffering" className="text-blue-400 hover:underline">How to Fix IPTV Buffering</a>.
                                </p>

                                {/* WebP Image Placeholder 3 */}
                                <div className="mt-6 rounded-lg overflow-hidden border border-yellow-500/30 w-full max-w-2xl mx-auto h-48 relative bg-gray-800">
                                    <Image
                                        src="/images/lg-tv-wired-connection-iptv.png"
                                        alt="Connecting an ethernet cable to an LG Smart TV for stable 4K IPTV streaming"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commercial Content (30%) */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Why LG WebOS Users Choose StreamVerse
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Full WebOS 2026 Compatibility</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Our servers and recommended apps are rigorously tested against the latest LG WebOS updates. Whether you&apos;re running an older WebOS version or the flagship 2026 WebOS UI, our streams decode perfectly in hardware without audio desync or frame drops.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Localized Nodes for UK &amp; USA</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            We operate premium CDN nodes localized closely to our users. This means you connect to a server physically nearby, securing ultra-low ping for live sports. Interested in region specifics? Check out our <a href="/best-iptv-usa" className="text-blue-400 hover:underline">Best IPTV USA</a> and <a href="/best-iptv-uk" className="text-blue-400 hover:underline">Best IPTV UK</a> channel breakdowns.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Optimized EPG for Magic Remotes</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Navigating a guide with 10,000+ channels can be tedious. Our Electronic Program Guide (EPG) is cleanly categorized and highly responsive to the LG Magic Remote&apos;s scrolling and point-and-click capabilities, making channel surfing a breeze.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">True 4K HDR Capability</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            LG OLEDs and QNEDs are famous for their picture quality. StreamVerse delivers pristine 4K video feeds for major sporting events and cinema releases so you can actually utilize the premium display you paid for.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transactional (10%) - Pricing Section */}
                    <div id="pricing" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            StreamVerse LG Access Plans
                        </h2>

                        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                            Choose your LG Smart TV streaming package. All plans include 4K quality, 10,000+ live channels, and a massive VOD library. No contracts. Instant delivery.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* 1 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month LG IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Monthly Plan</h3>
                                <p className="text-gray-400 mb-6">Perfect for testing on your LG screen</p>
                                <div className="mb-6">
                                    <p className="text-3xl md:text-4xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">$29.99</span>
                                        <span>$9.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">10,000+ US/UK/Global Channels</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Optimized</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Fast LG Setup</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('LG Monthly Plan', '$9.99', '/images/boxes/Box_IPTV_MONTH1.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get LG Access
                                </button>
                            </div>

                            {/* 12 Month Plan (Best Value) */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 relative flex flex-col scale-105 shadow-2xl shadow-blue-500/20">
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-sm px-6 py-2 rounded-full whitespace-nowrap">
                                    BEST VALUE - SAVE 75%
                                </span>
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Month LG IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Yearly Plan</h3>
                                <p className="text-gray-400 mb-6">Most popular for WebOS viewers</p>
                                <div className="mb-6">
                                    <p className="text-4xl md:text-5xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">$239.99</span>
                                        <span>$59.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Everything in Monthly Plan</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300"><strong className="text-white">Save $180/year</strong></span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Free EPG Updates</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('LG Yearly Plan', '$59.99', '/images/boxes/Box_IPTV_MONTH12.png')}
                                    className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                                >
                                    Get LG Access
                                </button>
                            </div>

                            {/* 6 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Month LG IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">6-Month Plan</h3>
                                <p className="text-gray-400 mb-6">Great balance of value &amp; flexibility</p>
                                <div className="mb-6">
                                    <p className="text-3xl md:text-4xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">$119.99</span>
                                        <span>$37.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">10,000+ US/UK/Global Channels</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Optimized</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300"><strong className="text-white">Save $82</strong></span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('LG 6-Month Plan', '$37.99', '/images/boxes/Box_IPTV_MONTH6.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get LG Access
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Informational (20%) - FAQ Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Frequently Asked LG TV Questions
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <FaqItem
                                question="Does it work on older LG models?"
                                answer="Yes. While our service is highly optimized for newer models (WebOS 4.5 and above), older LG Smart TVs running legacy versions of WebOS can still run apps like IPTV Smarters or Smart IPTV. If your TV is very old and struggling with performance, we recommend connecting an inexpensive Firestick to its HDMI port."
                            />
                            <FaqItem
                                question="Do I need a VPN for LG TV?"
                                answer="A VPN is not strictly required to use StreamVerse, but it is highly recommended if you live in regions where ISPs are prone to throttling streaming traffic, particularly during big Premier League or NFL events. Note that LG TVs do not natively support standard VPN apps in their store, so you will need to install the VPN directly on your home router."
                            />
                            <FaqItem
                                question="How to update apps on WebOS?"
                                answer="To ensure your IPTV player runs smoothly, keep it updated. Press the Home button on your remote, go to the LG Content Store, navigate to 'My Page' (or 'Apps' -> 'My Apps'), select the IPTV player, and click 'Update' if one is available. Setting your TV to automatically update apps in the General settings menu is the best approach."
                            />
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-12 mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Upgrade Your LG Display?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Join over 50,000 users feeding their WebOS displays with true 4K streaming. Easy setup, no buffering, and 24/7 support.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                        >
                            Start Watching Now →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IPTVForLGSmartTVPage;
