import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tired of Buffering? Fix Your IPTV in 5 Minutes | StreamVerse.',
    description: 'Stop IPTV buffering today with our 2026 troubleshooting guide. Learn 7 proven ways to fix freezing, improve speeds, and stream in 4K..',
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
