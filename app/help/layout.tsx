export const metadata = {
    title: 'Help Center & FAQ | StreamVerse',
    description: 'Need help? Visit the StreamVerse Help Center for FAQs, setup guides, and technical support for all your devices.',
    alternates: {
        canonical: '/help',
    },
};

export default function HelpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
