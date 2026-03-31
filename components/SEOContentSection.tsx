import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const SEOContentSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-section-dark overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* --- Alternating Premium Sections --- */}
                <div className="space-y-32">
                    
                    {/* Section 1: Uptime (Image Left) */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-in-up">
                        <div className="w-full lg:w-1/2 relative group">
                            {/* Glowing Orbit Backdrop */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 blur-[100px] rounded-full group-hover:bg-green-500/20 transition-all duration-700"></div>
                            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-3xl bg-[#050a19]">
                                <Image 
                                    src="/images/mockup-uptime-v2.png" 
                                    alt="IPTV Server Stability and 99.9% Uptime Hologram" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 text-green-400 font-bold text-sm uppercase">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>Secure Status</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
                                {t('seoUptimeTitle')}
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                                {t('seoUptimeDesc')}
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Anti-Freeze (Image Right) */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-3xl bg-[#050a19]">
                                <Image 
                                    src="/images/mockup-antifreeze-v2.png" 
                                    alt="Ultra Smooth Buffer-Free Streaming Technology" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
                                {t('seoAntiFreezeTitle')}
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                                {t('seoAntiFreezeDesc')}
                            </p>
                        </div>
                    </div>

                    {/* Section 3: VOD Library (Image Left) */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-3xl bg-[#050a19]">
                                <Image 
                                    src="/images/mockup-vod-v2.png" 
                                    alt="Premium 4K VOD Library and Movie Archive" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-sm font-black px-4 py-2 rounded-lg text-sm tracking-tighter text-white">4K CINEMA ACCESS</div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
                                {t('seoVodTitle')}
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                                {t('seoVodDesc')}
                            </p>
                        </div>
                    </div>

                </div>

                {/* --- Technical Card Grid --- */}
                <div className="mt-40 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Infrastructure Card */}
                    <div className="bg-card-dark p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden bg-[#050a19] border border-gray-800/50">
                            <Image 
                                src="/images/mockup-network-v2.png" 
                                alt="Global 10Gbps CDN Node Hologram" 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                            {t('seoInfrastructureTitle')}
                        </h3>
                        <p className="text-gray-400 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                            {t('seoInfrastructureDesc')}
                        </p>
                    </div>

                    {/* Devices Card */}
                    <div className="bg-card-dark p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden bg-[#050a19] border border-gray-800/50">
                            <Image 
                                src="/images/mockup-devices-v2.png" 
                                alt="Universal Multi-Device Compatibility Mockup" 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                            {t('seoDevicesTitle')}
                        </h3>
                        <p className="text-gray-400 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                            {t('seoDevicesDesc')}
                        </p>
                    </div>

                    {/* Security Card */}
                    <div className="bg-card-dark p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden bg-[#050a19] border border-gray-800/50 flex items-center justify-center">
                            <Image 
                                src="/images/mockup-security-v2.png" 
                                alt="Privacy-First Streaming and Secure VPN Lock Mockup" 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                            {t('seoSecurityTitle')}
                        </h3>
                        <p className="text-gray-400 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                            {t('seoSecurityDesc')}
                        </p>
                    </div>

                </div>

                {/* --- Buyer's Guide: Expert Insight Box --- */}
                <div className="mt-32 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                    <div className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#121c33] to-[#0c1427] border border-blue-500/30 overflow-hidden shadow-3xl">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                                <div className="flex-shrink-0 bg-blue-600 rounded-2xl p-4 shadow-lg shadow-blue-500/20">
                                    <span className="text-white font-black text-2xl">PRO TIP</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white text-center md:text-left">
                                    {t('seoGuideTitle')}
                                </h2>
                            </div>
                            <p className="text-xl leading-relaxed text-gray-300 mb-8 italic">
                                &quot;{t('seoGuideDesc')}&quot;
                            </p>
                            <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
                                <p className="text-gray-400 font-medium">Looking for the <strong className="text-blue-400">Best IPTV Subscription in 2026</strong>? StreamVerse is your answer.</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-green-500 font-bold">15,000+ GLOBAL USERS</span>
                                    <div className="flex -space-x-3">
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className="relative w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 overflow-hidden shadow-lg">
                                                <Image 
                                                    src={`/images/avatars/avatar-${i}.png`}
                                                    alt={`Satisfied StreamVerse User ${i}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SEOContentSection;
