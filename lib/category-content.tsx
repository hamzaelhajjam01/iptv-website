import React from 'react';

export const CATEGORY_CONTENT: Record<string, React.ReactNode> = {
    'Local TV': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Stream local news, weather, and regional sports networks (RSN) directly via IPTV without expensive cable packages. Unlike standard OTA antennas, our IPTV service delivers crystal-clear feeds of major affiliates like ABC, CBS, NBC, and FOX, regardless of your physical location. Stay connected to your community's breaking news and daily forecasts while enjoying the flexibility of watching on Firestick, Android TV, or mobile devices. This section guides you through finding your specific local channels and troubleshooting regional restrictions.
            </p>
        </div>
    ),
    'Tutorials': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                This is your ultimate technical knowledge base for mastering IPTV streaming. Here you will find step-by-step installation guides for every device, including Amazon Firestick (sideloading via Downloader), Android TV Boxes, Apple TV, and Samsung/LG Smart TVs. We also cover advanced troubleshooting: how to stop buffering, how to configure your Electronic Program Guide (EPG) for accurate listings, and how to use external players like TiviMate or IPTV Smarters Pro for the best possible experience.
            </p>
        </div>
    ),
    'Sports': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Never miss a game again with our comprehensive Sports streaming guide. Access live coverage of the NFL, NBA, UFC, Premier League (EPL), and Formula 1 in full HD/4K quality. This category explains how to use premium features like Multi-View to watch simultaneous matches, Catch-Up TV for replays, and Pay-Per-View (PPV) events without the extra cost. Whether you are looking for RedZone, specialized racing streams, or international leagues, these guides ensure you get the reliable, buffer-free action you crave.
            </p>
        </div>
    ),
    'General Info': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                New to IPTV? Start here. This section covers the fundamental concepts of Internet Protocol Television, explaining how it differs from traditional cable and satellite. Learn about the legality of streaming in your region, the minimum internet speed requirements for buffer-free 4K viewing, and which devices offer the best performance. We break down technical jargon like 'M3U', 'Xtream Codes', and 'MAC Address' into simple terms so you can manage your subscription with confidence.
            </p>
        </div>
    ),
    'Advanced': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Take your streaming setup to the next level with our Advanced configurations. Learn how to optimize your network with Port Forwarding, set up a personalized DVR (Digital Video Recorder) to record live TV, and edit your M3U playlists to remove unwanted channels. We also dive into 4K transcoding settings, hardware acceleration, and using middleware to manage multiple subscriptions. Perfect for power users who want total control over their viewing experience.
            </p>
        </div>
    ),
    'Case Studies': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Real stories from real cord-cutters. Read detailed breakdowns of how families and individuals saved thousands of dollars by switching to IPTV. We analyze their previous cable bills, their new streaming setups, and the exact hardware they used to make the switch. These case studies provide proof of savings and offer a roadmap for replicating their success, showing you exactly how to audit your own monthly entertainment expenses.
            </p>
        </div>
    ),
    'Best Of': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Don't waste money on bad hardware or apps. Our 'Best Of' lists are curated based on rigorous testing and performance benchmarks. Discover the Top 5 IPTV Players for 2026, the Best Android TV Boxes under $50, and the most reliable VPNs for privacy and speed. We update these rankings monthly to reflect the latest software updates and device releases, ensuring you always have the best equipment for your setup.
            </p>
        </div>
    ),
    'Troubleshooting': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Fix common streaming errors instantly. This section is a dedicated repair guide for issues like 'Download Failed', 'Audio Out of Sync', 'Black Screen', and 'Login Authentication Errors'. We provide flowcharts and step-by-step fixes for specific error codes on Firestick, TiviMate, and Smarters Pro. Stop guessing and start watching again by following our proven debugging procedures.
            </p>
        </div>
    ),
    'Guides': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Versatile 'How-To' content for every scenario. Whether you are trying to watch IPTV on a Windows PC via VLC, set up streaming on an Xbox or PlayStation, or cast content from your phone to a Smart TV, these guides cover non-standard setups. We also include lifestyle guides, such as 'How to Watch IPTV in a Hotel' and 'Parental Control Configurations' to keep your family safe.
            </p>
        </div>
    ),
    'Comparisons': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Make informed decisions with our head-to-head battles. We pit top services and apps against each other: 'TiviMate vs. Smarters Pro', 'IPTV vs. Cable', 'FuboTV vs. Private IPTV'. These unbiased comparisons analyze price, channel count, interface speed, and reliability. We stress-test features so you can choose the platform that perfectly matches your viewing habits and budget.
            </p>
        </div>
    )
};
