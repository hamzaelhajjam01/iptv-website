import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExitIntent from "../components/ExitIntent";
import LanguagePopup from "../components/LanguagePopup";
import PageTransition from "../components/PageTransition";
import TopLoadingBar from "../components/TopLoadingBar";
import ReferralTopBar from "../components/ReferralTopBar";
import LiveSalesNotification from "../components/LiveSalesNotification";
import LiveViewerCount from "../components/LiveViewerCount";
import WhatsAppWidget from "../components/WhatsAppWidget";
import MetaPixel from "../components/MetaPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://streamversetv.com'),
  title: "StreamVerse - The Ultimate IPTV Subscription Service",
  description: "A minimal, fast-loading affiliate website that promotes the StreamVerse IPTV service. It showcases digital products, educates visitors with AI-powered guides, and guides visitors to affiliate links to generate commissions.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    yandex: 'f113380061abb89a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17866135580"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BT7CCD8QQN');
            gtag('config', 'AW-17866135580');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://streamversetv.com/#organization",
                  "name": "StreamVerse TV",
                  "url": "https://streamversetv.com",
                  "logo": "https://streamversetv.com/logo.png",
                  "description": "Premium IPTV streaming service providing live TV, sports, and VOD solutions.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "email": "support@streamversetv.com"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://streamversetv.com/#website",
                  "url": "https://streamversetv.com",
                  "name": "StreamVerse TV",
                  "publisher": { "@id": "https://streamversetv.com/#organization" },
                  "keywords": "IPTV, Streaming Service, Live TV, 4K Sports, VOD, Entertainment",
                  "inLanguage": "en-US"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Suspense fallback={null}>
            <TopLoadingBar />
          </Suspense>
          <ReferralTopBar />
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <ExitIntent />
          <LanguagePopup />
          <LiveSalesNotification />
          <LiveViewerCount />
          <WhatsAppWidget />
          <MetaPixel />
        </LanguageProvider>
      </body>
    </html>
  );
}
