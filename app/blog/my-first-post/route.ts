// Return 410 Gone for a deleted post URL
// This ensures search engines de-index the URL and users receive a clear status.

export async function GET() {
  return new Response('Gone', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Cache for a bit to reduce repeated crawls; adjust as needed
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export async function HEAD() {
  return new Response(null, {
    status: 410,
    headers: {
      // Keep consistent caching with GET
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
