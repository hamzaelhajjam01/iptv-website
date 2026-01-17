export const metadata = {
    title: 'IPTV Reseller Program | StreamVerse',
    description: 'Join the StreamVerse IPTV Reseller program. Start your own business with our high-quality streams and easy-to-use panel.',
    alternates: {
        canonical: '/reseller',
    },
};

export default function ResellerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
