#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/*
  process-responsive-images.js

  Preview-first tool to generate responsive WebP + JPEG variants and an OG image from a single high-res source file.

  Usage examples:
    node process-responsive-images.js --src "public/images/source/my-post.jpg" --target "public/images/blog/my-post" --widths 400,800,1200,1600 --preview
    node process-responsive-images.js --src "public/images/source/my-post.jpg" --target "public/images/blog/my-post" --widths 400,800,1200,1600

  Configurable via CLI args. When --preview is present, the script only prints planned outputs.

*/

function parseArgs() {
  const argv = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--src' && argv[i+1]) { out.src = argv[++i]; }
    else if (a === '--target' && argv[i+1]) { out.target = argv[++i]; }
    else if (a === '--widths' && argv[i+1]) { out.widths = argv[++i].split(',').map(s => parseInt(s,10)).filter(Boolean); }
    else if (a === '--preview') { out.preview = true; }
    else if (a === '--help' || a === '-h') { out.help = true; }
    else if (a.startsWith('--')) {
      // ignore unknown flags
    }
  }
  return out;
}

function usage() {
  console.log('Usage: node process-responsive-images.js --src <source-file> --target <target-dir> --widths 400,800,1200 --preview');
  console.log('Example: node process-responsive-images.js --src "public/images/source/epg-fix.jpg" --target "public/images/blog/epg-fix" --widths 400,800,1200,1600 --preview');
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function main() {
  const args = parseArgs();
  if (args.help || !args.src || !args.target || !args.widths) {
    usage();
    process.exit(args.help ? 0 : 1);
  }

  const SOURCE_FILE = path.resolve(process.cwd(), args.src);
  const TARGET_DIR = path.resolve(process.cwd(), args.target);
  const WIDTHS = args.widths; // array of ints
  const PREVIEW = !!args.preview;

  if (!fs.existsSync(SOURCE_FILE)) {
    console.error('Source file not found:', SOURCE_FILE);
    process.exit(1);
  }

  const basename = path.basename(SOURCE_FILE, path.extname(SOURCE_FILE));

  console.log('Source:', SOURCE_FILE);
  console.log('Target dir:', TARGET_DIR);
  console.log('Basename:', basename);
  console.log('Widths:', WIDTHS.join(','));
  console.log('Preview mode:', PREVIEW);

  // Plan outputs
  const planned = [];

  for (const w of WIDTHS) {
    planned.push({ path: path.join(TARGET_DIR, `${basename}-${w}.webp`), width: w, format: 'webp' });
    planned.push({ path: path.join(TARGET_DIR, `${basename}-${w}.jpg`), width: w, format: 'jpg' });
  }
  // OG image
  planned.push({ path: path.join(TARGET_DIR, `${basename}-og.jpg`), width: 1200, height: 630, format: 'jpg', og: true });

  console.log('\nPlanned outputs:');
  for (const p of planned) {
    if (p.og) console.log('- OG:', p.path, `(1200x630)`);
    else console.log('- ', p.path, `(${p.width}w, ${p.format})`);
  }

  if (PREVIEW) {
    console.log('\nPreview mode: no files will be written.');
    return;
  }

  // Create target dir
  await ensureDir(TARGET_DIR);

  // Generate responsive images
  for (const w of WIDTHS) {
    const webpOut = path.join(TARGET_DIR, `${basename}-${w}.webp`);
    const jpgOut = path.join(TARGET_DIR, `${basename}-${w}.jpg`);
    console.log(`Generating ${webpOut} (${w}px) ...`);
    await sharp(SOURCE_FILE)
      .resize({ width: w })
      .webp({ quality: 80 })
      .toFile(webpOut);
    console.log('Wrote', webpOut);

    console.log(`Generating ${jpgOut} (${w}px) ...`);
    await sharp(SOURCE_FILE)
      .resize({ width: w })
      .jpeg({ quality: 80 })
      .toFile(jpgOut);
    console.log('Wrote', jpgOut);
  }

  // Generate OG image (1200x630 cover)
  const ogOut = path.join(TARGET_DIR, `${basename}-og.jpg`);
  console.log('Generating OG image', ogOut);
  await sharp(SOURCE_FILE)
    .resize({ width: 1200, height: 630, fit: 'cover' })
    .jpeg({ quality: 80 })
    .toFile(ogOut);
  console.log('Wrote', ogOut);

  console.log('\nAll done.');
}

main().catch(err => { console.error(err); process.exit(1); });
