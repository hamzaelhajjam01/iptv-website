'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Notification {
    location: string;
    plan: string;
    timeAgo: string;
}

const locations = [
    'London', 'New York', 'Paris', 'Berlin', 'Tokyo', 'Sydney',
    'Toronto', 'Dubai', 'Singapore', 'Amsterdam', 'Barcelona',
    'Los Angeles', 'Chicago', 'Miami', 'Rome', 'Madrid'
];

const plans = [
    '12-month plan',
    '6-month plan',
    '3-month plan',
    '1-month plan',
    'Premium 12-month plan',
    'Reseller package'
];

const timeFrames = [
    'just',
    '2 minutes ago',
    '5 minutes ago',
    '8 minutes ago',
    '12 minutes ago'
];

export default function LiveSalesNotification() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [notification, setNotification] = useState<Notification | null>(null);
    const [hasShownInitial, setHasShownInitial] = useState(false);

    const generateNotification = (): Notification => {
        return {
            location: locations[Math.floor(Math.random() * locations.length)],
            plan: plans[Math.floor(Math.random() * plans.length)],
            timeAgo: timeFrames[Math.floor(Math.random() * timeFrames.length)]
        };
    };

    useEffect(() => {
        // Show first notification after 5 seconds
        const initialTimer = setTimeout(() => {
            setNotification(generateNotification());
            setIsVisible(true);
            setHasShownInitial(true);
        }, 5000);

        return () => clearTimeout(initialTimer);
    }, []);

    useEffect(() => {
        if (!hasShownInitial) return;

        // Hide notification after 6 seconds
        if (isVisible) {
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 6000);

            return () => clearTimeout(hideTimer);
        } else {
            // Show next notification after random interval (20-40 seconds)
            const showTimer = setTimeout(() => {
                setNotification(generateNotification());
                setIsVisible(true);
            }, Math.random() * 20000 + 20000);

            return () => clearTimeout(showTimer);
        }
    }, [isVisible, hasShownInitial]);

    if (!notification) return null;

    return (
        <div
            className={`fixed top-6 md:top-auto md:bottom-6 left-6 z-50 transition-all duration-500 ease-in-out transform ${isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
                }`}
        >
            <div className="bg-gradient-to-r from-purple-900/95 to-indigo-900/95 backdrop-blur-md rounded-lg shadow-2xl border border-purple-500/30 p-4 max-w-sm">
                <div className="flex items-start gap-3">
                    {/* Animated pulse indicator */}
                    <div className="relative flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>

                    {/* Notification content */}
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium leading-relaxed">
                            {t('salesPopupSomeone')} <span className="font-bold text-purple-300">{notification.location}</span> {notification.timeAgo} {t('salesPopupPurchased')}{' '}
                            <span className="font-bold text-purple-300">{notification.plan}</span>
                        </p>
                        <p className="text-purple-300 text-xs mt-1">
                            {t('salesPopupJoin')}
                        </p>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-shrink-0 text-purple-300 hover:text-white transition-colors"
                        aria-label="Close notification"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
