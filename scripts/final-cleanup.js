const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const postsDir = path.join(process.cwd(), 'content/posts');

// Regex 1: Removes all injected slug artifacts like {#slug-name}
const slugArtifactRegex = /\{#.*?\}/g;
// Regex 2: Removes all "Table of Contents" sections
const tocRegex = /##\s+Table of Contents[\s\S]*?(?=(##\s|\n$))/gi;
// Regex 3: Removes ALL "Frequently Asked Questions" sections
const faqRegex = /##\s+Frequently Asked Questions[\s\S]*/gi;
// Regex 4: Remove single-line Q & A content (including bullet-prefixed)
const qaBothInline = /^\s*(?:[-*]\s*)?(?:Q|Question)\s*:\s.*?(?:A|Answer)\s*:\s.*$/gim;
const qaOnlyQ = /^\s*(?:[-*]\s*)?(?:Q|Question)\s*:\s.*$/gim;
const qaOnlyA = /^\s*(?:[-*]\s*)?(?:A|Answer)\s*:\s.*$/gim;
// Regex 5: Remove stray 'zed' artifacts introduced by previous tools
const zedExactLine = /^\s*zed in the post above\.\s*$/gim;
const zedLineStart = /^\s*zed\b[^\n]*$/gim; // any line starting with 'zed'
const zedWord = /\bzed\b/gi; // standalone word 'zed'

function cleanFile(filepath) {
  try {
    const fileContent = fs.readFileSync(filepath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);

    let cleanedContent = content
      .replace(slugArtifactRegex, '') // Remove slug artifacts
      .replace(tocRegex, '')          // Remove ToCs
      .replace(faqRegex, '')          // Remove ALL FAQs sections
      // Remove inline Q/A lines anywhere in the document
      .replace(qaBothInline, '')
      .replace(qaOnlyQ, '')
      .replace(qaOnlyA, '')
      // Remove zed artifacts
      .replace(zedExactLine, '')
      .replace(zedLineStart, '')
      .replace(zedWord, '');

    // Collapse 3+ newlines into max 2 to avoid big gaps after removals
    cleanedContent = cleanedContent
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    const finalFileContent = matter.stringify(cleanedContent, frontmatter);
    fs.writeFileSync(filepath, finalFileContent);
    console.log(`Cleaned: ${filepath}`);
  } catch (e) {
    console.error(`Failed to clean ${filepath}:`, e);
  }
}

console.log("Starting FINAL cleanup...");
const filenames = fs.readdirSync(postsDir);
filenames.forEach(filename => {
  if (path.extname(filename) === '.mdx') {
    cleanFile(path.join(postsDir, filename));
  }
});
console.log("Cleanup complete. All posts are now scrubbed.");