import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '../lib/posts';
import CategoriesList from './CategoriesList';
import SearchForm from './SearchForm';
import dynamic from 'next/dynamic';

const ReferralCard = dynamic(() => import('./ReferralCard'), { ssr: false });

const WidgetCTA = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
      {/* Animated Pulse Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>

      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        🔥 Special Offer
      </h3>

      <p className="text-sm/6 mb-4 opacity-90 font-medium">
        Get <span className="underline decoration-yellow-400 decoration-2 font-bold text-white">12 Months + 3 Months FREE!</span>
        <br />
        Premium 4K IPTV. Instant Setup.
      </p>

      <Link href="/pricing#pricing-cards" className="inline-block w-full text-center bg-white text-blue-600 hover:bg-gray-100 rounded-lg px-4 py-3 font-bold transition-all shadow-md">
        Claim Offer Now →
      </Link>
    </div>
  );
}

// Widget: Categories list
async function WidgetCategories() {
  const posts = await getAllPostsMeta();
  const categories = Array.from(new Set(posts.map(p => (p.category || '').trim()).filter(Boolean))).sort((a, b) => a.localeCompare(b));

  if (categories.length === 0) return null;

  return (
    <div className="bg-card-dark rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      {/* Client subcomponent handles active highlight based on current URL */}
      <Suspense fallback={<div className="text-gray-400 text-sm">Loading...</div>}>
        <CategoriesList categories={categories} />
      </Suspense>
    </div>
  );
}

// Widget: Popular/Recent posts (using latest 5 by date)
async function WidgetPopularPosts() {
  const posts = await getAllPostsMeta();
  const top = posts
    .slice()
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    })
    .slice(0, 5);

  if (top.length === 0) return null;

  return (
    <div className="bg-card-dark rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
      <ul className="space-y-4">
        {top.map((p, idx) => {
          const slug = p.slug || '';
          const thumb = p.featuredImage || (slug ? `/images/blog/${slug}/${slug}-400.jpg` : '/images/promo/placeholder.jpg');
          const rank = idx + 1;
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="group flex items-center gap-3">
                <span className="text-2xl font-extrabold text-blue-500 tabular-nums w-8 text-right">{rank}</span>
                <div className="relative w-14 h-14 rounded overflow-hidden ring-1 ring-neutral-700 flex-shrink-0">
                  {/* Small thumbnail */}
                  <Image src={thumb} alt={p.title} fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-200 group-hover:text-white line-clamp-2 leading-snug">{p.title}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Widget: Simple search form sending users to /blog?q=
function WidgetSearch() {
  return (
    <Suspense fallback={<div className="bg-card-dark rounded-xl p-4 h-[60px] animate-pulse"></div>}>
      <SearchForm />
    </Suspense>
  );
}

export default async function Sidebar() {
  return (
    <aside className="space-y-6">
      <WidgetSearch />
      <WidgetCategories />
      <WidgetPopularPosts />
      <div className="sticky top-20 space-y-6">
        <ReferralCard />
        <WidgetCTA />
      </div>
    </aside>
  );
}
