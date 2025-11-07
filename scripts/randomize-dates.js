const fs = require('fs');
const path = require('path');

// Usage: node scripts/randomize-dates.js [start=YYYY-MM-DD] [end=YYYY-MM-DD]
// Defaults: start=2025-06-01, end=2025-11-03 (today in repo context)

const args = process.argv.slice(2);
const parseArg = (name) => {
  const pair = args.find(a => a.startsWith(name + '='));
  return pair ? pair.split('=')[1] : undefined;
};

const startStr = parseArg('start') || '2025-06-01';
const endStr = parseArg('end') || '2025-11-03';

const start = new Date(startStr + 'T00:00:00Z');
const end = new Date(endStr + 'T23:59:59Z');
if (isNaN(start) || isNaN(end) || start > end) {
  console.error('Invalid start/end dates. Usage: node scripts/randomize-dates.js start=YYYY-MM-DD end=YYYY-MM-DD');
  process.exit(1);
}

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

function randomDate(start, end) {
  const t = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const d = new Date(t);
  // format YYYY-MM-DD
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

const results = [];

files.forEach(file => {
  const fp = path.join(postsDir, file);
  let txt = fs.readFileSync(fp, 'utf8');
  // Support both LF and CRLF line endings in frontmatter
  const fmMatch = txt.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!fmMatch) {
    // no frontmatter
    return;
  }
  const fm = fmMatch[1];
  // flexible date regex (allow single/double quotes or unquoted date)
  const dateRegex = /^date:\s*(?:"([^"]*)"|'([^']*)'|([^\r\n]*))/m;
  if (!dateRegex.test(fm)) {
    // no date field, insert one after title if possible
    const titleRegex = /title:\s*"([^"]*)"/m;
    const newDate = randomDate(start, end);
    if (titleRegex.test(fm)) {
      const newFm = fm.replace(titleRegex, match => match + `\r\ndate: "${newDate}"`);
      txt = txt.replace(fm, newFm);
      fs.writeFileSync(fp, txt, 'utf8');
      results.push({ file, date: newDate, action: 'inserted' });
    }
    return;
  }
  const newDate = randomDate(start, end);
  // Replace the matched date line with a normalized date field using double quotes
  const newFm = fm.replace(dateRegex, `date: "${newDate}"`);
  // preserve original separators (replace the fm block in the whole text)
  txt = txt.replace(fm, newFm);
  fs.writeFileSync(fp, txt, 'utf8');
  results.push({ file, date: newDate, action: 'updated' });
});

console.log(`Randomized dates for ${results.length} files (range ${startStr} → ${endStr}):`);
results.forEach(r => console.log(`${r.file}: ${r.date} (${r.action})`));

// Summary counts
const inserted = results.filter(r => r.action === 'inserted').length;
const updated = results.filter(r => r.action === 'updated').length;
console.log(`\nSummary: ${updated} updated, ${inserted} inserted`);

process.exit(0);
