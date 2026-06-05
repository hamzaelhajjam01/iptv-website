"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import HeroCarousel from './HeroCarousel';
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
        <section className="relative overflow-hidden bg-[#050a19] min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] flex items-center">
            {/* Background Images */}
            {/* Desktop Background */}
            <div className="absolute inset-0 hidden sm:block z-0">
                <Image 
                    src="/images/Hero/desktop-worldcup-2026.png" 
                    alt="FIFA World Cup 2026 Background" 
                    fill
                    priority
                    className="object-cover object-right"
                    sizes="100vw"
                />
            </div>
            {/* Mobile Background */}
            <div className="absolute inset-0 sm:hidden z-0">
                <Image 
                    src="/images/Hero/mobile-worldcup-2026.png" 
                    alt="FIFA World Cup 2026 Background" 
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="100vw"
                />
            </div>
            
            {/* Dark Gradient Overlay for text readability (only needed on the left) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a19] via-[#050a19]/80 to-transparent z-10 hidden sm:block w-3/4"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a19] via-[#050a19]/80 to-transparent z-10 sm:hidden h-full"></div>
            
            <div className="relative z-20 container mx-auto px-6 py-16 lg:py-20 max-w-7xl">
                <div className="max-w-3xl">
                    <motion.div 
                        className={`flex flex-col text-left ${lexendDeca.className}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
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

                    <motion.div 
                        variants={itemVariants} 
                        initial="hidden"
                        animate="visible"
                        className="w-full flex justify-start sm:justify-center md:justify-start"
                    >
                        <div className="hero-trust">
                        {/* Left Laurel Wreath */}
                        <svg className="hero-trust-wreath htw-left" viewBox="0 0 37 147" fill="none">
                            <path d="M23.573 10.8548C26.4547 4.38729 27.7268 2.47674 30.1472 0.98197C32.6673 -0.574502 34.7745 -0.24866 35.0035 1.73225C35.2509 3.87233 31.8835 7.48179 28.1362 9.0942C25.412 10.266 25.0735 10.6455 23.3094 14.4971C22.2656 16.7756 21.4779 18.7156 21.558 18.8079C21.6382 18.8996 22.6295 18.429 23.7609 17.7618C27.8456 15.3518 32.9228 17.3362 30.0445 20.2179C29.01 21.2542 27.8923 21.5829 24.6248 21.8118L20.509 22.1002L19.2149 25.9444C16.8373 33.0082 16.8477 32.7227 19.0437 30.6414C22.5413 27.3272 26.4627 26.7742 26.4627 29.5947C26.4627 30.3439 26.0169 31.4027 25.4714 31.9476C24.2581 33.1615 19.0448 35.639 17.6885 35.6465C16.3938 35.654 15.8385 36.8056 14.7099 41.8211C13.4885 47.2488 13.4619 47.1831 15.771 44.4859C19.0719 40.629 23.0026 39.7352 23.0026 42.8412C23.0026 44.8936 19.4756 48.5821 15.7854 50.3871C12.4481 52.0203 12.5756 51.7481 11.7475 59.008L11.4187 61.8914L12.3789 60.1614C14.5098 56.3218 17.3378 54.1477 18.7144 55.2901C20.8504 57.0628 18.328 62.4773 13.4054 66.6848L10.842 68.8762L11.0111 73.7008L11.1806 78.5259L12.8086 76.1724C15.474 72.3184 19.5425 71.5601 19.5425 74.9176C19.5425 76.47 16.5091 79.6706 13.5484 81.2409L10.9753 82.6059L11.2982 85.5124C11.4758 87.111 11.8017 89.4569 12.0219 90.7257L12.4221 93.0324L13.4147 90.7337C13.9608 89.469 14.959 87.8474 15.6338 87.1294C17.0553 85.6162 19.2605 85.4103 19.772 86.7436C20.2933 88.1011 18.3055 92.0803 15.5697 95.1569L13.1679 97.8581L14.0945 101.933C14.6043 104.174 15.226 106.008 15.4757 106.008C15.726 106.008 16.0651 105.007 16.2289 103.783C16.8713 98.9948 19.7397 95.2693 21.5978 96.8114C23.2361 98.1712 21.9986 104.471 19.0771 109.648L17.3592 112.692L18.6164 115.667C20.283 119.609 20.6935 119.911 20.7085 117.205C20.7264 114.004 22.6249 110.045 24.1421 110.045C26.9281 110.045 26.7689 116.712 23.8561 122.009L22.509 124.458L25.2067 129.218L27.9044 133.977L28.236 130.229C28.7723 124.172 31.2014 120.886 32.8564 123.979C33.8074 125.756 33.2157 132.309 31.8189 135.466L30.6581 138.09L33.4573 142.089C34.9971 144.288 36.2588 146.282 36.2617 146.52C36.2761 147.835 34.8356 146.446 31.9764 142.389C29.1155 138.329 28.5128 137.784 26.5192 137.447C21.5926 136.614 13.7757 131.839 13.7757 129.662C13.7757 127.403 16.7346 127.78 22.1855 130.733C23.9432 131.685 25.3001 132.285 25.2015 132.067C23.6462 128.646 20.7887 124.474 19.9969 124.469C18.2888 124.457 12.9752 122.225 11.4153 120.864C5.88083 116.036 9.41993 113.125 15.5789 117.44L18.7271 119.645L17.3482 116.142C16.057 112.863 15.7687 112.551 12.8235 111.257C6.75913 108.593 2.92072 104.951 3.67445 102.576C4.42472 100.213 7.35254 101.23 11.6759 105.354C14.0542 107.623 14.41 107.808 14.0311 106.584C13.7855 105.792 13.1471 103.481 12.6131 101.451C11.7371 98.1216 11.4216 97.647 9.39286 96.609C5.7586 94.7498 3.43568 92.7302 1.88209 90.0792C0.114555 87.0631 0.231075 85.0395 2.18719 84.7627C3.27482 84.6093 4.38262 85.4201 7.30872 88.5112C9.36287 90.6807 10.898 91.9367 10.721 91.3023C10.5433 90.668 10.2238 88.5198 10.0104 86.5291C9.66847 83.3424 9.43094 82.8107 8.02556 82.084C4.02106 80.0132 -0.852528 72.5618 0.12726 70.0083C0.637049 68.6796 3.01818 68.8999 4.33533 70.3975C5.90968 72.1875 8.58549 76.4458 8.58549 77.1615C8.58549 77.485 8.78041 77.7502 9.018 77.7502C9.2556 77.7502 9.43669 75.5612 9.41996 72.8853L9.38878 68.0204L6.80644 65.2443C1.99055 60.0679 0.146278 55.5675 1.88787 53.2411C3.44145 51.1656 5.56483 53.4978 8.34157 60.3297L9.64713 63.5424L9.94822 61.5633C11.4649 51.5924 11.4995 52.3069 9.37731 49.8272C5.34224 45.1134 3.31861 38.1181 5.39063 36.0461C6.09534 35.3414 6.63973 35.2284 7.39115 35.6303C8.56816 36.2601 10.5975 40.6579 11.1961 43.8763C11.624 46.1767 12.6153 47.3901 12.6321 45.6341C12.6378 45.0603 13.1136 42.7126 13.6897 40.4174L14.737 36.2439L12.9204 33.6881C9.11602 28.3376 8.09242 20.0662 11.1806 19.6308C12.827 19.399 13.7578 21.2409 14.8829 26.957L15.8563 31.9038L17.4422 26.8169L19.0287 21.7305L17.5846 18.8327C14.8431 13.3317 14.2416 6.85493 16.3131 5.13583C18.4814 3.33658 20.0569 6.35146 20.2634 12.6967C20.3424 15.1367 20.5702 16.9532 20.7697 16.7335C20.9687 16.5132 22.2304 13.868 23.573 10.8548Z" fill="currentColor"/>
                        </svg>

                        {/* Right Laurel Wreath */}
                        <svg className="hero-trust-wreath htw-right" viewBox="0 0 37 147" fill="none">
                            <path d="M12.6888 10.8548C9.80707 4.38729 8.53489 2.47674 6.11454 0.98197C3.59443 -0.574502 1.48721 -0.24866 1.25827 1.73225C1.01087 3.87233 4.37818 7.48179 8.12547 9.0942C10.8497 10.266 11.1882 10.6455 12.9523 14.4971C13.9961 16.7756 14.7839 18.7156 14.7037 18.8079C14.6235 18.8996 13.6323 18.429 12.5008 17.7618C8.41615 15.3518 3.33894 17.3362 6.21718 20.2179C7.25175 21.2542 8.36941 21.5829 11.6369 21.8118L15.7527 22.1002L17.0468 25.9444C19.4244 33.0082 19.4141 32.7227 17.218 30.6414C13.7205 27.3272 9.799 26.7742 9.799 29.5947C9.799 30.3439 10.2448 31.4027 10.7903 31.9476C12.0037 33.1615 17.2169 35.639 18.5732 35.6465C19.8679 35.654 20.4233 36.8056 21.5518 41.8211C22.7733 47.2488 22.7998 47.1831 20.4908 44.4859C17.1898 40.629 13.2591 39.7352 13.2591 42.8412C13.2591 44.8936 16.7861 48.5821 20.4763 50.3871C23.8136 52.0203 23.6861 51.7481 24.5142 59.008L24.843 61.8914L23.8828 60.1614C21.7519 56.3218 18.9239 54.1477 17.5474 55.2901C15.4113 57.0628 17.9337 62.4773 22.8563 66.6848L25.4197 68.8762L25.2507 73.7008L25.0811 78.5259L23.4532 76.1724C20.7877 72.3184 16.7192 71.5601 16.7192 74.9176C16.7192 76.47 19.7526 79.6706 22.7133 81.2409L25.2864 82.6059L24.9635 85.5124C24.7859 87.111 24.4601 89.4569 24.2398 90.7257L23.8396 93.0324L22.8471 90.7337C22.3009 89.469 21.3027 87.8474 20.628 87.1294C19.2064 85.6162 17.0012 85.4103 16.4897 86.7436C15.9684 88.1011 17.9562 92.0803 20.692 95.1569L23.0939 97.8581L22.1672 101.933C21.6574 104.174 21.0357 106.008 20.786 106.008C20.5357 106.008 20.1966 105.007 20.0328 103.783C19.3904 98.9948 16.522 95.2693 14.6639 96.8114C13.0256 98.1712 14.2631 104.471 17.1846 109.648L18.9026 112.692L17.6453 115.667C15.9787 119.609 15.5682 119.911 15.5532 117.205C15.5353 114.004 13.6369 110.045 12.1196 110.045C9.33364 110.045 9.49279 116.712 12.4056 122.009L13.7527 124.458L11.055 129.218L8.35729 133.977L8.02572 130.229C7.48941 124.172 5.06036 120.886 3.40528 123.979C2.45432 125.756 3.04604 132.309 4.44278 135.466L5.60361 138.09L2.80437 142.089C1.26463 144.288 0.00289154 146.282 7.62939e-06 146.52C-0.0144081 147.835 1.4261 146.446 4.2853 142.389C7.14623 138.329 7.74887 137.784 9.74247 137.447C14.6691 136.614 22.4861 131.839 22.4861 129.662C22.4861 127.403 19.5271 127.78 14.0763 130.733C12.3185 131.685 10.9616 132.285 11.0602 132.067C12.6155 128.646 15.473 124.474 16.2648 124.469C17.973 124.457 23.2865 122.225 24.8464 120.864C30.3809 116.036 26.8418 113.125 20.6828 117.44L17.5346 119.645L18.9135 116.142C20.2047 112.863 20.493 112.551 23.4382 111.257C29.5026 108.593 33.341 104.951 32.5873 102.576C31.837 100.213 28.9092 101.23 24.5858 105.354C22.2075 107.623 21.8517 107.808 22.2306 106.584C22.4763 105.792 23.1146 103.481 23.6487 101.451C24.5246 98.1216 24.8401 97.647 26.8689 96.609C30.5031 94.7498 32.826 92.7302 34.3796 90.0792C36.1472 87.0631 36.0306 85.0395 34.0745 84.7627C32.9869 84.6093 31.8791 85.4201 28.953 88.5112C26.8989 90.6807 25.3637 91.9367 25.5408 91.3023C25.7184 90.668 26.0379 88.5198 26.2513 86.5291C26.5932 83.3424 26.8308 82.8107 28.2362 82.084C32.2407 80.0132 37.1142 72.5618 36.1345 70.0083C35.6247 68.6796 33.2435 68.8999 31.9264 70.3975C30.352 72.1875 27.6762 76.4458 27.6762 77.1615C27.6762 77.485 27.4813 77.7502 27.2437 77.7502C27.0061 77.7502 26.825 75.5612 26.8418 72.8853L26.8729 68.0204L29.4553 65.2443C34.2712 60.0679 36.1154 55.5675 34.3739 53.2411C32.8203 51.1656 30.6969 53.4978 27.9202 60.3297L26.6146 63.5424L26.3135 61.5633C24.7968 51.5924 24.7622 52.3069 26.8844 49.8272C30.9195 45.1134 32.9431 38.1181 30.8711 36.0461C30.1664 35.3414 29.622 35.2284 28.8706 35.6303C27.6936 36.2601 25.6642 40.6579 25.0656 43.8763C24.6377 46.1767 23.6464 47.3901 23.6297 45.6341C23.6239 45.0603 23.1481 42.7126 22.572 40.4174L21.5247 36.2439L23.3413 33.6881C27.1457 28.3376 28.1693 20.0662 25.0811 19.6308C23.4347 19.399 22.5039 21.2409 21.3788 26.957L20.4054 31.9038L18.8195 26.8169L17.233 21.7305L18.6771 18.8327C21.4186 13.3317 22.0201 6.85493 19.9486 5.13583C17.7803 3.33658 16.2048 6.35146 15.9984 12.6967C15.9194 15.1367 15.6915 16.9532 15.492 16.7335C15.293 16.5132 14.0313 13.868 12.6888 10.8548Z" fill="currentColor"/>
                        </svg>

                        <div className="hero-trust-stars">★★★★★</div>
                        
                        <div className="hero-trust-text">
                            <a href="#testimonials" style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>
                            See our <strong>170+ reviews</strong> on <strong>Trustpilot</strong>
                            </a>
                        </div>

                        <div className="hero-trust-avatars">
                            <div className="trust-avatar"><img src="/images/reviews/streamversetv-review-1.jpg" alt="Review" /></div>
                            <div className="trust-avatar"><img src="/images/reviews/streamversetv-review-2.jpg" alt="Review" /></div>
                            <div className="trust-avatar"><img src="/images/reviews/streamversetv-review-3.jpg" alt="Review" /></div>
                            <div className="trust-avatar-more">170+</div>
                        </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 hidden sm:block">
                <HeroCarousel />
            </div>
            
            {/* Mobile Carousel placed before bottom gradient overlay to show within the section flow */}
            <div className="w-full relative z-20 sm:hidden">
                <HeroCarousel />
            </div>
            
            {/* Bottom Gradient overlay for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a19] to-transparent pointer-events-none z-10"></div>
        </section>
    );
};

export default LocalizedHero;
