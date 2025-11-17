"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
         <footer className="bg-section-dark text-center py-8 px-6">
            <div className="container mx-auto">
                {/* Footer nav links */}
                <nav className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-blue-400">
                    <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-use" className="hover:text-blue-300 transition-colors">Terms of Use</Link>
                </nav>
                                 <div className="mb-4">
                                         <img
                                             src="https://i.ibb.co/Qfvn4z6/payment.png"
                                             alt="Accepted Payment Methods"
                                             className="h-5 md:h-6 mx-auto"
                                             loading="lazy"
                                             decoding="async"
                                             onError={(e) => { const target = e.target as HTMLImageElement; target.src='https://placehold.co/300x40/0c1427/e5e7eb?text=Payments+Accepted'; }}
                                         />
                                 </div>
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t('footerCopyright') }}></p>
                <p className="text-gray-600 text-sm mt-2">{t('footerDisclaimer')}</p>
            </div>
        </footer>
    );
};

export default Footer;
