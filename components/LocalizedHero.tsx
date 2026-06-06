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
            <section className="relative overflow-hidden min-h-[100dvh] sm:min-h-[500px] lg:min-h-[600px] flex items-center">
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
                        src="/images/Hero/desktop-worldcup-2026-with-text.png" 
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

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocalizedHero;
