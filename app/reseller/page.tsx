"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CheckoutPopup from '../../components/CheckoutPopup';
import { useLanguage } from '../../contexts/LanguageContext';
import { UpdateIcon, DeviceIcon, TrialIcon, ExpiryIcon, ChevronDownIcon, CheckIcon } from '../../components/Icons';

// Inline simple Accordion for FAQs to avoid translation key dependencies for now
const ResellerFaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item bg-card-dark rounded-lg mb-4 border border-gray-800 transition-colors ${isOpen ? 'active bg-gray-900' : ''}`}>
            <div
                className="faq-question flex justify-between items-center p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">{question}</h3>
                <ChevronDownIcon
                    className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>
            <div className={`faq-answer px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-card-dark p-8 rounded-xl border border-gray-800 hover:border-blue-600 transition-all duration-300 hover:transform hover:-translate-y-1 group">
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-gray-900 rounded-full text-blue-500 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-center text-sm leading-relaxed">{description}</p>
    </div>
);

const PricingCard = ({ title, credits, price, popular, features, onOrder, orderText }: { title: string, credits: string, price: string, popular?: boolean, features: string[], onOrder: () => void, orderText: string }) => (
    <div className={`relative bg-card-dark rounded-2xl p-8 border ${popular ? 'border-blue-500 shadow-2xl shadow-blue-900/20' : 'border-gray-800'} flex flex-col h-full hover:border-blue-500/50 transition-all duration-300`}>
        {popular && (
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
            </div>
        )}
        <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-300 uppercase tracking-wider mb-2">{title}</h3>
            <div className="text-blue-400 font-semibold mb-4">{credits}</div>
            <div className="flex justify-center items-baseline gap-1">
                <span className="text-2xl text-gray-400">$</span>
                <span className="text-5xl font-extrabold text-white">{price}</span>
            </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>

        <button onClick={onOrder} className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 ${popular ? 'bg-blue-600 hover:bg-blue-700 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}`}>
            {orderText}
        </button>
    </div>
);

export default function ResellerPage() {
    const { t } = useLanguage();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ title: '', price: '', credits: '' });

    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'; // Use env variable

    const handleOrder = (title: string, price: string, credits: string) => {
        setSelectedPlan({ title, price, credits });
        setIsPopupOpen(true);
    };

    const customMessage = `Hello! I would like to subscribe to the Reseller Program.

📦 *Plan:* ${selectedPlan.title}
💰 *Price:* ${selectedPlan.price}
💎 *CREDITS:* ${selectedPlan.credits}

Please send me the payment details and setup instructions.`;

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#050a19] text-white overflow-hidden">
            <CheckoutPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                planTitle={selectedPlan.title}
                planPrice={selectedPlan.price}
                planImage="" // No specific image for reseller packs
                whatsappNumber={WHATSAPP_NUMBER}
                customMessage={customMessage}
            />
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/IPTV-banner-1-1.jpg" alt="Background" className="w-full h-full object-cover absolute top-0 left-0" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050a19]/30 via-[#050a19]/80 to-[#050a19]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6 animate-fade-in-up">
                        {t('resellerBadge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        {t('resellerHeroTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t('resellerHeroSubtitle')}
                    </p>
                    <button onClick={scrollToPricing} className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        {t('resellerHeroCTA')}
                    </button>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#080f25] relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('resellerWhyTitle')}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            title={t('resellerWhy1Title')}
                            description={t('resellerWhy1Desc')}
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>}
                        />
                        <FeatureCard
                            title={t('resellerWhy2Title')}
                            description={t('resellerWhy2Desc')}
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>}
                        />
                        <FeatureCard
                            title={t('resellerWhy3Title')}
                            description={t('resellerWhy3Desc')}
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                        />
                        <FeatureCard
                            title={t('resellerWhy4Title')}
                            description={t('resellerWhy4Desc')}
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
                        />
                        <FeatureCard
                            title={t('resellerWhy5Title')}
                            description={t('resellerWhy5Desc')}
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                        />
                        <FeatureCard
                            title={t('resellerWhy6Title')}
                            description={t('resellerWhy6Desc')}
                            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>}
                        />
                    </div>
                </div>
            </section>

            {/* How It Works Section - NEW */}
            <section className="py-20 bg-[#0c1427]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('resellerHowTitle')}</h2>
                        <p className="text-gray-400">{t('resellerHowSubtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center p-6 bg-[#050a19] rounded-xl border border-gray-800">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
                            <h3 className="text-lg font-bold mb-2">{t('resellerHow1Title')}</h3>
                            <p className="text-gray-400">{t('resellerHow1Desc')}</p>
                        </div>
                        <div className="text-center p-6 bg-[#050a19] rounded-xl border border-gray-800">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
                            <h3 className="text-lg font-bold mb-2">{t('resellerHow2Title')}</h3>
                            <p className="text-gray-400">{t('resellerHow2Desc')}</p>
                        </div>
                        <div className="text-center p-6 bg-[#050a19] rounded-xl border border-gray-800">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
                            <h3 className="text-lg font-bold mb-2">{t('resellerHow3Title')}</h3>
                            <p className="text-gray-400">{t('resellerHow3Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credit Map */}
            <section className="py-20 bg-[#050a19]">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('resellerCreditMapTitle')}</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: t('resellerCredit1'), cost: t('resellerCost1'), icon: "🥉" },
                            { name: t('resellerCredit3'), cost: t('resellerCost3'), icon: "🥈" },
                            { name: t('resellerCredit6'), cost: t('resellerCost6'), icon: "🥇" },
                            { name: t('resellerCredit12'), cost: t('resellerCost12'), icon: "🏆" },
                            { name: t('resellerCredit24'), cost: t('resellerCost20'), highlight: true, icon: "💎" }
                        ].map((item, idx) => (
                            <div key={idx} className={`relative group p-1 rounded-2xl transition-all duration-300 hover:scale-105 w-full md:w-80 ${item.highlight ? 'bg-gradient-to-r from-blue-600 to-violet-600' : 'bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-violet-500/50'}`}>
                                <div className="bg-[#0c1427] h-full rounded-xl p-6 flex flex-col items-center justify-center gap-2 relative z-10">
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-200">{item.name}</h3>
                                    <div className={`text-2xl font-extrabold ${item.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400' : 'text-blue-400'}`}>
                                        {item.cost}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-[#080f25]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('resellerPricingTitle')}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">{t('resellerPricingSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <PricingCard
                            title={t('resellerPlanStarter')}
                            credits="120"
                            price="402"
                            orderText={t('resellerOrderNow')}
                            features={[
                                t('resellerFeatureCredits').replace('{0}', '120'),
                                t('resellerFeaturePanel'),
                                t('resellerFeatureUnbranded'),
                                t('resellerFeatureControl'),
                                t('resellerFeatureManage'),
                                t('resellerFeatureSupport'),
                                t('resellerFeatureUptime'),
                                t('resellerFeatureUpdates'),
                                t('resellerFeatureActivation')
                            ]}
                            onOrder={() => handleOrder(t('resellerPlanStarter'), "$402", "120")}
                        />
                        <PricingCard
                            title={t('resellerPlanPro')}
                            credits="240"
                            price="754"
                            popular={true}
                            orderText={t('resellerOrderNow')}
                            features={[
                                t('resellerFeatureCredits').replace('{0}', '240'),
                                t('resellerBonus50'),
                                t('resellerFeaturePanel'),
                                t('resellerFeatureUnbranded'),
                                t('resellerFeatureControl'),
                                t('resellerFeatureManage'),
                                t('resellerFeatureSupport'),
                                t('resellerFeatureUptime'),
                                t('resellerFeatureUpdates'),
                                t('resellerFeatureActivation')
                            ]}
                            onOrder={() => handleOrder(t('resellerPlanPro'), "$754", "240")}
                        />
                        <PricingCard
                            title={t('resellerPlanEnterprise')}
                            credits="360"
                            price="1006"
                            orderText={t('resellerOrderNow')}
                            features={[
                                t('resellerFeatureCredits').replace('{0}', '360'),
                                t('resellerBonus100'),
                                t('resellerFeaturePanel'),
                                t('resellerFeatureUnbranded'),
                                t('resellerFeatureControl'),
                                t('resellerFeatureManage'),
                                t('resellerFeatureSupport'),
                                t('resellerFeatureUptime'),
                                t('resellerFeatureUpdates'),
                                t('resellerFeatureActivation')
                            ]}
                            onOrder={() => handleOrder(t('resellerPlanEnterprise'), "$1006", "360")}
                        />
                    </div>
                </div>
            </section>

            {/* Reseller Feedback */}
            <section className="py-24 bg-[#050a19]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('resellerTestimonialsTitle')}</h2>
                        <p className="text-gray-400">{t('resellerTestimonialsSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        {[
                            { name: t('resellerT1Name'), role: t('resellerT1Role'), text: t('resellerT1Text'), img: "https://i.pravatar.cc/150?img=11" },
                            { name: t('resellerT2Name'), role: t('resellerT2Role'), text: t('resellerT2Text'), img: "https://i.pravatar.cc/150?img=5" },
                            { name: t('resellerT3Name'), role: t('resellerT3Role'), text: t('resellerT3Text'), img: "https://i.pravatar.cc/150?img=59" }
                        ].map((fb, idx) => (
                            <div key={idx} className="bg-[#0c1427] p-8 rounded-2xl border border-gray-800 flex flex-col">
                                <p className="text-gray-300 italic mb-6">"{fb.text}"</p>
                                <div className="mt-auto flex items-center">
                                    <img src={fb.img} alt={fb.name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500" />
                                    <div>
                                        <div className="font-bold text-white">{fb.name}</div>
                                        <div className="text-xs text-blue-400 uppercase tracking-wider">{fb.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reseller Benefits Icons Strip */}
            <section className="py-12 bg-[#0c1427] border-y border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-around items-center gap-8 text-center text-sm md:text-base">
                        <div className="flex flex-col items-center gap-3">
                            <UpdateIcon className="w-8 h-8 text-gray-400" />
                            <span className="font-semibold text-gray-300">{t('resellerBenefitUpdates')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <DeviceIcon className="w-8 h-8 text-gray-400" />
                            <span className="font-semibold text-gray-300">{t('resellerBenefitDevices')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <TrialIcon className="w-8 h-8 text-gray-400" />
                            <span className="font-semibold text-gray-300">{t('resellerBenefitTrials')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ExpiryIcon className="w-8 h-8 text-gray-400" />
                            <span className="font-semibold text-gray-300">{t('resellerBenefitExpiry')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-[#050a19]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('resellerFaqTitle')}</h2>
                        <p className="text-gray-400">{t('resellerFaqSubtitle')}</p>
                    </div>

                    <div className="space-y-4">
                        <ResellerFaqItem
                            question={t('resellerFaq1Q')}
                            answer={t('resellerFaq1A')}
                        />
                        <ResellerFaqItem
                            question={t('resellerFaq2Q')}
                            answer={t('resellerFaq2A')}
                        />
                        <ResellerFaqItem
                            question={t('resellerFaq3Q')}
                            answer={t('resellerFaq3A')}
                        />
                        <ResellerFaqItem
                            question={t('resellerFaq4Q')}
                            answer={t('resellerFaq4A')}
                        />
                    </div>

                    <div className="text-center mt-12">
                        <h3 className="text-xl font-bold mb-4">{t('resellerContactTitle')}</h3>
                        <Link href="/help" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-gray-700 inline-block">
                            {t('resellerContactBtn')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8">{t('resellerFinalTitle')}</h2>
                    <p className="text-xl text-gray-400 mb-10">{t('resellerFinalSubtitle')}</p>
                    <button onClick={scrollToPricing} className="bg-white text-black font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        {t('resellerFinalBtn')}
                    </button>
                </div>
            </section>
        </div>
    );
}
