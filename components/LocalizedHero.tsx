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
            <section className="relative overflow-hidden min-h-[100dvh] sm:min-h-[500px] lg:min-h-[600px] flex items-center pt-20">
                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#050a19]">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 mix-blend-screen"
                    >
                        <source src="/videos/Lionel Messi - Top 30 Goals.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay to ensure text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050a19] via-[#050a19]/80 to-[#050a19]/40"></div>
                </div>
                
                <div className="relative z-20 container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
                        
                        {/* Left Side: Text */}
                        <motion.div 
                            className={`flex flex-col text-left ${lexendDeca.className}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >

                            {/* WATCH WORLD CUP */}
                            <motion.div variants={itemVariants} className="mb-2">
                                <h1 className="text-white font-black uppercase text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.05] tracking-tight">
                                    WATCH WORLD CUP
                                </h1>
                            </motion.div>

                            {/* WITH NO BUFFERING */}
                            <motion.div variants={itemVariants} className="mb-6 relative">
                                <div style={{ filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.5))' }}>
                                    <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-[75px] xl:text-[85px] leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500 pb-2 uppercase">
                                        WITH NO BUFFERING
                                    </h1>
                                </div>
                            </motion.div>
                            
                            {/* Paragraph */}
                            <motion.div variants={itemVariants} className="mb-10">
                                <p className="text-gray-300 font-medium text-base md:text-lg max-w-lg leading-relaxed">
                                    Don't miss a single goal. Our premium anti-freeze technology and ultra-fast 10Gbps servers guarantee an uninterrupted, crystal-clear 4K streaming experience for every match.
                                </p>
                            </motion.div>

                            {/* Buttons */}
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                                <Link href="/pricing#pricing-cards" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg cta-button transition-transform duration-300">
                                    Get Started
                                </Link>
                                <Link href="/channels-features" className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all duration-300">
                                    View Channels
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Side: Image */}
                        <motion.div 
                            className="relative h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] w-full flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-violet-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
                            <Image 
                                src="/images/Hero/png-hero-wc.png" 
                                alt="FIFA World Cup 2026" 
                                fill
                                priority
                                className="object-contain object-center drop-shadow-2xl z-10 scale-105 lg:scale-110 xl:scale-125"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocalizedHero;
