const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'content/posts');

function repairContent(content) {
  const lines = content.split('\n');
  let inCode = false;
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Track fenced code blocks (```)
    if (/^```/.test(line.trim())) {
      inCode = !inCode;
      out.push(line);
      continue;
    }

    if (!inCode) {
      // Insert newline before mid-line H2/H3 markers
      line = line.replace(/([^\n])\s(#{2,3})\s/g, (m, prev, hashes) => `${prev}\n${hashes} `);
      // Insert newline before mid-line bullet markers (* )
      line = line.replace(/([^\n])\s(\*\s)/g, (m, prev, bullet) => `${prev}\n${bullet}`);
      // Insert newline before mid-line numbered list markers (1. )
      line = line.replace(/([^\n])\s((?:\d+)\.\s)/g, (m, prev, num) => `${prev}\n${num}`);
    }

    out.push(line);
  }

  // Ensure a blank line after headings (##/###) when next line is not blank
  const finalOut = [];
  for (let i = 0; i < out.length; i++) {
    finalOut.push(out[i]);
    if (!inCode && /^(##|###)\s/.test(out[i]) && (i + 1 < out.length)) {
      const next = out[i + 1];
      if (next.trim() !== '' && !/^(##|###)\s/.test(next)) {
        finalOut.push('');
      }
    }
  }

  return finalOut.join('\n');
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const repaired = repairContent(content);
  if (repaired !== content) {
    const out = matter.stringify(repaired, data);
    fs.writeFileSync(filePath, out, 'utf8');
    console.log(`Repaired structure: ${filePath}`);
  }
}

function main() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
  for (const f of files) {
    processFile(path.join(postsDir, f));
  }
  console.log('Structure repair pass complete.');
}

main();
