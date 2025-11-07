"use client";

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PostCard from './PostCard';
import { PostMeta } from '../lib/posts';

type BlogFiltersProps = { posts: PostMeta[]; initialCategory?: string | null; initialQuery?: string | null; initialPage?: number | string };

const BlogFilters: React.FC<BlogFiltersProps> = ({ posts, initialCategory, initialQuery, initialPage }) => {
  const [q, setQ] = useState<string>(initialQuery ?? '');
  const [category, setCategory] = useState<string | null>(initialCategory || null);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const p = typeof initialPage === 'string' ? parseInt(initialPage, 10) : initialPage;
    return p && !isNaN(Number(p)) && Number(p) > 0 ? Number(p) : 1;
  });
  const postsPerPage = 18;

  // Scroll to top smoothly when the page changes (but skip the initial mount)
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  // Sync internal state when incoming props change (e.g., sidebar category links)
  useEffect(() => {
    setCategory(initialCategory || null);
    setQ(initialQuery || '');
    setCurrentPage(1);
  }, [initialCategory, initialQuery]);

  const norm = (s?: string | null) => (s || '').toString().trim().toLowerCase();
  const filtered = posts.filter(p => {
    const matchesQ = q.trim() === '' || (p.title && norm(p.title).includes(norm(q))) || (p.excerpt && norm(p.excerpt).includes(norm(q)));
    const matchesCategory = !category || norm(p.category || '') === norm(category);
    return matchesQ && matchesCategory;
  });

  // When URL changes via navigation (sidebar links or search), sync q/category/page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getParams = () => {
      const params = new URLSearchParams(window.location.search);
      const page = parseInt(params.get('page') || String(currentPage), 10);
      const cat = params.get('category');
      const query = params.get('q') || '';
      return {
        page: isNaN(page) || page < 1 ? 1 : page,
        category: cat || null,
        q: query,
      };
    };
    const syncFromUrl = () => {
      const { page, category: cat, q: query } = getParams();
      setCurrentPage(page);
      setCategory(cat);
      setQ(query);
    };
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  // Initialize currentPage from URL ?page= query param and handle back/forward
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const getPageFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const p = parseInt(params.get('page') || String(currentPage), 10);
      return isNaN(p) || p < 1 ? 1 : p;
    };
    // Only update if URL has an explicit page and differs from current state
    const urlPage = getPageFromUrl();
    if (urlPage !== currentPage) setCurrentPage(urlPage);
    const onPop = () => {
      const p = getPageFromUrl();
      setCurrentPage(p);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Pagination logic
  const numPages = Math.ceil(filtered.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filtered.slice(startIndex, endIndex);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${category || 'all'}|${q || ''}|${currentPage}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {paginatedPosts.map(p => (
            <PostCard key={p.slug} post={p} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && <p className="text-gray-400 mt-8">No posts match your search.</p>}

      {/* Pagination Controls */}
      {numPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: numPages }, (_, i) => i + 1).map(pageNumber => (
            <a
              key={pageNumber}
              href={`?${(() => { const params = new URLSearchParams(); if (category) params.set('category', category); if (q) params.set('q', q); params.set('page', String(pageNumber)); return params.toString(); })()}`}
              onClick={(e) => {
                // SPA navigation: prevent full reload, update URL and state for client
                e.preventDefault();
                const url = new URL(window.location.href);
                if (category) url.searchParams.set('category', category); else url.searchParams.delete('category');
                if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
                url.searchParams.set('page', String(pageNumber));
                window.history.pushState({}, '', url.toString());
                setCurrentPage(pageNumber);
              }}
              className={`px-4 py-2 rounded-lg ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
            >
              {pageNumber}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
