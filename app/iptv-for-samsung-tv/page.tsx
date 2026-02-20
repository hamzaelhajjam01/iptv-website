"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CheckoutPopup from '../../components/CheckoutPopup';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';

// FAQ Component
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

const IPTVSamsungTVPage: React.FC = () => {
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

                    {/* ── Hero Section ── */}
                    <div className="relative mb-16 -mx-6 px-6 py-20 md:py-32 rounded-xl overflow-hidden">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/samsung-tv-iptv-hero.png"
                                alt="Samsung Smart TV IPTV app setup menu"
                                fill
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-section-dark/80 via-section-dark/90 to-section-dark"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                                Crystal Clear 4K Streaming in 60 Seconds | IPTV for Samsung Smart TV
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                                Turn your Samsung Smart TV into the ultimate entertainment powerhouse with StreamVerse IPTV. Tap into{' '}
                                <span className="text-white font-semibold">50,000+ live channels</span>,{' '}
                                <span className="text-white font-semibold">140,000+ movies &amp; series</span>, and{' '}
                                <span className="text-white font-semibold">4K UHD sports</span> — fully optimised for Samsung Tizen OS via IPTV Smarters &amp; Smart STB.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#pricing"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Choose Your Samsung IPTV Plan →
                                </a>
                                <a
                                    href="#installation"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-gray-700"
                                >
                                    View Setup Guide
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Commercial Content (30 %) — Why StreamVerse on Samsung ── */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Why StreamVerse is the Best IPTV for Samsung Smart TV
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Feature 1 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Tizen OS Native Compatibility</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            StreamVerse is tested and verified on <span className="text-white font-semibold">Samsung Tizen OS 4.0 and above</span>. Our streams load instantly via{' '}
                                            <span className="text-white font-semibold">IPTV Smarters Pro</span>,{' '}
                                            <span className="text-white font-semibold">Smart STB</span>, and{' '}
                                            <span className="text-white font-semibold">SET IPTV</span> — the three top-rated apps for Samsung Smart TVs. No freezes, no compatibility headaches.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">True 4K UHD &amp; HDR Streams</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Samsung QLED and Neo QLED owners get the full picture. StreamVerse delivers{' '}
                                            <span className="text-white font-semibold">4K Ultra HD at 60 fps</span> with{' '}
                                            <span className="text-white font-semibold">HDR10 support</span>, so sports events, blockbusters, and premium live channels all look razor-sharp on your Samsung panel.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">99.9 % Uptime — Zero Buffering</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Our <span className="text-white font-semibold">Anti-Freeze Technology</span> and multi-server redundancy guarantee{' '}
                                            <span className="text-white font-semibold">99.9 % uptime</span>. Even during peak hours and major live sporting events, your Samsung Smart TV won&apos;t drop a frame.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">60-Second Activation</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            No technician visits. No hardware dongles. Subscribe, install your preferred app, paste your credentials, and start streaming — all within{' '}
                                            <span className="text-white font-semibold">60 seconds</span>. Cancel anytime, no contracts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">StreamVerse vs Cable TV vs Other IPTV Services</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="pb-4 text-gray-400 font-semibold">Feature</th>
                                            <th className="pb-4 text-blue-400 font-bold">StreamVerse IPTV</th>
                                            <th className="pb-4 text-gray-400 font-semibold">Cable TV</th>
                                            <th className="pb-4 text-gray-400 font-semibold">Other IPTV</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Monthly Cost</td>
                                            <td className="py-4 text-green-400 font-bold">$9.99 – $59.99</td>
                                            <td className="py-4">$80 – $150+</td>
                                            <td className="py-4">$15 – $40</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Live Channels</td>
                                            <td className="py-4 text-green-400 font-bold">50,000+</td>
                                            <td className="py-4">200 – 500</td>
                                            <td className="py-4">5,000 – 15,000</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">VOD Library</td>
                                            <td className="py-4 text-green-400 font-bold">140,000+ titles</td>
                                            <td className="py-4">Limited (extra cost)</td>
                                            <td className="py-4">20,000 – 50,000</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">4K UHD Quality</td>
                                            <td className="py-4 text-green-400 font-bold">✓ 4K/60fps + HDR</td>
                                            <td className="py-4">✓ (limited channels)</td>
                                            <td className="py-4">✗ Mostly 1080p</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Samsung App Support</td>
                                            <td className="py-4 text-green-400 font-bold">✓ IPTV Smarters, Smart STB, SET IPTV</td>
                                            <td className="py-4">✗ Proprietary only</td>
                                            <td className="py-4">Varies</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Setup Time</td>
                                            <td className="py-4 text-green-400 font-bold">60 seconds</td>
                                            <td className="py-4">3–7 days (technician)</td>
                                            <td className="py-4">10–30 minutes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold">Support Response</td>
                                            <td className="py-4 text-green-400 font-bold">Under 5 minutes</td>
                                            <td className="py-4">24–48 hours</td>
                                            <td className="py-4">Varies (often slow)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* ── Educational Setup Guide (40 %) ── */}
                    <div id="installation" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            How to Install IPTV on Samsung Smart TV (Step-by-Step)
                        </h2>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Samsung Smart TVs run <span className="text-white font-semibold">Tizen OS</span>, which does not allow direct third-party APK installs. Instead, you&apos;ll use one of two officially available IPTV apps from the Samsung App Store:{' '}
                                <span className="text-white font-semibold">IPTV Smarters Pro</span> or{' '}
                                <span className="text-white font-semibold">SET IPTV</span>. Both work flawlessly with StreamVerse. Choose the method that suits you.
                            </p>

                            {/* Method A — IPTV Smarters */}
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                                    Method A: IPTV Smarters Pro (Recommended)
                                </h3>

                                {/* Step 1 */}
                                <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">1</span>
                                        Open the Samsung Smart Hub &amp; Search for IPTV Smarters
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        From your Samsung Smart TV home screen, navigate to the built-in app store. IPTV Smarters Pro is available directly — no sideloading needed.
                                    </p>
                                    <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                        <li>Press the <span className="text-white font-semibold">Home</span> button on your Samsung remote</li>
                                        <li>Go to <span className="text-white font-semibold">Apps</span> in the Smart Hub</li>
                                        <li>Click the <span className="text-white font-semibold">Search</span> icon (magnifying glass) in the top-right corner</li>
                                        <li>Type <span className="text-white font-semibold">&quot;IPTV Smarters&quot;</span> and press Enter</li>
                                        <li>Select <span className="text-white font-semibold">IPTV Smarters Pro</span> from the results</li>
                                    </ul>
                                    <div className="mt-4 bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                                        <p className="text-blue-200 text-sm">
                                            <strong>💡 Pro Tip:</strong> If the app doesn&apos;t appear in your region, skip to Method B (SET IPTV) below — it&apos;s available worldwide.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">2</span>
                                        Install &amp; Open IPTV Smarters Pro
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        The installation is handled entirely by Samsung — no extra steps required.
                                    </p>
                                    <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                        <li>Click <span className="text-white font-semibold">Download</span> or <span className="text-white font-semibold">Install</span></li>
                                        <li>Wait 30–60 seconds for the installation to complete</li>
                                        <li>Click <span className="text-white font-semibold">Open</span> or find the app in your <span className="text-white font-semibold">Apps</span> library</li>
                                    </ul>
                                </div>

                                {/* Step 3 */}
                                <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">3</span>
                                        Add Your StreamVerse Account via Xtream Codes
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        After subscribing to StreamVerse, you&apos;ll receive your login credentials by email. Enter them directly into the app.
                                    </p>
                                    <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                        <li>On the IPTV Smarters Pro welcome screen, select <span className="text-white font-semibold">Login with Xtream Codes API</span></li>
                                        <li>Enter your <span className="text-white font-semibold">Server URL</span>, <span className="text-white font-semibold">Username</span>, and <span className="text-white font-semibold">Password</span> from your welcome email</li>
                                        <li>Tap <span className="text-white font-semibold">Add User</span></li>
                                        <li>Wait 5–10 seconds for your full channel list and EPG to load</li>
                                        <li>Start streaming immediately — no additional setup required!</li>
                                    </ul>
                                    <div className="mt-4 bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                                        <p className="text-green-200 text-sm">
                                            <strong>✅ Success Check:</strong> You should now see Live TV, Movies, Series, and Catch-Up categories. Your Samsung IPTV setup is complete!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Aid */}
                            <div className="mb-10 rounded-xl overflow-hidden border-2 border-blue-500/30 max-w-2xl mx-auto">
                                <Image
                                    src="/images/samsung-tv-iptv-smarters-setup.png"
                                    alt="Samsung Smart TV IPTV app setup menu showing IPTV Smarters login screen"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Method B — SET IPTV */}
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                                    Method B: SET IPTV (Works in All Regions)
                                </h3>

                                {/* Step 1 */}
                                <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-violet-500">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <span className="bg-violet-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">1</span>
                                        Install SET IPTV from the Samsung App Store
                                    </h3>
                                    <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                        <li>Press <span className="text-white font-semibold">Home</span> → <span className="text-white font-semibold">Apps</span> → <span className="text-white font-semibold">Search</span></li>
                                        <li>Type <span className="text-white font-semibold">&quot;SET IPTV&quot;</span> and select it from the results</li>
                                        <li>Click <span className="text-white font-semibold">Install</span> and wait for the download to complete</li>
                                        <li>Open the app from your Apps library</li>
                                    </ul>
                                </div>

                                {/* Step 2 */}
                                <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-violet-500">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <span className="bg-violet-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">2</span>
                                        Note Your SET IPTV Code and Activate Via Browser
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        SET IPTV uses a unique browser-based activation flow — perfect for Samsung TVs.
                                    </p>
                                    <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                        <li>Open SET IPTV on your Samsung TV — you&apos;ll see a unique <span className="text-white font-semibold">Device Code</span> on screen</li>
                                        <li>On your phone or computer, open a browser and visit <span className="bg-gray-900 text-cyan-400 font-mono px-2 py-1 rounded">setiptv.com</span></li>
                                        <li>Click <span className="text-white font-semibold">Settings</span> and enter your device code</li>
                                        <li>Paste in the <span className="text-white font-semibold">M3U playlist URL</span> from your StreamVerse welcome email</li>
                                        <li>Click <span className="text-white font-semibold">Save</span> — the channel list loads instantly on your TV</li>
                                    </ul>
                                    <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                                        <p className="text-yellow-200 text-sm">
                                            <strong>⚠️ Important:</strong> StreamVerse sends your M3U URL along with your Xtream Codes in the welcome email. Contact our 24/7 support via WhatsApp if you can&apos;t locate it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Aid — Multi-Device */}
                            <div className="mt-8 rounded-xl overflow-hidden border-2 border-blue-500/30 max-w-2xl mx-auto">
                                <Image
                                    src="/images/abonnement-iptv-multi-devices.webp"
                                    alt="Samsung Smart TV IPTV app setup menu — StreamVerse works across all devices"
                                    width={1000}
                                    height={750}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Alternative Apps */}
                        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-blue-400 mb-4">Alternative IPTV Apps Compatible with Samsung Smart TV</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                StreamVerse works with all major IPTV player apps. If you prefer a different interface, these options also support Samsung Tizen OS:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">Smart STB</h4>
                                    <p className="text-gray-300 text-sm mb-3">Emulates a set-top box environment on your Samsung TV. Ideal for users who want a traditional EPG-style interface with advanced catch-up features.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Available on Samsung App Store</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">SS IPTV</h4>
                                    <p className="text-gray-300 text-sm mb-3">Lightweight and fast. Excellent for 4K streams on high-end Samsung QLED panels. Supports Xtream Codes and M3U playlists natively.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Available on Samsung App Store</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">OTT Navigator</h4>
                                    <p className="text-gray-300 text-sm mb-3">Netflix-style browsing interface. Great for families who want an intuitive layout for movies, series, and live TV on Samsung screens.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Install via Smart Hub</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Pricing Section (10 %) ── */}
                    <div id="pricing" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Choose Your Samsung IPTV Plan
                        </h2>

                        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                            Every plan includes <span className="text-white font-semibold">50,000+ live channels</span>,{' '}
                            <span className="text-white font-semibold">140,000+ VOD titles</span>,{' '}
                            <span className="text-white font-semibold">4K UHD streaming</span>, and{' '}
                            <span className="text-white font-semibold">24/7 support</span>. No hidden fees, no contracts.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* 1 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month IPTV Plan for Samsung Smart TV" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Monthly Plan</h3>
                                <p className="text-gray-400 mb-6">Perfect for testing our service</p>
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
                                        <span className="text-gray-300">140,000+ Movies &amp; Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K UHD Sports Streaming</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">EPG &amp; Catch-up TV</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">24/7 Support</span>
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
                                    BEST VALUE – SAVE 75 %
                                </span>
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Month IPTV Plan for Samsung Smart TV" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Yearly Plan</h3>
                                <p className="text-gray-400 mb-6">Most popular choice</p>
                                <p className="text-5xl font-extrabold mb-6 text-white">
                                    <span className="text-2xl text-gray-400 line-through">$239.99</span> $59.99
                                </p>
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
                                        <span className="text-gray-300">Priority Support</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Free App Updates</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">Locked-in Price Guarantee</span>
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
                                    <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Month IPTV Plan for Samsung Smart TV" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">6-Month Plan</h3>
                                <p className="text-gray-400 mb-6">Great balance of value &amp; flexibility</p>
                                <p className="text-4xl font-extrabold mb-6 text-white">
                                    <span className="text-2xl text-gray-400 line-through">$119.99</span> $37.99
                                </p>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">50,000+ Live Channels</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">140,000+ Movies &amp; Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K UHD Sports Streaming</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300"><strong className="text-white">Save $82</strong></span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">24/7 Support</span>
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

                        <div className="text-center mt-8">
                            <p className="text-gray-400 text-sm">
                                💡 Need multiple screens? Add extra connections for just <span className="text-white font-semibold">$10/month per screen</span>
                            </p>
                        </div>
                    </div>

                    {/* ── FAQ Section (20 %) ── */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Frequently Asked Questions — IPTV on Samsung Smart TV
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <FaqItem
                                question="Can I install IPTV directly on my Samsung Smart TV?"
                                answer="Yes! Samsung Smart TVs (Tizen OS) support IPTV through apps available directly from the Samsung App Store. The most popular options are <strong>IPTV Smarters Pro</strong>, <strong>SET IPTV</strong>, and <strong>Smart STB</strong>. Unlike Android TV devices, you do not need to sideload any APK files — simply search for the app in the Smart Hub and install it like any other app."
                            />
                            <FaqItem
                                question="Which Samsung Smart TV models are compatible with IPTV?"
                                answer="StreamVerse IPTV is compatible with all Samsung Smart TVs running <strong>Tizen OS 4.0 and above</strong>, which covers most Samsung TVs made from 2017 onward. This includes:<br/><br/>• <strong>Samsung QLED</strong> (Q-series)<br/>• <strong>Samsung Neo QLED</strong> (QN-series)<br/>• <strong>Samsung OLED</strong><br/>• <strong>Samsung The Frame</strong><br/>• <strong>Samsung Crystal UHD</strong> (2017 – present)<br/><br/>To check your Tizen OS version, go to Settings → Support → About This TV."
                            />
                            <FaqItem
                                question="Does Samsung Smart TV restrict IPTV apps in certain regions?"
                                answer="Some Samsung apps — including IPTV Smarters Pro — may not appear in the App Store in certain countries due to regional store restrictions.<br/><br/><strong>Solution 1:</strong> Use <strong>SET IPTV</strong> or <strong>SS IPTV</strong>, which are available in virtually all regions via the Samsung App Store.<br/><br/><strong>Solution 2:</strong> Change your Samsung account's region to a supported country (e.g., USA or UK) in Settings → General → System Manager → Language → Samsung Account → Change Country.<br/><br/>Our 24/7 support team can guide you through either method in under 5 minutes."
                            />
                            <FaqItem
                                question="Do I need a VPN to use IPTV on my Samsung Smart TV?"
                                answer="A VPN is not required to use StreamVerse on your Samsung Smart TV, but it offers three key benefits:<br/><br/>1. <strong>Privacy:</strong> Hides your streaming activity from your ISP<br/>2. <strong>Speed:</strong> Prevents ISP throttling on streaming traffic<br/>3. <strong>Geo-access:</strong> Unblocks region-locked channels<br/><br/>For Samsung Smart TVs, we recommend installing the VPN on your <strong>router</strong> (since most VPN apps are not natively available on Tizen) or using a VPN-enabled Wi-Fi hotspot from your phone. Popular choices include <strong>ExpressVPN</strong>, <strong>NordVPN</strong>, and <strong>Surfshark</strong>."
                            />
                            <FaqItem
                                question="Why is my IPTV buffering on Samsung Smart TV?"
                                answer="Buffering on Samsung Smart TVs is usually caused by one of these factors:<br/><br/>1. <strong>Slow internet:</strong> 4K streams need at least 25 Mbps — run a speed test first<br/>2. <strong>Wi-Fi signal:</strong> Move your router closer or use a wired Ethernet connection (via Samsung&apos;s LAN port)<br/>3. <strong>App cache:</strong> Clear the IPTV app&apos;s cache in Settings → Apps → [App Name] → Clear Cache<br/>4. <strong>Server load:</strong> Contact our support — we can switch you to a faster server in your region<br/>5. <strong>Over-resolution:</strong> Drop from 4K to 1080p in the app settings if your connection is unstable<br/><br/>Most buffering issues are resolved within 5 minutes with these steps."
                            />
                            <FaqItem
                                question="Can I use my StreamVerse subscription on other devices in addition to Samsung TV?"
                                answer="Absolutely! Your StreamVerse subscription works across all IPTV-compatible devices. Depending on your plan, you can stream on 1, 2, or 3 screens simultaneously, including:<br/><br/>• <strong>Samsung Smart TV</strong> (via IPTV Smarters, SET IPTV)<br/>• <strong>Amazon Firestick</strong> (see our <a href='/best-iptv-firestick' class='text-blue-400 hover:text-blue-300'>Firestick guide</a>)<br/>• <strong>Android &amp; iOS:</strong> Phones and tablets<br/>• <strong>LG Smart TV, Sony TV</strong><br/>• <strong>Windows/Mac:</strong> via VLC or Kodi<br/>• <strong>MAG boxes and Formuler devices</strong>"
                            />
                            <FaqItem
                                question="What internet speed do I need for IPTV on Samsung Smart TV?"
                                answer="Recommended speeds for a smooth Samsung IPTV experience:<br/><br/>• <strong>SD (480p):</strong> 3–5 Mbps<br/>• <strong>HD (720p):</strong> 5–8 Mbps<br/>• <strong>Full HD (1080p):</strong> 10–15 Mbps<br/>• <strong>4K UHD Streaming:</strong> 25–35 Mbps<br/><br/>For the best experience on a Samsung QLED or Neo QLED screen, connect your TV directly to your router with an Ethernet cable rather than relying on Wi-Fi."
                            />
                        </div>
                    </div>

                    {/* ── Internal Linking Section ── */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-blue-500/30 rounded-xl p-8 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More StreamVerse Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a href="/best-iptv-firestick" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Best IPTV for Firestick</h3>
                                <p className="text-gray-300 text-sm">Full setup guide for Amazon Fire TV Stick 4K and Fire TV Cube — with IPTV Smarters and TiviMate.</p>
                            </a>
                            <a href="/best-iptv-usa" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Best IPTV USA Guide</h3>
                                <p className="text-gray-300 text-sm">Discover the best US channels available on StreamVerse — sports, news, and premium entertainment networks.</p>
                            </a>
                        </div>
                    </div>

                    {/* ── Final CTA ── */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start Streaming 50,000+ Channels on Your Samsung Smart TV Today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Join 50,000+ happy streamers worldwide. Crystal-clear 4K UHD, 99.9 % uptime, and 60-second activation — guaranteed.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                        >
                            Choose Your Samsung IPTV Plan →
                        </a>
                        <p className="text-blue-100 text-sm mt-4">✓ No contract required &nbsp; ✓ Cancel anytime &nbsp; ✓ 24/7 support</p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default IPTVSamsungTVPage;
