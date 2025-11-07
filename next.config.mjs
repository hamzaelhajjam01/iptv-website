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
	// async redirects() {
	//   return [
	//     // Example only — 410 is not supported here; use middleware.ts for that.
	//     // { source: '/old', destination: '/new', permanent: true },
	//   ];
	// },
};

export default nextConfig;
