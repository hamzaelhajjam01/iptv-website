import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '../lib/posts';
import CategoriesList from './CategoriesList';
import SearchForm from './SearchForm';

// Widget: CTA to main product/pricing
function WidgetCTA() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl p-6 text-white shadow-lg">
      <h3 className="text-xl font-bold mb-2">Try StreamVerse</h3>
      <p className="text-sm/6 mb-4 opacity-90">Premium IPTV with top channels, sports, and VOD. Fast setup, 24/7 support.</p>
      <Link href="/pricing" className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2 font-semibold">
        View Plans & Pricing →
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
      <CategoriesList categories={categories} />
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
          const thumb = slug
            ? `/images/blog/${slug}/${slug}-400.jpg`
            : (p.featuredImage || '/images/promo/placeholder.jpg');
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
  return <SearchForm />;
}

export default async function Sidebar() {
  return (
    <aside className="space-y-6">
      <WidgetSearch />
      <WidgetCategories />
      <WidgetPopularPosts />
      <div className="sticky top-20">
        <WidgetCTA />
      </div>
    </aside>
  );
}
