import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '★ 4.9 (12,000 Reviews) | Best IPTV UK - Premium Sky & TNT Sports',
    description: 'Experience the UK\'s #1 IPTV service for 2026. Get all Sky Sports, TNT, and UK terrestrial channels in 4K. Instant setup. Join 50k+ happy UK streamers!',
    openGraph: {
        title: '★ 4.9 (12,000 Reviews) | Best IPTV UK - Premium Sky & TNT Sports',
        description: 'Experience the UK\'s #1 IPTV service for 2026. Get all Sky Sports, TNT, and UK terrestrial channels in 4K. Instant setup. Join 50k+ happy UK streamers!',
        type: 'website',
    }
};

export default function BestIPTVUKLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
