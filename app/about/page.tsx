"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutPage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-background-dark min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-8 text-center">{t('aboutTitle')}</h1>

                <div className="prose prose-lg prose-invert mx-auto">
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-semibold text-center">{t('aboutSubtitle')}</p>
                    <div className="flex justify-center mb-12">
                        <Image
                            src="/images/abonnement-iptv-multi-devices.webp"
                            alt="StreamVerse Multi-Device Support"
                            width={800}
                            height={450}
                            className="rounded-xl shadow-2xl w-full h-auto max-w-3xl"
                        />
                    </div>
                    <div className="p-6 bg-card-dark rounded-xl border border-gray-800 shadow-2xl mb-12">
                        <p className="text-gray-400">{t('aboutDesc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('aboutMissionTitle')}</h2>
                            <p className="text-gray-300 leading-relaxed">{t('aboutMissionDesc')}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('aboutCommitmentTitle')}</h2>
                            <p className="text-gray-300 leading-relaxed">{t('aboutCommitmentDesc')}</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">{t('aboutWhyChooseTitle')}</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{t('aboutWhyChooseDesc')}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;