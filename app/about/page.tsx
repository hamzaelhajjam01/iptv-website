"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutPage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-6">{t('aboutTitle')}</h1>
                <p className="text-lg text-gray-300 mb-8">{t('aboutSubtitle')}</p>
                <p className="text-gray-400 mb-12">{t('aboutDesc')}</p>
                <img src="https://nonasties.store/wp-content/uploads/2025/08/Untitled-design-2-copy-removebg-preview.png" alt="StreamVerse Interface on TV" className="rounded-lg w-full h-auto max-w-2xl mx-auto" />
            </div>
        </section>
    );
};

export default AboutPage;