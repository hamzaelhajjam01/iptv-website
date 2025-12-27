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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreamVerse - The Ultimate IPTV Subscription Service",
  description: "A minimal, fast-loading affiliate website that promotes the StreamVerse IPTV service. It showcases digital products, educates visitors with AI-powered guides, and guides visitors to affiliate links to generate commissions.",
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BT7CCD8QQN"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BT7CCD8QQN');
          `}
        </Script>
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
        </LanguageProvider>
      </body>
    </html>
  );
}
