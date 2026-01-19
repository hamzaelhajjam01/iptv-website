/**
 * Next.js configuration
 *
 * Note on removed URLs and 410 Gone:
 * - We do NOT use next.config redirects for retired blog URLs because Next.js
 *   redirects only support status codes 301/302/307/308, not 410.
 * - Instead, we use a root middleware (see `middleware.ts`) that returns a
 *   410 Gone for any slug listed in the GONE_SLUGS set. This is a scalable
 *   approach for de-indexing and avoids creating a file per removed slug.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
	// If redirects are ever needed for other purposes, they can be defined here.
	async redirects() {
		return [
			{
				source: '/blog/best-vpn-for-iptv',
				destination: '/blog/the-5-best-vpns-for-iptv-streaming-in-2025-for-privacy-speed',
				permanent: true,
			},
			{
				source: '/blog/iptv-vs-hulu-live-tv-a-cost-channel-comparison',
				destination: '/blog/iptv-vs-cable-tv-in-2025-a-full-cost-and-feature-comparison',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
