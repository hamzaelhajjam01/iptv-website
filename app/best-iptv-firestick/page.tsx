"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
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

const BestIPTVFirestickPage: React.FC = () => {
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
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/firestick-iptv-hero.png"
                                alt="Firestick remote with TV background"
                                fill
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-section-dark/80 via-section-dark/90 to-section-dark"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                                Best IPTV for Firestick 2026: The Ultimate Streaming Guide
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                                Transform your Amazon Fire TV Stick into the ultimate entertainment hub with StreamVerse IPTV. Get instant access to <span className="text-white font-semibold">50,000+ live channels</span>, <span className="text-white font-semibold">140,000+ movies & series</span>, and <span className="text-white font-semibold">4K/60fps sports</span> streaming—all optimized for Firestick.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#pricing"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Get Started →
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
                    {/* Container continues... */}

                    {/* Educational Content (40%) - Installation Guide */}
                    <div id="installation" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            How to Install IPTV on Firestick (Step-by-Step)
                        </h2>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <div className="mb-8">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Setting up StreamVerse IPTV on your Amazon Fire TV Stick or Fire TV Cube takes less than 5 minutes. Our service works seamlessly with all Firestick models, including the <span className="text-white font-semibold">Fire TV Stick 4K</span>, <span className="text-white font-semibold">Fire TV Stick 4K Max</span>, and <span className="text-white font-semibold">Fire TV Cube</span>. Follow this comprehensive guide to get streaming instantly.
                                </p>
                            </div>

                            {/* Step 1 */}
                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">1</span>
                                    Enable Apps from Unknown Sources
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    This is a critical first step that allows your Firestick to install third-party IPTV applications. Don't worry—this is completely safe and reversible.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>From your Firestick home screen, navigate to <span className="text-white font-semibold">Settings</span> (gear icon at the top)</li>
                                    <li>Select <span className="text-white font-semibold">My Fire TV</span> or <span className="text-white font-semibold">Device</span></li>
                                    <li>Click on <span className="text-white font-semibold">Developer Options</span></li>
                                    <li>Turn ON <span className="text-white font-semibold">Apps from Unknown Sources</span></li>
                                    <li>When the warning appears, click <span className="text-white font-semibold">Turn On</span> to confirm</li>
                                </ul>
                                <div className="mt-4 bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                                    <p className="text-blue-200 text-sm">
                                        <strong>💡 Pro Tip:</strong> If you don't see "Developer Options," you may need to enable it first by going to Settings → My Fire TV → About → Click on "Fire TV Stick" 7 times rapidly.
                                    </p>
                                </div>
                            </div>

                            {/* Visual Aid - Settings Screenshot */}
                            <div className="mb-8 rounded-xl overflow-hidden border-2 border-blue-500/30">
                                <Image
                                    src="/images/firestick-settings-screen.png"
                                    alt="Firestick settings menu showing Apps from Unknown Sources developer options enabled"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Step 2 */}
                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">2</span>
                                    Install the Downloader App
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    The Downloader app is the easiest way to sideload IPTV applications onto your Firestick. It's available directly from the Amazon App Store.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>Return to the Firestick home screen</li>
                                    <li>Click the <span className="text-white font-semibold">Search</span> icon (magnifying glass)</li>
                                    <li>Type <span className="text-white font-semibold">"Downloader"</span> using the on-screen keyboard</li>
                                    <li>Select the <span className="text-white font-semibold">Downloader</span> app by AFTVnews.com</li>
                                    <li>Click <span className="text-white font-semibold">Download</span> or <span className="text-white font-semibold">Get</span>, then wait for installation to complete</li>
                                    <li>Click <span className="text-white font-semibold">Open</span> when finished</li>
                                </ul>
                            </div>

                            {/* Step 3 */}
                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">3</span>
                                    Download IPTV Smarters Pro
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    IPTV Smarters Pro is the recommended player for StreamVerse. It offers the best performance, EPG integration, and user experience on Firestick.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>Open the Downloader app (allow permissions if prompted)</li>
                                    <li>In the URL field, enter: <span className="bg-gray-900 text-cyan-400 font-mono px-2 py-1 rounded">https://iptvsmarters.app</span></li>
                                    <li>Click <span className="text-white font-semibold">Go</span> and wait for the APK file to download</li>
                                    <li>When download completes, click <span className="text-white font-semibold">Install</span></li>
                                    <li>After installation, click <span className="text-white font-semibold">Done</span> (not "Open" yet)</li>
                                    <li>When Downloader asks to delete the file, click <span className="text-white font-semibold">Delete</span> to free up space</li>
                                </ul>
                                <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                                    <p className="text-yellow-200 text-sm">
                                        <strong>⚠️ Important:</strong> If you see a "Parse Error" during installation, your Firestick may have downloaded a corrupted file. Delete the APK in Downloader and try downloading again with a stable internet connection.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg">4</span>
                                    Enter Your Xtream Codes Credentials
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    After subscribing to StreamVerse, you'll receive an email with your login credentials. Here's how to activate your service:
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>Open <span className="text-white font-semibold">IPTV Smarters Pro</span> from your Firestick apps</li>
                                    <li>Select <span className="text-white font-semibold">Login with Xtream Codes API</span></li>
                                    <li>Enter the <span className="text-white font-semibold">Server URL</span>, <span className="text-white font-semibold">Username</span>, and <span className="text-white font-semibold">Password</span> from your welcome email</li>
                                    <li>Click <span className="text-white font-semibold">Add User</span></li>
                                    <li>Wait 5-10 seconds for the app to load your channel list and EPG</li>
                                    <li>Start streaming immediately—no additional configuration needed!</li>
                                </ul>
                                <div className="mt-4 bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                                    <p className="text-green-200 text-sm">
                                        <strong>✅ Success Indicator:</strong> Once logged in, you should see categories like "Live TV," "Movies," "Series," and "Catch-up" in the main menu. If you see these, your setup is complete!
                                    </p>
                                </div>
                            </div>

                            {/* Visual Aid - Multi-Device Compatibility */}
                            <div className="mt-8 rounded-xl overflow-hidden border-2 border-blue-500/30">
                                <Image
                                    src="/images/abonnement-iptv-multi-devices.webp"
                                    alt="StreamVerse IPTV works on Firestick and all devices - multi-screen streaming"
                                    width={1000}
                                    height={750}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Alternative Players */}
                        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-blue-400 mb-4">Alternative IPTV Players for Firestick</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                While we recommend IPTV Smarters Pro for most users, StreamVerse works with all major IPTV players. Here are other excellent options:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">TiviMate</h4>
                                    <p className="text-gray-300 text-sm mb-3">Premium EPG experience with advanced recording features. Best for power users who want maximum customization.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Download: tivimate.com</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">Perfect Player</h4>
                                    <p className="text-gray-300 text-sm mb-3">Lightweight and fast. Ideal for older Firestick models (1st/2nd gen) with limited processing power.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Download via Downloader</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">OTT Navigator</h4>
                                    <p className="text-gray-300 text-sm mb-3">Beautiful interface with Netflix-style browsing. Great for families who prioritize ease of use.</p>
                                    <p className="text-blue-400 text-sm font-semibold">Available on Amazon Store</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commercial Content (30%) - Why StreamVerse */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Why StreamVerse is the Top Choice for Firestick Users
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Feature 1 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">No-Buffering Technology</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Our <span className="text-white font-semibold">Anti-Freeze Technology</span> ensures smooth streaming even during peak hours. With <span className="text-white font-semibold">99.9% uptime</span> and adaptive bitrate streaming, you'll never miss a crucial moment in live sports or your favorite shows. Our servers are optimized specifically for Firestick's hardware capabilities.
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
                                        <h3 className="text-2xl font-bold text-white mb-3">4K/60fps Sports Streaming</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Watch every game in stunning <span className="text-white font-semibold">4K Ultra HD</span> at <span className="text-white font-semibold">60 frames per second</span>. StreamVerse delivers crystal-clear sports coverage from NFL, NBA, MLB, NHL, UFC, Premier League, La Liga, and international leagues—all optimized for Firestick 4K and 4K Max devices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">24/7 Expert Support</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Our dedicated support team is available around the clock via WhatsApp, email, and live chat. Whether you need help with Firestick installation, troubleshooting buffering issues, or updating your app, we respond within minutes—not hours or days.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Instant 5-Minute Setup</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Unlike cable TV that requires scheduling a technician visit, StreamVerse activates within minutes of payment. Download the app, enter your Xtream Codes credentials, and start watching immediately. No contracts, no installation fees, no waiting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">StreamVerse vs Cable TV vs Other IPTV Providers</h3>
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
                                            <td className="py-4 text-green-400 font-bold">$9.99 - $59.99</td>
                                            <td className="py-4">$80 - $150+</td>
                                            <td className="py-4">$15 - $40</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Live Channels</td>
                                            <td className="py-4 text-green-400 font-bold">50,000+</td>
                                            <td className="py-4">200 - 500</td>
                                            <td className="py-4">5,000 - 15,000</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">VOD Library</td>
                                            <td className="py-4 text-green-400 font-bold">140,000+ titles</td>
                                            <td className="py-4">Limited (extra cost)</td>
                                            <td className="py-4">20,000 - 50,000</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">4K Quality</td>
                                            <td className="py-4 text-green-400 font-bold">✓ 4K/60fps</td>
                                            <td className="py-4">✓ (limited channels)</td>
                                            <td className="py-4">✗ Most 720p/1080p</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Setup Time</td>
                                            <td className="py-4 text-green-400 font-bold">5 minutes</td>
                                            <td className="py-4">3-7 days (technician)</td>
                                            <td className="py-4">10-30 minutes</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Contract Required</td>
                                            <td className="py-4 text-green-400 font-bold">✗ No contract</td>
                                            <td className="py-4">✓ 12-24 months</td>
                                            <td className="py-4">✗ Usually no</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Uptime Guarantee</td>
                                            <td className="py-4 text-green-400 font-bold">99.9%</td>
                                            <td className="py-4">95-98%</td>
                                            <td className="py-4">90-95%</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold">Support Response</td>
                                            <td className="py-4 text-green-400 font-bold">Under 5 minutes</td>
                                            <td className="py-4">24-48 hours</td>
                                            <td className="py-4">Varies (often slow)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section (10% Transactional) */}
                    <div id="pricing" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Pricing Plans for Every Viewer
                        </h2>

                        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                            Choose the plan that fits your streaming needs. All plans include <span className="text-white font-semibold">50,000+ channels</span>, <span className="text-white font-semibold">140,000+ VOD titles</span>, <span className="text-white font-semibold">4K streaming</span>, and <span className="text-white font-semibold">24/7 support</span>. No hidden fees, no contracts.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* 1 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month IPTV Plan for Firestick" fill className="object-contain" />
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
                                        <span className="text-gray-300">140,000+ Movies & Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Sports Streaming</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">EPG & Catch-up TV</span>
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
                                    <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Month IPTV Plan for Firestick" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">6-Month Plan</h3>
                                <p className="text-gray-400 mb-6">Great balance of value & flexibility</p>
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
                                        <span className="text-gray-300">140,000+ Movies & Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Sports Streaming</span>
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

                    {/* FAQ Section (20% Informational) */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <FaqItem
                                question="Is it legal to use IPTV on Firestick?"
                                answer="Using IPTV technology and apps like IPTV Smarters Pro on your Firestick is completely legal. The legality depends on the content provider's licensing. StreamVerse operates as a subscription-based service. We recommend users verify that their IPTV provider has proper content distribution rights in their region. As with any streaming service, users are responsible for complying with local laws and regulations."
                            />
                            <FaqItem
                                question="Do I need a VPN to use IPTV on Firestick?"
                                answer="A VPN is not required to use StreamVerse IPTV on Firestick, but many users choose to use one for additional privacy and security. A VPN can help protect your internet activity from your ISP and can sometimes improve streaming performance by preventing ISP throttling. Popular VPN options for Firestick include <strong>ExpressVPN</strong>, <strong>NordVPN</strong>, and <strong>Surfshark</strong>, all of which have dedicated Firestick apps available in the Amazon App Store."
                            />
                            <FaqItem
                                question="How do I update the IPTV app on my Firestick?"
                                answer="To update IPTV Smarters Pro or other sideloaded apps on Firestick: <br/><br/>1. Open the <strong>Downloader app</strong><br/>2. Enter the same URL you used for the original installation<br/>3. Download the latest APK file<br/>4. Click <strong>Install</strong> when prompted<br/>5. The new version will install over the old one, preserving your login credentials<br/><br/>We recommend checking for updates every 2-3 months to ensure optimal performance and access to new features. You'll receive email notifications when major updates are available."
                            />
                            <FaqItem
                                question="Will IPTV work on all Firestick models?"
                                answer="Yes! StreamVerse IPTV is compatible with all Amazon Fire TV devices, including:<br/><br/>• <strong>Fire TV Stick Lite</strong> (2020+)<br/>• <strong>Fire TV Stick (3rd Gen)</strong><br/>• <strong>Fire TV Stick 4K</strong><br/>• <strong>Fire TV Stick 4K Max</strong><br/>• <strong>Fire TV Cube (all generations)</strong><br/>• <strong>Fire TV Edition Smart TVs</strong><br/><br/>For the best 4K streaming experience, we recommend the Fire TV Stick 4K or 4K Max. Older models (1st and 2nd gen) will work but may be limited to 1080p quality."
                            />
                            <FaqItem
                                question="What internet speed do I need for IPTV on Firestick?"
                                answer="Recommended internet speeds for optimal streaming:<br/><br/>• <strong>SD Quality (480p):</strong> 3-5 Mbps<br/>• <strong>HD Quality (720p):</strong> 5-8 Mbps<br/>• <strong>Full HD (1080p):</strong> 10-15 Mbps<br/>• <strong>4K/UHD Streaming:</strong> 25-35 Mbps<br/><br/>For households with multiple devices streaming simultaneously, we recommend at least 50 Mbps. Use a wired Ethernet connection with the Amazon Ethernet Adapter for the most stable performance, especially for 4K sports streaming."
                            />
                            <FaqItem
                                question="Can I use my StreamVerse subscription on other devices besides Firestick?"
                                answer="Absolutely! Your StreamVerse subscription works on any device that supports IPTV players. This includes:<br/><br/>• <strong>Android devices:</strong> Phones, tablets, Android TV boxes<br/>• <strong>iOS devices:</strong> iPhone, iPad (via GSE Smart IPTV)<br/>• <strong>Smart TVs:</strong> Samsung, LG, Sony (see our guide on <a href='/iptv-for-samsung-tv' class='text-blue-400 hover:text-blue-300'>watch on other smart TVs</a>)<br/>• <strong>Windows/Mac computers:</strong> Via VLC or dedicated IPTV apps<br/>• <strong>MAG boxes and Formuler devices</strong><br/><br/>Your subscription includes the number of simultaneous connections you purchased (1, 2, or 3 screens), which can be any combination of these devices."
                            />
                            <FaqItem
                                question="What should I do if I experience buffering on my Firestick?"
                                answer="If you experience buffering, try these troubleshooting steps:<br/><br/>1. <strong>Check your internet speed:</strong> Run a speed test to ensure you meet minimum requirements<br/>2. <strong>Restart your Firestick:</strong> Unplug for 30 seconds, then plug back in<br/>3. <strong>Clear app cache:</strong> Settings → Applications → Manage Installed Applications → IPTV Smarters Pro → Clear Cache<br/>4. <strong>Switch to a wired connection:</strong> Use Amazon's Ethernet Adapter for more stable streaming<br/>5. <strong>Lower video quality:</strong> In IPTV Smarters settings, change from 4K to 1080p or 720p<br/>6. <strong>Contact support:</strong> Our team can switch you to a different server optimized for your location<br/><br/>Most buffering issues are resolved within 5 minutes using these steps."
                            />
                            <FaqItem
                                question="How do I get the best US channels for Firestick?"
                                answer="StreamVerse includes comprehensive US channel coverage with over 2,000 American channels. To access the <a href='/best-iptv-usa' class='text-blue-400 hover:text-blue-300'>best US channels for Firestick</a>, navigate to the 'USA' category in your IPTV player. You'll find:<br/><br/>• All major networks (ABC, NBC, CBS, FOX)<br/>• Premium cable channels (HBO, Showtime, Starz)<br/>• Sports networks (ESPN, FS1, NBC Sports, NFL Network)<br/>• News channels (CNN, Fox News, MSNBC)<br/>• Entertainment (AMC, TNT, USA Network)<br/><br/>Channels are organized by category and include full EPG data for easy browsing."
                            />
                        </div>
                    </div>

                    {/* Internal Linking Section */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-blue-500/30 rounded-xl p-8 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More StreamVerse Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a href="/best-iptv-usa" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Best IPTV USA Guide</h3>
                                <p className="text-gray-300 text-sm">Discover the best US channels for Firestick including premium sports, news, and entertainment networks.</p>
                            </a>
                            <a href="/iptv-for-samsung-tv" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">IPTV for Samsung TV</h3>
                                <p className="text-gray-300 text-sm">Learn how to watch on other smart TVs including Samsung, LG, and Sony with our comprehensive setup guides.</p>
                            </a>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start Streaming 10k+ Channels on Firestick in 5 Minutes
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Join 50,000+ happy streamers who've already made the switch. Get 4K quality, 99.9% uptime, and instant setup today.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                        >
                            Start Your Trial Now →
                        </a>
                        <p className="text-blue-100 text-sm mt-4">✓ No contract required  ✓ Cancel anytime  ✓ 24/7 support</p>
                    </div>
                </div>
            </section >
        </>
    );
};

export default BestIPTVFirestickPage;

