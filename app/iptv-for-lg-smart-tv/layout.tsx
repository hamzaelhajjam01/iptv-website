import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Start Streaming 10k+ Channels on LG TV in 5 Minutes | StreamVerse',
    description: 'Experience premium IPTV for LG Smart TV. 10,000+ live channels in 4K with instant activation and zero buffering. Start your 2026 streaming journey today!',
    openGraph: {
        title: 'Start Streaming 10k+ Channels on LG TV in 5 Minutes | StreamVerse',
        description: 'Experience premium IPTV for LG Smart TV. 10,000+ live channels in 4K with instant activation and zero buffering. Start your 2026 streaming journey today!',
        type: 'website',
    }
};

export default function IPTVForLGSmartTVLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
