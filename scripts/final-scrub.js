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
// Regex 4: Removes all "Q:" and "A:" lines
const qaRegex = /^[QA]:\s.*$\n?/gm;

function cleanFile(filepath) {
  try {
    const fileContent = fs.readFileSync(filepath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);

    let cleanedContent = content
      .replace(slugArtifactRegex, '') // Remove slug artifacts {#slug}
      .replace(tocRegex, '')          // Remove ToCs
      .replace(faqRegex, '')         // Remove ALL FAQ sections
      .replace(qaRegex, '');          // Remove Q/A lines

    cleanedContent = cleanedContent.trim();

    const finalFileContent = matter.stringify(cleanedContent, frontmatter);
    fs.writeFileSync(filepath, finalFileContent);
    console.log(`Scrubbed: ${filepath}`);
  } catch (e) {
    console.error(`Failed to scrub ${filepath}:`, e);
  }
}

console.log("Starting FINAL content scrub...");
const filenames = fs.readdirSync(postsDir);
filenames.forEach(filename => {
  if (path.extname(filename) === '.mdx') {
    cleanFile(path.join(postsDir, filename));
  }
});
console.log("Scrub complete.");