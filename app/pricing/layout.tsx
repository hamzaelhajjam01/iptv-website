import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Subscription Pricing 2026 | No Contract Plans | StreamVerse",
  description: "Explore the most competitive IPTV pricing for 2026. Premium IPTV plans starting at $9.99/mo. 50,000+ Channels, 4K VOD, and Multi-Connection support. No hidden fees or long-term contracts.",
  keywords: "IPTV Pricing 2026, Best IPTV Subscription Cost, Cheap IPTV Plans, Multi-Screen IPTV Price, No Contract IPTV",
  openGraph: {
    title: "StreamVerse IPTV Pricing - Premium Entertainment, Affordable Cost",
    description: "Compare our 1, 6, and 12-month IPTV plans. Save up to 75% with our annual subscription. Instant activation and 24/7 support.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
