import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Reseller Program 2026 | Start Your IPTV Business | StreamVerse",
  description: "Join the #1 IPTV Reseller Program in 2026. Gain access to the world-class IPTV Reseller Panel with 100% white-label solutions, credits-based billing, and 24/7 technical support. Passive income starts here.",
  keywords: "IPTV Reseller Panel 2026, Start IPTV Business, Best IPTV Reseller Program, IPTV Credits Wholesale, White Label IPTV Solution",
  openGraph: {
    title: "StreamVerse IPTV Reseller - Professional Business Opportunity",
    description: "Launch your own IPTV brand today. High-profit margins, reliable infrastructure, and an easy-to-use control panel for managing thousands of customers.",
  },
};

export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
