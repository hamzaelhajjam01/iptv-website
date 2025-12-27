"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Language } from '../lib/translations';

const LANGUAGE_PREFERENCE_KEY = 'streamverse_language_set';

interface LanguageOption {
    code: Language;
    name: string;
    flag: string;
}

const languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

const LanguagePopup: React.FC = () => {
    const { setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [selectedLang, setSelectedLang] = useState<Language>('en');

    useEffect(() => {
        setMounted(true);

        // Check if this is a mobile device and if language hasn't been set before
        const isMobile = window.innerWidth < 768;
        const hasSetLanguage = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);

        if (isMobile && !hasSetLanguage) {
            // Small delay to allow page to load first
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConfirm = () => {
        setLang(selectedLang);
        localStorage.setItem(LANGUAGE_PREFERENCE_KEY, selectedLang);
        setIsOpen(false);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-[2000]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    {/* Modal */}
                    <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4">
                        <motion.div
                            className="bg-card-dark text-white p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center border-2 border-blue-500/50"
                            role="dialog"
                            aria-modal="true"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            {/* Globe Icon */}
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-2">Choose Your Language</h2>
                            <p className="text-gray-400 text-sm mb-6">Select your preferred language for the best experience</p>

                            {/* Language Options */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setSelectedLang(lang.code)}
                                        className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${selectedLang === lang.code
                                                ? 'border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/20'
                                                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                                            }`}
                                    >
                                        <span className="text-3xl">{lang.flag}</span>
                                        <span className={`font-medium ${selectedLang === lang.code ? 'text-white' : 'text-gray-300'}`}>
                                            {lang.name}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Confirm Button */}
                            <button
                                onClick={handleConfirm}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/30"
                            >
                                Continue
                            </button>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default LanguagePopup;
