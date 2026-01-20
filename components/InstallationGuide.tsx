"use client";

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const InstallationGuide: React.FC = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('windows-mac');

    const tabs = [
        { id: 'windows-mac', label: t('tabWindowsMac') },
        { id: 'firestick', label: t('tabFirestick') },
        { id: 'android', label: t('tabAndroid') },
        { id: 'apple', label: t('tabApple') },
        { id: 'smart-tv', label: t('tabSmartTV') },
        { id: 'formuler', label: t('tabFormuler') }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'windows-mac':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <div>
                            <h4 className="text-xl font-bold mb-2 text-white">{t('windowsMethod')}</h4>
                            <p className="text-gray-300">
                                {t('windowsInstructions')}
                                <a
                                    href="https://www.iptvsmarters.com/download/?download=windows_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:underline break-all"
                                    aria-label="Download IPTV Smarters for Windows"
                                >
                                    https://www.iptvsmarters.com/download/?download=windows_app
                                </a>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2 text-white">{t('macMethod')}</h4>
                            <p className="text-gray-300">
                                {t('macInstructions')}
                                <a
                                    href="https://www.iptvsmarters.com/download/?download=mac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:underline break-all"
                                    aria-label="Download IPTV Smarters for Mac"
                                >
                                    https://www.iptvsmarters.com/download/?download=mac
                                </a>
                            </p>
                        </div>
                    </div>
                );
            case 'firestick':
                const firestickSteps = [
                    { id: 1, text: t('firestickStep1'), img: "/images/firestick/1-firestick-guide-streamverse.webp" },
                    { id: 2, text: t('firestickStep2'), img: "/images/firestick/2-firestick-guide-streamverse.webp" },
                    { id: 3, text: t('firestickStep3'), img: "/images/firestick/3-firestick-guide-streamverse.webp" },
                    { id: 4, text: t('firestickStep4'), img: "/images/firestick/4-firestick-guide-streamverse.webp" },
                    { id: 5, text: t('firestickStep5'), img: "/images/firestick/5-firestick-guide-streamverse.webp" },
                    { id: 6, text: t('firestickStep6'), img: "/images/firestick/6-firestick-guide-streamverse.webp" },
                    { id: 7, text: t('firestickStep7'), img: "/images/firestick/7-firestick-guide-streamverse.webp" },
                    { id: 8, text: t('firestickStep8'), img: "/images/firestick/8-firestick-guide-streamverse.webp" },
                    { id: 9, text: t('firestickStep9'), img: "/images/firestick/9-firestick-guide-streamverse.webp" },
                    { id: 10, text: t('firestickStep10'), img: "/images/firestick/10-firestick-guide-streamverse.webp" },
                    { id: 11, text: t('firestickStep11'), img: "/images/firestick/11-firestick-guide-streamverse.webp" },
                    { id: 12, text: t('firestickStep12'), img: "/images/firestick/12-firestick-guide-streamverse.webp" },
                    { id: 13, text: t('firestickStep13'), img: "/images/firestick/13-firestick-guide-streamverse.webp" },
                    { id: 14, text: t('firestickStep14'), img: "/images/firestick/14-firestick-guide-streamverse.webp" },
                    { id: 15, text: t('firestickStep15'), img: "/images/firestick/15-firestick-guide-streamverse.webp" },
                    { id: 16, text: t('firestickStep16'), img: "/images/firestick/16-firestick-guide-streamverse.webp" },
                    { id: 17, text: t('firestickStep17'), img: "/images/firestick/17-firestick-guide-streamverse.webp" },
                    { id: 18, text: t('firestickStep18'), img: "/images/firestick/18-firestick-guide-streamverse.webp" },
                    { id: 19, text: t('firestickStep19'), img: "/images/firestick/19-firestick-guide-streamverse.webp" },
                    { id: 20, text: t('firestickStep20'), img: "/images/firestick/20.2-firestick-guide-streamverse.webp" }
                ];
                return (
                    <div className="space-y-12 animate-fadeIn">
                        {firestickSteps.map((step) => (
                            <div key={step.id} className="border-b border-gray-800 pb-10 last:border-0 last:pb-0">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{step.id}</span>
                                    <p className="text-xl text-gray-200 mt-0.5">{step.text}</p>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl max-w-2xl">
                                    <img src={step.img} alt={`Firestick Step ${step.id}`} className="w-full h-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'android':
                return (
                    <div className="space-y-12 animate-fadeIn">
                        <div>
                            <h4 className="text-2xl font-bold mb-6 text-white px-2">{t('androidTitle')}</h4>

                            <div className="space-y-10">
                                <div className="space-y-3 px-2">
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 1:</span> {t('androidStep1')}</p>
                                    <a href="https://www.iptvsmarters.com/smarters.apk" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline break-all block mb-4">https://www.iptvsmarters.com/smarters.apk</a>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 2:</span> {t('androidStep2')}</p>
                                </div>

                                <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl max-w-4xl mx-auto bg-black/20 p-2">
                                    <img src="/images/android/1-android-guide-streamverse.webp" alt="Android Login Screen" className="w-full h-auto rounded-lg" />
                                </div>

                                <div className="space-y-4 px-2">
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 3:</span> {t('androidStep3')}</p>
                                    <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-4">
                                        <p className="text-gray-300 italic">{t('androidAddUserNote')}</p>
                                    </div>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 4:</span> {t('androidStep4')}</p>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 5:</span> {t('androidStep5')}</p>
                                </div>

                                <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl max-w-4xl mx-auto bg-black/20 p-2">
                                    <img src="/images/android/2-android-guide-streamverse.webp" alt="Android Main Menu" className="w-full h-auto rounded-lg" />
                                </div>

                                <div className="space-y-4 px-2">
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 6:</span> {t('androidStep6')}</p>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 7:</span> {t('androidStep7')}</p>
                                    <p className="text-violet-400 font-bold mt-10 text-2xl">{t('done')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'apple':
                return (
                    <div className="space-y-12 animate-fadeIn">
                        <div>
                            <h4 className="text-2xl font-bold mb-6 text-white px-2">{t('appleTitle')}</h4>

                            <div className="space-y-10">
                                <div className="space-y-3 px-2">
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 1:</span> {t('appleStep1')}</p>
                                    <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline break-all block mb-4">https://apps.apple.com/in/app/smarters-player-lite/id1628995509</a>
                                    <p className="text-gray-300 mb-4 italic">{t('appleStep1Sub')}</p>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 2:</span> {t('appleStep2')}</p>
                                </div>

                                <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl max-w-4xl mx-auto bg-black/20 p-2">
                                    <img src="/images/android/1-android-guide-streamverse.webp" alt="iOS Login Screen" className="w-full h-auto rounded-lg" />
                                </div>

                                <div className="space-y-4 px-2">
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 3:</span> {t('androidStep3')}</p>
                                    <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-4">
                                        <p className="text-gray-300 italic">{t('androidAddUserNote')}</p>
                                    </div>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 4:</span> {t('androidStep4')}</p>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 5:</span> {t('appleStep5')}</p>
                                </div>

                                <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl max-w-4xl mx-auto bg-black/20 p-2">
                                    <img src="/images/android/2-android-guide-streamverse.webp" alt="iOS Main Menu" className="w-full h-auto rounded-lg" />
                                </div>

                                <div className="space-y-4 px-2">
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 6:</span> {t('androidStep6')}</p>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 7:</span> {t('androidStep7')}</p>
                                    <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 8:</span> {t('appleStep8')}</p>
                                    <p className="text-violet-400 font-bold mt-10 text-2xl">{t('done')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'smart-tv':
                return (
                    <div className="space-y-12 animate-fadeIn">
                        <div>
                            <h4 className="text-2xl font-bold mb-6 text-white px-2">{t('smartTvSamsungTitle')}</h4>
                            <div className="space-y-6 px-2">
                                <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 1:</span> {t('smartTvSamsungStep1')}</p>
                                <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 2:</span> {t('smartTvSamsungStep2')}</p>
                                <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 3:</span> {t('smartTvSamsungStep3')}</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-10">
                            <h4 className="text-2xl font-bold mb-6 text-white px-2">{t('smartTvLGTitle')}</h4>
                            <div className="space-y-6 px-2">
                                <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 1:</span> {t('smartTvLGStep1')}</p>
                                <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 2:</span> {t('smartTvLGStep2')}</p>
                                <p className="text-gray-200 text-lg"><span className="font-bold text-blue-400">{t('stepLabel')} 3:</span> {t('smartTvLGStep3')}</p>
                            </div>
                        </div>
                    </div>
                );
            case 'formuler':
                return (
                    <div className="space-y-12 animate-fadeIn">
                        <div>
                            <h4 className="text-2xl font-bold mb-6 text-white px-2">{t('formulerTitle')}</h4>

                            <div className="space-y-8 px-2">
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</span>
                                    <p className="text-gray-200 text-lg mt-0.5">{t('formulerStep1')}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</span>
                                    <p className="text-gray-200 text-lg mt-0.5">{t('formulerStep2')}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">3</span>
                                    <p className="text-gray-200 text-lg mt-0.5">{t('formulerStep3')}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">4</span>
                                    <p className="text-gray-200 text-lg mt-0.5">{t('formulerStep4')}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">5</span>
                                    <div>
                                        <p className="text-gray-200 text-lg mt-0.5">{t('formulerStep5')}</p>
                                        <p className="text-gray-300 italic mt-2">{t('formulerStep5Sub')}</p>
                                    </div>
                                </div>
                                <p className="text-violet-400 font-bold mt-10 text-2xl">{t('done')}</p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="text-center py-10 animate-fadeIn">
                        <p className="text-gray-400 italic">Content for {tabs.find(t => t.id === activeTab)?.label} is coming soon...</p>
                    </div>
                );
        }
    };

    return (
        <section className="installation-guide mb-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('installGuideTitle')}</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto px-4">
                    {t('installGuideSubtitle')}
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {/* Tabs Header */}
                <div className="flex overflow-x-auto no-scrollbar border-b border-gray-800/60 lg:flex-nowrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-5 text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap border-t border-l border-r border-transparent ${activeTab === tab.id
                                ? 'text-blue-400 bg-[#0c1427] border-gray-700/50 rounded-t-xl -mb-[1px] z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content Area */}
                <div className="border border-gray-700/50 bg-[#0c1427] p-8 md:p-12 rounded-b-xl rounded-tr-xl shadow-2xl backdrop-blur-md min-h-[320px]">
                    {renderContent()}
                </div>
            </div>

            <style jsx>{`
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default InstallationGuide;
