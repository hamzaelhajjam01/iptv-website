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

import { CATEGORY_CONTENT } from '../../lib/category-content';



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

  // Dynamic Description Logic
  let description = 'Explore the StreamVerse blog for the latest IPTV guides, service reviews, and expert tips to enhance your streaming experience.';

  if (category) {
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
    description = `Browse our ${capitalizedCategory} archives on the StreamVerse blog. Expert insights and tutorials specifically for ${capitalizedCategory} enthusiasts.`;

    // Add pagination to description to avoid duplicates
    if (page !== '1') {
      description += ` (Page ${page})`;
    }
  } else if (page !== '1') {
    // Paginated main blog page
    description = `StreamVerse Blog - Page ${page}: Explore the latest IPTV guides, service reviews, and expert tips.`;
  }

  // Pagination Robots Tag (Allow index for page 2+)
  const robots = page !== '1' ? { index: true, follow: true } : undefined;

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

  // Case-insensitive lookup for category content
  const categoryKey = category ? Object.keys(CATEGORY_CONTENT).find(k => k.toLowerCase() === category.toLowerCase()) : null;
  const categoryContent = categoryKey ? CATEGORY_CONTENT[categoryKey] : null;

  return (
    <div className="bg-background-dark min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {category
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Archives`
              : 'StreamVerse Blog'}
          </h1>
          {categoryContent && (
            <div className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto bg-card-dark p-8 rounded-lg border border-gray-800">
              {categoryContent}
            </div>
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

        <section className="mt-16 border-t border-gray-800 pt-10 text-gray-400">
          <h2 className="text-2xl font-bold text-white mb-4">The Definitive Resource for IPTV Streaming</h2>
          <p className="leading-relaxed">
            Welcome to the StreamVerse knowledge hub. Here you will find the latest industry news, installation tutorials for Firestick and Android TV, and in-depth reviews of top IPTV players like TiviMate and Smarters Pro. Whether you are looking to cut the cord, fix buffering issues, or understand the difference between M3U and Xtream Codes, our expert guides cover every aspect of modern streaming. Stay updated with our weekly articles on internet privacy, VPN configuration, and digital TV trends.
          </p>
        </section>
      </div>
      <BackToTopButton />
    </div>
  );
};
