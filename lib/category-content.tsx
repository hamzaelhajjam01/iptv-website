import React from 'react';

export const CATEGORY_CONTENT: Record<string, React.ReactNode> = {
    'Advanced': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                In our Advanced IPTV section, we dive deep into technical setups, Xtream codes optimization, and advanced troubleshooting for power users. Explore complex topics like VPN tunneling configurations, recording (DVR) setups on NAS drives, and managing multi-connection subscriptions for optimal performance.
            </p>
        </div>
    ),
    'Best Of': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                StreamVerse's top selections. We curate the absolute best IPTV services, devices, and accessories based on extensive testing and user feedback. Whether you need the most stable provider or the fastest streaming stick, our "Best Of" lists save you time and money.
            </p>
        </div>
    ),
    'Case Studies': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Explore real-world Case Studies to see how users are cutting the cord and improved their entertainment setup. We share detailed stories of how families switched from expensive cable packages to streamlined IPTV setups, including exactly what hardware they used and how much money they saved.
            </p>
        </div>
    ),
    'Comparisons': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Choosing the right service or device can be overwhelming. Our detailed Comparisons break down the pros and cons of top contenders side-by-side. From "Firestick vs. Android Box" to "IPTV vs. Cable TV," we analyze the costs, features, and specs to help you choose the option that best fits your needs.
            </p>
        </div>
    ),
    'General Info': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Everything else you need to know about the world of streaming. From clarifying legal questions and industry terminology to understanding internet speed requirements, our General Info section covers the essential basics for every streamer.
            </p>
        </div>
    ),
    'Guides': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Your ultimate resource for mastering IPTV. Whether you are a complete beginner looking to set up your first Firestick or an experienced user trying to optimize your network, we have step-by-step instructions for every major device and platform.
            </p>
        </div>
    ),
    'Local TV': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Unlock local content without geographic restrictions. Access affiliates from major networks like ABC, CBS, NBC, and FOX from cities across the country. Stay connected to your hometown news, weather, and regional events no matter where you are in the world.
            </p>
        </div>
    ),
    'Sports': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Never miss a game. Learn how to access Regional Sports Networks (RSNs), pay-per-view events, and reliable 60fps streams. We cover everything from NFL Sunday Ticket alternatives to watching international soccer leagues without blackouts.
            </p>
        </div>
    ),
    'Troubleshooting': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Fix buffering and playback issues fast. We provide detailed solutions for common errors, connection problems, and audio sync issues. Turn yourself from a frustrated viewer into a power user who can diagnose and fix streaming glitches in minutes.
            </p>
        </div>
    ),
    'Tutorials': (
        <div className="space-y-4 text-left">
            <p className="text-gray-300 leading-relaxed">
                Specific "How-To" articles for mastering your middleware and apps. Deep dives into features of popular players like TiviMate and IPTV Smarters, showing you how to manage favorites, set up parental controls, and customize your Electronic Program Guide (EPG).
            </p>
        </div>
    )
};
