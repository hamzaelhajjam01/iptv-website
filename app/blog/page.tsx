import React, { Suspense } from 'react';
import { getAllPostsMeta } from '../../lib/posts';
import BlogFilters from '../../components/BlogFilters';
import BackToTopButton from '../../components/BackToTopButton';
import SearchForm from '../../components/SearchForm';

type BlogPageProps = {
  searchParams?: {
    category?: string;
    q?: string;
    page?: string | number;
  };
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'guide': 'Expert guides and tutorials to help you get the most out of your IPTV experience. Learn how to set up devices, troubleshoot issues, and optimize your streaming.',
  'news': 'Stay updated with the latest news from the world of streaming and IPTV. We cover industry trends, new channel additions, and service updates.',
  'reviews': 'In-depth reviews of the latest streaming devices, apps, and services. Find out which hardware and software combinations work best for your setup.',
  'tips': 'Quick tips and tricks to enhance your viewing. Discover hidden features, improve connection stability, and master your IPTV player.',
  'comparison': 'Side-by-side comparisons of popular streaming services and devices. Make informed decisions based on features, price, and performance.',
  'advanced': 'Technical deep-dives for power users. Explore advanced configurations, network optimization, and secure streaming practices.',
  'local-tv': 'Information about local channel availability and regional programming options across different countries and regions.',
  'case-studies': 'Real-world examples and success stories from our community. See how others have cut the cord and improved their entertainment setup.'
};

export async function generateMetadata({ searchParams }: BlogPageProps) {
  const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';
  const page = searchParams?.page ? String(searchParams.page) : '1';
  const category = searchParams?.category;

  // Construct canonical URL based on state
  let href = `${SITE_URL.replace(/\/$/, '')}/blog`;
  if (category && page !== '1') {
    href += `?category=${category}&page=${page}`;
  } else if (category) {
    href += `?category=${category}`;
  } else if (page !== '1') {
    href += `?page=${page}`;
  }

  // Dynamic Title Logic
  let title = 'StreamVerse Blog: IPTV Guides, Reviews & Tips';

  if (category) {
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
    title = page === '1'
      ? `${capitalizedCategory} Archives | StreamVerse Blog`
      : `${capitalizedCategory} Archives - Page ${page} | StreamVerse Blog`;
  } else if (page !== '1') {
    title = `StreamVerse Blog - Page ${page}`;
  }

  const description = page === '1' ? undefined : `StreamVerse Blog - Page ${page}: Insights, guides, and news about IPTV`;

  // Pagination Robots Tag (NoIndex for page 2+)
  const robots = page !== '1' ? { index: false, follow: true } : undefined;

  return {
    title,
    description,
    alternates: { canonical: href },
    robots,
  } as any;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = await getAllPostsMeta(); // Assuming this is cached or fast enough
  const category = searchParams?.category;
  const page = searchParams?.page ? parseInt(String(searchParams.page), 10) : 1;
  const q = searchParams?.q;

  // Case-insensitive lookup for category description
  const categoryKey = category ? Object.keys(CATEGORY_DESCRIPTIONS).find(k => k.toLowerCase() === category.toLowerCase()) : null;
  const categoryDescription = categoryKey ? CATEGORY_DESCRIPTIONS[categoryKey] : null;

  return (
    <div className="bg-background-dark min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {category
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Archives`
              : 'StreamVerse Blog'}
          </h1>
          {categoryDescription && (
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto bg-card-dark p-4 rounded-lg border border-gray-800">
              {categoryDescription}
            </p>
          )}
          {!category && (
            <p className="text-xl text-gray-400">
              Insights, guides, and news about IPTV and streaming.
            </p>
          )}
        </div>

        <BlogFilters
          posts={allPosts}
          initialCategory={category}
          initialQuery={q}
          initialPage={page}
        />
      </div>
      <BackToTopButton />
    </div>
  );
};
