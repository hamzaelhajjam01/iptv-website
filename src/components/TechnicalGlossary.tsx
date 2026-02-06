import React from 'react';

export default function TechnicalGlossary() {
    const terms = [
        {
            term: "ISP Throttling",
            definition: "This occurs when your Internet Service Provider intentionally slows down your connection when they detect high-bandwidth streaming activities. This is the #1 cause of buffering during live sports events. Using a specialized VPN hides your traffic, preventing your ISP from inspecting data packets and lowering your speed.",
            icon: "🚫"
        },
        {
            term: "M3U Playlist",
            definition: "A text file format that contains a list of media URLs. In IPTV, the M3U link is the 'key' that connects your device to the streaming server. It is often replaced by 'Xtream Codes' (Username/Password) which is simply a more user-friendly way to authenticate that same M3U connection.",
            icon: "📋"
        },
        {
            term: "Sideloading",
            definition: "The process of installing applications on a device (like an Amazon Firestick or Android Box) that are not available in the official App Store. This is standard practice for IPTV players like Smarters Pro or TiviMate, requiring the 'Downloader' app to fetch the APK file directly.",
            icon: "📱"
        },
        {
            term: "EPG (Electronic Program Guide)",
            definition: "The digital menu that shows you what is playing on each channel, along with a schedule for the next 7 days. If your EPG says 'No Information', it usually means the XML link in your playlist settings needs to be updated or refreshed.",
            icon: "📺"
        },
        {
            term: "Packet Loss",
            definition: "When data 'packets' traveling from the server to your device get lost in transit. Unlike VOD (Netflix), live TV cannot buffer ahead, so even 1% packet loss results in freezing or looping. This is often fixed by switching from WiFi to a hardwired Ethernet connection.",
            icon: "📦"
        },
        {
            term: "Transcoding",
            definition: "The process of converting a video stream from one format to another. A 'Hardware Decoder' setting in your app allows your device's processor to handle this efficiently, ensuring smooth 4K playback without overheating or lag.",
            icon: "⚙️"
        }
    ];

    return (
        <section className="my-8 not-prose">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-2xl overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                            IPTV Technical Glossary
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Essential terminology every IPTV user should understand
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {terms.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                            >
                                {/* Gradient accent line */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-l-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-start gap-3 ml-2">
                                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                                    <div>
                                        <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors">
                                            {item.term}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.definition}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
