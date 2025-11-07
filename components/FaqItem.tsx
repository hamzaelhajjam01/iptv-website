"use client";

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Translations } from '../lib/translations';

const FaqItem: React.FC<{ qKey: keyof Translations['en'], aKey: keyof Translations['en'] }> = ({ qKey, aKey }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    
    return (
        <div className={`faq-item bg-card-dark rounded-lg ${isOpen ? 'active' : ''}`}>
            <div className="faq-question flex justify-between items-center p-6" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="text-xl font-semibold">{t(qKey)}</h3>
                <svg className="w-6 h-6 text-gray-400 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div className="faq-answer px-6 text-gray-300">
                <p>{t(aKey)}</p>
            </div>
        </div>
    );
};

export default FaqItem;
