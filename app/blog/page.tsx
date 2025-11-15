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

export async function generateMetadata({ searchParams }: BlogPageProps) {
  const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';
  const page = searchParams?.page ? String(searchParams.page) : '1';
  const href = page === '1' ? `${SITE_URL.replace(/\/$/, '')}/blog` : `${SITE_URL.replace(/\/$/, '')}/blog?page=${page}`;
  return {
    title: 'Blog',
    alternates: { canonical: href },
  } as any;
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const posts = await getAllPostsMeta();
  const initialCategory = searchParams?.category || null;
  const initialQuery = searchParams?.q || null;
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-gray-400 mb-6">Latest articles and tutorials from StreamVerse.</p>
      {/* Search bar component - visible only on mobile (hidden on lg screens and up) */}
      <div className="mb-6 lg:hidden">
        <Suspense fallback={<div className="bg-card-dark rounded-xl p-4 h-[60px] animate-pulse"></div>}>
          <SearchForm />
        </Suspense>
      </div>
      {/* BlogFilters is a client component that handles search and category filtering */}
      <BlogFilters posts={posts} initialCategory={initialCategory} initialQuery={initialQuery} initialPage={searchParams?.page ?? 1} />
      {/* Back to top button (client) */}
      <BackToTopButton />
    </div>
  );
};

export default BlogPage;
