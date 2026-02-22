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

const BestIPTVUKPage: React.FC = () => {
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
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/best-iptv-uk-hero.png"
                                alt="UK Premier League high-quality football match on 4K TV screen"
                                fill
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-section-dark/80 via-section-dark/90 to-section-dark"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                                Best IPTV UK 2026: Premium 4K Streaming for British Viewers
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                                Experience the UK&apos;s #1 IPTV service. Get all <span className="text-white font-semibold">Sky Sports, TNT, and UK terrestrial channels</span> in 4K. Instant setup. Join <span className="text-white font-semibold">50,000+ happy UK streamers</span> today with <span className="text-white font-semibold">zero buffering</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#pricing"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Get Instant Access →
                                </a>
                                <a
                                    href="#uk-channels"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-gray-700"
                                >
                                    View UK Channel List
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Educational Content (40%) - Bypassing Throttling */}
                    <div id="education" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            How to Watch UK IPTV without ISP Throttling
                        </h2>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <div className="mb-8">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    A common issue for British viewers during major sporting events like live Premier League matches is connection slowing. Major UK Internet Service Providers (like Virgin Media, BT, and Sky Broadband) actively monitor and sometimes throttle streaming traffic. Here is how to guarantee <span className="text-white font-semibold">100% uptime and buffer-free 4K streams</span>.
                                </p>
                            </div>

                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 min-w-[2.5rem] flex items-center justify-center flex-shrink-0 mr-3 text-lg">1</span>
                                    Use a Premium VPN Service
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Using a Virtual Private Network (VPN) encrypts your internet traffic, preventing your ISP from identifying and throttling your IPTV streams. This is the single most effective way to eliminate buffering during peak 3pm kick-offs.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>Always turn your VPN on <strong>before</strong> opening your IPTV application.</li>
                                    <li>Connect to a UK server (e.g., London or Manchester) to keep latency low while masking your traffic.</li>
                                    <li>We recommend robust providers like ExpressVPN, NordVPN, or Surfshark that do not keep logs.</li>
                                </ul>
                            </div>

                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 min-w-[2.5rem] flex items-center justify-center flex-shrink-0 mr-3 text-lg">2</span>
                                    Optimize Your Home Network
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Even without ISP throttling, your local Wi-Fi can cause lag during 4K sports.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>If you are using a Firestick, a Smart TV, or a set-top box, connect it directly to your router using an Ethernet cable.</li>
                                    <li>If Wi-Fi is your only option, ensure you are connected to the 5GHz band rather than 2.4GHz for maximum throughput.</li>
                                </ul>
                                <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                                    <p className="text-yellow-200 text-sm">
                                        <strong>⚠️ Important:</strong> New to streaming? Follow our UK Firestick setup guide here: <a href="/how-to-setup-iptv-on-firestick" className="text-blue-400 hover:text-blue-300 underline">How to Setup IPTV on Firestick</a> to ensure everything runs smoothly from day one.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 rounded-xl overflow-hidden border-2 border-blue-500/30 max-w-2xl mx-auto shadow-xl shadow-blue-500/10">
                                <Image
                                    src="/images/best-iptv-uk-network.png"
                                    alt="High-speed internet router connected via ethernet for 4K streaming"
                                    width={1000}
                                    height={750}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Commercial Content (30%) */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Why UK Streamers Trust StreamVerse
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">4K/60fps Streams for 3pm Blackouts</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Never miss a crucial match due to TV blackout restrictions. Enjoy uninterrupted 4K Ultra HD streams at 60fps for all Premier League, Champions League, and FA Cup matches.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Full UK EPG Support</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Navigate channels just like native Sky or Virgin boxes. Our service features an advanced, instantly updating Electronic Program Guide (EPG) covering all UK channels and events.
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
                                        <h3 className="text-2xl font-bold text-white mb-3">Localized UK CDN Nodes</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            We operate dedicated servers strictly for our UK viewers in data centers across London and Manchester. This robust infrastructure guarantees zero lag and instant zapping speeds.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Universal Compatibility</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Streamverse works on all devices effortlessly. Whether you <a href="/iptv-for-samsung-tv" className="text-blue-400 hover:text-blue-300 underline">Watch on your Samsung Smart TV</a>, Firestick, Apple TV, or mobile, our app gives you an unparalleled viewing experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full UK Channel List */}
                    <div id="uk-channels" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Full UK Channel List (Sports, Cinema & Entertainment)
                        </h2>

                        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The ultimate package for any British household. Over <span className="text-white font-semibold">1,500+ dedicated UK channels</span> in crystal clear HD and 4K.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">⚽ Premium Sports</h4>
                                    <p className="text-gray-300 text-sm mb-3">All Sky Sports channels (Main Event, Premier League, F1, etc.), TNT Sports 1-4, Eurosport, BoxNation.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Includes 3pm Kick-Offs</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">🎬 Cinema & Entertainment</h4>
                                    <p className="text-gray-300 text-sm mb-3">Sky Cinema Premiere, Action, Comedy. Sky Atlantic, Sky Max, Sky Showcase, Comedy Central, MTV.</p>
                                    <p className="text-blue-400 text-sm font-semibold">VOD Daily Updates</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">🇬🇧 UK Terrestrial & Local</h4>
                                    <p className="text-gray-300 text-sm mb-3">BBC One/Two, ITV 1-4, Channel 4, Channel 5, Dave, E4, More4, local regional news variations.</p>
                                    <p className="text-blue-400 text-sm font-semibold">With Catch-Up TV</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section (10% Transactional) -> GBP £ */}
                    <div id="pricing" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Premium UK Plans
                        </h2>

                        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                            Choose the plan that fits your streaming needs. All plans include <span className="text-white font-semibold">all UK premium channels</span>, <span className="text-white font-semibold">140,000+ VOD titles</span>, <span className="text-white font-semibold">4K streaming</span>, and <span className="text-white font-semibold">24/7 support</span>. No hidden fees.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* 1 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month UK IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Monthly Plan</h3>
                                <p className="text-gray-400 mb-6">Perfect for testing our UK service</p>
                                <div className="mb-6">
                                    <p className="text-3xl md:text-4xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">£24.99</span>
                                        <span>£8.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">All Sky &amp; TNT Sports</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">140,000+ Movies &amp; Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Streaming</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('UK Monthly Plan - 1 Screen', '£8.99', '/images/boxes/Box_IPTV_MONTH1.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get Instant Access
                                </button>
                            </div>

                            {/* 12 Month Plan (Best Value) */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 relative flex flex-col scale-105 shadow-2xl shadow-blue-500/20">
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-sm px-6 py-2 rounded-full whitespace-nowrap">
                                    BEST VALUE - SAVE 75%
                                </span>
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Month UK IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Yearly Plan</h3>
                                <p className="text-gray-400 mb-6">Most popular choice for UK viewers</p>
                                <div className="mb-6">
                                    <p className="text-4xl md:text-5xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">£189.99</span>
                                        <span>£49.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Everything in Monthly Plan</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300"><strong className="text-white">Save £140/year</strong></span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Locked-in Price Guarantee</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('UK Yearly Plan - 1 Screen', '£49.99', '/images/boxes/Box_IPTV_MONTH12.png')}
                                    className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                                >
                                    Get Instant Access
                                </button>
                            </div>

                            {/* 6 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Month UK IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">6-Month Plan</h3>
                                <p className="text-gray-400 mb-6">Great balance of value</p>
                                <div className="mb-6">
                                    <p className="text-3xl md:text-4xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">£99.99</span>
                                        <span>£32.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">All Sky &amp; TNT Sports</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">140,000+ Movies &amp; Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Streaming</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('UK 6-Month Plan - 1 Screen', '£32.99', '/images/boxes/Box_IPTV_MONTH6.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get Instant Access
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Informational (20%) - FAQ Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            FAQ for UK Streamers
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <FaqItem
                                question="Is IPTV legal in the UK?"
                                answer="Technically, IPTV hardware and software are perfectly legal in the UK. Many official services, like BBC iPlayer and Sky Glass, utilize IPTV protocols. Legality largely depends on the content streamed and licensing. Streamverse operates as a private subscription-based application. Users are solely responsible for ensuring they adhere to local copyright laws."
                            />
                            <FaqItem
                                question="Can I watch BBC iPlayer content?"
                                answer="Yes, our service includes all live UK terrestrial channels, including the complete BBC lineup (BBC One, Two, Four, News, etc.) in HD and 4K variations where available. VOD content recently aired on terrestrial networks is also added to our expansive Catch-Up and Video on Demand library regularly."
                            />
                            <FaqItem
                                question="Do you accept UK Debit/Credit cards and Crypto?"
                                answer="Yes! We accept standard UK Visa and Mastercard credit and debit cards, perfectly securely through our checkout system. We also optionally accept cryptocurrency payments (Bitcoin, Ethereum, USDT) for customers prioritizing enhanced privacy."
                            />
                            <FaqItem
                                question="Will 3pm kick-offs be blocked?"
                                answer="No. Because our service taps into multiple global sports feeds, including ones showing the matches unaffected by the UK domestic blackout rules, you will have access to every single Premier League match regardless of the broadcast time."
                            />
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start Streaming the UK&apos;s Best IPTV Today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Join 50,000+ happy UK streamers getting flawless Sky &amp; TNT Sports in stunning 4K.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                        >
                            Get Instant Access Now →
                        </a>
                        <p className="text-blue-100 text-sm mt-4">✓ No contract required  ✓ Cancel anytime  ✓ 24/7 UK support</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BestIPTVUKPage;
