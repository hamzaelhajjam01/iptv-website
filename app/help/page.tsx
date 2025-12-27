"use client";

import React, { useState } from 'react';
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
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-10 text-center">{t('helpTitle')}</h1>
                <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
                    <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpSupportTitle')}</h3><p className="text-gray-400 mb-4">{t('helpSupportDesc')}</p><a href="mailto:support@streamversetv.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpSupportCTA')}</a></div>
                    <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpEmailTitle')}</h3><p className="text-gray-400 mb-4">{t('helpEmailDesc')}</p><a href="mailto:support@streamversetv.com" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpEmailCTA')}</a></div>
                    <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpTelegramTitle')}</h3><p className="text-gray-400 mb-4">{t('helpTelegramDesc')}</p><a href="#" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpTelegramCTA')}</a></div>
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
                <h3 className="text-3xl font-bold mb-6 text-center">{t('faqTitle')}</h3>

                <div className="space-y-4">
                    {faqList.map((item, idx) => (
                        <div key={idx} className={`faq-item bg-card-dark rounded-lg ${openIndex === idx ? 'active' : ''}`}>
                            <div className="faq-question flex justify-between items-center p-6 cursor-pointer" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                                <h3 className="text-xl font-semibold">{item.q}</h3>
                                <svg className="w-6 h-6 text-gray-400 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                            {openIndex === idx && (
                                <div className="faq-answer px-6 pb-6 text-gray-300">
                                    <p>{item.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* JSON-LD FAQ schema for SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
            </div>
        </section>
    );
};

export default HelpPage;