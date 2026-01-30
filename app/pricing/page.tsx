"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ComparisonTable from '../../components/ComparisonTable';
import Testimonials from '../../components/Testimonials';
import CountdownTimer from '../../components/CountdownTimer';
import CheckoutPopup from '../../components/CheckoutPopup';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';

// Simple FAQ Component for Pricing Page
const PricingFaqItem = ({ question, answer }: { question: string, answer: string }) => {
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
            <div className={`faq-answer px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    );
};

const PricingPage: React.FC = () => {
    const { t } = useLanguage();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ title: '', price: '', image: '' });
    const [screens, setScreens] = useState(1);

    // Get WhatsApp number from environment variable
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

    const openCheckout = (planTitle: string, planPrice: string, planImage: string) => {
        setSelectedPlan({ title: planTitle, price: planPrice, image: planImage });
        setIsPopupOpen(true);
    };

    return (
        <section className="py-20 px-6 bg-section-dark">
            <CheckoutPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                planTitle={selectedPlan.title}
                planPrice={selectedPlan.price}
                planImage={selectedPlan.image}
                whatsappNumber={WHATSAPP_NUMBER}
            />
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">{t('pricingTitle')}</h1>
                <p className="text-lg font-semibold mb-2">{t('countdownTitle')}</p>
                <CountdownTimer />

                {/* CTA to scroll to pricing cards */}
                <div className="mt-8">
                    <a
                        href="#pricing-cards"
                        className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View Pricing Plans →
                    </a>
                </div>

                <div className="container mx-auto max-w-6xl py-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('comparisonTitle')}</h2>
                    <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                    <ComparisonTable />

                    {/* CTA to scroll to pricing cards */}
                    <div className="mt-12 text-center">
                        <a
                            href="#pricing-cards"
                            className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            See All Plans & Pricing →
                        </a>
                    </div>
                </div>

                {/* Module 1: Executive Summary - SEO Content (Relocated with Image) */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 md:p-12 overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Text Content - Left Side */}
                            <div className="flex-1 text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">Understanding IPTV Pricing</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    StreamVerse offers <span className="text-white font-medium">premium IPTV service</span> at significantly lower costs than cable, eliminating expensive hardware rentals and long-term contracts. With plans starting at just <span className="text-white font-medium">$9.99/mo</span>, you gain access to:
                                </p>
                                <ul className="list-disc pl-5 text-gray-300 leading-relaxed mb-4">
                                    <li><span className="text-white font-medium">50,000+ live channels</span></li>
                                    <li>A massive <span className="text-white font-medium">VOD library</span> exceeding 140,000 titles</li>
                                    <li>Advanced features like <span className="text-white font-medium">Anti-Freeze Technology</span>, <span className="text-white font-medium">EPG</span>, and <span className="text-white font-medium">Catch-up TV</span>.</li>
                                </ul>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Our <span className="text-white font-medium">multi-connection</span> options are perfect for families, allowing simultaneous streaming on up to 3 screens. Whether you use <span className="text-white font-medium">Firesticks</span>, <span className="text-white font-medium">Android boxes</span>, <span className="text-white font-medium">Smart TVs</span>, or mobile devices, our service works instantly on the hardware you already own.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Choose an annual plan to <span className="text-white font-medium">save up to 75%</span> with no hidden fees, no installation charges, and no equipment to return.
                                </p>
                            </div>

                            {/* Image - Right Side */}
                            <div className="flex-shrink-0 w-full md:w-[500px]">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                                    <Image
                                        src="/images/iptv-pricing-concept.png"
                                        alt="IPTV Streaming on Multiple Devices"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12 mb-16 px-6">
                    <div className="bg-card-dark p-1 rounded-xl border border-gray-700 inline-flex">
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                onClick={() => setScreens(num)}
                                className={`px-4 sm:px-8 py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${screens === num
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {t(`screens${num}` as any)}
                            </button>
                        ))}
                    </div>
                </div>

                <div id="pricing-cards" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 mb-16">
                    {/* 1 Month Plan */}
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH1.png" alt="1 Month Plan" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t('plan1Title')}</h3><p className="text-gray-400 mb-6">{t('plan1Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(29.99 + (screens - 1) * 10).toFixed(2)}</span> ${(9.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan1Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(9.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH1.png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    {/* 12 Month Plan (Best Value) */}
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 glow-border relative flex flex-col scale-105 z-10">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-black font-bold text-sm px-4 py-1 rounded-full whitespace-nowrap">{t('bestValue')}</span>
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH12.png" alt="12 Months Plan" fill className="object-contain" />
                        </div>
                        <h3 className="2xl font-bold mb-2">{t('plan2Title')}</h3><p className="text-gray-400 mb-6">{t('plan2Desc')}</p><p className="text-5xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(239 + (screens - 1) * 10).toFixed(2)}</span> ${(59.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan2Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(59.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH12.png')} className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                    {/* 6 Month Plan */}
                    <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                        <div className="mb-4 relative w-full h-64">
                            <Image src="/images/boxes/Box_IPTV_MONTH6.png" alt="6 Months Plan" fill className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t('plan3Title')}</h3><p className="text-gray-400 mb-6">{t('plan3Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">${(119 + (screens - 1) * 10).toFixed(2)}</span> ${(37.99 + (screens - 1) * 10).toFixed(2)}</p>
                        <ul className="text-left space-y-2 mb-8 flex-grow">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <li key={num} className="flex items-center text-sm md:text-base">
                                    <CheckIcon className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    <span>{t(`pricingBenefit${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => openCheckout(`${t('plan3Title')} - ${screens} Screen${screens > 1 ? 's' : ''}`, `$${(37.99 + (screens - 1) * 10).toFixed(2)}`, '/images/boxes/Box_IPTV_MONTH6.png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</button>
                    </div>
                </div>

                {/* Module 2: Semantic Glossary - SEO Content */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 text-center">IPTV Pricing Terms: What You Need to Know</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Multi-Connection IPTV</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                Multi-connection refers to the ability to stream content on multiple devices simultaneously using a single IPTV subscription. When you select 2 or 3 screens in our pricing options, you're allowing that many devices to watch different channels or content at the exact same time.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                For example, with a 2-screen connection, one family member can watch live sports in the living room while another watches a movie in the bedroom. This is fundamentally different from simply logging into multiple devices—those devices can actually be used concurrently without interrupting each other.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Traditional cable TV requires a separate cable box rental ($10-15/month each) for every TV in your home, whereas IPTV multi-connection works across any compatible device (Fire TV, smartphone, tablet, Smart TV) that you already own, with no additional hardware costs.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">VOD Library (Video On Demand)</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                VOD stands for Video On Demand, which is essentially your personal streaming library built into the IPTV service—similar to Netflix or Hulu, but included in your subscription at no extra cost. Unlike Live TV channels that broadcast on a fixed schedule, VOD content consists of movies and TV series that you can start, pause, rewind, and watch whenever you want.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                Our VOD library contains over 140,000 titles spanning multiple genres, languages, and release years. This means you're getting both a full cable replacement (live channels) and a streaming service replacement (on-demand content) in one package.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                VOD is organized by categories such as Action, Comedy, Drama, 4K Movies, and TV Series, with new releases added regularly. You never pay per rental or per title—unlimited access to the entire library is included in every subscription tier.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">EPG (Electronic Program Guide)</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                An Electronic Program Guide (EPG) is the digital TV guide that shows you what's currently playing and what's coming up next on each channel, just like the channel guide on cable or satellite TV. A high-quality EPG displays program names, descriptions, start times, and duration for every channel in an easy-to-navigate interface.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                This is crucial for IPTV usability because without an EPG, you'd have to manually flip through channels to see what's on. StreamVerse provides a comprehensive EPG that covers all major channels with accurate, real-time data that's updated automatically.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                The EPG also enables advanced features like "catch-up TV," which allows you to go back and watch shows that aired in the past 3-7 days, and "TV guide search," where you can find specific programs across all channels instantly.
                            </p>
                        </div>

                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Xtream Codes API</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                Xtream Codes API is the technical protocol that IPTV players (like IPTV Smarters, TiviMate, or other apps) use to connect to your IPTV service and load your channels, VOD content, and EPG data. When you receive your login credentials in the welcome email, you'll see three key pieces of information: a server URL, a username, and a password.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                These credentials use the Xtream Codes format, which is the industry standard for professional IPTV services. You simply enter these details once into your IPTV player app, and the app automatically loads everything—your live channel list, VOD library, and program guide—without any manual configuration.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                This makes setup incredibly simple and ensures compatibility with all major IPTV player apps across every device platform. You'll never need to manually enter M3U playlist URLs or edit configuration files.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Module 3: Extended FAQ - SEO Content (Visible, No Accordions) */}
                <div className="max-w-6xl mx-auto mb-16 bg-gray-900/40 border border-gray-800 rounded-xl p-8 text-left">
                    <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Frequently Asked Questions About IPTV Pricing</h2>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Why are StreamVerse prices lower than cable TV?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Our pricing is significantly lower than traditional cable or satellite TV for several fundamental reasons:
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 leading-relaxed space-y-2 mb-4">
                                <li><strong>No Infrastructure Costs:</strong> We don't have the infrastructure costs that cable companies face—there's no need to maintain physical cable lines, satellite dishes, or regional service centers.</li>
                                <li><strong>No Hardware Rentals:</strong> Cable providers typically charge $10-15 per month for each cable box, whereas IPTV works on devices you already own like Firesticks, smartphones, tablets, and Smart TVs.</li>
                                <li><strong>No Installation Fees:</strong> We eliminate installation fees and technician visits entirely; setup is completely self-service and takes only 5 minutes using our step-by-step guides.</li>
                                <li><strong>Efficient Delivery:</strong> Our content delivery via internet streaming is more efficient than traditional broadcast methods.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                Finally, we operate without long-term contracts or early termination penalties, which means we compete on value rather than locking customers into expensive agreements. The result is that you get 20-30 times more content (50,000+ channels versus 200-500 on cable) for about one-quarter of the price.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">What does "multi-connection" mean and do I need it?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Multi-connection refers to the number of devices that can stream content simultaneously using your subscription.
                            </p>
                            <ul className="list-disc pl-5 text-gray-300 leading-relaxed space-y-2 mb-4">
                                <li><strong>1 Screen:</strong> Only one device can watch at a time—if someone else tries to log in and watch, it will disconnect the first device.</li>
                                <li><strong>2 Screens:</strong> Two devices can watch completely different content at the same time without interfering with each other. For example, one person could be watching live sports on a Fire TV in the living room while another watches a movie on a tablet in the bedroom.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Whether you need multi-connection depends on your household situation. Single individuals or couples who typically watch TV together can usually get by with 1 screen. Families with children or roommates sharing the service will almost always need 2 or 3 screens to avoid conflicts.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Each additional screen costs only $10 more per month, which is far cheaper than cable companies who charge $10-15 per month just to rent each additional cable box. Our multi-connection system works across any device type, so your screens can be a mix of Fire TV, Android box, smartphone, tablet, or Smart TV—whatever you prefer.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">How do I pay and when does my service activate?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Payment is simple and secure. When you click "Subscribe Now" on any plan, you'll open a checkout popup that allows you to complete payment via WhatsApp or direct contact with our billing team. We accept all major payment methods including credit cards, PayPal, cryptocurrency, and international payment systems.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Your service activates within minutes of payment confirmation—not hours or days. You'll immediately receive a welcome email containing your Xtream Codes login credentials (server URL, username, and password) and links to download the recommended IPTV player apps for your devices.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                From the moment you receive that email, you can start watching. There are no activation fees, no setup charges, and no hidden costs. Your subscription period starts the day you activate, and you'll receive a reminder email 3 days before your plan expires so you have time to renew if you wish to continue service.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Can I upgrade or downgrade my plan later?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Yes, plan changes are flexible and handled on a case-by-case basis. If you want to add extra screens (upgrade from 1 to 2 screens, for example), contact our support team and we can activate additional connections on your existing account for a prorated fee based on your remaining subscription time.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                If you'd like to switch from a monthly plan to a longer-term plan to save money, we can credit your unused time toward the new plan. Downgrades (reducing screens or switching to a shorter plan) are processed at renewal time to keep billing simple.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                The key point is that you're never locked in—if your situation changes, we work with you to adjust your service rather than forcing you to keep paying for features you don't need.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">What happens if I don't renew after my subscription ends?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                When your subscription period ends, your service will simply stop working—your login credentials will no longer authenticate and you won't be able to stream. There are no penalties, no cancellation fees, and no automatic renewals that charge your card without permission.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Your account remains in our system for 30 days after expiration, so if you decide to renew within that window, we can reactivate your existing account with the same credentials. After 30 days of inactivity, the account is permanently deleted for security and privacy reasons, and you'd need to sign up as a new customer if you want to return.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                This no-commitment approach means you're only paying for the service when you're actively using it, with complete freedom to start and stop as your needs change.
                            </p>
                        </div>
                    </div>
                </div>


                <p className="mt-8 text-violet-400 font-semibold mb-8">{t('pricingScarcity')}</p>
                <Testimonials />
            </div >
        </section >
    );
};

export default PricingPage;