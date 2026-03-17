const fs = require('fs');
const path = require('path');
const { loadEnvConfig } = require('@next/env');

// Load environment variables from .env* files
loadEnvConfig(process.cwd());

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://streamversetv.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (!INDEXNOW_KEY) {
  console.warn('[IndexNow Build Hook] Missing INDEXNOW_KEY. Skipping submission.');
  process.exit(0);
}

const pages = [
  '/',
  '/about',
  '/help',
  '/channels-features',
  '/pricing',
  '/privacy-policy',
  '/terms-of-use',
  '/reseller',
  '/blog'
];

const urls = [...pages.map(p => `${SITE_URL.replace(/\/$/, '')}${p}`)];

const postsDir = path.join(process.cwd(), 'content/posts');
if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir);
  let postCount = 0;
  files.forEach(file => {
    if (file.endsWith('.mdx') || file.endsWith('.md')) {
      const slug = file.replace(/\.mdx?$/, '');
      urls.push(`${SITE_URL.replace(/\/$/, '')}/blog/${slug}`);
      postCount++;
    }
  });
  
  // Quick estimation for pagination (matching sitemap logic roughly)
  const postsPerPage = 18;
  const totalPages = Math.max(1, Math.ceil(postCount / postsPerPage));
  for (let i = 2; i <= totalPages; i++) {
    urls.push(`${SITE_URL.replace(/\/$/, '')}/blog?page=${i}`);
  }
}

const payload = {
  host: SITE_URL.replace(/^https?:\/\//, '').replace(/\/$/, ''),
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL.replace(/\/$/, '')}/${INDEXNOW_KEY}.txt`,
  urlList: urls
};

console.log(`[IndexNow Build Hook] Extracted ${urls.length} URLs for submission...`);

async function submitIndexNow() {
  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
        console.log(`[IndexNow Build Hook] Successfully submitted to Bing! Status: ${response.status}`);
    } else {
        console.error(`[IndexNow Build Hook] Failed submission. Status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('[IndexNow Build Hook] Fetch error:', error.message);
  }
}

submitIndexNow();
