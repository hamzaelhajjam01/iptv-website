import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/posts';
import RelatedPosts from '../../../components/RelatedPosts';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTopButton from '../../../components/BackToTopButton';
import SocialShareButtons from '../../../components/SocialShareButtons';
import AuthorBio from '../../../components/AuthorBio';
import { TableOfContents } from '../../../components/TableOfContents';
import { Accordion } from '../../../components/Accordion';
import { FaqSchema } from '../../../components/FaqSchema';

type Props = { params: { slug: string } };

const TITLE_OVERRIDES: Record<string, string> = {
  'a-beginners-guide-to-xtream-codes-what-they-are-how-to-use-them': 'Xtream Codes Guide: What They Are & How to Use | StreamVerse',
  'a-travelers-guide-how-to-watch-your-home-tv-channels-from-anywhere': 'How to Watch Your Home TV Channels Anywhere | StreamVerse',
  'amazon-firestick-vs-android-tv-box-whats-the-best-for-iptv': 'Firestick vs. Android TV Box: Which is Best for IPTV? | StreamVerse',
  'how-sports-fans-use-iptv-to-watch-every-game-from-every-league': 'How Sports Fans Watch Every League via IPTV | StreamVerse',
  'how-to-use-the-catch-up-replay-feature-on-your-iptv-service': 'How to Use the IPTV Catch-Up (Replay) Feature | StreamVerse',
  'the-5-best-vpns-for-iptv-streaming-in-2025-for-privacy-speed': '5 Best VPNs for IPTV Privacy & Speed (2025) | StreamVerse',
};

export async function generateMetadata({ params }: Props) {
  const result = await getPostBySlug(params.slug);
  if (!result) {
    return { title: 'Not Found' } as any;
  }
  const { meta } = result;
  const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';
  const postUrl = `${SITE_URL.replace(/\/$/, '')}/blog/${meta.slug}`;
  // Use the pre-generated Open Graph image from our responsive image workflow
  const ogPath = `/images/blog/${meta.slug}/${meta.slug}-og.jpg`;
  const ogImageUrl = `${SITE_URL.replace(/\/$/, '')}${ogPath}`;

  const title = TITLE_OVERRIDES[params.slug] || `${meta.title} | StreamVerse`;

  return {
    title: title,
    description: meta.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: title,
      description: meta.excerpt,
      url: postUrl,
      type: 'article',
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: meta.excerpt,
      images: [ogImageUrl],
    },
  } as any;
}

const PostPage = async ({ params }: Props) => {
  const result = await getPostBySlug(params.slug);
  if (!result) return notFound();
  const { meta, contentHtml, headings, faqs } = result as any;
  const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';
  const postUrl = `${SITE_URL.replace(/\/$/, '')}/blog/${meta.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    author: meta.author || 'StreamVerse',
    datePublished: meta.date,
    image: meta.featuredImage || undefined,
    url: postUrl,
  };

  // WebPage schema with table of contents for Google
  const webPageJsonLd = headings && headings.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': postUrl,
    url: postUrl,
    name: meta.title,
    description: meta.excerpt,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'h3', '#table-of-contents']
    },
    mainEntity: {
      '@type': 'Article',
      headline: meta.title
    }
  } : null;

  return (
    <>
      {/* Add FAQ Schema to head */}
      <FaqSchema faqs={faqs} />

      <article className="prose prose-invert max-w-prose">
        <Breadcrumbs category={meta.category} postTitle={meta.title} />
        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        {/* JSON-LD WebPage Schema with Table of Contents */}
        {webPageJsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        )}

        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        <div className="mb-4">
          <SocialShareButtons url={postUrl} title={meta.title} />
        </div>
        {meta.date && <p className="text-sm text-gray-400 mb-6">{new Date(meta.date).toLocaleDateString()}</p>}
        {meta.featuredImage && (
          <div className="w-full mb-6 rounded overflow-hidden">
            <Image
              src={meta.featuredImage}
              alt={meta.title}
              width={1600}
              height={900}
              sizes="100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Table of Contents */}
        <TableOfContents headings={headings} />

        {/* Main Content */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <div className="mt-12 not-prose">
            <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <Accordion items={faqs} />
          </div>
        )}

        <AuthorBio />
      </article>

      <div className="mt-12">
        <RelatedPosts currentSlug={meta.slug} category={meta.category} />
      </div>

      <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
        <h3 className="text-lg font-semibold text-red-400 mb-2">Important Safety & Legal Disclaimer</h3>
        <p className="text-sm text-gray-400">
          StreamVerse does not host, provide, or store any media files or streams. We act solely as a technical guide for educational purposes. Users are responsible for ensuring they comply with all local copyright laws and regulations when accessing content. We strongly recommend using a secure VPN to protect your privacy and prevent ISP throttling while streaming. This site may contain affiliate links to software or services that we trust and use personally. Always prioritize your digital security by using verified applications and secure connections.
        </p>
      </div>

      <BackToTopButton />
    </>
  );
};

export default PostPage;
