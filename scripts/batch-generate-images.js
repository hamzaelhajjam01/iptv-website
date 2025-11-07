#!/usr/bin/env node
/*
  batch-generate-images.js
  - Scans all non-draft posts in content/posts
  - Resolves each post's source image from frontmatter: featuredImage
  - Invokes process-responsive-images.js to generate responsive images and the OG crop
  - Targets: public/images/blog/<slug>/

  Exit codes:
  - 0: all processed or skipped because already present
  - 1: one or more posts failed (missing source image, bad path, or generator error)
*/

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'content', 'posts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const BLOG_IMAGES_DIR = path.join(PUBLIC_DIR, 'images', 'blog');
const GENERATOR_SCRIPT = path.join(ROOT, 'process-responsive-images.js');

const WIDTHS = [400, 800, 1200, 1600];

function getAllMdxFiles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx')).map(f => path.join(POSTS_DIR, f));
}

function readFrontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  return matter(raw).data || {};
}

function getSlug(file, fm) {
  return (fm.slug && String(fm.slug).trim()) || path.basename(file).replace(/\.(md|mdx)$/i, '');
}

function resolveSourcePath(featuredImage) {
  if (!featuredImage) return null;
  if (typeof featuredImage !== 'string') return null;
  if (featuredImage.startsWith('http')) return null; // don't fetch remote assets

  // normalize leading slash
  const cleaned = featuredImage.replace(/^\/+/, '');

  // Prefer resolving relative to /public
  const pubPath = path.join(PUBLIC_DIR, cleaned);
  if (fs.existsSync(pubPath)) return pubPath;

  // Try resolving relative to project root as a fallback
  const abs = path.join(ROOT, cleaned);
  if (fs.existsSync(abs)) return abs;

  return null;
}

function expectedOg(slug) {
  return path.join(BLOG_IMAGES_DIR, slug, `${slug}-og.jpg`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function runGenerator({ src, target }) {
  const widthsArg = WIDTHS.join(',');
  execFileSync(process.execPath, [GENERATOR_SCRIPT, '--src', src, '--target', target, '--widths', widthsArg], {
    stdio: 'inherit',
    cwd: ROOT,
  });
}

function main() {
  const files = getAllMdxFiles();
  if (files.length === 0) {
    console.log('[batch-generate-images] No posts found under content/posts.');
    process.exit(0);
  }

  const failures = [];
  const skipped = [];
  const processed = [];

  for (const file of files) {
    const fm = readFrontmatter(file);
    if (fm.draft === true) continue; // skip drafts

    const slug = getSlug(file, fm);
    const srcPath = resolveSourcePath(fm.featuredImage);

    if (!srcPath) {
      failures.push({ slug, reason: 'missing-or-unsupported-featuredImage', post: path.relative(ROOT, file), featuredImage: fm.featuredImage });
      continue;
    }

    const targetDir = path.join(BLOG_IMAGES_DIR, slug);
    ensureDir(targetDir);

    // If OG already exists, skip to save time
    const ogPath = expectedOg(slug);
    if (fs.existsSync(ogPath)) {
      skipped.push({ slug, reason: 'og-exists' });
      continue;
    }

    // Create a temp copy named <slug><ext> so generator outputs use slug as basename
    const ext = path.extname(srcPath) || '.jpg';
    const tempSrc = path.join(os.tmpdir(), `${slug}${ext}`);
    try {
      fs.copyFileSync(srcPath, tempSrc);
    } catch (e) {
      failures.push({ slug, reason: 'copy-failed', error: e.message });
      continue;
    }

    try {
      runGenerator({ src: tempSrc, target: targetDir });
      processed.push(slug);
    } catch (e) {
      failures.push({ slug, reason: 'generator-failed', error: e.message });
    } finally {
      // Clean up temp
      try { fs.unlinkSync(tempSrc); } catch {}
    }
  }

  console.log(`\n[batch-generate-images] Summary`);
  console.log(`  processed: ${processed.length}`);
  console.log(`  skipped (already had OG): ${skipped.length}`);
  console.log(`  failures: ${failures.length}`);

  if (failures.length) {
    console.log('\nFailures detail:');
    for (const f of failures) {
      console.log(`- slug: ${f.slug} :: ${f.reason}`);
      if (f.post) console.log(`  post: ${f.post}`);
      if (f.featuredImage) console.log(`  featuredImage: ${f.featuredImage}`);
      if (f.error) console.log(`  error: ${f.error}`);
    }
    console.log('\nAction: Ensure featuredImage points to a local file under /public (or copy the source image there), then re-run:');
    console.log('  npm run batch:images');
    process.exit(1);
  }

  console.log('\nAll done.');
  process.exit(0);
}

main();
