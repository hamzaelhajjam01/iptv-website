'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LiveViewerCount() {
    const { t } = useLanguage();
    const [viewerCount, setViewerCount] = useState('2.4k');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show component after brief delay
        const showTimer = setTimeout(() => setIsVisible(true), 1000);

        // Dynamic counter animation - updates every 12 seconds for more realistic feel
        const counterInterval = setInterval(() => {
            // Generate a random number between 1.1 and 3.5
            const min = 1.1;
            const max = 3.5;
            const randomVal = (Math.random() * (max - min) + min).toFixed(1);
            setViewerCount(randomVal + 'k');
        }, 12000); // Update every 12 seconds (slower, more realistic)

        return () => {
            clearTimeout(showTimer);
            clearInterval(counterInterval);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-24 right-6 z-[60] transition-all duration-500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
        >
            <div className="bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-full shadow-2xl border border-red-500/40 px-4 py-2.5 flex items-center gap-2.5">
                {/* Animated red dot */}
                <div className="relative flex-shrink-0">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                </div>

                {/* Counter text */}
                <p className="text-white text-sm font-semibold whitespace-nowrap">
                    <span className="text-red-400 font-bold">{viewerCount}</span> {t('liveViewerCount')}
                </p>
            </div>
        </div>
    );
}
