const fs = require('fs');
const path = require('path');
const postsDir = path.join(process.cwd(), 'content/posts');

function verifyFile(fp) {
  const raw = fs.readFileSync(fp, 'utf8');
  const rel = path.relative(process.cwd(), fp);
  const issues = [];

  // Simple checks
  if (/##\s+Table of Contents/i.test(raw)) issues.push('Has Table of Contents section');
  if (/##\s+Frequently Asked Questions/i.test(raw)) issues.push('Has Frequently Asked Questions section');
  if (/^\s*(?:[-*]\s*)?(?:Q|Question)\s*:\s.*?(?:A|Answer)\s*:\s.*$/gim.test(raw)) issues.push('Has inline Q: ... A: ...');
  if (/^\s*(?:[-*]\s*)?(?:Q|Question)\s*:\s.*$/gim.test(raw)) issues.push('Has Q: line');
  if (/^\s*(?:[-*]\s*)?(?:A|Answer)\s*:\s.*$/gim.test(raw)) issues.push('Has A: line');
  if (/\bzed\b/i.test(raw)) issues.push("Contains 'zed'");

  // Headings and list structure heuristics
  const lines = raw.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Mid-line headings like ") ## " or ". ### "
    if (/(.)\s(##|###)\s/.test(line)) issues.push(`Possible mid-line heading at L${i+1}`);
    // Mid-line bullets like ") * "
    if (/(.)\s\*\s/.test(line)) issues.push(`Possible mid-line bullet at L${i+1}`);
    // Mid-line numbered list like ") 1. "
    if (/(.)\s\d+\.\s/.test(line)) issues.push(`Possible mid-line numbered list at L${i+1}`);
    // Heading without blank line after
    if (/^(##|###)\s/.test(line)) {
      const next = lines[i+1] || '';
      if (next && next.trim() !== '' && !/^(##|###)\s/.test(next)) {
        issues.push(`No blank line after heading at L${i+1}`);
      }
    }
  }

  return { file: rel, issues };
}

function main() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
  const report = [];
  for (const f of files) {
    report.push(verifyFile(path.join(postsDir, f)));
  }

  const total = report.length;
  const withIssues = report.filter(r => r.issues.length > 0);
  console.log(`Checked ${total} posts. Files with issues: ${withIssues.length}`);
  if (withIssues.length) {
    for (const r of withIssues) {
      console.log(`\n- ${r.file}`);
      for (const issue of r.issues) console.log(`  • ${issue}`);
    }
  } else {
    console.log('No issues found by current rules.');
  }
}

main();
