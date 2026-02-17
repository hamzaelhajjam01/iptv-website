"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CheckoutPopup from '../../components/CheckoutPopup';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';

// FAQ Component (Replicated from page template)
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

const HowToSetupFirestickPage: React.FC = () => {
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
                    {/* Hero Section with Background */}
                    <div className="relative mb-16 -mx-6 px-6 py-20 md:py-32 rounded-xl overflow-hidden">
                        {/* Background Image with Overlay - Using same hero for consistency */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/firestick-iptv-hero.png"
                                alt="Firestick remote with TV background setup guide"
                                fill
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-section-dark/80 via-section-dark/90 to-section-dark"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                                How to Setup IPTV on Firestick: The Ultimate 2026 Installation Guide
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                                Tired of buffering? Master your streaming with our 2026 Firestick setup guide. Follow our step-by-step instructions for <span className="text-white font-semibold">4K quality</span>, <span className="text-white font-semibold">instant activation</span>, and <span className="text-white font-semibold">zero buffering</span>. Start streaming today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#installation"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Start Setup Guide →
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-gray-700"
                                >
                                    Get Subscription
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Pre-Setup Checklist (Educational 40%) */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Pre-Setup Checklist: Optimizing Your Firestick
                        </h2>
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Before installing any IPTV player, it&apos;s crucial to prepare your Amazon Fire TV Stick to accept third-party applications. This process is called &quot;Jailbreaking&quot; or &quot;Sideloading,&quot; and it is 100% legal and safe. It simply removes Amazon&apos;s restrictions to allow you to install the best streaming apps.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-yellow-500">
                                    <h3 className="text-xl font-bold text-white mb-2">Requirements</h3>
                                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                        <li>Any Fire TV Stick (Lite, 4K, 4K Max, Cube)</li>
                                        <li>Stable Internet Connection (25 Mbps+ recommended)</li>
                                        <li>StreamVerse Subscription (Username & Password)</li>
                                        <li>10 Minutes of Free Time</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-green-500">
                                    <h3 className="text-xl font-bold text-white mb-2">What We Will Do</h3>
                                    <ol className="list-decimal pl-5 text-gray-300 space-y-1">
                                        <li>Enable &quot;Developer Options&quot;</li>
                                        <li>Install the &quot;Downloader&quot; App</li>
                                        <li>Install IPTV Smarters Pro (or TiviMate)</li>
                                        <li>Login with StreamVerse Credentials</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 1: Developer Options */}
                    <div id="installation" className="mb-16">
                        <div className="flex items-center mb-6">
                            <span className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4 flex-shrink-0">1</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Phase 1: Enabling Developer Options</h2>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 mb-6">
                                Newer Firestick updates have hidden the &quot;Developer Options&quot; menu by default. Here is the trick to unlock it:
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Go to <strong>Settings</strong> (Gear Icon) on the far right of the home menu.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Select <strong>My Fire TV</strong>.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Click on <strong>About</strong>.</span>
                                        </li>
                                        <li className="flex items-start bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span><strong>CRITICAL STEP:</strong> Highlight <strong>Fire TV Stick 4K</strong> (or your device name) and click the Select button on your remote <strong>7 times rapidly</strong>. You will see a message: &quot;No need, you are already a developer.&quot;</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Press the Back button once. You will now see <strong>Developer Options</strong> appear in the menu.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Click it and turn <strong>ON</strong> &quot;Apps from Unknown Sources&quot;.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border-2 border-gray-700 bg-black/50">
                                    <Image
                                        src="/images/firestick/10-firestick-guide-streamverse.webp"
                                        alt="Firestick Settings About screen for Developer Options enabling"
                                        fill
                                        className="object-contain"
                                    />
                                    {/* Placeholder text if image fails or for clarity */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">Image: About Menu / Developer Options</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2: Installing Downloader */}
                    <div className="mb-16">
                        <div className="flex items-center mb-6">
                            <span className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4 flex-shrink-0">2</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Phase 2: Installing the Downloader Tool</h2>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 mb-6">
                                Since IPTV apps aren&apos;t in the Amazon App Store, we need a special browser called &quot;Downloader&quot; to get them.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 relative h-64 md:h-80 w-full rounded-xl overflow-hidden border-2 border-gray-700 bg-black/50">
                                    <Image
                                        src="/images/firestick/5-firestick-guide-streamverse.webp"
                                        alt="Searching for Downloader App on Amazon Fire TV Search"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">Image: Search Icon / "Downloader"</span>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Press the <strong>Home</strong> button on your remote.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Navigate to the <strong>Find/Search</strong> icon (magnifying glass).</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Type <strong>&quot;Downloader&quot;</strong>.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Select the orange app icon titled <strong>&quot;Downloader&quot;</strong> by AFTVnews.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Click <strong>Get</strong> or <strong>Download</strong>.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>Once installed, Open the app and allow any permission requests.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3: Setting Up Player */}
                    <div className="mb-16">
                        <div className="flex items-center mb-6">
                            <span className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4 flex-shrink-0">3</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Phase 3: Setting Up Your IPTV Player</h2>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 mb-6 font-semibold">
                                Choose your preferred player. We strongly recommend <span className="text-white">IPTV Smarters Pro</span> for beginners due to its user-friendly interface.
                            </p>

                            <div className="bg-gray-800/80 rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Option A: IPTV Smarters Pro (Recommended)</h3>
                                <ol className="list-decimal pl-5 text-gray-300 space-y-3">
                                    <li>Open the <strong>Downloader</strong> app.</li>
                                    <li>Click into the URL box and enter this code: <span className="text-yellow-400 font-mono text-lg font-bold">78522</span> (or type <code>https://iptvsmarters.app</code>).</li>
                                    <li>Click <strong>Go</strong>. The file will start downloading automatically.</li>
                                    <li>Click <strong>Install</strong> when the download finishes.</li>
                                    <li>Click <strong>Done</strong> (do not open yet). Delete the installation file to save space.</li>
                                    <li>Return to your Apps list and open <strong>IPTV Smarters Pro</strong>.</li>
                                </ol>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6 border-t border-gray-700">
                                <h3 className="text-xl font-bold text-gray-300 mb-2">Option B: TiviMate (Advanced)</h3>
                                <p className="text-sm text-gray-400 mb-4">Best for power users who want a cable-like TV guide experience. Note: Some features require a separate premium license.</p>
                                <p className="text-sm text-gray-400">Use Downloader code: <span className="text-white font-mono font-bold">191081</span> (Official TiviMate).</p>
                            </div>
                        </div>
                    </div>

                    {/* Commercial Content (30%) - The Pitch */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-xl p-8 mb-20">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">⚠️ Use the Right Server!</h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    You have installed the app (the &quot;car&quot;), but now you need the fuel (the &quot;server&quot;) to make it run.
                                    <br /><br />
                                    <strong>Warning:</strong> Connecting free or cheap servers to Smarters Pro will result in:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-red-400">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Constant Buffering & Freezing
                                    </li>
                                    <li className="flex items-center text-red-400">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Low Quality SD Streams (No 4K)
                                    </li>
                                    <li className="flex items-center text-red-400">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Missing Channels & Empty EPG
                                    </li>
                                </ul>
                                <p className="text-white font-semibold mb-6">
                                    For a flawless, buffer-free experience with access to <span className="text-cyan-400">50,000+ Channels</span> and <span className="text-cyan-400">4K Sports</span>, use the StreamVerse Premium Server.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-full min-h-[300px] w-full rounded-xl overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20">
                                <Image
                                    src="/images/firestick/16-firestick-guide-streamverse.webp"
                                    alt="IPTV Smarters Pro Login Screen using Xtream Codes API"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="bg-black/70 text-white px-3 py-2 text-sm rounded font-bold">Recommended: StreamVerse Premium Login</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section (10% Transactional) - Reused from template */}
                    <div id="pricing" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Start Streaming in 5 Minutes
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* 1 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month IPTV Plan for Firestick" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Monthly Plan</h3>
                                <p className="text-gray-400 mb-6">Test the quality risk-free</p>
                                <p className="text-4xl font-extrabold mb-6 text-white">
                                    <span className="text-2xl text-gray-400 line-through">$29.99</span> $9.99
                                </p>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">50,000+ Live Channels</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">No Buffering Tech</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('Monthly Plan - 1 Screen', '$9.99', '/images/boxes/Box_IPTV_MONTH1.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get Started
                                </button>
                            </div>

                            {/* 12 Month Plan (Best Value) */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 relative flex flex-col scale-105 shadow-2xl shadow-blue-500/20">
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-sm px-6 py-2 rounded-full whitespace-nowrap">
                                    BEST VALUE - SAVE 75%
                                </span>
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Month IPTV Plan for Firestick" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Yearly Plan</h3>
                                <p className="text-gray-400 mb-6">Most popular choice</p>
                                <p className="text-5xl font-extrabold mb-6 text-white">
                                    <span className="text-2xl text-gray-400 line-through">$239.99</span> $59.99
                                </p>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300"><strong className="text-white">Save $180/year</strong></span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Priority Support</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('Yearly Plan - 1 Screen', '$59.99', '/images/boxes/Box_IPTV_MONTH12.png')}
                                    className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                                >
                                    Get Started
                                </button>
                            </div>

                            {/* 6 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Month IPTV Plan for Firestick" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">6-Month Plan</h3>
                                <p className="text-gray-400 mb-6">Great balance</p>
                                <p className="text-4xl font-extrabold mb-6 text-white">
                                    <span className="text-2xl text-gray-400 line-through">$119.99</span> $37.99
                                </p>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300"><strong className="text-white">Save $82</strong></span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Included Full Tech Support</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('6-Month Plan - 1 Screen', '$37.99', '/images/boxes/Box_IPTV_MONTH6.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips / Informational (20%) */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">💡 Pro Tip: Clear Your Cache</h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                Firesticks have limited storage. If your stream starts buffering after a few months, it&apos;s likely a full cache.
                            </p>
                            <div className="bg-black/40 p-4 rounded-lg">
                                <p className="text-blue-400 font-mono text-sm">Settings &gt; Applications &gt; Manage Installed Applications &gt; IPTV Smarters Pro &gt; Clear Cache (NOT Clear Data!)</p>
                            </div>
                        </div>
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">🛡️ Do I Need a VPN?</h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                If you live in the <strong>UK</strong> or <strong>USA</strong>, your Internet Provider (ISP) may throttle streaming during peak hours (football games).
                            </p>
                            <p className="text-gray-300 text-sm">
                                We recommend using a VPN like <strong>NordVPN</strong> or <strong>Surfshark</strong> to encrypt your data and prevent throttling.
                            </p>
                        </div>
                    </div>

                    {/* FAQ & Troubleshooting */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Troubleshooting Common Setup Issues
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <FaqItem
                                question="I get a 'Parse Error' when installing Smarters. What do I do?"
                                answer="This usually means the download was incomplete or corrupted. Delete the file in Downloader and try downloading it again. Ensure you have a stable internet connection. If it persists, try an alternative code or URL."
                            />
                            <FaqItem
                                question="My channels are buffering. Is it the app or the server?"
                                answer="90% of buffering is caused by local internet instability or ISP throttling. 1. Reboot your router. 2. Use an Ethernet cable if possible. 3. If you are in the UK/USA during a big game, try a VPN. If issues persist, contact StreamVerse support to check your nearest server location."
                            />
                            <FaqItem
                                question="How do I add EPG (TV Guide)?"
                                answer="If you logged in using Xtream Codes (as shown in Phase 3), the EPG is added automatically! Just click 'Install EPG' on the main dashboard of IPTV Smarters Pro and wait for it to load."
                            />
                            <FaqItem
                                question="Can I use this on my other TV?"
                                answer="Yes! Your StreamVerse credentials work on any device. However, you can only watch on as many screens simultaneously as your plan allows (1, 2, or 3 connections). Check our pricing to add more screens."
                            />
                        </div>
                    </div>

                    {/* Internal Linking (The Mesh) */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-blue-500/30 rounded-xl p-8 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More Firestick Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a href="/best-iptv-firestick" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Best IPTV for Firestick Plans</h3>
                                <p className="text-gray-300 text-sm">Already know how to setup? Browse our optimized Firestick plans and features.</p>
                                <span className="text-green-400 text-xs font-bold mt-2 inline-block uppercase tracking-wider">Active</span>
                            </a>
                            <a href="/best-iptv-usa" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Best IPTV USA Guide</h3>
                                <p className="text-gray-300 text-sm">Looking for the best US channel list for your device? See our USA channel lineup.</p>
                                <span className="text-green-400 text-xs font-bold mt-2 inline-block uppercase tracking-wider">Active</span>
                            </a>
                        </div>
                        <div className="mt-6 grid md:grid-cols-3 gap-4 opacity-75">
                            <div className="p-4 border border-gray-800 rounded text-center">
                                <span className="text-gray-500 text-sm block">Best IPTV UK</span>
                                <span className="text-xs text-yellow-500 font-mono">Coming Soon</span>
                            </div>
                            <div className="p-4 border border-gray-800 rounded text-center">
                                <span className="text-gray-500 text-sm block">Samsung TV Guide</span>
                                <span className="text-xs text-yellow-500 font-mono">Coming Soon</span>
                            </div>
                            <div className="p-4 border border-gray-800 rounded text-center">
                                <span className="text-gray-500 text-sm block">Android Box Setup</span>
                                <span className="text-xs text-yellow-500 font-mono">Coming Soon</span>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Watch?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Setup takes 5 minutes. Support is 24/7. Buffering is zero.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                        >
                            Get My Login Details →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowToSetupFirestickPage;
