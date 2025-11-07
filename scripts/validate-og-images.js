#!/usr/bin/env node
/*
  validate-og-images.js
  Scans all blog posts and ensures a generated Open Graph image exists at:
    public/images/blog/{slug}/{slug}-og.jpg
  - Exits with code 1 if any are missing (prints a helpful report)
  - Skips draft posts (frontmatter: draft: true)
*/

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'content', 'posts');
const BLOG_IMAGES_DIR = path.join(ROOT, 'public', 'images', 'blog');

function getAllPostFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => path.join(dir, f));
}

function getSlugFromFilename(filePath) {
  const base = path.basename(filePath);
  return base.replace(/\.(md|mdx)$/i, '');
}

function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(raw);
  return data || {};
}

function expectedOgPathForSlug(slug) {
  return path.join(BLOG_IMAGES_DIR, slug, `${slug}-og.jpg`);
}

function main() {
  const files = getAllPostFiles(POSTS_DIR);
  if (files.length === 0) {
    console.log('[validate-og-images] No posts found under content/posts. Skipping.');
    process.exit(0);
  }

  const missing = [];

  for (const file of files) {
    const fm = readFrontmatter(file);
    if (fm.draft === true) continue; // ignore drafts

    const slug = (fm.slug && String(fm.slug).trim()) || getSlugFromFilename(file);
    const ogAbs = expectedOgPathForSlug(slug);
    if (!fs.existsSync(ogAbs)) {
      const ogPublic = `/images/blog/${slug}/${slug}-og.jpg`;
      missing.push({ slug, file, expected: ogPublic, absPath: ogAbs });
    }
  }

  if (missing.length > 0) {
    console.error('\n[validate-og-images] Missing Open Graph images detected:\n');
    for (const m of missing) {
      console.error(`- slug: ${m.slug}`);
      console.error(`  post: ${path.relative(ROOT, m.file)}`);
      console.error(`  expected: ${m.expected}`);
      console.error(`  absPath: ${m.absPath}`);
    }
    console.error('\nAction: Run your responsive image workflow to generate OG crops:');
    console.error('  npm run images:responsive');
    console.error('\nTip: Ensure each post has its hero source image available for processing.');
    process.exit(1);
  }

  console.log('[validate-og-images] All posts have OG images.');
}

main();
