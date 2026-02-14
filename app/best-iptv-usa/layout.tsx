import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best IPTV USA - 10,000+ Premium Channels & Live Sports',
    description: 'Access the best IPTV in the USA with 4K sports, local news, and zero buffering. Instant activation on all devices. Join 50,000+ US streamers today!',
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
