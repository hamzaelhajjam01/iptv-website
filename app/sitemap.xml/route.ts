import { NextResponse } from 'next/server';
import { getAllPostsMeta } from '../../lib/posts';

// Basic sitemap generator for static routes in this project.
// This now also includes blog posts from /content/posts.

const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';

const pages = [
  '/',
  '/about',
  '/help',
  '/channels-features',
  '/pricing',
  '/privacy-policy',
  '/terms-of-use',
];

async function generateSiteMap() {
  // build static page urls
  const staticUrls = pages.map((path) => {
    const url = `${SITE_URL.replace(/\/$/, '')}${path}`;
    return `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
  });

  // include blog posts with lastmod (from frontmatter)
  let postUrls: string[] = [];
  let totalPosts = 0;
  try {
    const posts = await getAllPostsMeta();
    totalPosts = posts.length;
    postUrls = posts.map((p) => {
      const url = `${SITE_URL.replace(/\/$/, '')}/blog/${p.slug}`;
      const lastmod = p.date ? new Date(p.date).toISOString().split('T')[0] : undefined;
      return `  <url>\n    <loc>${url}</loc>\n    ${lastmod ? `<lastmod>${lastmod}</lastmod>\n    ` : ''}<changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
    });
  } catch (e) {
    // if posts folder missing or error, ignore silently
  }

  // include paginated blog index pages (for crawlers)
  const postsPerPage = 18;
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));
  const blogIndexUrls: string[] = [];
  for (let i = 1; i <= totalPages; i++) {
    const url = i === 1 ? `${SITE_URL.replace(/\/$/, '')}/blog` : `${SITE_URL.replace(/\/$/, '')}/blog?page=${i}`;
    blogIndexUrls.push(`  <url>\n    <loc>${url}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`);
  }

  const urls = [...staticUrls, ...blogIndexUrls, ...postUrls].join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export async function GET() {
  const sitemap = await generateSiteMap();
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=86400'
    }
  });
}
