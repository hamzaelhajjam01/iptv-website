"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CheckoutPopup from '../../components/CheckoutPopup';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';

// FAQ Component (same as Firestick page)
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

const BestIPTVUSAPage: React.FC = () => {
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
                    {/* Hero Section with Background (matches Firestick hero) */}
                    <div className="relative mb-16 -mx-6 px-6 py-20 md:py-32 rounded-xl overflow-hidden">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/best-iptv-usa-hero.png"
                                alt="Best IPTV USA channel list on screen"
                                fill
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-section-dark/80 via-section-dark/90 to-section-dark"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                                Best IPTV USA 2026: The Complete Guide to Premium American Streaming
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                                Access the best IPTV in the USA with <span className="text-white font-semibold">4K sports</span>, local news, and zero buffering. Instant activation on all devices. Join <span className="text-white font-semibold">50,000+ US streamers</span> today with <span className="text-white font-semibold">10,000+ premium channels</span> and <span className="text-white font-semibold">140,000+ movies &amp; series</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#pricing"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Get Instant Access →
                                </a>
                                <a
                                    href="#us-channels"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-gray-700"
                                >
                                    View US Channel List
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Educational Content (40%) - Server Selection & Wired vs WiFi */}
                    <div id="education" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            How to Get the Best US IPTV Experience
                        </h2>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 mb-8">
                            <div className="mb-8">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Getting the best performance from your US IPTV service depends on two critical factors: <span className="text-white font-semibold">server selection</span> and <span className="text-white font-semibold">connection type</span>. StreamVerse operates dedicated CDN nodes across the United States, ensuring ultra-low latency whether you&apos;re on the East Coast or West Coast.
                                </p>
                            </div>

                            {/* Step 1 */}
                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 min-w-[2.5rem] flex items-center justify-center flex-shrink-0 mr-3 text-lg">1</span>
                                    Choosing the Right US Server for Low Latency
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    StreamVerse operates high-performance CDN nodes strategically placed across the USA. Selecting a server closest to your physical location dramatically reduces ping times and eliminates buffering during live sports.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li><span className="text-white font-semibold">US East (New York/Virginia)</span> — Best for viewers in the Eastern timezone and the Southeast</li>
                                    <li><span className="text-white font-semibold">US Central (Chicago/Dallas)</span> — Ideal for Midwest viewers and Central timezone users</li>
                                    <li><span className="text-white font-semibold">US West (Los Angeles/Seattle)</span> — Optimized for Pacific timezone and West Coast streamers</li>
                                    <li>Our <span className="text-white font-semibold">Auto-Connect</span> feature automatically picks the fastest node, but manual selection can reduce latency by an additional 10-20ms during peak hours</li>
                                </ul>
                                <div className="mt-4 bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                                    <p className="text-blue-200 text-sm">
                                        <strong>💡 Pro Tip:</strong> For live NFL games on Sunday, manually switch to your nearest server 10 minutes before kickoff. This locks in your optimal route before traffic spikes.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-10 h-10 min-w-[2.5rem] flex items-center justify-center flex-shrink-0 mr-3 text-lg">2</span>
                                    Why a Wired Connection Is Superior for 4K Sports
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Streaming 4K sports at 60fps requires a sustained 25+ Mbps connection with minimal jitter. While WiFi 6 routers are capable of these speeds, real-world interference from walls, appliances, and neighbor networks causes unpredictable packet loss — the #1 cause of buffering during live events.
                                </p>
                                <ul className="list-disc pl-8 text-gray-300 space-y-2">
                                    <li>Use an <span className="text-white font-semibold">Ethernet adapter</span> (Amazon sells one specifically for Firestick for ~$15)</li>
                                    <li>Cat 5e or Cat 6 cables deliver consistent throughput without interference</li>
                                    <li>Wired connections reduce latency by <span className="text-white font-semibold">30-50%</span> compared to WiFi on the same network</li>
                                    <li>If wired isn&apos;t possible, use the <span className="text-white font-semibold">5GHz band</span> on your router (not 2.4GHz) and position your device within 15 feet of the router</li>
                                </ul>
                                <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                                    <p className="text-yellow-200 text-sm">
                                        <strong>⚠️ Important:</strong> If you experience buffering during NFL RedZone or NBA League Pass, switch from 4K to 1080p temporarily. Most buffering issues are bandwidth-related, not server-related. For more help, check out our guide on <a href="/blog" className="text-blue-400 hover:text-blue-300 underline">troubleshooting US streaming issues</a>.
                                    </p>
                                </div>
                            </div>

                            {/* Visual Aid */}
                            <div className="mt-8 rounded-xl overflow-hidden border-2 border-blue-500/30">
                                <Image
                                    src="/images/best-iptv-usa-devices.png"
                                    alt="US Sports streaming on 4K TV with StreamVerse IPTV"
                                    width={1000}
                                    height={750}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Commercial Content (30%) - Why StreamVerse for USA */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Why US Streamers Choose StreamVerse
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Feature 1 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Local NFL &amp; NBA Coverage</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Never miss a touchdown or buzzer-beater. StreamVerse includes complete coverage of <span className="text-white font-semibold">NFL Sunday Ticket</span>, <span className="text-white font-semibold">NBA League Pass</span>, <span className="text-white font-semibold">MLB Extra Innings</span>, and <span className="text-white font-semibold">NHL Center Ice</span>. Watch your local teams live in 4K regardless of blackout restrictions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">High-Speed US CDN Nodes</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Our <span className="text-white font-semibold">Anti-Freeze Technology</span> is powered by dedicated CDN nodes in <span className="text-white font-semibold">New York, Chicago, Dallas, and Los Angeles</span>. This ensures ultra-low latency and buffer-free 4K streaming from coast to coast with <span className="text-white font-semibold">99.9% uptime</span>.
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
                                        <h3 className="text-2xl font-bold text-white mb-3">US-Based 24/7 Support</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Our dedicated support team understands the US market and is available around the clock via WhatsApp, email, and live chat. Whether you need help with <a href="/best-iptv-firestick" className="text-blue-400 hover:text-blue-300 underline">how to install US IPTV on Firestick</a> or troubleshooting, we respond within minutes—not hours or days.
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

                        {/* Comparison Table (same style as Firestick) */}
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
                                            <td className="py-4 font-semibold">US Live Channels</td>
                                            <td className="py-4 text-green-400 font-bold">10,000+</td>
                                            <td className="py-4">200 - 500</td>
                                            <td className="py-4">2,000 - 5,000</td>
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
                                            <td className="py-4 font-semibold">US Sports Coverage</td>
                                            <td className="py-4 text-green-400 font-bold">NFL, NBA, MLB, NHL, UFC</td>
                                            <td className="py-4">Regional blackouts</td>
                                            <td className="py-4">Inconsistent</td>
                                        </tr>
                                        <tr className="border-b border-gray-800">
                                            <td className="py-4 font-semibold">Contract Required</td>
                                            <td className="py-4 text-green-400 font-bold">✗ No contract</td>
                                            <td className="py-4">✓ 12-24 months</td>
                                            <td className="py-4">✗ Usually no</td>
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

                    {/* Top USA Channels Section */}
                    <div id="us-channels" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            Top USA Channels Included (ESPN, FOX, HBO)
                        </h2>

                        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                StreamVerse includes comprehensive US channel coverage with over <span className="text-white font-semibold">10,000 American channels</span>. Our USA package delivers every major network, premium cable channel, and regional sports network directly to your device.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">🏈 Sports Networks</h4>
                                    <p className="text-gray-300 text-sm mb-3">ESPN, ESPN2, FS1, FS2, NBC Sports, NFL Network, NBA TV, MLB Network, NHL Network, beIN Sports, CBS Sports</p>
                                    <p className="text-blue-400 text-sm font-semibold">All in 4K/60fps</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">🎬 Premium &amp; Entertainment</h4>
                                    <p className="text-gray-300 text-sm mb-3">HBO, Showtime, Starz, Cinemax, AMC, TNT, USA Network, FX, A&amp;E, Bravo, TLC, Discovery</p>
                                    <p className="text-blue-400 text-sm font-semibold">140,000+ VOD titles</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">📺 News &amp; Local Affiliates</h4>
                                    <p className="text-gray-300 text-sm mb-3">CNN, Fox News, MSNBC, ABC, NBC, CBS, FOX local affiliates for all major DMAs including New York, LA, Chicago, Houston</p>
                                    <p className="text-blue-400 text-sm font-semibold">Full EPG &amp; Catch-Up</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section (10% Transactional) - same as Firestick */}
                    <div id="pricing" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center">
                            USA Premium Plans
                        </h2>

                        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                            Choose the plan that fits your streaming needs. All plans include <span className="text-white font-semibold">10,000+ US channels</span>, <span className="text-white font-semibold">140,000+ VOD titles</span>, <span className="text-white font-semibold">4K streaming</span>, and <span className="text-white font-semibold">24/7 support</span>. No hidden fees, no contracts. Pricing in USD.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* 1 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month USA IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Monthly Plan</h3>
                                <p className="text-gray-400 mb-6">Perfect for testing our US service</p>
                                <div className="mb-6">
                                    <p className="text-3xl md:text-4xl font-extrabold text-white flex flex-wrap items-baseline gap-2">
                                        <span className="text-xl md:text-2xl text-gray-400 line-through">$29.99</span>
                                        <span>$9.99</span>
                                    </p>
                                </div>
                                <ul className="text-left space-y-3 mb-8 flex-grow">
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">10,000+ US Live Channels</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">140,000+ Movies &amp; Series</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">4K/60fps Sports Streaming</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">EPG &amp; Catch-up TV</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">24/7 US Support</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('USA Monthly Plan - 1 Screen', '$9.99', '/images/boxes/Box_IPTV_MONTH1.png')}
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
                                    <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Month USA IPTV Plan" fill className="object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Yearly Plan</h3>
                                <p className="text-gray-400 mb-6">Most popular choice for US viewers</p>
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
                                        <span className="text-gray-300">Priority US Support</span>
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
                                    onClick={() => openCheckout('USA Yearly Plan - 1 Screen', '$59.99', '/images/boxes/Box_IPTV_MONTH12.png')}
                                    className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                                >
                                    Get Instant Access
                                </button>
                            </div>

                            {/* 6 Month Plan */}
                            <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-4 relative w-full h-48">
                                    <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Month USA IPTV Plan" fill className="object-contain" />
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
                                        <span className="text-gray-300">10,000+ US Live Channels</span>
                                    </li>
                                    <li className="flex items-start text-sm">
                                        <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">140,000+ Movies &amp; Series</span>
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
                                        <span className="text-gray-300">24/7 US Support</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => openCheckout('USA 6-Month Plan - 1 Screen', '$37.99', '/images/boxes/Box_IPTV_MONTH6.png')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    Get Instant Access
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
                            How to Watch US IPTV Safely
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <FaqItem
                                question="Is IPTV legal in the USA?"
                                answer="Using IPTV technology and apps like IPTV Smarters Pro is completely legal in the United States. The legality depends on the content provider's licensing. StreamVerse operates as a subscription-based service. We recommend users verify that their IPTV provider has proper content distribution rights in their region. Many US customers add a VPN for additional privacy and to prevent ISP throttling during peak hours."
                            />
                            <FaqItem
                                question="Can I watch local news on StreamVerse?"
                                answer="Yes! Our USA package includes local affiliates for <strong>ABC, CBS, NBC, Fox, and PBS</strong> for all major designated market areas (DMAs). Whether you're in New York, Los Angeles, Chicago, Houston, Phoenix, or Philadelphia, you can stay up to date with your local news, weather forecasts, and regional programming — all streamed live in HD quality."
                            />
                            <FaqItem
                                question="Which US payment methods are accepted?"
                                answer="We accept all major US payment methods including <strong>Visa, Mastercard, American Express, Discover</strong>, as well as <strong>PayPal</strong> and cryptocurrency (<strong>Bitcoin, USDT</strong>) for maximum privacy. All transactions are securely processed with 256-bit SSL encryption. We do not store your payment details on our servers."
                            />
                            <FaqItem
                                question="What internet speed do I need for US IPTV?"
                                answer="Recommended internet speeds for optimal US streaming:<br/><br/>• <strong>SD Quality (480p):</strong> 3-5 Mbps<br/>• <strong>HD Quality (720p):</strong> 5-8 Mbps<br/>• <strong>Full HD (1080p):</strong> 10-15 Mbps<br/>• <strong>4K/UHD Sports Streaming:</strong> 25-35 Mbps<br/><br/>For households with multiple devices streaming simultaneously, we recommend at least 50 Mbps. Use a wired Ethernet connection for the most stable performance, especially during NFL Sundays and NBA playoffs."
                            />
                            <FaqItem
                                question="Can I use StreamVerse on multiple devices in my household?"
                                answer="Absolutely! Your StreamVerse subscription works on any device that supports IPTV players. This includes:<br/><br/>• <strong>Amazon Firestick</strong> (all models — see our <a href='/best-iptv-firestick' class='text-blue-400 hover:text-blue-300'>Firestick setup guide</a>)<br/>• <strong>Android devices:</strong> Phones, tablets, Android TV boxes<br/>• <strong>iOS devices:</strong> iPhone, iPad<br/>• <strong>Smart TVs:</strong> Samsung, LG, Sony<br/>• <strong>Windows/Mac computers</strong><br/><br/>Your subscription includes the number of simultaneous connections you purchased (1, 2, or 3 screens), which can be any combination of these devices."
                            />
                            <FaqItem
                                question="Do you offer a money-back guarantee?"
                                answer="We offer a <strong>satisfaction guarantee</strong> on all plans. If you experience persistent technical issues that our 24/7 support team cannot resolve, we will work with you to find a solution or provide a credit toward your next billing period. We stand behind the quality of our US-optimized servers and infrastructure."
                            />
                        </div>
                    </div>

                    {/* Internal Linking Section (same as Firestick) */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-blue-500/30 rounded-xl p-8 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore More StreamVerse Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a href="/best-iptv-firestick" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Best IPTV for Firestick Guide</h3>
                                <p className="text-gray-300 text-sm">Learn how to install US IPTV on Firestick with our complete step-by-step setup guide for all Fire TV models.</p>
                            </a>
                            <a href="/blog" className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">Troubleshooting &amp; Blog</h3>
                                <p className="text-gray-300 text-sm">Read our expert guides on troubleshooting US streaming issues, VPN setup, and optimizing your viewing experience.</p>
                            </a>
                        </div>
                    </div>

                    {/* Final CTA (same as Firestick) */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start Streaming 10,000+ US Channels Today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Join 50,000+ happy US streamers who&apos;ve already made the switch. Get 4K quality, 99.9% uptime, and instant setup today.
                        </p>
                        <a
                            href="#pricing"
                            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
                        >
                            Get Instant Access Now →
                        </a>
                        <p className="text-blue-100 text-sm mt-4">✓ No contract required  ✓ Cancel anytime  ✓ 24/7 US support</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BestIPTVUSAPage;
