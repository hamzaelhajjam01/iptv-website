"use client";

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { translations, Language, Translations } from '../lib/translations';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: keyof Translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('en');

    const t = useCallback((key: keyof Translations['en']): string => {
        return translations[lang][key] || translations['en'][key];
    }, [lang]);
    
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
