import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Support & Installation Guide 2026 | Setup & Troubleshooting | StreamVerse",
  description: "Get step-by-step installation guides for Firestick, Android TV, Smart TVs, and mobile devices. AI-powered IPTV technical support and comprehensive FAQs for buffering fixes and account setup.",
  keywords: "IPTV Setup Guide 2026, IPTV Firestick Installation, Fix IPTV Buffering, Xtream Codes API Setup, IPTV Support Center",
  openGraph: {
    title: "StreamVerse IPTV Support Center & Setup Guide",
    description: "Detailed walkthroughs and AI-powered troubleshooting for the world's best IPTV subscription service. 24/7 support for all devices.",
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
