const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configurable variables (edit these at the top as needed)
const SOURCE_DIR = path.join(process.cwd(), 'public', 'images', 'blog', 'source');
const TARGET_DIR = path.join(process.cwd(), 'public', 'images', 'blog', 'processed');
const BASE_FILENAME = 'post-image'; // will be used like post-image-1.webp, post-image-2.webp

async function ensureDir(dir) {
  try { await fs.promises.mkdir(dir, { recursive: true }); } catch (e) { }
}

function isImageFile(name) {
  return /\.(jpe?g|png)$/i.test(name);
}

async function process() {
  console.log('SOURCE_DIR:', SOURCE_DIR);
  console.log('TARGET_DIR:', TARGET_DIR);
  console.log('BASE_FILENAME:', BASE_FILENAME);

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error('Source directory does not exist:', SOURCE_DIR);
    process.exit(1);
  }

  await ensureDir(TARGET_DIR);

  const entries = await fs.promises.readdir(SOURCE_DIR);
  const imageFiles = entries.filter(isImageFile);
  if (imageFiles.length === 0) {
    console.log('No image files found in source dir. Nothing to do.');
    return;
  }

  let counter = 1;
  for (const file of imageFiles) {
    const srcPath = path.join(SOURCE_DIR, file);
    const outName = `${BASE_FILENAME}-${counter}.webp`;
    const outPath = path.join(TARGET_DIR, outName);

    try {
      console.log(`Processing ${file} -> ${outName}`);
      await sharp(srcPath)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log('Wrote', outPath);
      counter += 1;
    } catch (err) {
      console.error('Failed to process', srcPath, err.message || err);
    }
  }

  console.log(`Processed ${counter - 1} files.`);
}

process().catch(err => { console.error(err); process.exit(1); });
