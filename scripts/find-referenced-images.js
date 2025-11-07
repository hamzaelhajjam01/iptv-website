const fs = require('fs');
const path = require('path');

const workspaceRoot = process.cwd();
const postsDir = path.join(workspaceRoot, 'content', 'posts');
const publicDir = path.join(workspaceRoot, 'public');
const outJson = path.join(workspaceRoot, 'scripts', 'referenced-images.json');
const outCsv = path.join(workspaceRoot, 'scripts', 'referenced-images.csv');

function walkDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkDir(full, fileList);
    else fileList.push(full);
  }
  return fileList;
}

function findImageReferencesInText(text) {
  const results = new Set();
  // Match /images/... or images/... with common image extensions
  const regex = /\/?images\/[A-Za-z0-9_\-\/%.@()+,=~]+?\.(?:png|jpe?g|webp|gif|svg)/ig;
  let m;
  while ((m = regex.exec(text)) !== null) {
    results.add(m[0]);
  }
  return Array.from(results);
}

function safeRel(p) {
  return p.replace(/\\\\/g, '/');
}

function main() {
  if (!fs.existsSync(postsDir)) {
    console.error('content/posts directory not found at', postsDir);
    process.exit(1);
  }

  const files = walkDir(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx') || f.endsWith('.markdown'));
  const allRefs = new Map(); // key = normalized path (no leading slash), value = Set of source files

  for (const file of files) {
    const txt = fs.readFileSync(file, 'utf8');
    const refs = findImageReferencesInText(txt);
    for (const r of refs) {
      // normalize to remove leading slash
      const normalized = r.startsWith('/') ? r.slice(1) : r;
      const key = safeRel(normalized);
      if (!allRefs.has(key)) allRefs.set(key, new Set());
      allRefs.get(key).add(path.relative(workspaceRoot, file));
    }
  }

  const results = [];
  for (const [relPath, sources] of allRefs.entries()) {
    const fullPath = path.join(publicDir, relPath);
    const exists = fs.existsSync(fullPath);
    const filename = path.basename(relPath);
    results.push({
      expectedPath: '/' + relPath.replace(/\\\\/g, '/'),
      relPath: relPath.replace(/\\\\/g, '/'),
      filename,
      exists,
      fullPath: exists ? fullPath : null,
      referencedBy: Array.from(sources).sort(),
    });
  }

  // Write JSON
  fs.writeFileSync(outJson, JSON.stringify(results, null, 2), 'utf8');

  // Write CSV header
  const header = ['expectedPath','relPath','filename','exists','fullPath','referencedBy'];
  const csvLines = [header.join(',')];
  for (const r of results) {
    const line = [
      '"' + r.expectedPath + '"',
      '"' + r.relPath + '"',
      '"' + r.filename + '"',
      r.exists ? 'true' : 'false',
      '"' + (r.fullPath ? r.fullPath : '') + '"',
      '"' + r.referencedBy.join(';') + '"',
    ].join(',');
    csvLines.push(line);
  }
  fs.writeFileSync(outCsv, csvLines.join('\n'), 'utf8');

  // Summary to console
  const missing = results.filter(r => !r.exists);
  console.log(`Scanned ${files.length} post files.`);
  console.log(`Found ${results.length} unique referenced image paths.`);
  console.log(`${missing.length} missing in ${path.relative(workspaceRoot, publicDir)}.`);
  if (missing.length > 0) {
    console.log('Missing files (exact names to upload):');
    for (const m of missing) console.log('-', m.relPath);
  }
  console.log('Wrote:', outJson);
  console.log('Wrote:', outCsv);
}

main();
