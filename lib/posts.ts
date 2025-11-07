import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import headingId from 'remark-heading-id';

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

  const processed = await remark()
    .use(gfm) // Parse GFM features and {#slug} syntax
    .use(headingId) // Add IDs to headings based on {#slug}
    .use(html as any)
    .process(content);

  const contentHtml = processed.toString();
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
      return {
        ...(data as Record<string, any>),
        slug,
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
