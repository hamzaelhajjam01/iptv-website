const fs = require('fs');
const path = require('path');

// Usage: node scripts/list-images.js [dir]
// Default dir: public/images

const dirArg = process.argv[2] || path.join(process.cwd(), 'public', 'images');
const outJson = path.join(__dirname, 'image-index.json');
const outCsv = path.join(__dirname, 'image-index.csv');

function walk(dir, baseDir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const rel = path.relative(baseDir, full).split(path.sep).join('/');
    if (ent.isDirectory()) {
      files.push(...walk(full, baseDir));
    } else if (ent.isFile()) {
      const stat = fs.statSync(full);
      files.push({
        filename: ent.name,
        relPath: rel,
        fullPath: full,
        size: stat.size,
        mtime: stat.mtime.toISOString(),
        url: '/' + rel
      });
    }
  }
  return files;
}

if (!fs.existsSync(dirArg)) {
  console.error('Directory does not exist:', dirArg);
  process.exit(2);
}

const files = walk(dirArg, dirArg);
fs.writeFileSync(outJson, JSON.stringify(files, null, 2), 'utf8');

// CSV: filename,relPath,url,size,mtime,fullPath
const csvLines = ['filename,relPath,url,size,mtime,fullPath'];
for (const f of files) {
  const row = [
    '"' + f.filename.replace(/"/g, '""') + '"',
    '"' + f.relPath.replace(/"/g, '""') + '"',
    '"' + f.url.replace(/"/g, '""') + '"',
    f.size,
    f.mtime,
    '"' + f.fullPath.replace(/"/g, '""') + '"'
  ].join(',');
  csvLines.push(row);
}
fs.writeFileSync(outCsv, csvLines.join('\n'), 'utf8');

console.log('Found', files.length, 'files. JSON ->', outJson, 'CSV ->', outCsv);

// print a short sample
console.log('\nSample:');
files.slice(0, 20).forEach(f => console.log(f.url));

process.exit(0);
