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
  'guide': 'Our comprehensive Guides section is your ultimate resource for mastering IPTV. Whether you are a complete beginner looking to set up your first Firestick or an experienced user trying to optimize your network for 4K streaming, we have step-by-step tutorials for you. Learn how to install players like TiviMate, troubleshoot buffering issues, and configure your EPG for a seamless TV experience.',
  'news': 'Stay ahead of the curve with the latest News from the rapidly evolving world of streaming and IPTV. We cover everything from major service updates and new channel additions to industry trends and regulatory changes. Be the first to know about new features, price changes, and the future of cord-cutting technology.',
  'reviews': 'Make informed buying decisions with our in-depth Reviews. We hands-on test the latest Android TV boxes, streaming sticks, and IPTV player applications to tell you what’s worth your money. Our unbiased analysis covers performance, speed, remote control quality, and ease of use, helping you build the perfect streaming setup.',
  'tips': 'Unlock the full potential of your setup with our expert Tips & Tricks. Discover hidden features in your favorite apps, learn how to reduce latency, and find out the best settings for sports streaming. These quick, actionable insights are designed to instantly improve your viewing quality and stability.',
  'comparison': 'Choosing the right service or device can be overwhelming. Our detailed Comparisons break down the pros and cons of top contenders side-by-side. From "Firestick vs. Android Box" to "IPTV vs. Cable TV," we analyze the costs, features, and specs to help you choose the option that best fits your needs and budget.',
  'advanced': 'In our Advanced IPTV section, we dive deep into technical setups, Xtream codes optimization, and advanced troubleshooting for power users. Explore complex topics like VPN tunneling configurations, recording (DVR) setups on NAS drives, and managing multi-connection subscriptions for optimal performance.',
  'local-tv': 'Stay connected with home no matter where you are with our Local TV guides. We provide detailed information on channel availability across different regions, helping expats and travelers find the best ways to access their favorite local news, regional sports, and cultural programming from anywhere in the world.',
  'case-studies': 'Explore real-world Case Studies to see how users are cutting the cord and improved their entertainment setup. We share detailed stories of how families switched from expensive cable packages to streamlined IPTV setups, including exactly what hardware they used, how much money they saved, and the challenges they overcame.'
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
