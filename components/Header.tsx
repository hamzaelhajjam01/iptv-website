"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language, Translations } from '../lib/translations';

const Header: React.FC = () => {
    const { lang, setLang, t } = useLanguage();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as Language);
    };

    const navItems: { href: string; key: keyof Translations['en'] }[] = [
        { href: '/channels-features', key: 'navChannelsFeatures' },
        { href: '/pricing', key: 'navPricing' },
        { href: '/reseller', key: 'navReseller' },
        { href: '/help', key: 'navHelp' },
        { href: '/about', key: 'navAbout' },
        { href: '/blog', key: 'navBlog' },
    ];

    const desktopNav = (
        <nav id="desktop-nav" className="hidden xl:flex items-center gap-2 text-lg">
            {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>{t(item.key)}</Link>
            ))}
        </nav>
    );

    const mobileNav = (
        <div id="mobile-menu" className={`xl:hidden bg-card-dark ${isMobileMenuOpen ? 'open' : ''}`}>
            <nav className="flex flex-col items-center gap-4 p-4">
                {navItems.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>{t(item.key)}</Link>
                ))}
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
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {mobileNav}
        </header>
    );
};

export default Header;
