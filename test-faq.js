// Test script to verify FAQ extraction
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { remark } = require('remark');
const gfm = require('remark-gfm');
const remarkSlug = require('remark-slug');
const html = require('remark-html');
const { remarkExtractData } = require('./lib/remark-extract-data.js');

async function testFaqExtraction() {
  const testFile = 'content/posts/the-ultimate-2025-guide-to-installing-iptv-on-amazon-firestick.mdx';
  const fileContents = fs.readFileSync(testFile, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(gfm)
    .use(remarkSlug)
    .use(remarkExtractData)
    .use(html)
    .process(content);

  console.log('=== FAQ EXTRACTION TEST ===\n');
  console.log('Headings found:', processed.data.headings?.length || 0);
  console.log('FAQs found:', processed.data.faqs?.length || 0);
  console.log('\n=== FAQs ===');
  if (processed.data.faqs && processed.data.faqs.length > 0) {
    processed.data.faqs.forEach((faq, i) => {
      console.log(`\nQ${i + 1}: ${faq.q}`);
      console.log(`A${i + 1}: ${faq.a}`);
    });
  } else {
    console.log('No FAQs extracted!');
  }
  
  console.log('\n=== Content Check ===');
  const contentHtml = processed.toString();
  const hasFaqInContent = contentHtml.includes('Frequently Asked Questions');
  console.log('FAQ section still in HTML:', hasFaqInContent);
}

testFaqExtraction().catch(console.error);
