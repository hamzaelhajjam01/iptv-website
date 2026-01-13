import { NextResponse, type NextRequest } from 'next/server';

// Central list of permanently removed blog slugs that should return 410 Gone.
const GONE_SLUGS = new Set<string>([
  'my-first-post',
]);

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const { pathname } = url;

  // 1. Handle Gone Blog Slugs
  const blogMatch = pathname.match(/^\/blog\/([^\/?#]+)/);
  if (blogMatch) {
    const slug = decodeURIComponent(blogMatch[1]);
    if (GONE_SLUGS.has(slug)) {
      return new Response('Gone', {
        status: 410,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  }

  // 2. Password Gate Logic (Disabled)
  // const authorized = request.cookies.get('authorized')?.value === 'true';

  // if (!authorized && pathname !== '/access.html') {
  //   return NextResponse.redirect(new URL('/access.html', request.url));
  // }

  return NextResponse.next();
}

// Ensure the middleware runs on all page routes but ignores static assets and internal Next.js paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (public images)
     * - videos (public videos)
     * - favicon.ico (favicon file)
     * - access.html (the entrance itself)
     */
    '/((?!api|_next/static|_next/image|images|videos|favicon.ico|access.html).*)',
  ],
};
