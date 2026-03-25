"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const FB_PIXEL_ID = '922131833929363';

const pageview = () => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "PageView");
    }
};

const PixelEvents = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) return;
        pageview();
    }, [pathname, searchParams, loaded]);

    return (
        <Script
            id="meta-pixel"
            strategy="afterInteractive"
            onLoad={() => setLoaded(true)}
            dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
            }}
        />
    );
};

const MetaPixel = () => {
    return (
        <>
            <Suspense fallback={null}>
                <PixelEvents />
            </Suspense>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                    alt="Meta Pixel"
                />
            </noscript>
        </>
    );
};

export default MetaPixel;
