import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export type PostMeta = {
  title: string;
  excerpt: string;
  date?: string;
  featuredImage?: string;
  category?: string;
  author?: string;
  slug?: string;
  faqs?: FAQ[];
  toc?: Heading[];
};

export type Heading = {
  level: number;
  text: string;
  slug: string;
};

export type FAQ = {
  q: string;
  a: string;
};

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx?$/, ''));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null as any; // page will handle notFound
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown with remark-html
  const processed = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);

  let contentHtml = processed.toString();

  // Manually add IDs to headings based on {#slug} syntax
  // Replace patterns like: <h2>Title {#my-slug}</h2> with <h2 id="my-slug">Title</h2>
  contentHtml = contentHtml.replace(/<(h[2-6])>(.*?)\s*\{#([a-z0-9-]+)\}\s*<\/\1>/gi, '<$1 id="$3">$2</$1>');

  const headings = (data.toc as Heading[]) || []; // Read ToC from frontmatter
  const faqs = (data.faqs as FAQ[]) || []; // Read FAQs from frontmatter

  return {
    meta: {
      ...(data as Record<string, any>),
      slug: realSlug,
    } as PostMeta,
    contentHtml,
    headings,
    faqs,
  };
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const slugs = getPostSlugs();
  const posts: PostMeta[] = slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.mdx`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // Only return essential metadata for the list view to reduce __NEXT_DATA__ size
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        featuredImage: data.featuredImage,
        category: data.category,
        author: data.author,
        // Exclude heavier fields like 'faqs' and 'toc' from the list view
      } as PostMeta & { draft?: boolean };
    })
    // Hide drafts from public lists
    .filter((p) => !(p as any).draft);

  // sort by date desc if available
  posts.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

  return posts;
}
