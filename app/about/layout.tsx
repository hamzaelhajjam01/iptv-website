export const metadata = {
    title: 'About Us | StreamVerse',
    description: 'Learn more about StreamVerse, the leading provider of high-quality IPTV services, our mission, and our commitment to uptime.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
