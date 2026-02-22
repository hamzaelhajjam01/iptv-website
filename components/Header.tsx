"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language, Translations } from '../lib/translations';
import { MenuIcon } from './Icons';

const Header: React.FC = () => {
    const { lang, setLang, t } = useLanguage();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isHelpMenuOpen, setHelpMenuOpen] = useState(false);

    const [helpMenuTimeout, setHelpMenuTimeout] = useState<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as Language);
    };

    const handleHelpMenuEnter = () => {
        if (helpMenuTimeout) {
            clearTimeout(helpMenuTimeout);
            setHelpMenuTimeout(null);
        }
        setHelpMenuOpen(true);
    };

    const handleHelpMenuLeave = () => {
        const timeout = setTimeout(() => {
            setHelpMenuOpen(false);
        }, 200); // 200ms delay before closing
        setHelpMenuTimeout(timeout);
    };

    const navItems: { href: string; key: keyof Translations['en'] }[] = [
        { href: '/channels-features', key: 'navChannelsFeatures' },
        { href: '/pricing', key: 'navPricing' },
        { href: '/reseller', key: 'navReseller' },
        { href: '/about', key: 'navAbout' },
        { href: '/blog', key: 'navBlog' },
    ];

    const deviceLinks = [
        { label: 'IPTV for Firestick', href: '/best-iptv-firestick', available: true },
        { label: 'IPTV for Samsung TV', href: '/iptv-for-samsung-tv', available: true },
        { label: 'Best IPTV App', href: '#', available: false },
        { label: 'IPTV for LG TV', href: '#', available: false },
        { label: 'IPTV for Apple TV', href: '#', available: false },
        { label: 'IPTV for Android TV/Shield', href: '#', available: false },
    ];

    const regionLinks = [
        { label: 'Best IPTV USA', href: '/best-iptv-usa', available: true },
        { label: 'Best IPTV UK', href: '/best-iptv-uk', available: true },
        { label: 'Best IPTV Canada', href: '#', available: false },
    ];

    const educationalLinks = [
        { label: 'How to Setup Firestick', href: '/how-to-setup-iptv-on-firestick', available: true },
        { label: 'How to Fix IPTV Buffering', href: '#', available: false },
        { label: 'Ultimate VPN Guide for IPTV', href: '#', available: false },
        { label: 'IPTV Legal & Safety FAQ 2026', href: '#', available: false },
    ];

    const desktopNav = (
        <nav id="desktop-nav" className="hidden xl:flex items-center gap-2 text-lg">
            {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>{t(item.key)}</Link>
            ))}

            {/* Help Center with Mega Menu */}
            <div
                className="relative"
                onMouseEnter={handleHelpMenuEnter}
                onMouseLeave={handleHelpMenuLeave}
            >
                <Link
                    href="/help"
                    className={`nav-link ${pathname === '/help' ? 'active' : ''}`}
                >
                    {t('navHelp')}
                </Link>

                {/* Mega Menu Dropdown */}
                {isHelpMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-6 min-w-[700px] z-50">
                        <div className="grid grid-cols-3 gap-8">
                            {/* Devices Column */}
                            <div>
                                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4 text-blue-400">Devices</h3>
                                <ul className="space-y-3">
                                    {deviceLinks.map((link, idx) => (
                                        <li key={idx}>
                                            {link.available ? (
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                                >
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <span className="text-gray-500 text-sm cursor-not-allowed flex items-center justify-between">
                                                    {link.label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Regions Column */}
                            <div>
                                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4 text-blue-400">Regions</h3>
                                <ul className="space-y-3">
                                    {regionLinks.map((link, idx) => (
                                        <li key={idx}>
                                            {link.available ? (
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                                >
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <span className="text-gray-500 text-sm cursor-not-allowed flex items-center justify-between">
                                                    {link.label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Educational Column */}
                            <div>
                                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4 text-blue-400">Educational</h3>
                                <ul className="space-y-3">
                                    {educationalLinks.map((link, idx) => (
                                        <li key={idx}>
                                            {link.available ? (
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                                >
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <span className="text-gray-500 text-sm cursor-not-allowed flex items-center justify-between">
                                                    {link.label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

    const mobileNav = (
        <div id="mobile-menu" className={`xl:hidden bg-card-dark ${isMobileMenuOpen ? 'open' : ''}`}>
            <nav className="flex flex-col items-center gap-4 p-4">
                {navItems.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>{t(item.key)}</Link>
                ))}

                <Link
                    href="/help"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`nav-link w-full text-center ${pathname === '/help' ? 'active' : ''}`}
                >
                    {t('navHelp')}
                </Link>

                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="nav-link-cta bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg cta-button w-full text-center">{t('getStarted')}</Link>
                <div className="w-full pt-4 mt-4 border-t border-gray-700">
                    <label htmlFor="mobile-language-switcher" className="sr-only">Language</label>
                    <select id="mobile-language-switcher" value={lang} onChange={handleLanguageChange} className="language-switcher-style text-white rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
            </nav>
        </div>
    );

    return (
        <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center cursor-pointer">
                    <img src="/images/logo-streamverse.png" alt="StreamVerse Logo" className="h-10 w-auto" />
                </Link>

                {desktopNav}

                <div className="hidden xl:flex items-center gap-4">
                    <Link href="/pricing" className="nav-link-cta bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg cta-button cursor-pointer">{t('getStarted')}</Link>
                    <label htmlFor="language-switcher" className="sr-only">Language</label>
                    <select id="language-switcher" value={lang} onChange={handleLanguageChange} className="language-switcher-style text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
                <div className="xl:hidden">
                    <button id="mobile-menu-button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none" aria-label="Open mobile menu">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            {mobileNav}
        </header>
    );
};

export default Header;
