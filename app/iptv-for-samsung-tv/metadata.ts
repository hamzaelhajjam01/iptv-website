import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crystal Clear 4K Streaming in 60 Seconds | IPTV for Samsung Smart TV | StreamVerseTV',
    description: 'Best IPTV for Samsung Smart TV. Install IPTV Smarters or Smart STB in minutes. 50,000+ channels, UHD 4K quality & 24/7 support. Activate instantly on Tizen OS.',
    keywords: [
        'IPTV for Samsung Smart TV',
        'Samsung Smart TV IPTV',
        'IPTV Smarters Samsung',
        'Smart STB Samsung TV',
        'Samsung Tizen IPTV',
        'IPTV app Samsung TV',
        'how to install IPTV on Samsung TV',
        'Samsung 4K IPTV',
        'IPTV for Samsung Tizen OS',
        'best IPTV Samsung TV 2026',
        'SET IPTV Samsung',
        'Samsung Smart TV streaming'
    ],
    openGraph: {
        title: 'Crystal Clear 4K Streaming in 60 Seconds | IPTV for Samsung Smart TV',
        description: 'Transform your Samsung Smart TV into a 50,000+ channel powerhouse. IPTV Smarters & Smart STB compatible. Tizen OS optimized — instant activation.',
        type: 'website',
        url: 'https://streamversetv.com/iptv-for-samsung-tv',
        images: [
            {
                url: '/images/samsung-tv-iptv-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Samsung Smart TV IPTV app setup menu'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IPTV for Samsung Smart TV | StreamVerseTV',
        description: 'Turn your Samsung Smart TV into the ultimate streaming hub. 50k+ channels, 4K UHD, instant setup via IPTV Smarters or Smart STB.',
        images: ['/images/samsung-tv-iptv-hero.jpg']
    },
    alternates: {
        canonical: 'https://streamversetv.com/iptv-for-samsung-tv'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
