"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Lexend_Deca } from 'next/font/google';

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

const LocalizedHero: React.FC<{ src?: string }> = ({ src }) => {
    const { t } = useLanguage();
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="flex flex-col w-full bg-[#050a19]">
            {/* Main Hero Section */}
            <section className="relative overflow-hidden min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] flex items-center">
                {/* Background Images */}
                {/* Desktop Background */}
                <div className="absolute inset-0 hidden sm:block z-0">
                    <Image 
                        src="/images/Hero/mobile-worldcup-2026-with-text.png" 
                        alt="FIFA World Cup 2026 Background" 
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
                {/* Mobile Background */}
                <div className="absolute inset-0 sm:hidden z-0">
                    <Image 
                        src="/images/Hero/mobile-worldcup-2026-with-text.png" 
                        alt="FIFA World Cup 2026 Background" 
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
                
                {/* Dark Gradient Overlay removed because text is now baked into the background image */}
                
                <div className="relative z-20 container mx-auto px-6 py-16 lg:py-20 max-w-7xl">
                    <div className="max-w-3xl">
                        <motion.div 
                            className={`flex flex-col text-left ${lexendDeca.className}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="opacity-0 select-none pointer-events-none">
                            {/* STREAM VERSE TV */}
                            <motion.div variants={itemVariants} className="mb-2">
                                <h2 className="text-white font-bold tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-base lg:text-lg uppercase">
                                    STREAM VERSE TV
                                </h2>
                            </motion.div>
                            
                            {/* WATCH THE FIFA WORLD CUP */}
                            <motion.div variants={itemVariants} className="mb-0">
                                <h1 className="text-white font-black uppercase text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-tight">
                                    WATCH THE <br />
                                    FIFA WORLD CUP
                                </h1>
                            </motion.div>

                            {/* 2026 */}
                            <motion.div variants={itemVariants} className="mb-4 relative">
                                <div style={{ filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.8))' }}>
                                    <h1 className="font-black text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[260px] leading-[0.75] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#fdf6d0] via-[#e8c34f] to-[#8b6508] pb-2">
                                        2026
                                    </h1>
                                </div>
                            </motion.div>
                            
                            {/* UNITED STATES | CANADA | MEXICO */}
                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 font-black uppercase text-xl md:text-3xl lg:text-4xl tracking-widest text-shadow-lg">
                                <span className="text-white">UNITED STATES</span>
                                <span className="text-gray-300 font-normal">|</span>
                                <span className="text-[#e21836]">CANADA</span>
                                <span className="text-gray-300 font-normal">|</span>
                                <span className="text-[#006847]">MEXICO</span>
                            </motion.div>

                            {/* THREE NATIONS. ONE WORLD. THE ULTIMATE GOAL. */}
                            <motion.div variants={itemVariants} className="mb-10">
                                <p className="text-[#d4af37] font-bold tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm lg:text-base uppercase">
                                    THREE NATIONS. ONE WORLD. THE ULTIMATE GOAL.
                                </p>
                            </motion.div>
                            </div>

                            {/* CTAs */}
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                                <Link href="/pricing" className="bg-gradient-to-r from-[#d4af37] to-[#aa771c] hover:from-[#fceca1] hover:to-[#d4af37] text-black font-extrabold py-4 px-10 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/25 w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-xl shadow-black/50">
                                    {t('heroCTA')}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                </Link>
                                <a
                                    href="https://wa.me/447537172381?text=Hi!%20I'm%20interested%20in%20the%2024-Hour%20Premium%20Trial%20for%20%240.99.%0A%0A%F0%9F%93%A6%20*Offer%3A*%2024-Hour%20Premium%20Trial%20Access%0A%F0%9F%92%B0%20*Price%3A*%20%240.99%0A%0APlease%20send%20me%20the%20payment%20details%20and%20setup%20instructions%20to%20get%20started%20immediately!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black/50 hover:bg-black/80 border border-[#d4af37]/50 backdrop-blur-md text-white font-bold py-4 px-10 rounded-xl text-lg md:text-xl transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-xl shadow-black/50"
                                >
                                    <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    {t('trialButton')}
                                </a>
                            </motion.div>

                            {/* Badges */}
                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 justify-start">
                                <div className="flex items-center gap-2 bg-black/40 border border-[#d4af37]/30 rounded-full px-4 py-2 backdrop-blur-sm shadow-lg">
                                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                    <span className="text-white font-semibold text-sm">{t('moneyBackGuarantee')}</span>
                                </div>
                                <p className="text-sm text-gray-300 font-medium">{t('heroUrgency')}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Bottom Gradient overlay for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a19] to-transparent pointer-events-none z-10"></div>
            </section>
        </div>
    );
};

export default LocalizedHero;
