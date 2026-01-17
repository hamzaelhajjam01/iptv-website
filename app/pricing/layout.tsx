export const metadata = {
    title: 'Pricing & Plans | StreamVerse',
    description: 'Explore our affordable IPTV subscription plans. Choose the best package for your entertainment needs with StreamVerse.',
    alternates: {
        canonical: '/pricing',
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
