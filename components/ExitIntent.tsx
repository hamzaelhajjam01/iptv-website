"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const ExitModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // Get WhatsApp number from environment
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

    const handleFreeTrial = () => {
        // Create WhatsApp message for free trial
        const message = `Hello! I'm interested in the 24-Hour Premium Trial for $1.99.

📦 *Offer:* 24-Hour Premium Trial Access
💰 *Price:* $1.99

Please send me the payment details and setup instructions to get started immediately!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp link
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Close the modal
        onClose();
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-[1000]"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    {/* Centering container to avoid transform conflicts with framer-motion */}
                    <div className="fixed inset-0 z-[1001] flex items-center justify-center" onClick={onClose}>
                        <motion.div
                            className="bg-card-dark text-white p-8 rounded-lg shadow-2xl w-11/12 max-w-lg text-center border-2 border-blue-500/50"
                            role="dialog"
                            aria-modal="true"
                            initial={{ opacity: 0, scale: 0.95, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: -6 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl" aria-label="Close modal">&times;</button>
                            <h2 className="text-3xl font-bold text-cyan-300 mb-4">{t('modalTitle')}</h2>
                            <p className="text-lg mb-6">{t('modalSubtitle')}</p>
                            <button onClick={handleFreeTrial} className="w-full block bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-8 rounded-lg text-xl cta-button">
                                {t('modalCTA')}
                            </button>
                            <p className="text-sm mt-4 text-gray-400">{t('modalUrgency')}</p>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

const ExitIntent: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleMouseOut = useCallback((e: MouseEvent) => {
        if (e.clientY <= 0) {
            setModalOpen(true);
            document.body.removeEventListener('mouseout', handleMouseOut);
        }
    }, []);

    useEffect(() => {
        // Add a delay to prevent the modal from showing on initial load/reload
        const timer = setTimeout(() => {
            document.body.addEventListener('mouseout', handleMouseOut);
        }, 3000);

        return () => {
            clearTimeout(timer);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, [handleMouseOut]);

    return <ExitModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />;
};

export default ExitIntent;
