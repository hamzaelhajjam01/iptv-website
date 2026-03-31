"use client";

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item border-b border-gray-800 transition-all ${isOpen ? 'active' : ''}`}>
            <button 
                className="faq-question w-full flex items-center justify-between py-6 px-4 md:px-6 hover:bg-gray-900/40 text-left group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`text-lg transition-colors group-hover:text-blue-400 ${isOpen ? 'text-blue-400 font-semibold' : 'text-gray-200'}`}>
                    {question}
                </span>
                <ChevronDown className={`faq-arrow flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-blue-400 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
            </button>
            <div className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 md:px-6 text-gray-400 leading-relaxed whitespace-pre-line">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const VisibleFAQ: React.FC = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default for SEO/User intent

    // We'll map the FAQs from the translations.ts
    const faqIndices = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <section id="faq" className="py-24 bg-section-dark">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {t('faqTitle')}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t('faqSectionSubtitle')}
                    </p>
                </div>

                <div className="bg-card-dark rounded-2xl shadow-xl border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {faqIndices.map((idx) => {
                        const qKey = `faq${idx}q` as any;
                        const aKey = `faq${idx}a` as any;
                        
                        // Only render if the translation exists
                        if (t(qKey) === qKey) return null;

                        return (
                            <FAQItem 
                                key={idx}
                                question={t(qKey)} 
                                answer={t(aKey)} 
                                isOpen={openIndex === idx - 1}
                                onClick={() => setOpenIndex(openIndex === idx - 1 ? null : idx - 1)}
                            />
                        );
                    })}
                </div>

                <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <p className="text-gray-400 text-lg mb-8">
                        Can&apos;t find your answer here? Our support team is available 24/7.
                    </p>
                    <a 
                        href="/help" 
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        Visit Help Center
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VisibleFAQ;
