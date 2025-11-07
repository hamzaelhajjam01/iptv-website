import { NextResponse } from 'next/server';

// Central list of permanently removed blog slugs that should return 410 Gone.
// Add future retired slugs here (just the slug part, without "/blog/").
const GONE_SLUGS = new Set<string>([
  'my-first-post',
]);

export function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Match /blog/<slug> (single segment only)
  const match = pathname.match(/^\/blog\/([^\/?#]+)/);
  if (match) {
    const slug = decodeURIComponent(match[1]);
    if (GONE_SLUGS.has(slug)) {
      return new Response('Gone', {
        status: 410,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          // Cache a bit to reduce repeated crawler hits; adjust as needed
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  }

  return NextResponse.next();
}

// Only run this middleware on blog paths.
export const config = {
  matcher: ['/blog/:path*'],
};
